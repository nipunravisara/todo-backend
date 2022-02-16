import bcrypt from 'bcrypt';

async function validatePassword(user, password) {
  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return false;
  }
  return true;
}

export default validatePassword;
