import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Account } from 'src/database/account.model';

@Controller('account')
export class AccountService {
  
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: typeof Account
  ) {}

  @GrpcMethod('AccountService', 'FindOne')
  async findOne(data: any, metadata?: Metadata, call?: ServerUnaryCall<any, Account>): Promise<any> {
    return await this.accountRepository.findOne({where: {id: data.id}});
  }

  @GrpcMethod('AccountService', 'FindMany')
  async findMany(data: any, metadata?: Metadata, call?: ServerUnaryCall<any, Account[]>): Promise<{rows: Account[], count: number}> {
    const res = await this.accountRepository.findAndCountAll();
    return res;
  }

  @GrpcMethod('AccountService', 'Create')
  async create(data: Account, metadata?: Metadata, call?: ServerUnaryCall<any, Account[]>): Promise<Account> {
    const res = await this.accountRepository.create(data);
    return res;
  }

  @GrpcMethod('AccountService', 'Update')
  async update(data: Account, metadata?: Metadata, call?: ServerUnaryCall<any, Account[]>): Promise<{data: Account[]}> {
    console.log("Update");
    console.log(data);
    if(!data?.id){
      return
    }
    
    await this.accountRepository.update({...data, id: undefined},{ where: {id: data.id}});
    return {data: await this.accountRepository.findAll({where: {id: data.id}})};
  }

}
