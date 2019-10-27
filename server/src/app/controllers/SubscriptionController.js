import { isBefore } from 'date-fns';

import Subscription from '../models/Subscription';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';
import Queue from '../../lib/Queue';
import SubscriptionMail from '../jobs/SubscriptionMail';

class SubscriptionController {
  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      attributes: ['id'],
      include: [
        {
          model: Meetup,
          as: 'meetup',
          attributes: ['id', 'title', 'description', 'location', 'date'],
          include: [
            {
              model: User,
              as: 'creator',
              attributes: ['id', 'name', 'email'],
            },
            {
              model: File,
              as: 'image',
              attributes: ['id', 'url', 'path'],
            },
          ],
        },
      ],
      order: [['meetup', 'date']],
    });

    return res.json(
      subscriptions.filter(sub =>
        isBefore(new Date(), new Date(sub.meetup.date))
      )
    );
  }

  async store(req, res) {
    const { meetupId } = req.params;

    const meetup = await Meetup.findOne({
      where: { id: meetupId },
      include: [
        {
          model: User,
          as: 'creator',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: File,
          as: 'image',
          attributes: ['url', 'path'],
        },
      ],
    });

    if (!meetup) {
      return res.status(404).json({
        error: `Meetup with id ${meetupId} not found.`,
      });
    }

    const paralelMeetups = await Subscription.findOne({
      where: { user_id: req.userId },
      include: [
        {
          model: Meetup,
          as: 'meetup',
          attributes: ['id'],
          where: { date: meetup.date },
        },
      ],
    });

    if (paralelMeetups) {
      return res.status(400).json({
        error: 'Subscription in two Meetups at the same time are not allowed',
      });
    }

    if (isBefore(new Date(meetup.date), new Date())) {
      return res.status(400).json({
        error: "You can't subscribe to past Meetups.",
      });
    }

    if (meetup.user_id === req.userId) {
      return res.status(400).json({
        error: "You can't subscribe to your own Meetups",
      });
    }

    const subscriptionExists = await Subscription.findOne({
      where: { user_id: req.userId, meetup_id: meetupId },
    });

    if (subscriptionExists) {
      return res.status(400).json({
        error: 'Already subscribed',
        subscriptionExists,
      });
    }

    const subscription = await Subscription.create({
      user_id: req.userId,
      meetup_id: meetupId,
    });

    const user = await User.findByPk(req.userId);

    await Queue.add(SubscriptionMail.key, {
      meetup,
      user,
    });

    return res.json({ subscription });
  }

  async delete(req, res) {
    const { id } = req.params;

    const subscription = await Subscription.findOne({
      where: { id, user_id: req.userId },
    });

    if (!subscription) {
      return res.status(404).json({
        error: `Subscription to MeetUp with id ${subscription.meetup_id} not found.`,
      });
    }

    if (isBefore(new Date(subscription.meetup.date), new Date())) {
      return res.status(400).json({
        error: 'This Meetup is finished.',
      });
    }

    await subscription.destroy();

    return res.json({
      message: `Subscription to meetup with id ${subscription.meetup_id} was deleted.`,
    });
  }
}

export default new SubscriptionController();
