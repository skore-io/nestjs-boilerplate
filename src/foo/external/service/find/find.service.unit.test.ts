import { suite, test } from '@testdeck/jest'
import { FooError } from 'src/foo/application/error'
import { IFooRepository } from 'src/foo/external/database/repository'
import { FooEntity } from 'src/foo/external/database/entity'
import { FindService } from 'src/foo/external/service'
import { FooDomain } from 'src/foo/application/domain'

@suite('[FooModule] Find Service')
export class FindServiceTest {
  private fooRepository: Partial<IFooRepository>
  private fooEntity: Partial<FooEntity>

  async before() {
    jest.useFakeTimers().setSystemTime(new Date())

    this.fooEntity = {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.fooRepository = {
      findById: jest.fn().mockResolvedValue(this.fooEntity),
    }
  }
  @test
  async 'Should return foo with succeffully'() {
    const idFake = '2'

    //@ts-ignore
    const findUseCase = new FindService(this.fooRepository)

    const result = await findUseCase.findFooById(idFake)

    expect(result).toEqual(FooDomain.toClass(this.fooEntity))
  }

  @test
  async 'Given a valid id, then return foo'() {
    const idFake = '2'

    this.fooRepository.findById = jest.fn().mockResolvedValue(null)

    //@ts-ignore
    const findUseCase = new FindService(this.fooRepository)

    await expect(findUseCase.findFooById(idFake)).rejects.toThrowError(
      FooError.FOO_NOT_FOUND.message,
    )
  }
}
