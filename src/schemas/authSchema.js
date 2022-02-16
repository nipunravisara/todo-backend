import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required({ message: 'Name is required.' }),
  email: yup
    .string()
    .email({ message: 'Invalid email address.' })
    .required({ message: 'Email is required.' }),
  password: yup
    .string()
    .min(8, { message: 'Password must contain 8 characters or more.' })
    .required({ message: 'Password is required.' }),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email({ message: 'Invalid email address.' })
    .required({ message: 'Email is required.' }),
  password: yup
    .string()
    .min(8, { message: 'Password must contain 8 characters or more.' })
    .required({ message: 'Password is required.' }),
});

export const refreshAccessTokenSchema = yup.object().shape({
  refreshToken: yup
    .string()
    .required({ message: 'Refresh token is required.' }),
});
export const bar = 'bar';
