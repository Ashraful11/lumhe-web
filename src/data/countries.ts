export type CountryCode = 'global' | 'in' | 'us' | 'uk';

export const countries: Record<CountryCode, { code: CountryCode; flag: string; label: string; currency: string; currencySymbol: string }> = {
  global: { code: 'global', flag: '🌐', label: 'Global', currency: 'USD', currencySymbol: '$' },
  in: { code: 'in', flag: '🇮🇳', label: 'India', currency: 'INR', currencySymbol: '₹' },
  us: { code: 'us', flag: '🇺🇸', label: 'USA', currency: 'USD', currencySymbol: '$' },
  uk: { code: 'uk', flag: '🇬🇧', label: 'UK', currency: 'GBP', currencySymbol: '£' },
};

export const countryPrefixes = ['in', 'us', 'uk'] as const;

export function isValidCountry(code: string): code is CountryCode {
  return code in countries;
}

export function getCountryFromPath(pathname: string): CountryCode {
  const first = pathname.split('/').filter(Boolean)[0];
  if (first && countryPrefixes.includes(first as any)) return first as CountryCode;
  return 'global';
}
