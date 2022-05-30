import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Account } from 'src/database/account.model';
import { accountService } from '../interfaces/account.interface';

@Controller('account')
export class AccountController {

  constructor(@Inject('ACCOUNT_PACKAGE') private client: ClientGrpc) {
    this.accountService = this.client.getService('AccountService')
  }

  accountService: accountService;
  Create() {
    return {
      id: 1,
      accountCode: '1233',
      title: 'abc',
      parentCode: 'bca',
      isActive: 1,
    }
  }

  
  @Get(':id')
  async findOne(): Promise<Account> {
    return await this.accountService.findOne({id: 1});
  }

  @Get('')
  async findMany(): Promise<{ rows: Account[], count: number }> {
    return await this.accountService.findMany({id: 1});
  }

  @Post('')
  async create(@Body() data: Account): Promise<Account> {
    return await this.accountService.create(data);
  }

}
