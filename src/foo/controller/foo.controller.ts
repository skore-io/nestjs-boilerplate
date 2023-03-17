import { FindFooOutput } from './types'
import { FindService } from '../service'
import { CurrentUser, User } from '@skore-io/auth'
import { Controller, Get, Logger, Param } from '@nestjs/common'

@Controller('/foo')
export class FooController {
  private readonly logger = new Logger(FooController.name)

  constructor(private readonly findService: FindService) {}

  @Get('/:id')
  async findFoo(@Param('id') id: string, @CurrentUser() user: User): Promise<FindFooOutput> {
    this.logger.debug(`Performing query for user=${user.id}`)

    const foo = await this.findService.perform(id)

    return FindFooOutput.toClass(foo.toJson())
  }
}
