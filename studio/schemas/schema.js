import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import homepage from './documents/homepage'
import countries from './documents/countries'
import countryPages from './documents/countryPages'

import countryPage from './objects/countryPage'
import heroSection from './objects/heroSection'
import sliderSection from './objects/sliderSection'
import cardSection from './objects/cardSection'
import wideSliderSection from './objects/wideSliderSection'
import tectionSection from './objects/tectionSection'
import sponsorsSection from './objects/sponsorsSection'
import regionsSection from './objects/regionsSection'
import videoSection from './objects/videoSection'
import countryPresenceCard from './objects/countryPresenceCard'
import linksSection from './objects/linksSection'
import stakeholdersSection from './objects/stakeholdersSection'
import newsSection from './objects/newsSection'
import joinSection from './objects/joinSection'
import targetSection from './objects/targetSection'
import partnersSection from './objects/partnersSection'
import dialogsSection from './objects/dialogsSection'
import upcomingActivationsCard from './objects/upcomingActivationsCard'
import countryHeroSection from './objects/countryHeroSection'
import stakeholderParticipationSection from './objects/stakeholderParticipationSection'
import stakeholderEngagementSection from './objects/stakeholderEngagementSection'
import localInsights from './objects/localInsights'
import wasteSection from './objects/wasteSection'
import partnersCountrySection from './objects/partnersCountrySection'
import report from './objects/report'
import action from './objects/action'
import archive from './objects/archive'
import archiveSection from './objects/archiveSection'
import youtube from './objects/videoSchema'
import regionsSectionCard from './objects/regionsSectionCard'
import regionsSectionCountries from './objects/regionsSectionCountries'
import linksCountries from './objects/linksCountries'
import linksSectionPage from './objects/linksSectionPage'
import videoSectionCountry from './objects/videoSectionCountry'
import ecoSentiment from './objects/ecoSentiment'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    // Pages
    homepage,
    countries,
    countryPages,
    
    // Other types
    countryPage,
    heroSection,
    sliderSection,
    cardSection,
    wideSliderSection,
    tectionSection,
    sponsorsSection,
    regionsSection,
    videoSection,
    partnersSection,
    dialogsSection,
    youtube,
    countryPresenceCard,
    upcomingActivationsCard,
    countryHeroSection,
    stakeholderParticipationSection,
    stakeholderEngagementSection,
    localInsights,
    wasteSection,
    targetSection,
    partnersCountrySection,
    linksSection,
    stakeholdersSection,
    newsSection,
    joinSection,
    report,
    action,
    archive,
    archiveSection,
    regionsSectionCard,
    regionsSectionCountries,
    linksCountries,
    linksSectionPage,
    videoSectionCountry,
    ecoSentiment,
    
  ]),
})
