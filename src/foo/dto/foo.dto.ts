import { ArgsType, Field, Float, ObjectType } from '@nestjs/graphql'
import { Expose, plainToClass } from 'class-transformer'

@ArgsType()
@ObjectType()
export class FooDto {
  @Field()
  @Expose()
  id: string

  @Field(() => Float, { name: 'created_at' })
  @Expose({ name: 'created_at' })
  createdAt: number

  @Field(() => Float, { name: 'updated_at' })
  @Expose({ name: 'updated_at' })
  updatedAt: number

  static toClass(deal: unknown): FooDto {
    return plainToClass(FooDto, deal, { excludeExtraneousValues: true })
  }
}
