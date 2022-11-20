import 'reflect-metadata'
import * as supertest from 'supertest'
import { ExecutionContext, INestApplication, Type } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { AppModule } from 'src/app.module'
import { readFileSync } from 'fs'
import { UserGuard } from '@skore-io/auth'

export abstract class BaseTest {
  static app: INestApplication
  static httpServer: any

  static async before(): Promise<void> {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideGuard(UserGuard)
      .useValue({
        canActivate: (ctx: ExecutionContext) => {
          const graphqlReq = ctx.getArgByIndex(2).req
          const req = graphqlReq || ctx.switchToHttp().getRequest()

          req.user = JSON.parse(readFileSync('src/foo/shared/fixture/user.fixture.json', 'utf-8'))

          return true
        },
      })
      .compile()

    BaseTest.app = await moduleRef.createNestApplication().init()
    BaseTest.httpServer = this.app.getHttpServer()
  }

  static async after(): Promise<void> {
    expect.hasAssertions()
  }

  get<TInput = any, TResult = TInput>(type: Type<TInput> | string | symbol): TResult {
    return BaseTest.app.get(type)
  }

  server(): supertest.SuperTest<supertest.Test> {
    return supertest(BaseTest.httpServer)
  }

  graphql(query: object): Promise<supertest.Response> {
    return this.server().post('/graphql').set('authorization', 'test').send(query)
  }
}
