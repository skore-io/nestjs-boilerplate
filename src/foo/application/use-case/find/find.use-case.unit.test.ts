import { suite, test } from '@testdeck/jest'
import { FooDomain } from 'src/foo/application/domain'
import { FooError } from 'src/foo/application/error'
import { IFooService } from 'src/foo/application/contract'
import { FindUseCase } from 'src/foo/application/use-case'

@suite('[FooModule] Find Use Case')
export class FindServiceTest {
  private findService: Partial<IFooService>
  private fooDomain: Partial<FooDomain>

  async before() {
    this.fooDomain = {
      id: '1',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      validateDateToConsult: jest.fn().mockResolvedValue(undefined),
    }

    this.findService = {
      findFooById: jest.fn().mockResolvedValue(this.fooDomain),
    }
  }
  @test
  async 'Should return foo with succeffully'() {
    const idFake = '2'

    //@ts-ignore
    const findUseCase = new FindUseCase(this.findService)

    const result = await findUseCase.perform(idFake)

    expect(result).toEqual(this.fooDomain)
  }

  @test
  async 'Should return error foo id required'() {
    const idFake = 'TEST'

    //@ts-ignore
    const findUseCase = new FindUseCase(this.findService)

    await expect(findUseCase.perform(idFake)).rejects.toThrowError(FooError.FOO_ID_REQUIRED.message)
  }
}
