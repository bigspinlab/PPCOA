/* eslint-disable no-unused-vars */

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

export const ROUTES = {
  home: { name: 'Home', path: '/', queryKey: 'homeContent' },
  about: { name: 'About', path: '/about', queryKey: 'aboutContent' },
  team: { name: 'Team', path: '/team', queryKey: 'teamList' },
  projects: { name: 'Projects', path: '/:category', queryKey: 'projectsContent' },
  projectDetails: { name: 'Project Details', path: '/:category/:projectId', queryKey: 'projectDetails' },
  contact: { name: 'Contact', path: '/contact', queryKey: 'contactContent' },
  privacyPolicy: { name: 'Privacy Policy', path: '/privacy-policy', queryKey: 'privacyPolicyContent' }
};

const locales = [{ locale: 'pt' }, { locale: 'en' }];

const defaultLocale = 'pt';

export { defaultLocale, locales };
