import { Expose, plainToClass } from 'class-transformer'

export class FindFooOutput {
  @Expose()
  id: string

  @Expose({ name: 'created_at' })
  createdAt: number

  @Expose({ name: 'updated_at' })
  updatedAt: number

  static toClass(deal: unknown): FindFooOutput {
    return plainToClass(FindFooOutput, deal, { excludeExtraneousValues: true })
  }
}
