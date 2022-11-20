import { classToPlain, Expose, plainToClass, Transform } from 'class-transformer'

export class FooDomain {
  @Expose()
  id: number

  @Expose({ name: 'created_at' })
  @Transform(({ value }) => value || Date.now())
  createdAt: number

  @Expose({ name: 'updated_at' })
  @Transform(({ value }) => value || Date.now())
  updatedAt: number

  toJson(): object {
    return classToPlain(this)
  }

  static toClass(foo: unknown): FooDomain {
    return plainToClass(FooDomain, foo, { excludeExtraneousValues: true })
  }
}
