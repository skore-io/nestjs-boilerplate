import { Expose } from 'class-transformer'

export class FooEntity {
  id: string

  @Expose({ name: 'created_at' })
  createdAt: number

  @Expose({ name: 'updated_at' })
  updatedAt: number

  constructor(props: Partial<FooEntity>) {
    Object.assign(this, props)
  }
}
