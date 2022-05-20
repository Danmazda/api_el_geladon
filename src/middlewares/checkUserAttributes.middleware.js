export const checkUserAttributes = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send('Missing attributes');
  }
  next();
};

export const checkIdAndEmail = (req, res, next) => {
  const { id } = req.params;
  const { email } = req.body;
  if (!email || !id) {
    return res.status(422).send('Missing attributes');
  }
  next();
};
