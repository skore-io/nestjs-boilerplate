import { Args, Query, Resolver } from '@nestjs/graphql'
import { Inject, Logger } from '@nestjs/common'
import { FindArgs, FooDto } from 'src/foo/presentation/dto'
import { IFindUseCase } from 'src/foo/application/use-case'

@Resolver()
export class FooResolver {
  private readonly logger = new Logger(FooResolver.name)

  constructor(@Inject('FindUseCase') private readonly findUseCase: IFindUseCase) {}

  @Query(() => FooDto)
  async find(@Args() args: FindArgs): Promise<FooDto> {
    this.logger.debug(`Performing query for user=${args.id}`)

    const foo = await this.findUseCase.perform(args.id)

    return FooDto.toClass(foo)
  }
}
