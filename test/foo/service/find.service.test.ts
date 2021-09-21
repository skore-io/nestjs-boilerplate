import { suite, test } from '@testdeck/jest'
import { FindService } from 'src/foo/service'
import { BaseTest } from 'test/base-test'

@suite('[FooModule] Find Service')
export class FindServiceTest extends BaseTest {
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
