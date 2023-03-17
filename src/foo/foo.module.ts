import { Global, Module } from '@nestjs/common'
import { FooResolver } from 'src/foo/resolver'
import { FindService } from 'src/foo/service'
import { FooRepository } from 'src/foo/repository'
import { FooController } from './controller'

@Global()
@Module({
  imports: [],
  controllers: [FooController],
  providers: [FooResolver, FindService, FooRepository],
  exports: [],
})
export class FooModule {}
