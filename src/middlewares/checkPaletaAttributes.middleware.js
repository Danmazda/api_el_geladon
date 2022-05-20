export const checkPaletaAttributes = (req, res, next) => {
  const { flavor, price, description, image } = req.body;
  if (!flavor || !price || !description || !image) {
    return res.status(422).send('Missing attributes');
  }
  next();
};

export const checkPaletaId = (req, res, next) => {
  const { id } = req.params;
  if (!id || id == 'null' || id == '') {
    return res.status(422).send('Missing Id!');
  }
  next();
};
