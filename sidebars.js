const currentLocale = process.env.DOCUSSAURUS_CURRENT_LOCALE || 'en';

const labels = {
  en: { maps: 'Maps', guides: 'Guides' },
  es: { maps: 'Mapas', guides: 'Guías' },
  de: { maps: 'Karten', guides: 'Anleitungen' },
  fr: { maps: 'Cartes', guides: 'Guides' },
  it: { maps: 'Mappe', guides: 'Guide' },
};

module.exports = {
  docs: [
    'home',
    {
      type: 'category',
      label: labels[currentLocale].maps,
      items: ['maps/map-directory'],
    },
    {
      type: 'category',
      label: labels[currentLocale].guides,
      items: [
        'guides/map-installation-guide',
        'guides/legacy-map-installation-guide',
        'guides/map-porting-guide',
      ],
    },
  ],
};
