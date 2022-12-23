import { Inject, Injectable } from '@nestjs/common'
import { FooDomain } from 'src/foo/application/domain'
import { FooError } from 'src/foo/application/error'
import { IFooService } from 'src/foo/application/contract'
import { IFindUseCase } from 'src/foo/application/use-case'

@Injectable()
export class FindUseCase implements IFindUseCase {
  constructor(@Inject('FooService') private readonly fooService: IFooService) {}

  async perform(id: string): Promise<FooDomain> {
    if (id === 'TEST') throw FooError.FOO_ID_REQUIRED

    const foo = await this.fooService.findFooById(id)

    foo.validateDateToConsult(Date.now())

    return foo
  }
}
