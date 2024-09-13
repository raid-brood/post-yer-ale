import { defineConfig } from "vocs";

export default defineConfig({
  title: "Post Yer Ale",
  logoUrl: "http://pod.brood.beer/STEINS_LOGO_BLACK.svg",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
  ],
  theme: {
    accentColor: "#f25480",
    variables: {},
  },
  font: {
    default: {
      google: "Source Code Pro",
    },
    // mono: "Source Code Pro",
  },
  sponsors: [
    {
      name: "Brought to you by",
      height: 120,
      items: [
        [
          {
            name: "Brood",
            link: "https://brood.beer",
            image: "http://pod.brood.beer/STEINS_LOGO_BLACK.svg",
          },
          {
            name: "Proof Of Drink",
            link: "https://brood.beer",
            image: "http://pod.brood.beer/STEINS_LOGO_BLACK.svg",
          },
        ],
      ],
    },
    {
      name: "And",
      height: 120,
      items: [
        [
          {
            name: "DAOHaus",
            link: "https://daohaus.club",
            image: "https://admin.daohaus.club/hausCastle.369be0d.svg",
          },
        ],
      ],
    },
  ],
});
