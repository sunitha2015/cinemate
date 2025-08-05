export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Cinemate – Movie Discovery and Details App ",
  description: "Cinemate is a modern movie discovery and browsing web app",
  navItems: [
    {
      label: "Home",
      href: "/",
      apiPath: "movie/now_playing",

    },
    {
      label: "Popular",
      href: "/movies/popular",
      apiPath: "movie/now_playing",

    },
    {
      label: "Top Rated",
      href: "/movies/toprated",
      apiPath: "movie/top_rated",
    },
    {
      label: "Upcoming",
      href: "/movies/upcoming",
    },
  ],
  navMenuItems: [
     {
      label: "Home",
      href: "/",
    },
    {
      label: "Popular",
      href: "/movies/popular",

    },
    {
      label: "Top Rated",
      href: "/movies/toprated",
    },
    {
      label: "Upcoming",
      href: "/movies/upcoming",
    },
  ],
  links: {
   
  },
};
