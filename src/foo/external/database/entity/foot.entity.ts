export class FooEntity {
  id: number

  createdAt: Date

  updatedAt: Date

  constructor(props) {
    Object.assign(this, props)
  }
}
