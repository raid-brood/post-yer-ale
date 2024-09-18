import { defineConfig } from 'vocs';

export default defineConfig({
  title: 'Post Yer Ale',
  logoUrl: '/images/steins.svg',
  description: 'Channel to cast images of your finest brews',
  ogImageUrl: {
    '/': '/images/preview.png',
  },
  theme: {
    accentColor: '#6DEEC0',
    variables: {
      color: {
        background: {
          light: 'white',
          dark: '#272B23',
        },
      },
    },
  },
  font: {
    default: {
      google: 'Source Code Pro',
    },
  },
  sponsors: [
    {
      name: 'FRENS',
      height: 120,
      items: [
        [
          {
            name: 'POD',
            link: 'https://pod.brood.beer',
            image: '/images/pod.svg',
          },
          {
            name: 'Brood',
            link: 'https://brood.beer',
            image: '/images/brood.svg',
          },
        ],
      ],
    },
    {
      name: 'SPONSORS',
      height: 120,
      items: [
        [
          {
            name: 'DAOHaus',
            link: 'https://daohaus.club',
            image: '/images/daohaus.svg',
          },
        ],
      ],
    },
  ],
});
