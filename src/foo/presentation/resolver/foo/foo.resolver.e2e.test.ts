import { only, suite, test } from '@testdeck/jest'
import { BaseTest } from 'src/foo/shared/test'

@suite('[FooModule] Foo Resolver')
export class FooResolverTest extends BaseTest {
  @test
  @only
  async '[find] Given a valid id, then return foo'() {
    const {
      body: { data },
    } = await super.graphql({
      query: `
        query {
          foo: find(id: "some-uid") {
            id
            created_at
            updated_at
          }
        }
      `,
    })

    expect(data.foo).toEqual({
      id: 'some-uid',
      created_at: expect.any(Number),
      updated_at: expect.any(Number),
    })
  }
}
