import { Global, Module } from '@nestjs/common'
import { FooResolver } from 'src/foo/presentation/resolver'
import { FooRepository } from 'src/foo/external/database/repository'
import { FindUseCase } from 'src/foo/application/use-case'
import { FooService } from './external/service'

@Global()
@Module({
  imports: [],
  providers: [
    FooResolver,
    { provide: 'FindUseCase', useClass: FindUseCase },
    { provide: 'FooService', useClass: FooService },
    { provide: 'FooRepository', useClass: FooRepository },
  ],
  exports: [],
})
export class FooModule {}
