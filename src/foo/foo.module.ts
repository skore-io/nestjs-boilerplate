import { Global, Module } from '@nestjs/common'
import { FooResolver } from 'src/foo/resolver'
import { FindService } from 'src/foo/service'
import { FooRepository } from 'src/foo/repository'

@Global()
@Module({
  imports: [],
  providers: [FooResolver, FindService, FooRepository],
  exports: [],
})
export class FooModule {}
