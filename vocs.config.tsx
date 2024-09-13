import { defineConfig } from 'vocs';

export default defineConfig({
  head: (
    <>
      <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Post Yer Ale" />
      <meta property="og:url" content="https://post.brood.beer/" />
      <meta property="og:description" content="A hoppy place on Farcaster" />
      <meta
        property="og:image"
        content="https://post.brood.beer/images/preview.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@RaidBrood" />
      <meta name="twitter:title" content="Post Yer Ale" />
      <meta name="twitter:description" content="A hoppy place on Farcaster" />
      <meta
        name="twitter:image"
        content="https://post.brood.beer/images/twitter.png"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  ),
  title: 'Post Yer Ale',
  logoUrl: 'http://pod.brood.beer/STEINS_LOGO_BLACK.svg',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
  ],
  theme: {
    accentColor: '#f25480',
    variables: {},
  },
  font: {
    default: {
      google: 'Source Code Pro',
    },
    // mono: "Source Code Pro",
  },
  sponsors: [
    {
      name: 'Brought to you by',
      height: 120,
      items: [
        [
          {
            name: 'Brood',
            link: 'https://brood.beer',
            image: 'http://pod.brood.beer/STEINS_LOGO_BLACK.svg',
          },
          {
            name: 'Proof Of Drink',
            link: 'https://brood.beer',
            image: 'http://pod.brood.beer/STEINS_LOGO_BLACK.svg',
          },
        ],
      ],
    },
    {
      name: 'And',
      height: 120,
      items: [
        [
          {
            name: 'DAOHaus',
            link: 'https://daohaus.club',
            image: 'https://admin.daohaus.club/hausCastle.369be0d.svg',
          },
        ],
      ],
    },
  ],
});
