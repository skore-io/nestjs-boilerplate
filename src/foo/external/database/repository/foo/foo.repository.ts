import { FooEntity } from 'src/foo/external/database/entity'
import { IFooRepository } from 'src/foo/external/database/repository'

export class FooRepository implements IFooRepository {
  findById(id: string): Promise<FooEntity> {
    const foo = {
      id,
      created_at: Date.now(),
      updated_at: Date.now(),
    }

    return Promise.resolve(new FooEntity(foo))
  }
}
