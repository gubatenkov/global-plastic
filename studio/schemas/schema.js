import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import countryPresenceCard from './countryPresenceCard'
import countryPresenceSection from './countryPresenceSection'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    countryPresenceCard,
    countryPresenceSection,    
  ]),
})
