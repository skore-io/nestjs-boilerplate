import { suite, test } from '@testdeck/jest'
import { AppModule } from 'src/app.module'
import { BaseTest } from 'src/foo/shared/test'

@suite('[AppModule] App Module')
export class AppModuleTest extends BaseTest {
  @test
  async 'Given app module, then check if it has been initialized'() {
    const module = super.get(AppModule)

    expect(module).toBeDefined()
  }
}
