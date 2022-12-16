import { NotFoundException, UnprocessableEntityException } from '@nestjs/common'

export class FooError {
  static FOO_ID_REQUIRED: UnprocessableEntityException = new UnprocessableEntityException(
    'FOO_ID_REQUIRED',
  )

  static FOO_NOT_FOUND: UnprocessableEntityException = new NotFoundException('FOO_NOT_FOUND')
}
