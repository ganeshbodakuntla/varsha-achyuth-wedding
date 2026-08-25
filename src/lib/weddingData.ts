export type WeddingEvent = {
  title: string;
  subtitle?: string;
  date: string;
  time: string;
  venue: string;
  description?: string;
  image?: string;
};

export const weddingData = {
  language: "en",
  groom: {
    name: "Achyuth",
    teluguName: "అచ్యుత్",
    image: "/images/Groom.png",
  },
  bride: {
    name: "Aaradhya",
    teluguName: "ఆరాధ్య",
    image: "/images/Bride.png",
  },
  blessing: "With the blessings of our families",
  teluguBlessing: "మా కుటుంబ సభ్యుల ఆశీస్సులతో",
  weddingDateISO: "2026-08-30T10:16:00+05:30",
  weddingDate: "30 August 2026",
  weddingTime: "10:16 AM",
  venue: {
    name: "Sri Lakshmi Convention Hall",
    address: "Hyderabad, Telangana, India",
    googleMapsUrl: "https://maps.app.goo.gl/Qi9vhhxw8XiAXNXq7",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.0923933501967!2d78.19627827515717!3d17.503102399461365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbefd60570de83%3A0x78881fc51d37d2d5!2sVarahi%20Conventions!5e0!3m2!1sen!2sin!4v1787675274872!5m2!1sen!2sin",
  },
  family: {
    bride: ["Mr. & Mrs. Nagarani & Subhan Reddy"],
    groom: ["Mr. & Mrs. Manjula & Balakishan Reddy"],
  },
  contacts: {
    brideWhatsApp: "https://wa.me/910000000000",
    groomWhatsApp: "https://wa.me/910000000001",
  },
  music: "audio/Seetha Kalyana Vaibhogame Lyric Ishq Sootiga Chudaku Song.mp3",
  gallery: [
    "/images/photo_1.jpg",
    "/images/photo_3.jpg",
    "/images/photo_4.jpg",
    "/images/photo_5.jpg",
    "/images/photo_6.jpg",
    "/images/photo_2.jpg",
  ],
  journey: [
    { title: "First Meeting", text: "Where a beautiful story quietly began." },
    {
      title: "A Beautiful Beginning",
      text: "Two families, two hearts, one growing bond.",
    },
    { title: "Engagement", text: "A promise made with love and blessings." },
    { title: "The Wedding Day", text: "The beginning of our forever." },
  ],
  events: [
    {
      title: "Haldi & Mehendi",
      subtitle: "An evening of traditions and joy",
      date: "27 August 2026",
      time: "Haldi-10:00 AM &Mehandi-7:00 PM",
      venue: "Charvi Farm House",
      description:
        "An evening filled with music, flowers, laughter, and joyful blessings as we celebrate the beautiful beginning of our wedding festivities.",
    },
    {
      title: "Pellikuthuru / Pellikoduku",
      subtitle: "A cherished family tradition",
      date: "28 & 29 August 2026",
      time: "10:00 AM",
      venue: "Family Residence",
      description:
        "A beautiful traditional ceremony filled with love, laughter, blessings, and cherished moments with family.",
    },
    {
      title: "Wedding Ceremony",
      subtitle: "The auspicious Muhurtham",
      date: "30 August 2026",
      time: "10:16 AM",
      venue: "Varahi Conventions",
      description:
        "Join us as we exchange vows and begin our beautiful journey together, surrounded by the love and blessings of our family and friends.",
    },
    {
      title: "Reception",
      subtitle: "An evening of dinner & celebrations",
      date: "1 September 2026",
      time: "7:00 PM",
      venue: "Hums-Tans Conventions & Banquets",
      description:
        "Join us for an evening of celebration, delicious food, laughter, and unforgettable memories as we celebrate our new beginning together.",
    },
  ] as WeddingEvent[],
} as const;
