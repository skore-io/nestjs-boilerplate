import { FooDomain } from 'src/foo/application/domain'

export interface IFooService {
  findFooById(id: string): Promise<FooDomain>
}
