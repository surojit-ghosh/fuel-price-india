import { HeaderGenerator } from 'header-generator';

const generator = new HeaderGenerator({
  browsers: [{ name: 'chrome', minVersion: 120 }],
  operatingSystems: ['windows'],
  devices: ['desktop'],
  locales: ['en-US', 'en-IN', 'en']
});

export function getFingerprintedHeaders(refererUrl: string): Record<string, string> {
  const dynamicHeaders = generator.getHeaders();
  return {
    ...dynamicHeaders,
    'accept': '*/*',
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'priority': 'u=1, i',
    'referer': refererUrl,
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'cookie': 'perf_dv6Tr4n=1'
  };
}
