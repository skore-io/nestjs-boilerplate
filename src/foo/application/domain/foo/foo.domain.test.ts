import { suite, test } from '@testdeck/jest'
import { BaseTest } from 'src/foo/shared/test/base-test'
import { FooDomain } from 'src/foo/application/domain'

@suite('[FooModule] Foo Domain')
export class FooDomainTest extends BaseTest {
  @test
  'Given null created_at, then add default'() {
    const foo = FooDomain.toClass({ id: 'some-uid' })

    expect(foo.createdAt).toEqual(expect.any(Number))
    expect(foo.updatedAt).toEqual(expect.any(Number))
  }
}
