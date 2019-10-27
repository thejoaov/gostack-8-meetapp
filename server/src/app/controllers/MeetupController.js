import * as Yup from 'yup';
import { Op } from 'sequelize';
import { isBefore, startOfDay, endOfDay, parseISO } from 'date-fns';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
  async index(req, res) {
    const where = {};
    const page = req.query.page || 1;

    if (req.query.date) {
      const searchDate = parseISO(req.query.date);

      where.date = {
        [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
      };
    }

    const meetups = await Meetup.findAll({
      where,
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
      limit: 10,
      offset: 10 * page - 10,
    });

    return res.json(meetups);
  }

  async show(req, res) {
    try {
      const meetup = await Meetup.findOne({
        where: { id: req.params.id },
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

      return res.json(meetup);
    } catch (err) {
      return res
        .status(404)
        .json({ error: 'Meetup não encontrado', details: err });
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      image_id: Yup.number().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Falha na validação. Cheque os dados, e tente novamente.',
      });
    }

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res.status(400).json({ error: 'A data do meetup é inválida' });
    }

    const user_id = req.userId;

    const meetup = await Meetup.create({
      ...req.body,
      user_id,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      image_id: Yup.number(),
      description: Yup.string(),
      location: Yup.string(),
      date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Falha na validação. Cheque os dados e tente novamente.',
      });
    }

    const user_id = req.userId;

    const meetup = await Meetup.findOne({
      where: { id: req.params.id },
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

    if (meetup.user_id !== user_id) {
      return res.status(401).json({ error: 'Não autorizado.' });
    }

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res.status(400).json({ error: 'Data inválida para este meetup' });
    }

    if (meetup.past) {
      return res
        .status(400)
        .json({ error: 'Não é possível atualizar meetups passados' });
    }

    await meetup.update(req.body);

    return res.json(meetup);
  }

  async delete(req, res) {
    const user_id = req.userId;

    const meetup = await Meetup.findOne({
      where: { id: req.params.id },
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

    if (meetup.user_id !== user_id) {
      return res.status(401).json({ error: 'Não autorizado.' });
    }

    if (meetup.past) {
      return res
        .status(400)
        .json({ error: 'Não é possível cancelar meetups passados' });
    }

    await meetup.destroy();

    return res.send();
  }
}

export default new MeetupController();
