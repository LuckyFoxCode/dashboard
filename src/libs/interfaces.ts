import { IconType } from 'react-icons';

export interface UserRegister {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface NavItem {
  path: string;
  name: string;
  icon: IconType;
}
