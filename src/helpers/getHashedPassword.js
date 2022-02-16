import bcrypt from 'bcrypt';

// Generate salt and password hash
async function getHashedPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export default getHashedPassword;
