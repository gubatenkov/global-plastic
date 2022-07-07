import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import homepage from './documents/homepage'
import heroSection from './objects/heroSection'
import sliderSection from './objects/sliderSection'
import countryPresenceCard from './countryPresenceCard'
import countryPresenceSection from './countryPresenceSection'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    homepage,
    heroSection,
    sliderSection,
    countryPresenceCard,
    countryPresenceSection,
  ]),
})
