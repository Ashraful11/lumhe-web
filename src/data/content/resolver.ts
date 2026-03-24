import type { HomeContent } from './types';
import type { CountryCode } from '../countries';

import { homeContent as globalHome } from './global/home';
import { homeContent as inHome } from './in/home';
import { homeContent as usHome } from './us/home';
import { homeContent as ukHome } from './uk/home';

const homeMap: Record<CountryCode, HomeContent> = {
  global: globalHome,
  in: inHome,
  us: usHome,
  uk: ukHome,
};

export function getHomeContent(country: CountryCode): HomeContent {
  return homeMap[country] ?? homeMap.global;
}
