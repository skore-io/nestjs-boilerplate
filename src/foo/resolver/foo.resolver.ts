import { Logger } from '@nestjs/common'
import { FindService } from 'src/foo/service'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { CurrentUser, IsUser, User } from '@skore-io/auth'
import { FindFooInput, FindFooOutput } from 'src/foo/resolver/types'

@Resolver()
export class FooResolver {
  private readonly logger = new Logger(FooResolver.name)

  constructor(private readonly findService: FindService) {}

  @IsUser()
  @Query(() => FindFooOutput)
  async find(@Args() input: FindFooInput, @CurrentUser() user: User): Promise<FindFooOutput> {
    this.logger.debug(`Performing query for user=${user.id}`)

    const foo = await this.findService.perform(input.id)

    return FindFooOutput.toClass(foo.toJson())
  }
}
