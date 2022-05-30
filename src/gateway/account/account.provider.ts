import { Account } from "src/database/account.model";

export const accountProviders = [
  {
    provide: 'ACCOUNT_REPOSITORY',
    useValue: Account,
  },
];