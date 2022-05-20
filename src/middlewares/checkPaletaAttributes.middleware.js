export const checkPaletaAttributes = (req, res, next) => {
  const { flavor, price, description, image } = req.body;
  if (!flavor || !price || !description || !image) {
    return res.status(422).send('Missing attributes');
  }
  next();
};
