import { suite, test } from '@testdeck/jest'
import { FooError } from 'src/foo/error'
import { FindService } from 'src/foo/service'
import { BaseTest } from 'test/base-test'

@suite('[FooModule] Find Service')
export class FindServiceTest extends BaseTest {
  @test
  async 'Given missing id, then throw error'() {
    await expect(super.get(FindService).perform(null)).rejects.toThrowError(
      FooError.FOO_ID_REQUIRED.message,
    )
  }

  @test
  async 'Given a valid id, then return foo'() {
    const foo = await super.get(FindService).perform('some-uid')

    expect(foo).toEqual({
      id: 'some-uid',
      createdAt: expect.any(Number),
      updatedAt: expect.any(Number),
    })
  }
}
