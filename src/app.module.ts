import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from '@skore-io/auth'
import { FooModule } from 'src/foo/foo.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver } from '@nestjs/apollo'
import { GraphQLError } from 'graphql'
import { HttpModule } from '@nestjs/axios'

const isProduction = process.env.NODE_ENV === 'production'

const graphqlOptions = () => ({
  driver: ApolloDriver,
  autoSchemaFile: true,
  introspection: !isProduction,
  playground: !isProduction,
  formatError: (error: GraphQLError) => ({ message: error.message }),
})

@Global()
@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      ...graphqlOptions(),
      include: [FooModule],
      path: '/',
    }),
    AuthModule,
    FooModule,
  ],
  providers: [],
  exports: [HttpModule],
})
export class AppModule {}
