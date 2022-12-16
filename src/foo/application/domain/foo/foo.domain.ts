import { FooError } from 'src/foo/application/error'

export class FooDomain {
  id: string

  createdAt: number

  updatedAt: number

  constructor(props: Partial<FooDomain>) {
    Object.assign(this, props)
  }

  validateDateToConsult(dateCurrent: number): void {
    if (this.updatedAt === dateCurrent) {
      throw FooError.FOO_NOT_FOUND
    }
  }
}
