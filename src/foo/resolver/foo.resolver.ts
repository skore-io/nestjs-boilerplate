import { Args, Query, Resolver } from '@nestjs/graphql'
import { CurrentUser, IsUser, User } from '@nest-firebase/security'
import { Logger } from '@nestjs/common'
import { FindService } from 'src/foo/service'
import { FindArgs, FooDto } from 'src/foo/dto'

@Resolver(() => 'FooResolver')
export class FooResolver {
  private readonly logger = new Logger(FooResolver.name)

  constructor(private readonly findService: FindService) {}

  @IsUser()
  @Query(() => FooDto)
  async find(@Args() args: FindArgs, @CurrentUser() user: User): Promise<FooDto> {
    this.logger.debug(`Performing query for user=${user.id}`)

    const foo = await this.findService.perform(args.id)

    return FooDto.toClass(foo.toJson())
  }
}
