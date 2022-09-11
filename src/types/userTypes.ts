export interface User {
  id: number;
  email: string;
  password?: string;
};

export interface NewUserData {
  email: string;
  password: string;
};