import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { GatewayModule } from 'src/gateway/gateway.module';
import { grpcClientOptions } from 'src/grpc-client.options';
import { AccountController } from './account/account.controller';

@Module({
  imports: [
    ClientsModule.register([
    {
      name: 'ACCOUNT_PACKAGE',
      ...grpcClientOptions,
    },
  ]),],
  controllers: [AccountController],
  providers: []
})
export class ApiModule {}
