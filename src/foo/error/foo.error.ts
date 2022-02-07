import { UnprocessableEntityException } from '@nestjs/common'

export class FooError {
  static FOO_ID_REQUIRED: UnprocessableEntityException = new UnprocessableEntityException(
    'FOO_ID_REQUIRED',
  )
}
