import jwt from 'jsonwebtoken';
import User from '../models/userModel';
import getHashedPassword from '../helpers/getHashedPassword';
import validatePassword from '../helpers/validatePassword';
import getSignedTokens from '../helpers/getSignedTokens';

// create new user
export async function registerUser(userData) {
  const existingUser = await User.findOne({ email: userData.email });

  // Check user already exist
  if (existingUser !== null) {
    return {
      success: false,
      status: 409,
      message: 'User already exist.',
    };
  }

  // Hash user password and create a new user in system
  try {
    const hashedPassword = await getHashedPassword(userData.password);
    const newUser = await User.create({
      ...userData,
      password: hashedPassword,
    });

    return {
      success: true,
      status: 200,
      message: 'User created successfully.',
      data: newUser,
    };
  } catch (error) {
    return {
      success: false,
      status: 404,
      message: error.message,
    };
  }
}

// login user
export async function loginUser({ email, password }) {
  const currentUser = await User.findOne({ email });

  if (!currentUser) {
    return {
      success: false,
      status: 401,
      message:
        'No account is associate with this email, Try creating an account.',
    };
  }

  // validate user enterd password against account password
  const isPasswordValid = await validatePassword(currentUser, password);

  if (!isPasswordValid) {
    return {
      success: false,
      status: 401,
      message: 'Invalid password, Try again.',
    };
  }

  // generate jwt tokens
  const { accessToken, refreshToken } = getSignedTokens(currentUser);

  const user = {
    userId: currentUser.id,
    userName: `${currentUser.firstName} ${currentUser.lastName}`,
    userEmail: currentUser.email,
    accessToken,
    refreshToken,
  };

  return {
    success: true,
    status: 200,
    message: 'Login success.',
    data: user,
  };
}

// refresh access token
export async function refreshAccessToken(refreshToken) {
  try {
    const user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET_KEY);
    const tokens = getSignedTokens(user);

    return {
      success: true,
      status: 200,
      message: 'Token refreshed.',
      data: tokens,
    };
  } catch (error) {
    return {
      success: false,
      status: 401,
      message: 'Unauthorized.',
    };
  }
}
