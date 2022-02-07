import { Injectable } from '@nestjs/common'
import { FooRepository } from 'src/foo/repository'
import { Foo } from 'src/foo/domain'
import { FooError } from 'src/foo/error'

@Injectable()
export class FindService {
  constructor(private readonly fooRepository: FooRepository) {}

  async perform(id: string): Promise<Foo> {
    if (!id) throw FooError.FOO_ID_REQUIRED

    return this.fooRepository.findById(id)
  }
}
