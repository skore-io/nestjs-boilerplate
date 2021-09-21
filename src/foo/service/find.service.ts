import { Injectable } from '@nestjs/common'
import { FooRepository } from 'src/foo/repository'
import { Foo } from 'src/foo/domain'

@Injectable()
export class FindService {
  constructor(private readonly fooRepository: FooRepository) {}

  async perform(id: string): Promise<Foo> {
    return this.fooRepository.findById(id)
  }
}
