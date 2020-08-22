import { createServer } from 'http'

import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import './connection'
import schema from './graphql'

const app = express()
app.get('/', (req, res,) => {
  res.send('OK!')
})
const path = '/graphql'
const apolloServer = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
})
apolloServer.applyMiddleware({
  app,
  path,
})
const server = createServer(app)
apolloServer.installSubscriptionHandlers(server)
server.listen({ port: 3000 }, () => {
  console.log('Server running ...')
})