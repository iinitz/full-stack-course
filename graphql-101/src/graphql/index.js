import { schemaComposer } from 'graphql-compose'

import queries from './queries'

schemaComposer.Query.addFields(queries)

const schema = schemaComposer.buildSchema()

export default schema