import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'account',
    protoPath: join(__dirname, './proto/account/account.proto'),
    url:'localhost:5000'
  },
};