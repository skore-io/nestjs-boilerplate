import { Foo } from 'src/foo/domain'

export class FooRepository {
  findById(id: string): Promise<Foo> {
    const foo = Foo.toClass({
      id,
      created_at: Date.now(),
      updated_at: Date.now(),
    })

    return Promise.resolve(foo)
  }
}
