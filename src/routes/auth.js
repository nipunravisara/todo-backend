import express from 'express';
import validateRequest from '../middleware/validateRequest';
import {
  loginSchema,
  refreshAccessTokenSchema,
  registerSchema,
} from '../schemas/authSchema';
import {
  loginUser,
  refreshAccessToken,
  registerUser,
} from '../controllers/authController';

const router = express.Router();

// register
router.post(
  '/register',
  validateRequest({ schema: registerSchema }),
  async (req, res) => {
    const userData = req.body;

    const response = await registerUser(userData);

    if (response.success === true) {
      return res.status(response.status).json(response);
    }

    return res.status(response.status).json(response);
  }
);

// login
router.post(
  '/login',
  validateRequest({ schema: loginSchema }),
  async (req, res) => {
    const { email, password } = req.body;
    const response = await loginUser({ email, password });

    if (response.success === true) {
      return res.status(response.status).json(response);
    }

    return res.status(response.status).json(response);
  }
);

// refresh token
router.post(
  '/refresh-token',
  validateRequest({ schema: refreshAccessTokenSchema }),
  async (req, res) => {
    const { refreshToken } = req.body;
    const response = await refreshAccessToken(refreshToken);

    if (response.success === true) {
      return res.status(response.status).json(response);
    }

    return res.status(response.status).json(response);
  }
);
export default router;
