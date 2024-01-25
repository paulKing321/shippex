import * as yup from 'yup';

export interface ISignIn {
  username: string;
  password: string;
}
export interface ISignInResponse {
  message: string;
  home_page: string;
  full_name: string;
}

export const SignInSchema = yup.object().shape({
  username: yup.string().email('Must be a valid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});