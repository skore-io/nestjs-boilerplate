import { FooDomain } from 'src/foo/application/domain'

export interface IFindService {
  findFooById(id: string): Promise<FooDomain>
}
