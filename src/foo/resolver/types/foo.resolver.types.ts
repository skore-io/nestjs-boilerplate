import { Expose, plainToClass } from 'class-transformer'
import { ArgsType, Field, Float, ObjectType, OmitType } from '@nestjs/graphql'

@ArgsType()
@ObjectType()
export class FindFooOutput {
  @Field()
  @Expose()
  id: string

  @Field(() => Float, { name: 'created_at' })
  @Expose({ name: 'created_at' })
  createdAt: number

  @Field(() => Float, { name: 'updated_at' })
  @Expose({ name: 'updated_at' })
  updatedAt: number

  static toClass(deal: unknown): FindFooOutput {
    return plainToClass(FindFooOutput, deal, { excludeExtraneousValues: true })
  }
}

@ArgsType()
export class FindFooInput extends OmitType(FindFooOutput, ['createdAt', 'updatedAt']) {}
