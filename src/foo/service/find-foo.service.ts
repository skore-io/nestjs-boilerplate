import { FindFooOutput } from './types'
import { FooError } from 'src/foo/error'
import { Injectable } from '@nestjs/common'
import { FooRepository } from 'src/foo/repository'

@Injectable()
export class FindService {
  constructor(private readonly fooRepository: FooRepository) {}

  async perform(id: string): Promise<FindFooOutput> {
    if (!id) throw FooError.FOO_ID_REQUIRED

    return this.fooRepository.findById(id)
  }
}
