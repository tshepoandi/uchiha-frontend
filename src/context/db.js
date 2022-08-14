import slide1 from "../media/slide-1.jpg";
import slide2 from "../media/slide-2.jpeg";

// conversation
import default_user from "../media/default-user.png";

export const articles = [
  {
    id: "art1",
    title: "Elections have consequences",
    slides: [
      {
        text:
          "You have the power to decide on the quality of life you want for yourself and your community, and even future generations.",
        illustration: slide1,
      },
      {
        text:
          "Voting is your chance to stand up for the issues you care about.",
        illustration: slide2,
      },
    ],
    official_source: "http://dfddsdsd",
    supporting_source: {
      name: `news24`,
      headline: `ANC North West conference: Alliance partners encourage unity, 'not these unsustainable divisions'`,
      article: `The ANC's alliance partners, Cosatu and the South African National Civic Organisation, have warned that it's unstainable to have seven different slates within the party vie for power, adding that it's a clear indication of serious divisions.`,
      category: `Political`,
      language: "en",
    },
  },
  {
    id: "art2",
    title: "Elections have consequences",
    slides: [
      {
        text:
          "You have the power to decide on the quality of life you want for yourself and your community, and even future generations.",
        illustration: slide1,
      },
      {
        text:
          "Voting is your chance to stand up for the issues you care about.",
        illustration: slide2,
      },
    ],
    official_source: "http://dfddsdsd",
    supporting_source: {
      name: `news24`,
      headline: `ANC North West conference: Alliance partners encourage unity, 'not these unsustainable divisions'`,
      article: `The ANC's alliance partners, Cosatu and the South African National Civic Organisation, have warned that it's unstainable to have seven different slates within the party vie for power, adding that it's a clear indication of serious divisions.`,
      category: `Political`,
      language: "en",
    },
  },
];

export const coversations = [
  {
    id: "con1",
    article_id: "art1",
    comments: [
      {
        id: "comm1",
        username: "Louis Field",
        user_avatar: default_user,
        text: "How does my one vote make a difference?",
      },
      {
        id: "comm2",
        username: "Rod Wave",
        user_avatar: default_user,
        text:
          "It starts with one vote and then one more and then another, and so on...",
      },
    ],
  },
];
