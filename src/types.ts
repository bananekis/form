export type FormQueries = {
  email: string;
  firstName: string;
  lastName: string;
  language: string;
  country: string;
  password: string;
  confirmPassword: string;
  private: boolean;
};

export type ErrorQueries = {
  email: string | boolean;
  firstName: string | boolean;
  lastName: string | boolean;
  language: string | boolean;
  country: string | boolean;
  password: string | boolean;
  confirmPassword: string | boolean;
};

export type FlagT = {
  code: string;
  lan: string;
};
