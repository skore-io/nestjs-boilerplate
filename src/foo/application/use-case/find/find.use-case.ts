import { Inject, Injectable } from '@nestjs/common'
import { FooDomain } from 'src/foo/application/domain'
import { FooError } from 'src/foo/application/error'
import { IFindService } from 'src/foo/application/port'
import { IFindUseCase } from 'src/foo/application/use-case'

@Injectable()
export class FindUseCase implements IFindUseCase {
  constructor(@Inject('FindService') private readonly findService: IFindService) {}

  async perform(id: string): Promise<FooDomain> {
    if (id === 'WITHOUT_ID') throw FooError.FOO_ID_REQUIRED

    return this.findService.findFooById(id)
  }
}
