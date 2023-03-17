import { FindService } from 'src/foo/service'
import { FooResolver } from 'src/foo/resolver'
import { Global, Module } from '@nestjs/common'
import { FooController } from 'src/foo/controller'
import { FooRepository } from 'src/foo/repository'

@Global()
@Module({
  imports: [],
  controllers: [FooController],
  providers: [FooResolver, FindService, FooRepository],
  exports: [],
})
export class FooModule {}
