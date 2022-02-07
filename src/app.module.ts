import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from '@skore-io/auth'
import { FooModule } from 'src/foo/foo.module'
import { GraphQLModule } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'
import { HttpModule } from '@nestjs/axios'

const isProduction = process.env.NODE_ENV === 'production'

@Global()
@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      introspection: !isProduction,
      playground: !isProduction,
      formatError: (error: GraphQLError) => ({
        message: error.message,
      }),
    }),
    AuthModule,
    FooModule,
  ],
  providers: [],
  exports: [HttpModule],
})
export class AppModule {}
