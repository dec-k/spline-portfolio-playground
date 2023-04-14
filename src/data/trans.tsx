import React from "react";

export const trans = {
  head: { title: "Dec // K", subtitle: "senior Web developer" },
  links: [
    {
      title: `🍊 Mystery Juice`,
      href: "https://themysteryjuice.com",
      emphasise: true,
    },
    {
      title: "🟣 Github",
      href: "https://github.com/dec-k",
      emphasise: false,
    },
    {
      title: `🔵 LinkedIn`,
      href: "https://www.linkedin.com/in/declan-keighley-b19265a6/",
      emphasise: false,
    },
    {
      title: `✉️ dec.keighley@gmail.com`,
      href: "mailto:dec.keighley@gmail.com",
      emphasise: false,
    },
  ],
  body: {
    about: {
      title: "About",
      preamble:
        "I'm a senior developer based in Christchurch, New Zealand. This site will change often as I find shiny new things to try.",
      builtWith: [
        "This site is currently built with:",
        "- React.JS",
        "- Chakra UI",
        "- react-three-fiber",
        "- Spline",
      ],
    },
  },
  projects: {
    title: "project",
    data: [
      {
        title: "Mystery juice 🍊",
        about:
          "Mystery Juice is an informational site aimed at informing & teaching people about DIY e-juice. It was created out of a frustration with rising prices and dodgey retailer practices in the industry. It is built utilising true serverside rendering via next.js and MUI.",
      },
    ],
  },
  articles: {
    title: "article",
    data: [
      {
        title: "environment, ego, and autonomy",
        about:
          "A short, experience-based insight into my time as a new developer and my experiences so far when on-boarding and training new developers.",
        href: "www.google.com",
      },
    ],
  },
};
