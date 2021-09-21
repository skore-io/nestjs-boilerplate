import { ArgsType, OmitType } from '@nestjs/graphql'
import { FooDto } from 'src/foo/dto/foo.dto'

@ArgsType()
export class FindArgs extends OmitType(FooDto, ['createdAt', 'updatedAt']) {}
