import { FooEntity } from 'src/foo/external/database/entity'

export interface IFooRepository {
  findById(id: string): Promise<FooEntity>
}
