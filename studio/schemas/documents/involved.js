export default {
    name: 'involved',
    title: 'Get Involved',
    type: 'document',
    fields: [
      {
        name: 'pageTitle',
        title: 'Countries Page SEO title',
        type: 'string',
        validation: Rule => Rule.required().min(1).max(100)
      },
      {
        name: 'pageDescription',
        title: 'Countries Page SEO description',
        type: 'text',
        validation: Rule => Rule.required().min(1).max(300)
      },
      {
        name: 'involvedHeroSection',
        title: 'Involved Hero Section',
        type: 'involvedHero',
      },
      {
        name: 'wideInvolvedSection',
        title: 'Wide Slider Section',
        type: 'wideInvolved',
      },
      {
        name: 'involvedFormSection',
        title: 'Involved Form Section',
        type: 'involvedForm',
      },
      {
        name: 'targetSectionCountriesPage',
        title: 'Target Section',
        type: 'targetSection',
      },
      {
        name: 'stakeholdersSliderSection',
        title: 'Stakeholders Slider Section',
        type: 'stakeholdersInvolved',
      },
      {
        name: 'partnersSection',
        title: 'Partners Section',
        type: 'partnersCountrySection',
      },     
    ],   
  }