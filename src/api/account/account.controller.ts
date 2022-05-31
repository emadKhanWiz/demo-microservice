import { Body, Controller, Get, Inject, OnModuleInit, Post, Put } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Account } from 'src/database/account.model';
import { account } from 'src/proto/account/account';

@Controller('account')
export class AccountController implements OnModuleInit {
  private accountService: account.AccountService;

  constructor(@Inject('ACCOUNT_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.accountService = this.client.getService<account.AccountService>('AccountService');
  }

  @Get(':id')
  findOne(): Observable<account.Account> {
    return this.accountService.findOne({ id: 1 });
  }

  @Get('')
  findMany(): Observable<account.AccountResult> {
    return this.accountService.findMany({id: 1});
  }

  @Post('')
  create(@Body() data: Account): Observable<account.Account> {
    return this.accountService.create(data);
  }

  @Put('')
  update(@Body() data: Account): Observable<account.AccountArray> {
    return this.accountService.update(data);
  }

}
