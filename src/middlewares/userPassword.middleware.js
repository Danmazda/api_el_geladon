import bcrypt from 'bcrypt';
export const encryptPasswordUser = async(req, res, next) => {
  const {email,  password } = req.body;
  const newPassword = await bcrypt.hash(password, 2);
  console.log(newPassword);
  req.body.user = {email, password: newPassword};
  next();
};
