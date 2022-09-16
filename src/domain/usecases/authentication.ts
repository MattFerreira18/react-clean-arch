import AccountModel from '../models/AccountModel';

export type AuthenticationParams = {
  email: string;
  password: string;
};

interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel>;
}

export default Authentication;
