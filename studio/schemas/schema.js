import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import homepage from './documents/homepage'
import countries from './countries'
import country from './country'

import heroSection from './objects/heroSection'
import sliderSection from './objects/sliderSection'
import cardSection from './objects/cardSection'
import wideSliderSection from './objects/wideSliderSection'
import tectionSection from './objects/tectionSection'
import sponsorsSection from './objects/sponsorsSection'
import regionsSection from './objects/regionsSection'
import videoSection from './objects/videoSection'
import linksSection from './objects/linksSection'
import stakeholdersSection from './objects/stakeholdersSection'
import newsSection from './objects/newsSection'
import joinSection from './objects/joinSection'
import countryPresenceCard from './countryPresenceCard'
import targetSection from './targetSection'
import upcomingActivationsCard from './upcomingActivationsCard'
import countryHeroSection from './countryHeroSection'
import stakeholderParticipationSection from './stakeholderParticipationSection'
import stakeholderEngagementSection from './stakeholderEngagementSection'
import localInsights from './localInsights'
import wasteSection from './wasteSection'
// import videoSection from './videoSection'
import supportSection from './supportSection'
import partner from './partner'
import report from './report'
import action from './action'
import archive from './archive'
import archiveSection from './archiveSection'
import youtube from './objects/videoSchema'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    // Pages
    homepage,
    countries,
    country,

    // Other types
    heroSection,
    sliderSection,
    cardSection,
    wideSliderSection,
    tectionSection,
    sponsorsSection,
    regionsSection,
    videoSection,
    youtube,
    linksSection,
    stakeholdersSection,
    newsSection,
    joinSection,
    countryPresenceCard,
    upcomingActivationsCard,
    countryHeroSection,
    stakeholderParticipationSection,
    stakeholderEngagementSection,
    localInsights,
    wasteSection,
    targetSection,
    supportSection,
    partner,
    report,
    action,
    archive,
    archiveSection
  ]),
})
