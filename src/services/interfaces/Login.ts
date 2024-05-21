export default interface LoginInterface {
  id?: number;
  role?: string;
  email: string;
  password: string;
  rememberMe?: boolean;
}
