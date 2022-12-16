import { suite, test } from '@testdeck/jest'
import { BaseTest } from 'src/foo/shared/test/base-test'
import { FooDomain } from 'src/foo/application/domain'
import { FooError } from 'src/foo//application/error'

@suite('[FooModule] Foo Domain')
export class FooDomainTest extends BaseTest {
  @test
  'Given null created_at, then add default'() {
    const id = 'some-uid'
    const foo = new FooDomain({ id })

    expect(foo.id).toEqual(id)
    expect(foo.createdAt).toEqual(expect.any(Number))
    expect(foo.updatedAt).toEqual(expect.any(Number))
  }

  @test
  'Should return throw foo not found'() {
    const foo = new FooDomain({ id: 'some-uid', createdAt: Date.now() })

    expect(foo.validateDateToConsult(Date.now())).rejects.toThrowError(
      FooError.FOO_NOT_FOUND.message,
    )
  }
}
