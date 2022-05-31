import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'account',
    protoPath: join(__dirname, './proto/account.proto'),
    url:'10.200.200.34:5000'
  },
};