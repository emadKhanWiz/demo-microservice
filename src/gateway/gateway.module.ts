import { Module } from '@nestjs/common';
import { AccountService } from './account/account.controller';
import { accountProviders } from './account/account.provider';

@Module({
  controllers: [AccountService],
  providers: [...accountProviders]
})
export class GatewayModule {}
