import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class OrganizingController {
  async index(req, res) {
    const meetups = await Meetup.findAll({
      where: { user_id: req.userId },
      include: [
        {
          model: User,
          as: 'creator',
          attributes: ['id', 'name'],
        },
        {
          model: File,
          as: 'image',
          attributes: ['url', 'path'],
        },
      ],
    });

    return res.json(meetups);
  }
}

export default new OrganizingController();
