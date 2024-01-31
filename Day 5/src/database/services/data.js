// import yogaGoldIcon from "@services/yoga-gold.png";
// import yogaWhiteIcon from "@services/yoga-white.png";
import meditationWhiteIcon from "@services/contactcopy.png";
import meditationGoldIcon from "@services/contactcopy.png";
// import retreatWhite from "@services/retreat-white.png";
// import retreatGold from "@services/retreat-gold.png";
/* Service Data Array */
const serviceData = [
  // {
  //   title: "Yoga",
  //   activeIcon: yogaWhiteIcon,
  //   inActiveIcon: yogaGoldIcon,
  // },

  // {
  //   title: "Retreats",
  //   activeIcon: retreatWhite,
  //   inActiveIcon: retreatGold,
  // },
];

/* Cards Data Array */
const cardsData = [
  [
    // Courses under Yoga service
    {
      header: "Starter",
      price: "₹499 per course",
      buttonText: "Book now",
      className: "Basics",
      cardContainer: "yoga",
      elements: [
        "Online course",
        "For the duration of 4 sessions",
        "45 minutes each Friday",
        "Learn all the basics of the game",
      ],
    },
    {
      header: "Professional",
      price: "₹999 per course",
      buttonText: "Book now",
      className: "Standard",
      cardContainer: "yoga",
      elements: [
        "In-person Coaching",
        "For the duration of 6 weeks",
        "3 sessions per week",
        "Learn advance Chess lessons",
      ],
    },
    {
      header: "Champion",
      price: "₹1999 per course",
      buttonText: "Book now",
      className: "Premium",
      cardContainer: "yoga",
      elements: [
        "Online Analysis",
        "For the duration of 8 weeks",
        "4 sessions per week",
        "Cultivate Advanced Algorithm",
      ],
    },
  ],

  [
    // Courses under Meditation service

    {
      header: "Starter",
      price: "€50 per course",
      buttonText: "Book now",
      className: "basic",
      cardContainer: "meditation",
      elements: [
        "Online Meditation",
        "For the duration of 4 weeks",
        "30 minutes each Tuesdays",
        "Learn the Basics of Meditation",
      ],
    },
    {
      header: "Professional",
      price: "€90 per course",
      buttonText: "Book now",
      className: "standard",
      cardContainer: "meditation",
      elements: [
        "In-person Meditation",
        "For the duration of 6 weeks",
        "3 sessions per week",
        "Improve Emotional Well-being",
      ],
    },
    {
      header: "Champion",
      price: "€150 per course",
      buttonText: "Book now",
      className: "premium",
      cardContainer: "meditation",
      elements: [
        "In-Person Meditation",
        "For the duration of 8 weeks",
        "4 sessions per week",
        "Develop Deep States of Meditation",
      ],
    },
  ],
  [
    // Courses under Meditation service

    {
      header: "Starter",
      price: "€150 per person",
      buttonText: "Book now",
      className: "basic",
      cardContainer: "retreat",
      elements: [
        "In-person Retreat",
        "For the duration of 3 days",
        "Relaxation and Mindfulness",
        "Self-Care and Wellness Practices",
      ],
    },
    {
      header: "Professional",
      price: "€250 per person",
      buttonText: "Book now",
      className: "standard",
      cardContainer: "retreat",
      elements: [
        "In-person Retreat",
        "For the duration of 5 days",
        "Personal Growth and Wellness",
        "Nature walks & silent Reflection",
      ],
    },
    {
      header: "Champion",
      price: "€350 per person",
      buttonText: "Book now",
      className: "premium",
      cardContainer: "retreat",
      elements: [
        "In-person Retreat",
        "For the duration of one week",
        "Mastery and Transformation",
        "Connect with Fellow Spiritual",
      ],
    },
  ],
];

export { cardsData, serviceData };
