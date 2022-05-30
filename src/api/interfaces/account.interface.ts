import { Account } from "src/database/account.model"

export interface accountService {
  findOne({id: number}): Promise<Account>;
  findMany({id: number}): Promise<{ rows: Account[], count: number}>;
  create(data: Account): Promise<Account>;
}