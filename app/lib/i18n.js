/**
 * @param {Request} request
 * @return {I18nBase}
 */
export function getLocaleFromRequest(request) {
  const defaultLocale = {language: 'EN', country: 'US'};
  const supportedLocales = {
    ES: 'ES',
    FR: 'FR',
    DE: 'DE',
    JP: 'JA',
  };

  const url = new URL(request.url);
  const domain = url.hostname.split('.').pop()?.toUpperCase();

  return domain && supportedLocales[domain]
    ? {language: supportedLocales[domain], country: domain}
    : defaultLocale;
}

/** @typedef {import('@shopify/hydrogen').I18nBase} I18nBase */
