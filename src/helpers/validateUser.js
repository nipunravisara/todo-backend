import User from '../models/userModel';

async function validateUser(email) {
  const user = await User.findOne({ email });

  if (user === null) {
    return false;
  }
  return true;
}

export default validateUser;
