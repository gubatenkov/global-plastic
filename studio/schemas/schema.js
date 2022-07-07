import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import countries from './countries'
import country from './country'

import countryPresenceCard from './countryPresenceCard'
import targetSection from './targetSection'
import upcomingActivationsCard from './upcomingActivationsCard'
import countryHeroSection from './countryHeroSection'
import stakeholderParticipationSection from './stakeholderParticipationSection'
import stakeholderEngagementSection from './stakeholderEngagementSection'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Pages
    countries,
    country,

    // Other types
    countryPresenceCard,
    targetSection,
    upcomingActivationsCard,
    countryHeroSection,
    stakeholderParticipationSection,
    stakeholderEngagementSection,
 
 
           
  ]),
})
