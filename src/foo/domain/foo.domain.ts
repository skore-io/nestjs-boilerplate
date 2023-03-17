import { Expose, instanceToPlain, plainToClass, Transform } from 'class-transformer'

export class Foo {
  @Expose()
  id: number

  @Expose({ name: 'created_at' })
  @Transform(({ value }) => value || Date.now())
  createdAt: number

  @Expose({ name: 'updated_at' })
  @Transform(({ value }) => value || Date.now())
  updatedAt: number

  toJson(): object {
    return instanceToPlain(this)
  }

  static toClass(foo: unknown): Foo {
    return plainToClass(Foo, foo, { excludeExtraneousValues: true })
  }
}
