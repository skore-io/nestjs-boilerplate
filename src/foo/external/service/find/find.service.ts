import { Inject, Injectable } from '@nestjs/common'
import { FooDomain } from 'src/foo/application/domain'
import { FooError } from 'src/foo/application/error'
import { IFindService } from 'src/foo/application/port'
import { IFooRepository } from 'src/foo/external/database/repository'

@Injectable()
export class FindService implements IFindService {
  constructor(@Inject('FooRepository') private readonly fooRepository: IFooRepository) {}

  async findFooById(id: string): Promise<FooDomain> {
    const foo = await this.fooRepository.findById(id)

    if (!foo) {
      throw FooError.FOO_NOT_FOUND
    }

    return FooDomain.toClass(foo)
  }
}
