import { FooDomain } from 'src/foo/application/domain'

export interface IFindUseCase {
  perform(id: string): Promise<FooDomain>
}
