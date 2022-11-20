import { Global, Module } from '@nestjs/common'
import { FooResolver } from 'src/foo/presentation/resolver'
import { FindService } from 'src/foo/external/service'
import { FooRepository } from 'src/foo/external/database/repository'
import { FindUseCase } from 'src/foo/application/use-case'

@Global()
@Module({
  imports: [],
  providers: [
    FooResolver,
    { provide: 'FindUseCase', useClass: FindUseCase },
    { provide: 'FindService', useClass: FindService },
    { provide: 'FooRepository', useClass: FooRepository },
  ],
  exports: [],
})
export class FooModule {}
