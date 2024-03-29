/* eslint-disable no-unused-vars */
export enum UmbracoWidgets {
  header = 'header',
  brandLogo = 'brandLogo',
  navigation = 'navigation',
  footer = 'footer',
  languages = 'languages',
  contactColumns = 'contact-columns',
  contactForm = 'contact-form',
  projectCard = 'projectCard',
  carousel = 'carousel'
}

export const breakpointSize = {
  xsmall: '23.43em', // 375px
  small: '26.56em', // 425px
  medium: '48em', // 768px
  large: '64em', // 1024px
  xlarge: '90em', // 1440px
  xxlarge: '120em' // 1920px
};

export const breakpointDevice = {
  xsmall: `(min-width: ${breakpointSize.xsmall})`,
  small: `(min-width: ${breakpointSize.small})`,
  medium: `(min-width: ${breakpointSize.medium})`,
  large: `(min-width: ${breakpointSize.large})`,
  xlarge: `(min-width: ${breakpointSize.xlarge})`,
  xxlarge: `(min-width: ${breakpointSize.xxlarge})`
};
