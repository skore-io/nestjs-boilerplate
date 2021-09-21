import { suite, test } from '@testdeck/jest'
import { Foo } from 'src/foo/domain'
import { BaseTest } from 'test/base-test'

@suite('[FooModule] Foo Domain')
export class FooDomainTest extends BaseTest {
  @test
  'Given null created_at, then add default'() {
    const foo = Foo.toClass({ id: 'some-uid' })

    expect(foo.createdAt).toEqual(expect.any(Number))
    expect(foo.updatedAt).toEqual(expect.any(Number))
  }
}
