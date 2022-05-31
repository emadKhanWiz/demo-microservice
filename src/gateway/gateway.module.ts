import { Module } from '@nestjs/common';
import { AccountService } from './account/account.service';
import { accountProviders } from './account/account.provider';

@Module({
  imports: [],
  controllers: [AccountService],
  providers: [...accountProviders]
})
export class GatewayModule { }
