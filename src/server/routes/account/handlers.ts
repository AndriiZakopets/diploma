import User from '../../models/User';

export async function getAccount(req: any, res: any) {
  try {
    const user: any = await User.findById(req.user.userId);

    if (!user) {
      res.status(404).send({ error: 'User not found' });
    }

    res.send(user.accountView());
  } catch (err: any) {
    res.sendStatus(500);
  }
}

export async function updateAccount(req: any, res: any) {
  try {
    await User.updateOne(
      { _id: req.user.userId },
      { ...req.body, updatedAt: Date.now() }
    );

    const user: any = await User.findById(req.user.userId);

    res.json(user.accountView());
  } catch (err) {
    res.sendStatus(500);
  }
}
