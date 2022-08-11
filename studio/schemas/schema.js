import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import menu from './documents/menu'
import analytics from './documents/analytics'
import socials from './documents/socials'
import homepage from './documents/homepage'
import countries from './documents/countries'
import countryPages from './documents/countryPages'
import involved from './documents/involved'
import roadmap from './documents/roadmap'

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
import involvedHero from './objects/involvedHero'
import involvedForm from './objects/involvedForm'
import wideInvolved from './objects/wideInvolved'
import stakeholdersInvolved from './objects/stakeholdersInvolved'
import roadmapHero from './objects/roadmapHero'
import roadmapUpcomingActivationsCard from './objects/roadmapUpcomingActivationsCard'
import roadmapTreaty from './objects/roadmapTreaty'
import roadmapTreatySection from './objects/roadmapTreatySection'
import mediapage from './documents/mediapage'
import mediaHeroSection from './objects/mediaHeroSection'
import updatesSliderSection from './objects/updatesSliderSection'
import treatyUpdatesCard from './objects/treatyUpdatesCard'
import reportsSliderSection from './objects/reportsSliderSection'
import moreNewsSection from './objects/moreNewsSection'
import buildingProgramsSection from './objects/buildingProgramsSection'
import mediaVideoSection from './objects/mediaVideoSection'
import mission from './documents/mission'
import missionHero from './objects/missionHero'
import missionCTASection from './objects/missionCTASection'
import textImgMissionSection from './objects/textImgMissionSection'
import missionCardsSection from './objects/missionCardsSection'
import bigMapSection from './objects/bigMapSection'
import meta from './objects/meta'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    // Documents
    homepage,
    countries,
    countryPages,
    menu,
    socials,
    involved,
    roadmap,
    mediapage,
    mission,
    analytics,
    
    // Objects
    meta,
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
    involvedHero,
    involvedForm,
    wideInvolved,
    stakeholdersInvolved,
    roadmapHero,
    roadmapUpcomingActivationsCard,
    roadmapTreaty,
    roadmapTreatySection,
    mediaHeroSection,
    updatesSliderSection,
    treatyUpdatesCard,
    reportsSliderSection,
    moreNewsSection,
    buildingProgramsSection,
    mediaVideoSection,
    missionHero,
    missionCTASection,
    textImgMissionSection,
    missionCardsSection,
    bigMapSection
  ]),
})
