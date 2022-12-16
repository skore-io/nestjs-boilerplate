import { suite, test } from '@testdeck/jest'
import { FooModule } from 'src/foo/foo.module'
import { BaseTest } from 'src/foo/shared/test'

@suite('[FooModule] Foo Module')
export class FooModuleTest extends BaseTest {
  @test
  async 'Given foo module, then check if it has been initialized'() {
    const module = super.get(FooModule)

    expect(module).toBeDefined()
  }
}
