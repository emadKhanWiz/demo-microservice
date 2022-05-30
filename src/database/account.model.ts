import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Account extends Model<Account> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id?: number;

  @Column
  accountCode?: string;

  @Column
  title?: string;
  
  @Column
  parentCode?: string;

  // @Column
  // openingCredit: number;

  // @Column
  // openingDebit: number;

  // @Column
  // lastOpeningCredit: number;

  // @Column
  // lastOpeningDebit: number;

  // @Column
  // openingDate: Date;

  // @Column
  // level: number;

  // @Column
  // ledgerBalance: number;

  // @Column
  // amountLimit: number;

  // @Column
  // branch_id: number;

  // @Column({ defaultValue: true })
  // isActive: boolean;
}