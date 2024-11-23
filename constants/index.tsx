import { assets } from "@/public/assets";
import josh from "@/public/Joshua.jpeg";
import  j from "@/publicYakubu.jpg"
// Base URL
const baseURL: string = "https://diboruwa.com";

// Route configuration
export interface Route {
  name: string;
  path: string;
  icon?: string;
  subroutes?: {
    name: string;
    path: string;
    icon: string;
  }[];
}

export const routes: Route[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
    icon: "🛠️",
    subroutes: [
      { name: "Laundry", path: "/laundry", icon: assets.soap },
      { name: "Food", path: "/food", icon: assets.food },
      { name: "Cleaning", path: "cleaning", icon: assets.cleaningImg },
      { name: "Moving", path: "/moving", icon: assets.scooter },
    ],
  },

  {
    name: "Vendor",
    path: "/",
    icon: "🛠️",
    subroutes: [
      { name: "Laundry", path: "/laundry", icon: assets.soap },
      { name: "Food", path: "/food", icon: assets.food },
      { name: "Cleaning", path: "cleaning", icon: assets.cleaningImg },
      { name: "Moving", path: "/moving", icon: assets.scooter },
    ],
  },

  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];
export const HWW = [
  {
    image: "h",
    title: "Hand-Picked Selection or Choose a plan",
    content:
      "Choose from a specially curated menu of delicious meals, sourced from the best local eateries, all in one place.",
    // content:
    //   "Choose a meal schedule that works for you; when you want it, how you want it. It takes less than 5 minutes.",
  },
  {
    image: "h",
    title: "Effortless Ordering",
    content:
      "Browse, select, and place your order in just a few clicks. A streamlined process designed for your convenience.",
    //  content:
    //   "We cook up your picks from our rich menu and deliver them to you on schedule. At no extra delivery costs.",
  },
  {
    image: "h",
    title: "Reliable & Prompt Delivery",
    // title: "You Heat and Eat",
    content:
      "Experience the joy of having your favorite meals delivered right to your door, fresh and on time.",
    // content:
    //   "With Just 5 Minutes of Heating, Your Meal Is Good to Go, or Refrigerate It for a Later Tasty Treat",
  },
];

export const services = [
  {
    title: "Food",
    category: "food",
    image: assets.food,
    color: "color3",
    bg: "color3-20",
    content: "Fresh, ready-to-eat food prepared to your taste",
    cta: {
      label: "Order Now",
      path: "/food",
    },
  },

  {
    title: "Laundry",
    category: "laundry",
    image: assets.soap,
    color: "color2",
    bg: "color2-20",
    content: "Clean and careful laundry delivered on time",
    cta: {
      label: "Schedule Pickup",
      path: "/laundry",
    },
  },
  {
    title: "Home Cleaning",
    category: "cleaning",
    image: assets.broom,
    color: "primary",
    bg: "primary-20",
    content: "Clean, organised and spotless space",
    cta: {
      label: "Book Now",
      path: "/cleaning",
    },
  },
  {
    title: "Moving and Delivery",
    category: "moving",
    image: assets.scooter,
    color: "primary",
    bg: "color4-20",
    content: "Move or Deliver Items Without Hassles",
    cta: {
      label: "Schedule a Move",
      path: "/moving",
    },
  },

  // {
  //   title: "Training",
  //   category: "training",
  //   image: assets.chefHat,
  //   color: "color4",
  //   bg: "color4-20",
  //   content:
  //     "Fresh and on schedule Delight in chef-cooked meals delivered to your doorstep.",
  //   cta: {
  //     label: "Order Now",
  //     path: "/trainning",
  //   },
  // },
];

export const accordionData = [
  {
    id: 1,
    title:
      "Is it possible to try the service with a single purchase instead of committing to a monthly subscription?",
    content:
      "Absolutely! You can try our service with a one-time purchase; it's not limited to monthly subscriptions.",
  },
  {
    id: 2,
    title:
      "Can I schedule laundry and cleaning services to match my irregular working hours?",
    content:
      "Certainly! Our scheduling is flexible, letting you choose service times that match your dynamic schedule.",
  },
  {
    id: 3,
    title: "How can I report a late delivery or an issue with the service?",
    content:
      "Thank you for your feedback. If you're having issues, please reach out to our customer service via email, WhatsApp, or the website's Q&A form.",
  },
  {
    id: 4,
    title:
      "Is there compensation or a refund policy in place for late deliveries or unfulfilled orders?",
    content:
      "In the rare event that your order is ever late or unfulfilled, we offer compensation like discounts, partial or full refunds, based on the situation. Your satisfaction is our priority.",
  },
];

// Array of sublinks
export const sublinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/aboutus" },
      { name: "Subscriptions", path: "/subscriptions" },
      { name: "Partner With Us", path: "/partner" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Food", path: "/food" },
      { name: "Laundry", path: "/laundry" },
      { name: "Moving", path: "/moving" },
      { name: "Grooming", path: "/grooming" },
    ],
  },
  {
    title: "Blog topic",
    links: [
      { name: "Food", path: "/food" },
      { name: "Laundry", path: "/laundry" },
      { name: "Moving", path: "/moving" },
      { name: "Grooming", path: "/grooming" },
    ],
  },
  {
    title: "Other",
    links: [
      // { name: "Blog", path: "/comingsoon" },
      // { name: "Contact Us", path: "/comingsoon" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms" },
    ],
  },
];

export const Wyg = [
  {
    icon: "/people.png",
    description: "highly experienced cleaning team",
  },
  {
    icon: "/Group.png",
    description: "All equipment and chemicals provided",
  },
  {
    icon: "/shield-tick.png",
    description: "Insured services against damage.",
  },
  {
    icon: "/message-notif.png",
    description: "Unlimited, responsive customer service",
  },
];
export const WygMoving = [
  {
    icon: "/people.png",
    description: "Fast and reliable moving services",
  },
  {
    icon: "/Group.png",
    description: "Professional packing and unpacking",
  },
  {
    icon: "/shield-tick.png",
    description: "Fully insured transport for peace of mind",
  },
  {
    icon: "/message-notif.png",
    description: "24/7 customer support for any inquiries",
  },
];

export const subscriptionPlans = [
  {
    title: "One-Off Cleaning Plan",
    content: "For regular upkeep and a consistently clean home.",
    features: [
      "1 Bedrooms",
      "1 Living Rooms/ Dining Areas",
      "Bathroom sanitization",
      "Kitchen cleanup",
      "Vacuuming and mopping",
      "Dusting of all surfaces",
    ],
    cta: {
      label: "Subscribe Now",
      path: "/subscribe/standard",
    },
  },
  // {
  //   image: "/path/to/deep-image.png",
  //   title: "Deep Cleaning",
  //   content: "A thorough clean for homes that need some extra attention.",
  //   features: [
  //     "Everything from Standard Cleaning... Plus",
  //     "2 Bedrooms",
  //     "1 Living Rooms/ Dining Areas",
  //     "2 toilet/bathrooms",
  //     "1 kitchen",
  //     "Deep floor scrubbing",
  //     "Window and sill cleaning",
  //   ],
  //   cta: {
  //     label: "Subscribe Now",
  //     path: "/subscribe/deep",
  //   },
  // },
];

export const DashboradServices = [
  {
    title: "Order Food",
    image: assets.food,
    url: "/food",
  },
  {
    title: "Laundry Pickup",
    image: assets.soap,
    url: "/laundry",
  },
  {
    title: "Schedule Cleaning",
    image: assets.broom,
    url: "/cleaning",
  },
  {
    title: "Moving and Delivery",
    image: assets.scooter,
    url: "/moving",
  },
  // {
  //   title: "Requests",
  //   image: assets.food,
  //   url: "/dashboard/requests",
  // },
];

export const AboutUsContent = {
  introduction: {
    heading: "",
    content: "",
  },
};

export const PrivacyContent = [
  {
    header: "Information We Collect",
    text: "",
    bulletList: [
      {
        header: "Personal Information",
        text: "When you access our website or use our services, we may collect personal information that you provide voluntarily. This information may include, but is not limited to, your name, email address, phone number, and residential address",
      },
      {
        header: "Usage Data",
        text: " We may also automatically collect certain information when you interact with our website, such as your IP address, device information, browser type, and pages visited. This data is collected using cookies and similar tracking technologies and helps us enhance your browsing experience and improve our services",
      },
    ],
  },
  {
    header: "How We Use Your Information",
    bulletList: [
      {
        header: "Service Provision",
        text: "We use your personal information to fulfill your service requests, process transactions, and provide you with the services you have requested from Dibo Ruwa. ",
      },
      {
        header: "Communication",
        text: "We may use your contact information to communicate with you regarding your service orders, updates, promotions, and other relevant information related to Dibo Ruwa.",
      },
      {
        header: "Improving Our Services",
        text: "Your usage data and feedback may be used to analyze and improve our website and services, ensuring a more user-friendly and efficient experience for you.",
      },
    ],
  },
  {
    header: "Disclosure of Your Information",
    text: "",
    bulletList: [
      {
        header: "Service Providers",
        text: "We may share your personal information with trusted third-party service providers who assist us in delivering our services. These service providers are required to keep your information confidential and are prohibited from using it for any other purposes. ",
      },
      {
        header: "Legal Compliance",
        text: "We may disclose your personal information when required by law, such as in response to a valid court order or government request.",
      },
    ],
  },
  {
    header: "Data Security",
    text: " We take appropriate measures to safeguard your personal information and protect it from unauthorized access, disclosure, alteration, or destruction. We use industry-standard security protocols and technologies to maintain the security of your data.",
  },
  {
    header: ". Your Choices and Rights",

    bulletList: [
      {
        header: "Access and Update",
        text: "You have the right to access, update, or correct your personal information stored with us. If you wish to do so, please contact us at info@diboruwa.com ",
      },
      {
        header: "Marketing Communication",
        text: "If you no longer wish to receive marketing communications from us, you can opt-out by following the unsubscribe instructions provided in our emails or by contacting us directly",
      },
    ],
  },
  {
    header: "Children's Privacy",
    text: "Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided personal information to us, please contact us, and we will take appropriate steps to remove the information from our records",
  },
  {
    header: "Changes to this Privacy Policy",
    text: "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any changes will be effective immediately upon posting on this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.",
  },
  {
    header: "Contact Us",
    text: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at info@diboruwa.com.",
  },
];
export const TermsContent = [
  {
    header: "Use of the Website",

    bulletList: [
      {
        header: "License",
        text: "Dibo Ruwa grants you a limited, non-exclusive, non-transferable, and revocable license to access and use our website for personal and non-commercial purposes.",
      },
      {
        header: "Prohibited Conduct",
        text: " You agree not to use our website in a manner that violates any applicable laws, infringes on the rights of others, or interferes with the proper functioning of the website. Prohibited conduct includes but is not limited to unauthorized access, transmitting harmful code, and engaging in any activity that may disrupt or impede our services.",
      },
    ],
  },
  {
    header: "Intellectual Property",
    bulletList: [
      {
        header: "Ownership",
        text: "All content, trademarks, logos, and intellectual property displayed on our website are the sole property of Dibo Ruwa or its licensors and are protected by copyright and other intellectual property laws ",
      },
      {
        header: "Use of Content",
        text: "You may not copy, reproduce, modify, distribute, or otherwise use any content from our website without obtaining prior written consent from Dibo Ruwa",
      },
    ],
  },
  {
    header: "Service Orders and Payments    ",

    bulletList: [
      {
        header: "Service Providers",
        text: "By placing an order for our services, you agree to pay the specified fees for the selected services. All service orders are subject to availability and acceptance by Dibo Ruwa. ",
      },
      {
        header: "Payment",
        text: "You must provide accurate and complete payment information when placing service orders. Payment can be made through the accepted payment methods on our website.",
      },
    ],
  },
  {
    header: "Disclaimer of Warranties",

    bulletList: [
      {
        header: "",
        text: 'Our website and services are provided on an "as is" and "as available" basis. Dibo Ruwa makes no warranties or representations of any kind, whether express or implied, regarding the accuracy, reliability, or suitability of our website or services for your specific needs.',
      },
      {
        header: "",
        text: "Dibo Ruwa does not guarantee that our website will be error-free, uninterrupted, or free from harmful code. We disclaim any liability arising from any technical issues, errors, or interruptions in the functioning of our website.",
      },
    ],
  },
  {
    header: "Limitation of Liability",

    bulletList: [
      {
        header: "",
        text: ". In no event shall Dibo Ruwa, its officers, directors, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our website or services. ",
      },
      {
        header: "",
        text: "Dibo Ruwa's total liability to you for any claims arising out of your use of our website or services shall not exceed the amount paid by you for the specific services in question. ",
      },
    ],
  },
  {
    header: "Indemnification",
    text: "You agree to indemnify and hold Dibo Ruwa and its affiliates, employees, and agents harmless from any claims, losses, damages, liabilities, and expenses, including legal fees, arising out of your use of our website or services or any violation of these Terms and Conditions",
  },
  {
    header: "Governing Law and Jurisdiction",
    text: "These Terms and Conditions shall be governed by and construed in accordance with the laws of Nigeria. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Nigeria",
  },
  {
    header: "Changes to Terms and Conditions",
    text: "Dibo Ruwa reserves the right to modify or update these Terms and Conditions at any time without prior notice. Any changes will be effective immediately upon posting on this page. We encourage you to review these terms periodically to stay informed about any updates.",
  },
  {
    header: "Contact Us",
    text: "If you have any questions or concerns about these Terms and Conditions or our website, please contact us at info@diboruwa.com.",
  },
];

export interface Plan {
  title: string;
  features: string[];
  total: string | number;
  planCode?: string;
}

export interface PlanDetails {
  [subscription: string]: Plan[];
}

export const planDetails: PlanDetails = {
  Food: [
    // {
    //   title: "Starter",
    //   features: [
    //     "1 meal per week",
    //     "Weekly delivery",
    //     "Delivered once a week",
    //     "Standard plate",
    //     "Ideal for occasional treats",
    //   ],
    //   total: 4900,
    //   planCode: "PLN_atra96ny3ftwdpn",
    // },
    {
      title: "Regular",
      features: [
        "2 meal per week",
        "Standard plate",
        "Delivered once a week",
        "Ideal for weekend treats",
      ],
      total: 12600,
      planCode: "PLN_m04fkdsulh9m98p",
    },
    {
      title: "Enterprise",
      features: [
        "5 meal per week",
        "Standard plate + extra",
        "Weekdays Delivery",
        "Delivered 5 times a week",
        "Perfect for workweek meals",
      ],
      total: 43900,
      planCode: "PLN_xxcu87dxaxhmuii",
    },
    {
      title: "Gold",
      features: [
        "7 meal per week",
        "Standard plate + extra",
        "Daily Delivery",
        "Delivered 7 times a week",
        "Perfect for everyday meals",
      ],
      total: 56400,
      planCode: "PLN_wgi2tzagnxmwdex",
    },
  ],
  Laundry: [
    {
      title: "Student",
      features: [
        // "Dibo Ruwa Laundry Bag",
        "Approx 20 items in a bag",
        "Gentle washing for delicate fabrics",
        "Stain treatment",
        "Picked up once a month",
        // "Pickup and delivery twice a month (10 items per pickup)",
        "Ideal for individual",
      ],
      total: 6990,
      planCode: "PLN_1tjtak4lpxerj9s",
    },
    {
      title: "Professional",
      features: [
        "Dibo Ruwa Laundry Bag",
        "Approx 44 items in a bag",
        "Gentle washing for delicate fabrics",
        "Stain treatment",
        "Picked up and delivery twice a month",
        "2 pickups/month (22 items each)",
        "Ideal for family of two",
      ],
      total: 12900,
      planCode: "PLN_jxsf2x0hib76n0h",
    },
    {
      title: "Family",
      features: [
        "Dibo Ruwa Laundry Bag",
        "Approx 100 items in a bag",
        "Gentle washing for delicate fabrics",
        "Stain treatment",
        "Quick-dry service",
        "Emergencies",
        // "Picked up and delivery 4 times a month",
        "Max 4 pickups/month (25 items each)",
        "Ideal for family of four",
      ],
      total: 22400,
      planCode: "PLN_bs7pwn74ts3jyw7",
    },
  ],
  Cleaning: [
    {
      title: "Standard",
      features: [
        "1 Bedroom",
        "1 Living Rooms/ Dining Areas",
        "Bathroom sanitization",
        "Kitchen cleanup",
        "Vacuuming and mopping",
        "Dusting of all surfaces",
        "Once a week",
      ],
      total: 24900,
      planCode: "PLN_qsaj4llu3hfx9g9",
    },
    {
      title: "Premium",
      features: [
        "2 Bedrooms",
        "1 Living Rooms/ Dining Areas",
        "2 Bathroom sanitization",
        "Kitchen cleanup",
        "Vacuuming and mopping",
        "Dusting of all surfaces",
        "Once a week",
      ],

      total: 36950,
      planCode: "PLN_ainph5gw4x9lbyg",
    },
    {
      title: "Deep",
      features: [
        "3 Bedrooms",
        "1 Living Rooms/ Dining Areas",
        "2 Bathroom sanitization",
        "2 Kitchen cleanup",
        "Vacuuming and mopping",
        "Dusting of all surfaces",
        "Once a week",
      ],

      total: 45900,
      planCode: "PLN_qww4p0570axlg3p",
    },
  ],
};

export const teamMembers = [
  // {
  //   name: "Ricketts Rowland",
  //   role: "Lead Developer",
  //   imageUrl: "/logo.png", // Provide the actual image URL
  // },
  {
    name: "Mustapha Idris",
    role: "Marketing & Customer Success",
    imageUrl:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1700948243/dbr11_i4inmr.png",
  },
  {
    name: "Ibrahim Saliman Zainab",
    role: "Engineering",
    imageUrl: "/isz.jpeg", // Provide the actual image URL
  },
  {
    name: "Agula Adams",
    role: "Marketing & Customer Success",
    imageUrl:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1700948256/dbr44_tbhzdn.png",
  },
  {
    name: "Harafah Mukaddam",
    role: "Marketing and Customer Success",
    imageUrl:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1714850902/DSC_4612ershriu-removebg-preview_tmz2fa.png",
  },
  {
    name: "Babajide Idris ",
    role: "Branding and Content Strategy",
    imageUrl:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1714853371/idris-removebg_fk9itz.png",
  },
  {
    name: "Adeyemo Akinola Ayomide",
    role: "Engineering",
    imageUrl:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1700948250/dbr22_vpgpn8.png",
  },

  {
    name: "Yakubu Ibrahim Evuti",
    role: "Operations",
    imageUrl:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1700990270/dbr66_jjk3dx.png",
  },
  {
    name: "Okorie Joshua",
    role: "Operations",
    imageUrl:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1700948246/dbr33_rbtgb5.png",
  },
  // Add more team members as needed
];

export interface Product {
  id: number | string;
  title: string;
  prep_time: string;
  opening_time: string;
  categories: string[];
  price: number;
  slug: string;
  imageURL: string;
  openingDays?: string[];
  vendor: string;
  discount?: number;
  extras?: Extra[]; // Nested extras property within Product
  // locations: string[]
}

export interface Extra {
  id: number | string;
  title: string;
  prep_time: string;
  opening_time: string;
  categories: string[];
  slug: string;
  price: number;
  imageURL: string;
  vendor: string;
  discount?: number;
}

export interface Restaurant {
  id: string;
  name: string;
  location: string;
  chef: string;
  openingTime: string;
  menu: Product[];
  bannerURL: string;
}

export const restaurants: Restaurant[] = [
  {
    id: "Res123",
    name: "Restaurant A",
    location: "City A",
    chef: "Chef A",
    openingTime: "09:00 AM",
    bannerURL: "/restaurant_a_banner.jpg",
    menu: [
      {
        id: 1,
        title: "Spaghetti Bolognese",
        prep_time: "30 minutes",
        opening_time: "10:00 AM",
        slug: "sp1",
        categories: ["Main Course"],
        price: 20,
        imageURL: "/spaghetti_bolognese.jpg",
        vendor: "Vendor A",
        // discount: 0.1,
        extras: [
          {
            id: 1,
            title: "Garlic Bread",
            prep_time: "10 minutes",
            opening_time: "10:15 AM",
            slug: "sp11",
            categories: ["Addon"],
            price: 5,
            imageURL: "/garlic_bread.jpg",
            vendor: "Vendor A",
          },
          {
            id: 2,
            title: "Tiramisu",
            prep_time: "15 minutes",
            opening_time: "10:30 AM",
            slug: "sp12",
            categories: ["Dessert"],
            price: 8,
            imageURL: "/tiramisu.jpg",
            vendor: "Vendor A",
          },
        ],
      },
      {
        id: 2,
        title: "Margherita Pizza",
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp5",
        categories: ["Main Course"],
        price: 15,
        imageURL: "/margherita_pizza.jpg",
        vendor: "Vendor A",
      },
      {
        id: 3,
        title: "Caesar Salad",
        prep_time: "15 minutes",
        opening_time: "11:30 AM",
        categories: ["Appetizer", "Salad"],
        price: 12,
        slug: "sp6",
        imageURL: "/caesar_salad.jpg",
        vendor: "Vendor A",
      },
    ],
  },
  {
    id: "Res124",
    name: "Restaurant B",
    location: "City B",
    chef: "Chef B",
    openingTime: "10:00 AM",
    bannerURL: "/restaurant_b_banner.jpg",
    menu: [
      {
        id: 1,
        title: "Sushi Combo",
        prep_time: "40 minutes",
        opening_time: "11:00 AM",
        categories: ["Sushi"],
        slug: "sp8",
        price: 25,
        imageURL: "/sushi_combo.jpg",
        vendor: "Vendor B",
        // discount: 0.15,
        extras: [
          {
            id: 1,
            title: "Miso Soup",
            prep_time: "10 minutes",
            opening_time: "11:15 AM",
            categories: ["Soup"],
            slug: "sp13",
            price: 4,
            imageURL: "/miso_soup.jpg",
            vendor: "Vendor B",
          },
          {
            id: 2,
            title: "Edamame",
            prep_time: "8 minutes",
            opening_time: "11:30 AM",
            categories: ["Appetizer"],
            slug: "sp24",
            price: 6,
            imageURL: "/edamame.jpg",
            vendor: "Vendor B",
          },
        ],
      },
      // Similar structure for two more products in Restaurant B
    ],
  },
  {
    id: "Res125",
    name: "Restaurant C",
    location: "City C",
    chef: "Chef C",
    openingTime: "11:30 AM",
    bannerURL: "/restaurant_c_banner.jpg",
    menu: [
      {
        id: 1,
        title: "Chicken Alfredo Pasta",
        prep_time: "35 minutes",
        opening_time: "12:00 PM",
        categories: ["Main Course", "Pasta"],
        price: 18,
        slug: "sp9",
        imageURL: "/chicken_alfredo_pasta.jpg",
        vendor: "Vendor C",
        // discount: 0.2,
        extras: [
          {
            id: 1,
            title: "Caesar Salad",
            prep_time: "10 minutes",
            opening_time: "12:15 PM",
            slug: "sp15",
            categories: ["Salad"],
            price: 6,
            imageURL: "/caesar_salad.jpg",
            vendor: "Vendor C",
          },
          {
            id: 2,
            title: "Garlic Breadsticks",
            prep_time: "12 minutes",
            opening_time: "12:30 PM",
            categories: ["Addon"],
            slug: "sp10",
            price: 5,
            imageURL: "/garlic_breadsticks.jpg",
            vendor: "Vendor C",
          },
        ],
      },
      // Similar structure for two more products in Restaurant C
    ],
  },
];

export const products: Product[] = [
  {
    id: "1",
    title: "Plain rice with beef",
    price: 1550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701672664/plain_rice_beef_ll54l8.jpg",
    prep_time: "30 minutes",
    opening_time: "10:00 AM",
    slug: "sp1",
    categories: ["Rice and Grains"],
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    // discount: 0,
    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp1",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp1",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp1",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp1",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp1",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp1",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp1",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp1",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp1",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp1",
        vendor: "Pecan City",
      },
      {
        id: "12",
        title: "Plantain",
        price: 100,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234815/Screenshot_from_2024-01-14_13-19-46_xhm0nq.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp1",
        vendor: "Pecan City",
      },
      {
        id: "13",
        title: "Fries",
        price: 1000,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234979/Screenshot_from_2024-01-14_13-22-06_zl0ndp.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp1",
        vendor: "Pecan City",
      },
      {
        id: "14",
        title: "Yamarita",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Yamarita_evhgh6.jpg",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp1",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "2",
    title: "Plain rice with chicken",
    price: 2800,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701672664/plain_rice_beef_ll54l8.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp2",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "12",
        title: "Plantain",
        price: 100,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234815/Screenshot_from_2024-01-14_13-19-46_xhm0nq.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "13",
        title: "Fries",
        price: 1000,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234979/Screenshot_from_2024-01-14_13-22-06_zl0ndp.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "14",
        title: "Yamarita",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Yamarita_evhgh6.jpg",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "3",
    title: "Fried rice with chicken",
    price: 2850,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642840/fried_rice_beef_vt3j0y.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp3",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp3",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp3",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp3",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp3",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp3",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp3",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp3",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp3",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp3",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp3",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp3",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "4",
    title: "Fried rice with beef",
    price: 1650,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642840/fried_rice_beef_vt3j0y.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp4",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp03",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "12",
        title: "Plantain",
        price: 100,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234815/Screenshot_from_2024-01-14_13-19-46_xhm0nq.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "13",
        title: "Fries",
        price: 1000,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234979/Screenshot_from_2024-01-14_13-22-06_zl0ndp.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "14",
        title: "Yamarita",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Yamarita_evhgh6.jpg",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
    ],
  },

  {
    id: "5",
    title: "Meat pie",
    price: 650,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938468/diboruwa/Screenshot_from_2023-08-13_15-52-34_fofcpm.png",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp5",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp5",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp5",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp5",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp5",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp5",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp5",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp5",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp5",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp5",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp5",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp5",
        vendor: "Pecan City",
      },
      {
        id: "12",
        title: "Plantain",
        price: 100,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234815/Screenshot_from_2024-01-14_13-19-46_xhm0nq.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp5",
        vendor: "Pecan City",
      },
      {
        id: "13",
        title: "Fries",
        price: 1000,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234979/Screenshot_from_2024-01-14_13-22-06_zl0ndp.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp013",
        vendor: "Pecan City",
      },
      {
        id: "14",
        title: "Yamarita",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Yamarita_evhgh6.jpg",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp5",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "6",
    title: "Custard and Akara",
    price: 520,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691931043/diboruwa/Screenshot_from_2023-07-23_12-51-05_kt11tb.png",
    categories: ["Breakfast"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp6",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Moimoi",
        price: 370,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229390/Screenshot_from_2024-01-14_11-14-22_nokgba.png",
        categories: ["Rice and Grains"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp6",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "7",
    title: "Pap and Beans Cake (Kunu and Kose)",
    price: 520,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691931001/diboruwa/Screenshot_from_2023-07-23_12-48-37_aeja1o.png",
    categories: ["Breakfast"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp7",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Moimoi",
        price: 370,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229390/Screenshot_from_2024-01-14_11-14-22_nokgba.png",
        categories: ["Rice and Grains"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp7",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "8",
    title: "Tuwo and Egusi with Beef",
    price: 1550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691936446/diboruwa/Screenshot_from_2023-07-23_12-24-59_w5xtrh.png",
    categories: ["Swallow"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp8",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 325,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp8",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp8",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp8",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp8",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 320,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp8",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp8",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 550,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp8",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 850,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp8",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp8",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "9",
    title: "Snacks - Doughnuts, Meat Pies, Fish rolls, Puff-puff ",
    price: 8200,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780021/Sharoon%20Cook/Doughnut_pie_etc_8000_udvwuj.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp9",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp9",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp9",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp9",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp9",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp9",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp9",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp9",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp9",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp9",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "10",
    title: "Efo riro",
    price: 1300,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938479/diboruwa/Screenshot_from_2023-08-13_15-53-36_juo2h5.png",
    categories: ["Soup"],
    prep_time: "20 minutes",
    opening_time: "11:00 AM",
    slug: "sp10",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  // {
  //   id: "11",
  //   title: "White rice with vegetable soup",
  //   price: 1350,
  //   imageURL:
  //     "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701210490/White%20rice%20with%20vegetable%20soup%20and%20plantain%201500.jpg",
  //   categories: ["Rice and Grains"],
  //   prep_time: "30 minutes",
  //   opening_time: "11:00 AM",
  //   slug: "sp11",
  //   vendor: "EatWithEesha",
  //   openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  //   // discount: 0.5,
  // },
  {
    id: "12",
    title: "Jolof Rice with Plantain and Goat meat",
    price: 1100,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706804954/Screenshot_from_2024-02-01_17-23-44_comph2.png",
    categories: ["Rice and grains"],
    prep_time: "20 minutes",
    opening_time: "11:00 AM",
    slug: "sp12",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "13",
    title: "Dan wake",
    price: 500,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691936473/diboruwa/Screenshot_from_2023-07-23_12-10-00_vb6bd5.png",
    categories: ["Swallow"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp13",
    vendor: "Home made",
    openingDays: ["fri", "sat"],
  },
  {
    id: "14",
    title: "Ekuru and pepper stew with pommo",
    price: 1200,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698612208/Ekuru_plus_Fish_we3fqs.jpg",
    categories: ["Beans"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp14",
    vendor: "Home made - Adejoke",
    openingDays: ["fri", "sat"],
  },
  {
    id: "15",
    title: "Amala with vegetable Soup and Beef",
    price: 1100,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701210418/-5967755370602545238_121_ruwgxn.jpg",
    categories: ["Swallow"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp15",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    extras: [
      {
        id: "1",
        title: "Extra Protein",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706808167/Screenshot_from_2024-02-01_18-22-05_pga5sz.png",
        categories: ["Drinks"],
        prep_time: "20 minutes",
        opening_time: "11:00 AM",
        slug: "sp15",
        vendor: "EatWithEesha",
      },
    ],
  },
  {
    id: "16",
    title: "White rice with vegetable soup, and beef",
    price: 800,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701210490/White%20rice%20with%20vegetable%20soup%20and%20plantain%201500.jpg",
    categories: ["Rice and Grains"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp16",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    // discount: 0.5,
  },
  {
    id: "17",
    title: "Ewa agoyin (beans) with ponmo and plantain ",
    price: 1100,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706867920/Screenshot_from_2024-02-02_10-57-18_vk4hgo.png",
    categories: ["Beans"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp17",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "18",
    title: "Goat pepper soup",
    price: 1050,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701211347/Screenshot_from_2023-11-28_23-40-21_iixjzs.png",
    categories: ["Soup"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp18",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    // discount: 0.5,
  },
  {
    id: "19",
    title: "1 liter of stew with fish, Ponmo, and boiled egg",
    price: 8990,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701211999/Screenshot_from_2023-11-28_23-47-35_luktkz.png",
    categories: ["Soup"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp19",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "20",
    title: "Jolof spaghetti with chicken and plantain",
    price: 1690,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701212285/photo_5967755370602545228_y_rnxkis.jpg",
    categories: ["Rice and Grains"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp20",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    // discount: 0.5,
  },
  {
    id: "21",
    title: "Pounded yam with egusi soup and goat meat",
    price: 900,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701212668/photo_5967755370602545231_y_ard2qd.jpg",
    categories: ["Swallow"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp21",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    // discount: 0.5,
  },
  {
    id: "22",
    title: "Pecan rice with beaf",
    price: 1950,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642839/pecan_rice_cj3hmz.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp22",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp22",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp22",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp22",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp22",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp22",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp22",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp22",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp22",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp22",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp22",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp22",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "23",
    title: "Meat pie",
    price: 650,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Meatpie_kkswmo.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp23",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp23",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp23",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp23",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp23",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp23",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp23",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp23",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp23",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp23",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp23",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp23",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "24",
    title: "Burger beef or chicken",
    price: 2650,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Burger_beef_or_chicken_t99bj5.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp24",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp24",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp24",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp24",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp24",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp24",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp24",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp24",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp24",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp24",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp24",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp24",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "25",
    title: "Sandwich",
    price: 1150,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642850/sandwich_nhnrkn.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp25",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp25",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp25",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp25",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp25",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp25",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp25",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp25",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp25",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp25",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp25",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp25",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "26",
    title: "Doughnut",
    price: 550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642846/Doughnut_vmnkac.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp26",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp26",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp26",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp26",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp26",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp26",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp26",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp26",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp26",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp26",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp26",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp26",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "27",
    title: "Shawarma",
    price: 1650,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Shawarma_large_q50eqv.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp27",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp27",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp27",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp27",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp27",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp27",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp27",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp27",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp27",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp27",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp27",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp27",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "28",
    title: "Shawarma medium",
    price: 1850,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Shawarma_large_q50eqv.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp28",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp28",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp28",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp28",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp28",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp28",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp28",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp28",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp28",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp28",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp28",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp28",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "29",
    title: "Shawarma large",
    price: 2150,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Shawarma_large_q50eqv.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp29",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp3",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "30",
    title: "Jollof rice and chicken",
    price: 2850,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691930939/diboruwa/Screenshot_from_2023-07-23_12-41-36_gqry1k.png",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp30",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp29",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp29",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp29",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp29",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp29",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp29",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp29",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp29",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp29",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp29",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp29",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "31",
    title: "Jollof rice and chicken with coslow",
    price: 2550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1700398660/jollof_rice_and_chicken_with_coslow_wb3hdb.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp31",
    vendor: "Home made - Adejoke",
    openingDays: ["fri", "sat"],
  },
  {
    id: "32",
    title: "Masa with Yaji",
    price: 550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780007/Sharoon%20Cook/Masa_and_soup_700_plate_of_4masa_0AMasa_and_yaji_500_plate_of_4_dpmmxq.jpg",
    categories: ["Swallow"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp33",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "33",
    title: "Masa and Soup",
    price: 750,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780007/Sharoon%20Cook/Masa_and_soup_700_plate_of_4masa_0AMasa_and_yaji_500_plate_of_4_dpmmxq.jpg",
    categories: ["Swallow"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp33",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp33",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "34",
    title: "Ewa agoyin with plantain and bread",
    price: 1200,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701211063/photo_5967755370602545226_y_gxixvt.jpg",
    categories: ["Reans"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp34",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    // discount: 0.5,
  },
  {
    id: "35",
    title: "Chicken and chips",
    price: 2650,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Chicken_and_chips_nk9cia.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp35",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp35",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp35",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp35",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp35",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp35",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp35",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp35",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp35",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp35",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp35",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp35",
        vendor: "Pecan City",
      },
      {
        id: "12",
        title: "Plantain",
        price: 100,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234815/Screenshot_from_2024-01-14_13-19-46_xhm0nq.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp35",
        vendor: "Pecan City",
      },
      {
        id: "13",
        title: "Fries",
        price: 1000,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234979/Screenshot_from_2024-01-14_13-22-06_zl0ndp.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp35",
        vendor: "Pecan City",
      },
      {
        id: "14",
        title: "Yamarita",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Yamarita_evhgh6.jpg",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp35",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "36",
    title: "Yamarita",
    price: 400,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Yamarita_evhgh6.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp36",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "37",
    title: "Porridge Beans",
    price: 1200,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Porridge_Beans_kd8z2i.jpg",
    categories: ["Beans"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp37",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp37",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp37",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp37",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp37",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp37",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp37",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp37",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp37",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp37",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp37",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp37",
        vendor: "Pecan City",
      },
      {
        id: "12",
        title: "Plantain",
        price: 100,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234815/Screenshot_from_2024-01-14_13-19-46_xhm0nq.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp37",
        vendor: "Pecan City",
      },
      {
        id: "13",
        title: "Fries",
        price: 1000,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234979/Screenshot_from_2024-01-14_13-22-06_zl0ndp.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp37",
        vendor: "Pecan City",
      },
      {
        id: "14",
        title: "Yamarita",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Yamarita_evhgh6.jpg",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp37",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "38",
    title: "Pecan pasta with beef",
    price: 1500,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Pecan_Pasta_with_chicken_en5zn2.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp38",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp38",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp38",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp38",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp38",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp38",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp38",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp38",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp38",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp38",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp38",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp38",
        vendor: "Pecan City",
      },
      {
        id: "12",
        title: "Plantain",
        price: 100,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234815/Screenshot_from_2024-01-14_13-19-46_xhm0nq.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp38",
        vendor: "Pecan City",
      },
      {
        id: "13",
        title: "Fries",
        price: 1000,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234979/Screenshot_from_2024-01-14_13-22-06_zl0ndp.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp38",
        vendor: "Pecan City",
      },
      {
        id: "14",
        title: "Yamarita",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Yamarita_evhgh6.jpg",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp38",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "39",
    title: "Pecan pasta with chicken",
    price: 2700,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Pecan_Pasta_with_chicken_en5zn2.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp39",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp39",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp39",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp39",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp39",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp39",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp39",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp39",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp39",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp39",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp39",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp39",
        vendor: "Pecan City",
      },
      {
        id: "12",
        title: "Plantain",
        price: 100,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234815/Screenshot_from_2024-01-14_13-19-46_xhm0nq.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp39",
        vendor: "Pecan City",
      },
      {
        id: "13",
        title: "Fries",
        price: 1000,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234979/Screenshot_from_2024-01-14_13-22-06_zl0ndp.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp39",
        vendor: "Pecan City",
      },
      {
        id: "14",
        title: "Yamarita",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Yamarita_evhgh6.jpg",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp39",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "40",
    title: "Noodles",
    price: 1150,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642840/noodleEgg_u8hxg6.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp40",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp40",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp40",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp40",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp40",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp40",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp40",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp40",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp40",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp40",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp40",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp40",
        vendor: "Pecan City",
      },
      {
        id: "12",
        title: "Plantain",
        price: 100,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234815/Screenshot_from_2024-01-14_13-19-46_xhm0nq.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp40",
        vendor: "Pecan City",
      },
      {
        id: "13",
        title: "Fries",
        price: 1000,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234979/Screenshot_from_2024-01-14_13-22-06_zl0ndp.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp40",
        vendor: "Pecan City",
      },
      {
        id: "14",
        title: "Yamarita",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Yamarita_evhgh6.jpg",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp40",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "41",
    title: "Pecan rice with chicken",
    price: 3150,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642839/pecan_rice_cj3hmz.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp41",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    extras: [
      {
        id: "1",
        title: "Sprite",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp41",
        vendor: "Pecan City",
      },
      {
        id: "2",
        title: "Water",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp41",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Can malt",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp41",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fanta",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp41",
        vendor: "Pecan City",
      },
      {
        id: "5",
        title: "Monster",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp41",
        vendor: "Pecan City",
      },
      {
        id: "6",
        title: "Predator",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp41",
        vendor: "Pecan City",
      },
      {
        id: "7",
        title: "5alive Pulpy Orange",
        price: 800,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp41",
        vendor: "Pecan City",
      },
      {
        id: "8",
        title: "1L Hollandia Yoghurt",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp41",
        vendor: "Pecan City",
      },
      {
        id: "9",
        title: "Chi Exotic - 1L",
        price: 1200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp41",
        vendor: "Pecan City",
      },
      {
        id: "10",
        title: "CWAY Nutri-Milk Peach 50 cl",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp41",
        vendor: "Pecan City",
      },
      {
        id: "11",
        title: "Coke",
        price: 300,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
        categories: ["Drinks"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp41",
        vendor: "Pecan City",
      },
      {
        id: "12",
        title: "Plantain",
        price: 100,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234815/Screenshot_from_2024-01-14_13-19-46_xhm0nq.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp41",
        vendor: "Pecan City",
      },
      {
        id: "13",
        title: "Fries",
        price: 1000,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705234979/Screenshot_from_2024-01-14_13-22-06_zl0ndp.png",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp41",
        vendor: "Pecan City",
      },
      {
        id: "14",
        title: "Yamarita",
        price: 400,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Yamarita_evhgh6.jpg",
        categories: ["Extras"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp41",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "42",
    title: "Sprite",
    price: 300,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-00-32_bjqqtu.png",
    categories: ["Drinks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp42",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "43",
    title: "Water",
    price: 200,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_11-57-15_z4qjke.png",
    categories: ["Drinks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp43",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "44",
    title: "Can malt",
    price: 400,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_12-03-27_tdmsvc.png",
    categories: ["Drinks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp44",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "45",
    title: "Fanta",
    price: 300,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230975/Screenshot_from_2024-01-14_11-59-25_ncn2rn.png",
    categories: ["Drinks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp45",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "46",
    title: "Monster",
    price: 800,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230974/Screenshot_from_2024-01-14_12-02-34_tqudb6.png",
    categories: ["Drinks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp46",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "47",
    title: "Predator",
    price: 400,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231610/Screenshot_from_2024-01-14_12-26-26_x6cmkz.png",
    categories: ["Drinks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp47",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "48",
    title: "5alive Pulpy Orange",
    price: 800,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705230976/Screenshot_from_2024-01-14_12-05-21_uywk1y.png",
    categories: ["Drinks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp48",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "49",
    title: "1L Hollandia Yoghurt",
    price: 1200,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705231763/Screenshot_from_2024-01-14_12-29-09_c6vyzd.png",
    categories: ["Drinks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp49",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "50",
    title: "Chi Exotic - 1L",
    price: 1200,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232100/Screenshot_from_2024-01-14_12-33-52_jofkzf.png",
    categories: ["Drinks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp50",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "51",
    title: "CWAY Nutri-Milk Peach 50 cl",
    price: 400,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232290/Screenshot_from_2024-01-14_12-37-54_macvts.png",
    categories: ["Drinks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp51",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "52",
    title: "Coke",
    price: 300,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705232362/Screenshot_from_2024-01-14_12-36-40_vyx9ek.png",
    categories: ["Drinks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp52",
    vendor: "Pecan City",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  // Thursday to Saturday
  {
    id: "53",
    title: "Egg Sauce and Plantain",
    price: 850,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229520/Screenshot_from_2024-01-14_10-35-41_ulrjgh.png",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp53",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp53",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp53",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp53",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp53",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp53",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp53",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp53",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp53",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp53",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "54",
    title: "Fried rice",
    price: 1050,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229420/Screenshot_from_2024-01-14_11-08-28_y3qjmq.png",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp054",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp054",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp054",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp054",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp054",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp054",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp054",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp054",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp054",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp054",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "55",
    title: "Jollof rice, Chicken and Salad",
    price: 2420,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780000/Sharoon%20Cook/Jollof_rice_chicken_and_salad_2300_rl0doj.jpg",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp55",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp55",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp55",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp55",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp55",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp55",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp55",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp55",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp55",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp55",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "56",
    title: "Rice and stew",
    price: 1050,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229407/Screenshot_from_2024-01-14_11-10-41_tmngzz.png",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp56",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp56",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp0112",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp56",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp56",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp56",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp56",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp56",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp56",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp56",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "57",
    title: "Sharon Native rice",
    price: 1260,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229411/Screenshot_from_2024-01-14_11-11-53_yutwxd.png",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp57",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp57",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp57",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp57",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp57",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp57",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp57",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp57",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp57",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp57",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "58",
    title: "Chicken and Potato Curry",
    price: 1575,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229430/Screenshot_from_2024-01-14_11-20-48_wfhkqc.png",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp58",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp58",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp58",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp58",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp58",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp58",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp58",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp58",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp58",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp58",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "59",
    title: "Sweet potato porridge",
    price: 735,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229325/Screenshot_from_2024-01-14_11-42-25_uwtxzx.png",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp59",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp59",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp59",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp59",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp59",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp59",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp59",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp59",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp59",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp59",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "60",
    title: "Moimoi",
    price: 370,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229390/Screenshot_from_2024-01-14_11-14-22_nokgba.png",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp60",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp60",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp60",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp60",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp60",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp60",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp60",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp60",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp60",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp60",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "61",
    title: "Pancakes",
    price: 525,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705236056/Screenshot_from_2024-01-14_13-40-44_gisvo8.png",
    categories: ["Extras"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp61",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp61",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp61",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp61",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp61",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp61",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp61",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp61",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp61",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp61",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "62",
    title: "Garnished Noodles",
    price: 730,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780013/Sharoon%20Cook/Garnished_noodles_700_xyacjc.jpg",
    categories: ["Extras"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp62",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp62",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp62",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp62",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp62",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp62",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp62",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp62",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp62",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp62",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "63",
    title: "Swallow - Semo/Tuwo/Amala/Pounded Yam/",
    price: 840,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229343/Screenshot_from_2024-01-14_11-16-53_u2fgcp.png",
    categories: ["Extras"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp63",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp63",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp63",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp63",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp63",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp63",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp63",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp63",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp63",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp63",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "64",
    title: "Peppered Beef",
    price: 1050,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229329/Screenshot_from_2024-01-14_11-23-28_ozeydg.png",
    categories: ["Protein"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp64",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp64",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp64",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp64",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp64",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp64",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp64",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp64",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp64",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp64",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "65",
    title: "Peppered Chicken",
    price: 1050,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229371/Screenshot_from_2024-01-14_11-22-41_e8rvbe.png",
    categories: ["Protein"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp65",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp65",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp65",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp65",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp65",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp65",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp65",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp65",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp65",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp65",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "66",
    title: "Peppered Fish",
    price: 525,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229361/Screenshot_from_2024-01-14_11-25-13_wmpfvh.png",
    categories: ["Protein"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp66",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp66",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp66",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp66",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp66",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp66",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp66",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp66",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp66",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp66",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "67",
    title: "Cup cake",
    price: 315,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229341/Screenshot_from_2024-01-14_11-29-55_qduxfx.png",
    categories: ["Extras"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp67",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp67",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp67",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp67",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp67",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp67",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp67",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp67",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp67",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp67",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "68",
    title: "Puff-Puff - 10 pieces",
    price: 525,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229328/Screenshot_from_2024-01-14_11-28-16_iv15go.png",
    categories: ["Extras"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp68",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp68",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp68",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp68",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp68",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp68",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp68",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp68",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp68",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp68",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "69",
    title: "Samosa",
    price: 155,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229319/Screenshot_from_2024-01-14_11-33-52_nviajo.png",
    categories: ["Extras"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp69",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp69",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp69",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp69",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp69",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp69",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp69",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp69",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp69",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp69",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "70",
    title: "Chin-chin",
    price: 525,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229321/Screenshot_from_2024-01-14_11-32-17_bnsbid.png",
    categories: ["Extras"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp70",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp70",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp70",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp70",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp70",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp70",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp70",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp70",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp70",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp70",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "71",
    title: "Chin-chin",
    price: 1050,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229321/Screenshot_from_2024-01-14_11-32-17_bnsbid.png",
    categories: ["Extras"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp71",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp71",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp71",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp71",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp71",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp71",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp71",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp71",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp71",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp71",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "72",
    title: "Egg roll",
    price: 370,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229340/Screenshot_from_2024-01-14_11-33-02_owy0vb.png",
    categories: ["Extras"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp72",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp72",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp72",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp72",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp72",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp72",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp72",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp72",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp72",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp72",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "73",
    title: "Spring rolls",
    price: 105,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229321/Screenshot_from_2024-01-14_11-32-17_bnsbid.png",
    categories: ["Extras"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp73",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],

    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp73",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp73",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp73",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp73",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 315,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp73",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp73",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp73",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 840,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp73",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp73",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "74",
    title: "Spinach - Efo riro",
    price: 1570,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229327/Screenshot_from_2024-01-14_11-43-45_uuodnh.png",
    categories: ["Soup"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp74",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "75",
    title: "Stew with Kponmo and stock fish- 1L",
    price: 2625,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229470/Screenshot_from_2024-01-14_11-40-57_dstlqj.png",
    categories: ["Soup"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp75",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "76",
    title: "Egusi Soup with stock fish - 1L",
    price: 2550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229317/Screenshot_from_2024-01-14_11-41-51_vdwzde.png",
    categories: ["Soup"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp76",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "77",
    title: "Groundnut soup with stock fish - 1L",
    price: 2550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229322/Screenshot_from_2024-01-14_11-43-02_idskxn.png",
    categories: ["Soup"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp77",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "78",
    title: "Draw soup with stock fish - 1L",
    price: 1550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229325/Screenshot_from_2024-01-14_11-42-25_uwtxzx.png",
    categories: ["Soup"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp78",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "79",
    title: "Grilled Kponmo",
    price: 210,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229487/Screenshot_from_2024-01-14_11-39-04_a0elor.png",
    categories: ["Protein"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp79",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },

  {
    id: "80",
    title: "Kuka soup with stock fish - Miyan kuka",
    price: 1050,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229317/Kuka_soup_-_miyan_kuka_bhehyn.png",
    categories: ["Soup"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp80",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "81",
    title: "Tigernut Drink - Kunu Aya",
    price: 315,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
    categories: ["Drinks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp81",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "82",
    title: "Tigernut Drink - Kunu Aya",
    price: 525,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
    categories: ["Drinks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp82",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "83",
    title: "Millet Drink - Kunu Gero",
    price: 525,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
    categories: ["Drinks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp83",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "84",
    title: "Zobo Drink",
    price: 525,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
    categories: ["Drinks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp84",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "85",
    title: "Zobo Drink",
    price: 315,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
    categories: ["Drinks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp85",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "86",
    title: "Heart Juice",
    price: 1050,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
    categories: ["Drinks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp86",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "87",
    title: "Yoghurt",
    price: 525,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
    categories: ["Drinks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp87",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "88",
    title: "Yoghurt",
    price: 840,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
    categories: ["Drinks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp88",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "89",
    title: "Fruit Juice",
    price: 1050,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
    categories: ["Drinks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp89",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "90",
    title: "Spaghetti with Fish sauce and Chicken and Plantain",
    price: 2350,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780017/Sharoon%20Cook/Spaghetti_fish_sauce_chicken_and_plantain_2300_ytgu2z.jpg",
    categories: ["Rice and grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp90",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },

  {
    id: "91",
    title: "Full Pot of Jollof Rice - 5L",
    price: 15500,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1704968509/Screenshot_from_2024-01-11_11-21-16_a3x037.png",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp91",
    vendor: "Chef Jo",
    openingDays: ["tue", "thu", "fri"],
  },
  {
    id: "92",
    title: "1L - Pot of Jollof Rice",
    price: 3150,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1704968509/Screenshot_from_2024-01-11_11-21-16_a3x037.png",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp92",
    vendor: "Chef Jo",
    openingDays: ["tue", "thu", "fri"],
  },
  {
    id: "93",
    title: "Full Pot of Fried Rice - 5L",
    price: 15500,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1704967343/photo_5821092167408534306_x_a9evz3.jpg",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp93",
    vendor: "Chef Jo",
    openingDays: ["tue", "thu", "fri"],
  },
  {
    id: "94",
    title: "1L - Pot of Fried Rice ",
    price: 3150,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1704967343/photo_5821092167408534306_x_a9evz3.jpg",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp94",
    vendor: "Chef Jo",
    openingDays: ["tue", "thu", "fri"],
  },
  {
    id: "95",
    title: "2L of Stew",
    price: 7350,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1704967343/photo_5821092167408534307_x_yzuhsd.jpg",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp95",
    vendor: "Chef Jo",
    openingDays: ["tue", "thu", "fri"],
  },
  {
    id: "96",
    title: "2L Pot of Egusi Soup with 4 Wrapps of Swallow",
    price: 10900,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1704967343/photo_5821092167408534308_x_zl9tux.jpg",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp96",
    vendor: "Chef Jo",
    openingDays: ["tue", "thu", "fri"],
  },

  {
    id: "97",
    title: "2L Pot of Okra Soup with 4 Wrapps of Swallow",
    price: 10900,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1704967343/photo_5821092167408534309_x_b9e3b8.jpg",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp97",
    vendor: "Chef Jo",
    openingDays: ["tue", "thu", "fri"],
  },
  {
    id: "98",
    title: "1L of Rice with 2 Pieces of Chicken",
    price: 5150,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706784976/Screenshot_from_2024-02-01_11-53-56_yomrhy.png",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp98",
    vendor: "Chef Jo",
    openingDays: ["tue", "thu", "fri"],
  },

  {
    id: "99",
    title: "5L of Rice with 10 Pieces of Chicken ",
    price: 25500,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706784976/Screenshot_from_2024-02-01_11-53-56_yomrhy.png",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp99",
    vendor: "Chef Jo",
    openingDays: ["tue", "thu", "fri"],
  },
  {
    id: "100",
    title: "Yam and Egg sauce",
    price: 1050,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780024/Sharoon%20Cook/Yam_and_egg_sauce_1000_ultstf.jpg",
    categories: ["Rice and grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp100",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "101",
    title: "Chicken and filled Doughnut",
    price: 2550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780002/Sharoon%20Cook/Chicken_and_filled_doughnut_2500_wb1jo8.jpg",
    categories: ["Snacks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp101",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "102",
    title: "Boli Peppered Sauce and Chicken",
    price: 2050,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780004/Sharoon%20Cook/Bole_Peppered_sauce_and_chicken_2000_zxlxkg.jpg",
    categories: ["Snacks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp102",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "103",
    title: "White Rice and Stew with Plantain and Salad",
    price: 1550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706779989/Sharoon%20Cook/White_rice_and_stew_with_plantain_and_salad_1500_ult298.jpg",
    categories: ["Rice and grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp103",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "104",
    title: "Spaghetti and Chicken",
    price: 2050,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780010/Sharoon%20Cook/Spaghetti_and_chicken_2000_edvgya.jpg",
    categories: ["Rice and grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp104",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "105",
    title: "Plate of garnished Awara",
    price: 1050,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706779989/Sharoon%20Cook/Plate_of_awara_1000_10pieces_tnhook.jpg",
    categories: ["Snacks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp105",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "106",
    title: "Plane Awara",
    price: 100,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706779994/Sharoon%20Cook/Plane_awara_fried_100_each_ocjvop.jpg",
    categories: ["Snacks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp106",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "107",
    title: "Peppered Chicken and Plantain",
    price: 1550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706779993/Sharoon%20Cook/Peppered_Chicken_and_plantain_1500_tvw5t5.png",
    categories: ["Snacks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp107",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "108",
    title: "Regular Filled Doughnut",
    price: 550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706782653/Screenshot_from_2024-02-01_11-16-24_f0u3l0.png",
    categories: ["Snacks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp108",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "109",
    title: "Milk filled Doughnut",
    price: 700,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706782670/Screenshot_from_2024-02-01_11-16-36_rgvtai.png",
    categories: ["Snacks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp109",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "110",
    title: "6 Fish Rolls, 1 Chicken, Boli and Groundnut",
    price: 3550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780031/Sharoon%20Cook/6_fish_roll_1_chicken_Bole_and_groundnut_3500_jekvek.jpg",
    categories: ["Snacks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp110",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "111",
    title: "Puff puff Coated with Milk",
    price: 850,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780023/Sharoon%20Cook/Puff_puff_coated_with_milk_800_nmgwao.jpg",
    categories: ["Snacks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp111",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
  },
  {
    id: "112",
    title: "Meat pie",
    price: 550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780013/Sharoon%20Cook/500_each_xtncxn.jpg",
    categories: ["Snacks"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp112",
    vendor: "Sharon's Cook House",
    openingDays: ["wed", "thu", "fri"],
    extras: [
      {
        id: "1",
        title: "Tigernut Drink - Kunu Aya",
        price: 325,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp112",
        vendor: "Sharon's Cook House",
      },
      {
        id: "2",
        title: "Tigernut Drink - Kunu Aya",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/tigernut_drink_-_kunu_haya_vxa6jh.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp112",
        vendor: "Sharon's Cook House",
      },
      {
        id: "3",
        title: "Millet Drink - Kunu Gero",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229488/kunu_gero_vkm5jp.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp112",
        vendor: "Sharon's Cook House",
      },
      {
        id: "4",
        title: "Zobo Drink",
        price: 525,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp112",
        vendor: "Sharon's Cook House",
      },
      {
        id: "5",
        title: "Zobo Drink",
        price: 320,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229493/Screenshot_from_2024-01-14_11-35-19_u1y16t.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp112",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Heart Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229490/Screenshot_from_2024-01-14_11-37-44_jt3pim.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp112",
        vendor: "Sharon's Cook House",
      },
      {
        id: "6",
        title: "Yoghurt",
        price: 550,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp112",
        vendor: "Sharon's Cook House",
      },
      {
        id: "7",
        title: "Yoghurt",
        price: 850,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1705229484/Screenshot_from_2024-01-14_11-39-20_xlalkd.png",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp112",
        vendor: "Sharon's Cook House",
      },
      {
        id: "8",
        title: "Fruit Juice",
        price: 1050,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706780018/Sharoon%20Cook/Fruit_juice_1000_each_vnwors.jpg",
        categories: ["Drinks"],
        prep_time: "24 hours",
        opening_time: "11:00 AM",
        slug: "sp112",
        vendor: "Sharon's Cook House",
      },
    ],
  },
  {
    id: "113",
    title: "Fried Rice With Chicken and Plantain",
    price: 1750,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706807187/Party_jolof_rice_-_fried_rice_with_chicken_1500_with_plantain_1700_tahoc5.jpg",
    categories: ["Rice and grains"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp113",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "114",
    title: "Fried Rice with Chicken",
    price: 1550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706807187/Party_jolof_rice_-_fried_rice_with_chicken_1500_with_plantain_1700_tahoc5.jpg",
    categories: ["Rice and grains"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp114",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "115",
    title: "Rice and Beans with Chicken",
    price: 1750,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1707067092/Rice_with_beans_and_chicken_1700_x1w6pl.jpg",
    categories: ["Rice and grains"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp115",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "116",
    title: "Amala with Egusi Soup and Ponmo",
    price: 1100,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1707067205/Amala_with_Egusi_soup_abula_vegetable_soup_ogbono_soup_with_beef_assorted_ponmo_1100_okryee.jpg",
    categories: ["Rice and grains"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp116",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "117",
    title: "Boiled Yam With Egg Sauce",
    price: 1100,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706807186/Boiled_yam_with_egg_sauce_1300_xjoszw.jpg",
    categories: ["Swallow"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp117",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "118",
    title: "Ogbono with Fufu Akpu",
    price: 1350,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706807186/Ogbono_with_fufu_Akpu_1300_with_extra_protein_1500_m6lkxf.jpg",
    categories: ["Swallow"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp118",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    extras: [
      {
        id: "1",
        title: "Extra Protein",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706808167/Screenshot_from_2024-02-01_18-22-05_pga5sz.png",
        categories: ["Drinks"],
        prep_time: "20 minutes",
        opening_time: "11:00 AM",
        slug: "sp118",
        vendor: "EatWithEesha",
      },
    ],
  },
  {
    id: "119",
    title: "Egusi Soup with Semovita and Cow Leg",
    price: 1550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706807186/Egusi_soup_with_Semovita_and_cow_leg_1500_with_extra_protein_1700_wyr8kw.jpg",
    categories: ["Swallow"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp119",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    extras: [
      {
        id: "1",
        title: "Extra Protein",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706808167/Screenshot_from_2024-02-01_18-22-05_pga5sz.png",
        categories: ["Drinks"],
        prep_time: "20 minutes",
        opening_time: "11:00 AM",
        slug: "sp119",
        vendor: "EatWithEesha",
      },
    ],
  },
  {
    id: "120",
    title: "Amala with Gbegeri and Ewedu and Beef",
    price: 1100,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706808551/Amala_with_gbegeri_ewedu_and_proteins_1300_with_extra_protein_1500_sukafy.jpg",
    categories: ["Swallow"],
    prep_time: "20 minutes",
    opening_time: "11:00 AM",
    slug: "sp119",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    extras: [
      {
        id: "1",
        title: "Extra Protein",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706808167/Screenshot_from_2024-02-01_18-22-05_pga5sz.png",
        categories: ["Drinks"],
        prep_time: "20 minutes",
        opening_time: "11:00 AM",
        slug: "sp120",
        vendor: "EatWithEesha",
      },
    ],
  },
  {
    id: "121",
    title: "Ewa agoyin (beans) with plantain and beef ",
    price: 1100,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706867920/Screenshot_from_2024-02-02_10-57-18_vk4hgo.png",
    categories: ["Beans"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp121",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "122",
    title: "Ewa agoyin (beans) with plantain and assorted ",
    price: 1100,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706867920/Screenshot_from_2024-02-02_10-57-18_vk4hgo.png",
    categories: ["Beans"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp122",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "123",
    title: "Pounded Yam with egusi soup and beef",
    price: 800,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701212668/photo_5967755370602545231_y_ard2qd.jpg",
    categories: ["Swallow"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp123",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "124",
    title: "Pounded Yam with egusi soup and ponmo",
    price: 800,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701212668/photo_5967755370602545231_y_ard2qd.jpg",
    categories: ["Swallow"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp124",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "125",
    title: "Pounded Yam with egusi soup and assorted",
    price: 800,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701212668/photo_5967755370602545231_y_ard2qd.jpg",
    categories: ["Swallow"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp125",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  {
    id: "126",
    title: "Amala with Egusi Soup and beef",
    price: 1100,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701210418/-5967755370602545238_121_ruwgxn.jpg",
    categories: ["Swallow"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp126",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    extras: [
      {
        id: "1",
        title: "Extra Protein",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706808167/Screenshot_from_2024-02-01_18-22-05_pga5sz.png",
        categories: ["Drinks"],
        prep_time: "20 minutes",
        opening_time: "11:00 AM",
        slug: "sp126",
        vendor: "EatWithEesha",
      },
    ],
  },
  {
    id: "127",
    title: "Amala with Ogbono Soup and Assorted",
    price: 1100,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1707066542/Amala_with_ogbono_soup_with_assorted_1100_ocif4w.jpg",
    categories: ["Swallow"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp127",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    extras: [
      {
        id: "1",
        title: "Extra Protein",
        price: 200,
        imageURL:
          "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1706808167/Screenshot_from_2024-02-01_18-22-05_pga5sz.png",
        categories: ["Drinks"],
        prep_time: "20 minutes",
        opening_time: "11:00 AM",
        slug: "sp127",
        vendor: "EatWithEesha",
      },
    ],
  },
  {
    id: "128",
    title: "Pounded yam with egusi soup and Chicken",
    price: 1650,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701212668/photo_5967755370602545231_y_ard2qd.jpg",
    categories: ["Swallow"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp128",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],

    // discount: 0.5,
  },
  {
    id: "129",
    title: "Amala with Ewedu and Gbegiri and Chicken",
    price: 1550,
    imageURL:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701210418/-5967755370602545238_121_ruwgxn.jpg",
    categories: ["Swallow"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp129",
    vendor: "EatWithEesha",
    openingDays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
  // previous
  // {
  //   id: "pro15",
  //   title: "Chicken Alfredo Pasta",
  //   prep_time: "35 minutes",
  //   opening_time: "12:00 PM",
  //   categories: ["Main Course", "Pasta"],
  //   price: 18,
  //   slug: "sp9",
  //   imageURL: "/chicken_alfredo_pasta.jpg",
  //   vendor: "Vendor C",
  //   discount: 0.2,
  //   extras: [
  //     {
  //       id: "pro16",
  //       title: "Caesar Salad",
  //       prep_time: "10 minutes",
  //       opening_time: "12:15 PM",
  //       slug: "sp15",
  //       categories: ["Salad"],
  //       price: 6,
  //       imageURL: "/caesar_salad.jpg",
  //       vendor: "Vendor C",
  //     },
  //     {
  //       id: "pro17",
  //       title: "Garlic Breadsticks",
  //       prep_time: "12 minutes",
  //       opening_time: "12:30 PM",
  //       categories: ["Addon"],
  //       slug: "sp10",
  //       price: 5,
  //       imageURL: "/garlic_breadsticks.jpg",
  //       vendor: "Vendor C",
  //     },
  //   ],
  // },
];
export interface DataItem {
  _id?: number;
  tag?: string;
  link?: string;
  image?: string;
  bigImg?: string;
  foodText?: string;
  map?: string;
  foodImg?: string;
  bike?: string;
  title?: string;
}

export interface Category {
  [key: string]: DataItem[];
}

export const Data = [
  {
    _id: 1,
    tag: "Food",
    bigImg: "/images/food.png",
    bike: "/images/Frame 2610175.png",
    foodImg: "/images/Frame 2610173 (1).png",
    foodText:
      " Order from your favorite restaurant and get your meal delivered in minutes.",
    map: "/images/map.png",
  },
  {
    _id: 2,
    tag: "Moving",
    bigImg: "/images/moving.png",
    bike: "/images/Frame 2610192.png",
    foodImg: "/images/Frame 2610173.png",
    foodText:
      "Moving to a new building? No worries, courier is here to help you convey your properties.",
    map: "/images/map.png",
  },
  {
    _id: 3,
    tag: "Laundry",
    bigImg: "/images/laundry.png",
    bike: "/images/Frame 2610175.png",
    foodImg: "/images/Frame 2610173 (1).png",
    foodText:
      " Get your clothes washed and delivered to your door step within an hour.",
    map: "/images/Frame 2610169.png",
  },
  {
    _id: 4,
    tag: "Cleaning",
    bigImg: "/images/laundry.png",
    bike: "/images/Frame 2610175.png",
    foodImg: "/images/Frame 2610173 (1).png",
    foodText:
      " Order from your favorite restaurant and get your meal delivered in minutes.",
    map: "/images/map.png",
  },
  {
    _id: 5,
    tag: "Groceries",
    bigImg: "/images/food.png",
    bike: "/images/Frame 2610175.png",
    foodImg: "/images/Frame 2610173 (1).png",
    foodText:
      "Book a barber for home service to get a nice haircut at your own pace.",
    map: "/images/Frame 2610169 (1).png",
  },
];

export const TopResturant: Category[] = [
  {
    TopResturantNearYou: [
      {
        title: "Top Resturant Near you",
      },
      {
        tag: "Food",
        link: "/",
        image: "/images/resturant.png",
        _id: 2,
      },
      {
        tag: "Food",
        link: "/",
        image: "/images/Rectangle 248 (4).png",
        _id: 3,
      },
      {
        tag: "Food",
        link: "/",
        image: "/images/Rectangle 248 (2).png",
        _id: 4,
      },
      {
        tag: "Food",
        link: "/",
        image: "/images/Rectangle 248 (3).png",
        _id: 5,
      },
    ],
  },
  {
    TopMovingNearYou: [
      {
        title: "Moving Near You",
      },
      {
        tag: "Moving",
        link: "/",
        image: "/images/Rectangle 248 (8).png",
        _id: 7,
      },
      {
        tag: "Moving",
        link: "/",
        image: "/images/Rectangle 248 (7).png",
        _id: 8,
      },
      {
        tag: "Moving",
        link: "/",
        image: "/images/Rectangle 248 (6).png",
        _id: 9,
      },
      {
        tag: "Moving",
        link: "/",
        image: "/images/Rectangle 248 (5).png",
        _id: 10,
      },
    ],
  },
  {
    TopLaundryNearYou: [
      {
        title: "Laundry Near You",
      },
      {
        tag: "Laundry",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 12,
      },
      {
        tag: "Laundry",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 13,
      },
      {
        tag: "Laundry",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 14,
      },
      {
        tag: "Laundry",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 15,
      },
    ],
  },
  {
    TopCleaningNearYou: [
      {
        title: "Cleaning Near You",
      },
      {
        tag: "Cleaning",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 17,
      },
      {
        tag: "Cleaning",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 18,
      },
      {
        tag: "Cleaning",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 19,
      },
      {
        tag: "Cleaning",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 20,
      },
    ],
  },
  {
    TopGroceriesNearYou: [
      {
        title: "Groceries Near You",
      },
      {
        tag: "Groceries",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 22,
      },
      {
        tag: "Groceries",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 23,
      },
      {
        tag: "Groceries",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 24,
      },
      {
        tag: "Groceries",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 25,
      },
    ],
  },
];

export interface ProductServiceVendorType {
  _id?: number;
  tag?: string;
  link?: string;
  image?: string;
  bigImg?: string;
  foodText?: string;
  map?: string;
  foodImg?: string;
  bike?: string;
  title?: string;
}

export const ProductServiceVendorData: ProductServiceVendorType[] = [
  {
    _id: 1,
    tag: "Food Vendors",
    bigImg: "/images/food.png",
    bike: "/images/Frame 2610175.png",
    foodImg: "/images/Frame 2610173 (1).png",
    foodText: " We are here to serve you better",
    map: "/images/map.png",
  },
];

export interface FoodTopResturantType {
  _id?: number;
  tag?: string;
  title?: string;
  image?: string;
  smallTitle?: string;
  starIcon?: IconType;
  rating?: string;
  reviewsText?: string;
  reviewsNum?: string;
  locationIcon?: IconType;
  locationText?: string;
  timeNum?: string;
  vistLink?: string;
  arrowIcon?: IconType;
}

export interface OtherFoodResturantType {
  _id?: number;
  tag?: string;
  title?: string;
  image?: string;
  smallTitle?: string;
  starIcon?: IconType;
  rating?: string;
  reviewsText?: string;
  reviewsNum?: string;
  locationIcon?: IconType;
  locationText?: string;
  timeNum?: string;
  openTime?: string;
  vistLink?: string;
  arrowIcon?: IconType;
}

import { GrLocation } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";

export const FoodTopResturant: FoodTopResturantType[] = [
  {
    title: "Top Restaurant Near You",
  },
  {
    _id: 381753,
    tag: "Food Vendors",
    image: "/images/Rectangle 248 (16).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 231134,
    tag: "Food Vendors",
    image: "/images/Rectangle 248 (13).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 945332,
    tag: "Food Vendors",
    image: "/images/Rectangle 248 (14).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 127664,
    tag: "Food Vendors",
    image: "/images/Rectangle 248 (15).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },
];

export const OtherFoodResturant: OtherFoodResturantType[] = [
  {
    _id: 387653,
    tag: "Food Vendors",
    image: "/images/Rectangle 248 (9).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 231196,
    tag: "Food Vendors",
    image: "/images/Rectangle 248 (9).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 225332,
    tag: "Food Vendors",
    image: "/images/Rectangle 248 (9).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 497664,
    tag: "Food Vendors",
    image: "/images/Rectangle 248 (9).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },
];
export const MobileOtherFoodResturant: OtherFoodResturantType[] = [
  {
    _id: 387653,
    tag: "Food Vendors",
    image: "/images/Rectangle 248 (16).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    openTime: "Closed",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 231196,
    tag: "Food Vendors",
    image: "/images/Rectangle 248 (13).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    openTime: "Open",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 225332,
    tag: "Food Vendors",
    image: "/images/Rectangle 248 (14).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    openTime: "closed",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 497664,
    tag: "Food Vendors",
    image: "/images/Rectangle 248 (15).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    openTime: "Open",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },
];

// ====== Laundry data ====== //
export interface ProductServiceLaundryType {
  _id?: number;
  tag?: string;
  link?: string;
  image?: string;
  bigImg?: string;
  foodText?: string;
  map?: string;
  foodImg?: string;
  bike?: string;
  title?: string;
}

export const ProductServiceLaundryData: ProductServiceLaundryType[] = [
  {
    _id: 1,
    tag: "Laundry",
    bigImg: "/images/laundry.png",
    bike: "/images/Frame 2610175.png",
    foodImg: "/images/image 157.png",
    foodText:
      "Get your clothes washed and delivered to your door step within an hour.",
    map: "/images/Frame 2610169.png",
  },
];

export interface TopLaundryType {
  _id?: number;
  tag?: string;
  title?: string;
  image?: string;
  smallTitle?: string;
  starIcon?: IconType;
  rating?: string;
  reviewsText?: string;
  reviewsNum?: string;
  locationIcon?: IconType;
  locationText?: string;
  timeNum?: string;
  vistLink?: string;
  arrowIcon?: IconType;
}

export interface OtherLaundryType {
  _id?: number;
  tag?: string;
  title?: string;
  image?: string;
  smallTitle?: string;
  starIcon?: IconType;
  rating?: string;
  reviewsText?: string;
  reviewsNum?: string;
  locationIcon?: IconType;
  locationText?: string;
  timeNum?: string;
  openTime?: string;
  vistLink?: string;
  arrowIcon?: IconType;
}

export const TopLaundry: TopLaundryType[] = [
  {
    title: "Top Laundry Near You",
  },
  {
    _id: 381753,
    tag: "Laundry",
    image: "/images/Rectangle 248 (16).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 231134,
    tag: "Laundry",
    image: "/images/Rectangle 248 (13).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 945332,
    tag: "Laundry",
    image: "/images/Rectangle 248 (14).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 127664,
    tag: "Laundry",
    image: "/images/Rectangle 248 (15).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },
];

export const OtherLaundryRoom: OtherLaundryType[] = [
  {
    _id: 387653,
    tag: "Laundry",
    image: "/images/Rectangle 248 (9).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 231196,
    tag: "Laundry",
    image: "/images/Rectangle 248 (9).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 225332,
    tag: "Laundry",
    image: "/images/Rectangle 248 (9).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 497664,
    tag: "Laundry",
    image: "/images/Rectangle 248 (9).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },
];
export const MobileOtherLaundry: OtherLaundryType[] = [
  {
    _id: 387653,
    tag: "Laundry",
    image: "/images/Rectangle 248 (16).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    openTime: "Closed",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 231196,
    tag: "Laundry",
    image: "/images/Rectangle 248 (13).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    openTime: "Open",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 225332,
    tag: "Laundry",
    image: "/images/Rectangle 248 (14).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    openTime: "closed",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 497664,
    tag: "Laundry",
    image: "/images/Rectangle 248 (15).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    openTime: "Open",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },
];


// ====== FoodDelivery and Moving Data ====== //
export interface ProductServiceDeliveryAndMovingType {
  _id?: number;
  tag1?: string;
  tag2?: string;
  link?: string;
  image?: string;
  bigImg?: string;
  foodText?: string;
  map?: string;
  foodImg?: string;
  bike?: string;
  title?: string;
}

export const ProductServiceDeliveryAndMovingData: ProductServiceDeliveryAndMovingType[] =
  [
    {
      _id: 1,
      tag1: "Food Delivery",
      tag2: "Moving",
      bigImg: "/images/moving.png",
      bike: "/images/Frame 2610192.png",
      foodImg: "/images/Frame 2610173.png",
      foodText:
        "Get your clothes washed and delivered to your door step within an hour.",
        map: "/images/map.png",
    },
  ];

export interface TopDeliveryAndMovingType {
  _id?: number;
  tag1?: string;
  tag2?: string;
  title?: string;
  image?: string;
  smallTitle?: string;
  starIcon?: IconType;
  rating?: string;
  reviewsText?: string;
  reviewsNum?: string;
  locationIcon?: IconType;
  locationText?: string;
  timeNum?: string;
  vistLink?: string;
  arrowIcon?: IconType;
}

export interface OtherDeliveryAndMovingType {
  _id?: number;
  tag1?: string;
  tag2?: string;
  title?: string;
  image?: string;
  smallTitle?: string;
  starIcon?: IconType;
  rating?: string;
  reviewsText?: string;
  reviewsNum?: string;
  locationIcon?: IconType;
  locationText?: string;
  timeNum?: string;
  openTime?: string;
  vistLink?: string;
  arrowIcon?: IconType;
}

export const TopDeliveryAndMoving: TopDeliveryAndMovingType[] = [
  {
    title: "Top Moving Near You",
  },
  {
    _id: 381753,
        tag1: "Food Delivery",
    tag2: "Moving",
    image: "/images/Rectangle 248 (16).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 231134,
        tag1: "Food Delivery",
    tag2: "Moving",
    image: "/images/Rectangle 248 (13).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 945332,
        tag1: "Food Delivery",
    tag2: "Moving",
    image: "/images/Rectangle 248 (14).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 127664,
        tag1: "Food Delivery",
    tag2: "Moving",
    image: "/images/Rectangle 248 (15).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },
];

export const OtherDeliveryAndMoving: OtherDeliveryAndMovingType[] = [
  {
    _id: 387653,
        tag1: "Food Delivery",
    tag2: "Moving",
    image: "/images/Rectangle 248 (9).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 231196,
        tag1: "Food Delivery",
    tag2: "Moving",
    image: "/images/Rectangle 248 (9).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 225332,
        tag1: "Food Delivery",
    tag2: "Moving",
    image: "/images/Rectangle 248 (9).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 497664,
        tag1: "Food Delivery",
    tag2: "Moving",
    image: "/images/Rectangle 248 (9).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },
];
export const MobileOtherDeliveryAndMoving: OtherDeliveryAndMovingType[] = [
  {
    _id: 387653,
        tag1: "Food Delivery",
    tag2: "Moving",
    image: "/images/Rectangle 248 (16).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    openTime: "Closed",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 231196,
        tag1: "Food Delivery",
    tag2: "Moving",
    image: "/images/Rectangle 248 (13).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    openTime: "Open",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 225332,
        tag1: "Food Delivery",
    tag2: "Moving",
    image: "/images/Rectangle 248 (14).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    openTime: "closed",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },

  {
    _id: 497664,
        tag1: "Food Delivery",
    tag2: "Moving",
    image: "/images/Rectangle 248 (15).png",
    smallTitle: "WE HAVE MOVED",
    starIcon: FaStar,
    rating: "4.5",
    reviewsText: "Reviews",
    reviewsNum: "100",
    locationIcon: GrLocation,
    locationText: "Ikeja, Lagos",
    timeNum: "9am - 10pm",
    openTime: "Open",
    vistLink: "/",
    arrowIcon: FaArrowRightLong,
  },
];

import { IoMdStopwatch } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { LuPhone } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";

export const GroceriesVendor = [
  {
    title: "Most Sold",
    items: [
      {
        id: "123",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "456",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "789",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "987",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "917",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "957",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "937",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "977",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
    ],
  },
];

export const MinsGroceriesData = [
  {
    title: "30 minutes meal",
    items: [
      {
        id: "1111",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "2222",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "3333",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "4444",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "5555",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "6677",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "9099",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "2033",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
    ],
  },
];

export const FreeDeliveryGroceriesData = [
  {
    title: "Free Delivery",
    items: [
      {
        id: "2311",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "2211",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "3241",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "5476",
        img: "/images/Rectangle 248 (11).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
    ],
  },
];

export const FoodVendor = [
  {
    title: "Most Sold",
    items: [
      {
        id: "123",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "456",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "789",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "987",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "917",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "957",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "937",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "977",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
    ],
  },
];

export const MinsMealsData = [
  {
    title: "30 minutes meal",
    items: [
      {
        id: "1111",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "2222",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "3333",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "4444",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "5555",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "6677",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "9099",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "2033",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
    ],
  },
];

export const FreeDeliveryData = [
  {
    title: "Free Delivery",
    items: [
      {
        id: "2311",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "2211",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "3241",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "5476",
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
    ],
  },
];

export const FirstSimilarMealData = [
  {
    title: "Similar Meal",
    items: [
      {
        id: "654",
        img: "/images/Rectangle 249 (2).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "20 liters remaining",
        prizeText: "$50",
        prizeIcon: FaBagShopping,
      },
      {
        id: "321",
        img: "/images/Rectangle 249 (2).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "20 liters remaining",
        prizeText: "$50",
        prizeIcon: FaBagShopping,
      },
      {
        id: "234",
        img: "/images/Rectangle 249 (2).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "20 liters remaining",
        prizeText: "$50",
        prizeIcon: FaBagShopping,
      },
      {
        id: "345",
        img: "/images/Rectangle 249 (2).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "20 liters remaining",
        prizeText: "$50",
        prizeIcon: FaBagShopping,
      },
    ],
  },
];

export const SecondSimilarMealData = [
  {
    items: [
      {
        id: "334",
        img: "/images/Rectangle 249 (2).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "20 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        id: "321",
        img: "/images/Rectangle 249 (2).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "20 liters remaining",
        prizeText: "$50",
        prizeIcon: FaBagShopping,
      },
      {
        id: "134",
        img: "/images/Rectangle 249 (2).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "20 liters remaining",
        prizeText: "$50",
        prizeIcon: FaBagShopping,
      },
      {
        id: "245",
        img: "/images/Rectangle 249 (2).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "20 liters remaining",
        prizeText: "$50",
        prizeIcon: FaBagShopping,
      },
    ],
  },
];

export const DiscountSale = [
  {
    img: "/images/component 113 (2).png",
    alt: "hot jollof Rice",
  },
  {
    img: "/images/component 113 (2).png",
    alt: "hot jollof Rice",
  },
  {
    img: "/images/component 113 (2).png",
    alt: "hot jollof Rice",
  },
];
export const FoodDiscountSale = [
  {
    img: "/images/Component 110.png",
    alt: "hot jollof Rice",
  },
  {
    img: "/images/Component 110.png",
    alt: "hot jollof Rice",
  },
  {
    img: "/images/Component 110.png",
    alt: "hot jollof Rice",
  },
];

export interface OrderedFoodDataType {
  _id: number;
  foodImg?: string;
  foodTitle?: string;
  foodAmount?: string;
  ratingIcon?: IconType;
  ratingNum?: string;
  timmIcon?: IconType;
  timeText?: string;
  deliveryText?: string;
  amountInUsd?: string;
  restaurantImg?: string;
  restaurantTitle?: string;
  restaurantRatingIcon?: IconType;
  restaurantRatingNum?: string;
  restPhoneIcon?: IconType;
  restaurantPhoneNum?: string;
}

export const FoodOrdered1: OrderedFoodDataType[] = [
  {
    _id: 1222344,
    foodImg: "/images/Frame 2610552.png",
    foodTitle: "Jollof Rice",
    foodAmount: "+3",
    ratingIcon: FaStar,
    ratingNum: "4.5",
    timmIcon: IoMdStopwatch,
    timeText: "30mins",
    deliveryText: "offer Delivery",
    amountInUsd: "$40,000",
  },
  {
    _id: 1344,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
  {
    _id: 1344,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
];

export const FoodOrdered2: OrderedFoodDataType[] = [
  {
    _id: 1221044,
    foodImg: "/images/Frame 2610552.png",
    foodTitle: "Jollof Rice",
    foodAmount: "+3",
    ratingIcon: FaStar,
    ratingNum: "4.5",
    timmIcon: IoMdStopwatch,
    timeText: "30mins",
    deliveryText: "offer Delivery",
    amountInUsd: "$40,000",
  },
  {
    _id: 1321,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
  {
    _id: 1321,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
];
export const FoodOrdered3: OrderedFoodDataType[] = [
  {
    _id: 1245344,
    foodImg: "/images/Frame 2610552.png",
    foodTitle: "Jollof Rice",
    foodAmount: "+3",
    ratingIcon: FaStar,
    ratingNum: "4.5",
    timmIcon: IoMdStopwatch,
    timeText: "30mins",
    deliveryText: "offer Delivery",
    amountInUsd: "$40,000",
  },

  {
    _id: 1432,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
  {
    _id: 1432,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
];

export const FoodOrdered4: OrderedFoodDataType[] = [
  {
    _id: 1222394,
    foodImg: "/images/Frame 2610552.png",
    foodTitle: "Jollof Rice",
    foodAmount: "+3",
    ratingIcon: FaStar,
    ratingNum: "4.5",
    timmIcon: IoMdStopwatch,
    timeText: "30mins",
    deliveryText: "offer Delivery",
    amountInUsd: "$40,000",
  },

  {
    _id: 1309,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
  {
    _id: 1309,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
];

export const FoodOrdered5: OrderedFoodDataType[] = [
  {
    _id: 1275344,
    foodImg: "/images/Frame 2610552.png",
    foodTitle: "Jollof Rice",
    foodAmount: "+3",
    ratingIcon: FaStar,
    ratingNum: "4.5",
    timmIcon: IoMdStopwatch,
    timeText: "30mins",
    deliveryText: "offer Delivery",
    amountInUsd: "$40,000",
  },

  {
    _id: 1021,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
  {
    _id: 1021,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
];
export const FoodOrdered6: OrderedFoodDataType[] = [
  {
    _id: 1962344,
    foodImg: "/images/Frame 2610552.png",
    foodTitle: "Jollof Rice",
    foodAmount: "+3",
    ratingIcon: FaStar,
    ratingNum: "4.5",
    timmIcon: IoMdStopwatch,
    timeText: "30mins",
    deliveryText: "offer Delivery",
    amountInUsd: "$40,000",
  },

  {
    _id: 1021,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
  {
    _id: 1332,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
];
export const FoodOrdered7: OrderedFoodDataType[] = [
  {
    _id: 1902344,
    foodImg: "/images/Frame 2610552.png",
    foodTitle: "Jollof Rice",
    foodAmount: "+3",
    ratingIcon: FaStar,
    ratingNum: "4.5",
    timmIcon: IoMdStopwatch,
    timeText: "30mins",
    deliveryText: "offer Delivery",
    amountInUsd: "$40,000",
  },
  {
    _id: 9045,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
  {
    _id: 9045,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
];

export interface OrderedServicesDataType {
  _id: number;
  foodImg?: string;
  foodTitle?: string;
  foodAmount?: string;
  ratingIcon?: IconType;
  ratingNum?: string;
  timmIcon?: IconType;
  timeText?: string;
  deliveryText?: string;
  amountInUsd?: string;
  restaurantImg?: string;
  restaurantTitle?: string;
  restaurantRatingIcon?: IconType;
  restaurantRatingNum?: string;
  restPhoneIcon?: IconType;
  restaurantPhoneNum?: string;
  ownerImg?: string;
  ownerName?: string;
  ownerPhoneIcon?: IconType;
  ownersPhoneNum?: string;
}

export const OrderedServicesData1: OrderedServicesDataType[] = [
  {
    _id: 1222344,
    foodImg: "/images/Frame 2610552.png",
    foodTitle: "Jollof Rice",
    foodAmount: "+3",
    ratingIcon: FaStar,
    ratingNum: "4.5",
    timmIcon: IoMdStopwatch,
    timeText: "30mins",
    deliveryText: "offer Delivery",
    amountInUsd: "$40,000",
  },
  {
    _id: 9015,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
  {
    _id: 1344,
    ownerImg: "/images/Rectangle 264 (1).png",
    ownerName: "James Peter",
    ownerPhoneIcon: LuPhone,
    ownersPhoneNum: "0903 414 5971",
  },
];
export const OrderedServicesData2: OrderedServicesDataType[] = [
  {
    _id: 1221044,
    foodImg: "/images/Frame 2610552.png",
    foodTitle: "Jollof Rice",
    foodAmount: "+3",
    ratingIcon: FaStar,
    ratingNum: "4.5",
    timmIcon: IoMdStopwatch,
    timeText: "30mins",
    deliveryText: "offer Delivery",
    amountInUsd: "$40,000",
  },
  {
    _id: 3245,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
  {
    _id: 1321,
    ownerImg: "/images/Rectangle 264 (1).png",
    ownerName: "James Peter",
    ownerPhoneIcon: LuPhone,
    ownersPhoneNum: "0903 414 5971",
  },
];
export const OrderedServicesData3: OrderedServicesDataType[] = [
  {
    _id: 1245344,
    foodImg: "/images/Frame 2610552.png",
    foodTitle: "Jollof Rice",
    foodAmount: "+3",
    ratingIcon: FaStar,
    ratingNum: "4.5",
    timmIcon: IoMdStopwatch,
    timeText: "30mins",
    deliveryText: "offer Delivery",
    amountInUsd: "$40,000",
  },
  {
    _id: 9215,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
  {
    _id: 1432,
    ownerImg: "/images/Rectangle 264 (1).png",
    ownerName: "James Peter",
    ownerPhoneIcon: LuPhone,
    ownersPhoneNum: "0903 414 5971",
  },
];
export const OrderedServicesData4: OrderedServicesDataType[] = [
  {
    _id: 1222394,
    foodImg: "/images/Frame 2610552.png",
    foodTitle: "Jollof Rice",
    foodAmount: "+3",
    ratingIcon: FaStar,
    ratingNum: "4.5",
    timmIcon: IoMdStopwatch,
    timeText: "30mins",
    deliveryText: "offer Delivery",
    amountInUsd: "$40,000",
  },

  {
    _id: 9033,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
  {
    _id: 1309,
    ownerImg: "/images/Rectangle 264 (1).png",
    ownerName: "James Peter",
    ownerPhoneIcon: LuPhone,
    ownersPhoneNum: "0903 414 5971",
  },
];
export const OrderedServicesData5: OrderedServicesDataType[] = [
  {
    _id: 1275344,
    foodImg: "/images/Frame 2610552.png",
    foodTitle: "Jollof Rice",
    foodAmount: "+3",
    ratingIcon: FaStar,
    ratingNum: "4.5",
    timmIcon: IoMdStopwatch,
    timeText: "30mins",
    deliveryText: "offer Delivery",
    amountInUsd: "$40,000",
  },

  {
    _id: 1765,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },
  {
    _id: 1021,
    ownerImg: "/images/Rectangle 264 (1).png",
    ownerName: "James Peter",
    ownerPhoneIcon: LuPhone,
    ownersPhoneNum: "0903 414 5971",
  },
];
export const OrderedServicesData6: OrderedServicesDataType[] = [
  {
    _id: 1962344,
    foodImg: "/images/Frame 2610552.png",
    foodTitle: "Jollof Rice",
    foodAmount: "+3",
    ratingIcon: FaStar,
    ratingNum: "4.5",
    timmIcon: IoMdStopwatch,
    timeText: "30mins",
    deliveryText: "offer Delivery",
    amountInUsd: "$40,000",
  },
  {
    _id: 9332,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },

  {
    _id: 1332,
    ownerImg: "/images/Rectangle 264 (1).png",
    ownerName: "James Peter",
    ownerPhoneIcon: LuPhone,
    ownersPhoneNum: "0903 414 5971",
  },
];
export const OrderedServicesData7: OrderedServicesDataType[] = [
  {
    _id: 1902344,
    foodImg: "/images/Frame 2610552.png",
    foodTitle: "Jollof Rice",
    foodAmount: "+3",
    ratingIcon: FaStar,
    ratingNum: "4.5",
    timmIcon: IoMdStopwatch,
    timeText: "30mins",
    deliveryText: "offer Delivery",
    amountInUsd: "$40,000",
  },
  {
    _id: 9010,
    restaurantImg: "/images/Rectangle 249 (3).png",
    restaurantTitle: "Madam Restaurant PLC",
    restaurantRatingIcon: FaStar,
    restaurantRatingNum: "4.5",
    restPhoneIcon: LuPhone,
    restaurantPhoneNum: "0903 414 5971",
  },

  {
    _id: 9045,
    ownerImg: "/images/Rectangle 264 (1).png",
    ownerName: "James Peter",
    ownerPhoneIcon: LuPhone,
    ownersPhoneNum: "0903 414 5971",
  },
];
export interface FavouriteFoodDataType {
  image: string;
  favIcon: IconType;
  favFoodName: string;
  favStar: IconType;
  favRateNum: string;
  favTimeIcon: IconType;
  favTime: string;
  favMoney: string;
  literAmount: string;
  favCartIcon: IconType;
}

export const FavouriteFoodData: FavouriteFoodDataType[] = [
  {
    image: "/images/Rectangle 248 (11).png",
    favIcon: CiHeart,
    favFoodName: "Fried Rice",
    favStar: FaStar,
    favRateNum: "4.5",
    favTimeIcon: IoMdStopwatch,
    favTime: "30mins",
    favMoney: "$50",
    literAmount: "20 Liters remaining",
    favCartIcon: FaBagShopping,
  },
  {
    image: "/images/Rectangle 249 (2).png",
    favIcon: CiHeart,
    favFoodName: "Fried Rice",
    favStar: FaStar,
    favRateNum: "4.5",
    favTimeIcon: IoMdStopwatch,
    favTime: "30mins",
    favMoney: "$50",
    literAmount: "20 Liters remaining",
    favCartIcon: FaBagShopping,
  },
  {
    image: "/images/Yamarita.jpg",
    favIcon: CiHeart,
    favFoodName: "Fried Rice",
    favStar: FaStar,
    favRateNum: "4.5",
    favTimeIcon: IoMdStopwatch,
    favTime: "30mins",
    favMoney: "$50",
    literAmount: "20 Liters remaining",
    favCartIcon: FaBagShopping,
  },
  {
    image: "/images/Chicken and chips.jpg",
    favIcon: CiHeart,
    favFoodName: "Fried Rice",
    favStar: FaStar,
    favRateNum: "4.5",
    favTimeIcon: IoMdStopwatch,
    favTime: "30mins",
    favMoney: "$50",
    literAmount: "20 Liters remaining",
    favCartIcon: FaBagShopping,
  },
  {
    image: "/images/Rectangle 249 (2).png",
    favIcon: CiHeart,
    favFoodName: "Fried Rice",
    favStar: FaStar,
    favRateNum: "4.5",
    favTimeIcon: IoMdStopwatch,
    favTime: "30mins",
    favMoney: "$50",
    literAmount: "20 Liters remaining",
    favCartIcon: FaBagShopping,
  },
  {
    image: "/images/Rectangle 248 (11).png",
    favIcon: CiHeart,
    favFoodName: "Fried Rice",
    favStar: FaStar,
    favRateNum: "4.5",
    favTimeIcon: IoMdStopwatch,
    favTime: "30mins",
    favMoney: "$50",
    literAmount: "20 Liters remaining",
    favCartIcon: FaBagShopping,
  },
];

export interface MessageDataType {
  messageImg: string;
  messageTitle: string;
  messageDes: string;
  viewOrderLink: string;
  viewOrderIcon: IconType;
}

export const MessageData: MessageDataType[] = [
  {
    messageImg: "/images/Frame 2610552.png",
    messageTitle: "Dear Kelvin",
    messageDes:
      "Your order has arrived! Sit back and relax as we prepare to deliver your items right to your doorstep. Get ready to enjoy your new purchases!",
    viewOrderLink: "View Order",
    viewOrderIcon: FaAngleRight,
  },
  {
    messageImg: "/images/Frame 2610552.png",
    messageTitle: "Dear Kelvin",
    messageDes:
      "Your order has arrived! Sit back and relax as we prepare to deliver your items right to your doorstep. Get ready to enjoy your new purchases!",
    viewOrderLink: "View Order",
    viewOrderIcon: FaAngleRight,
  },
  {
    messageImg: "/images/Frame 2610552.png",
    messageTitle: "Dear Kelvin",
    messageDes:
      "Your order has arrived! Sit back and relax as we prepare to deliver your items right to your doorstep. Get ready to enjoy your new purchases!",
    viewOrderLink: "View Order",
    viewOrderIcon: FaAngleRight,
  },
  {
    messageImg: "/images/Frame 2610552.png",
    messageTitle: "Dear Kelvin",
    messageDes:
      "Your order has arrived! Sit back and relax as we prepare to deliver your items right to your doorstep. Get ready to enjoy your new purchases!",
    viewOrderLink: "View Order",
    viewOrderIcon: FaAngleRight,
  },
  {
    messageImg: "/images/Frame 2610552.png",
    messageTitle: "Dear Kelvin",
    messageDes:
      "Your order has arrived! Sit back and relax as we prepare to deliver your items right to your doorstep. Get ready to enjoy your new purchases!",
    viewOrderLink: "View Order",
    viewOrderIcon: FaAngleRight,
  },
  {
    messageImg: "/images/Frame 2610552.png",
    messageTitle: "Dear Kelvin",
    messageDes:
      "Your order has arrived! Sit back and relax as we prepare to deliver your items right to your doorstep. Get ready to enjoy your new purchases!",
    viewOrderLink: "View Order",
    viewOrderIcon: FaAngleRight,
  },
];

export interface subscriptionPlansDataType {
  subImg: string;
  subType: string;
  subAmount: string;
  subItem: {
    tickIcon: IconType;
    subItemText: string;
  }[];
  subFeeText: string;
  ViewSubDetailsLink: string;
}

export const subscriptionPlansData: subscriptionPlansDataType[] = [
  {
    subImg: "/images/Rectangle 194.png",
    subType: "Weekly Plan",
    subAmount: "$40,000",
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "2 meal per week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Weekly delivery",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Standard plate",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Delivery",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/images/Rectangle 194.png",
    subType: "Weekly Plan",
    subAmount: "$40,000",
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "2 meal per week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Weekly delivery",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Standard plate",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Delivery",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/images/Rectangle 194.png",
    subType: "Weekly Plan",
    subAmount: "$40,000",
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "2 meal per week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Weekly delivery",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Standard plate",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Delivery",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/images/Rectangle 194.png",
    subType: "Weekly Plan",
    subAmount: "$40,000",
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "2 meal per week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Weekly delivery",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Standard plate",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Delivery",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/images/Rectangle 194.png",
    subType: "Weekly Plan",
    subAmount: "$40,000",
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "2 meal per week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Weekly delivery",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Standard plate",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Delivery",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/images/Rectangle 194.png",
    subType: "Weekly Plan",
    subAmount: "$40,000",
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "2 meal per week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Weekly delivery",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Standard plate",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Delivery",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
];
export interface GroomingSubscriptionPlansDataType {
  subImg: string;
  subType: string;
  subAmount: string;
  subItem: {
    tickIcon: IconType;
    subItemText: string;
  }[];
  subFeeText: string;
  ViewSubDetailsLink: string;
}

export const GroomingSubscriptionPlansData: GroomingSubscriptionPlansDataType[] =
  [
    {
      subImg: "/images/Rectangle 264.png",
      subType: "Weekly Plan",
      subAmount: "$40,000",
      subItem: [
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "2 meal per week",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Weekly delivery",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Standard plate",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Delivery",
        },
      ],
      subFeeText: "Service Fee:",
      ViewSubDetailsLink: "View",
    },
    {
      subImg: "/images/Rectangle 264.png",
      subType: "Weekly Plan",
      subAmount: "$40,000",
      subItem: [
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "2 meal per week",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Weekly delivery",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Standard plate",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Delivery",
        },
      ],
      subFeeText: "Service Fee:",
      ViewSubDetailsLink: "View",
    },
    {
      subImg: "/images/Rectangle 264.png",
      subType: "Weekly Plan",
      subAmount: "$40,000",
      subItem: [
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "2 meal per week",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Weekly delivery",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Standard plate",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Delivery",
        },
      ],
      subFeeText: "Service Fee:",
      ViewSubDetailsLink: "View",
    },
    {
      subImg: "/images/Rectangle 264.png",
      subType: "Weekly Plan",
      subAmount: "$40,000",
      subItem: [
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "2 meal per week",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Weekly delivery",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Standard plate",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Delivery",
        },
      ],
      subFeeText: "Service Fee:",
      ViewSubDetailsLink: "View",
    },
    {
      subImg: "/images/Rectangle 264.png",
      subType: "Weekly Plan",
      subAmount: "$40,000",
      subItem: [
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "2 meal per week",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Weekly delivery",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Standard plate",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Delivery",
        },
      ],
      subFeeText: "Service Fee:",
      ViewSubDetailsLink: "View",
    },
    {
      subImg: "/images/Rectangle 264.png",
      subType: "Weekly Plan",
      subAmount: "$40,000",
      subItem: [
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "2 meal per week",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Weekly delivery",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Standard plate",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Delivery",
        },
      ],
      subFeeText: "Service Fee:",
      ViewSubDetailsLink: "View",
    },
  ];
export interface LaundrySubscriptionPlansDataType {
  subImg: string;
  subType: string;
  subAmount: string;
  subItem: {
    tickIcon: IconType;
    subItemText: string;
  }[];
  subFeeText: string;
  ViewSubDetailsLink: string;
}

export const LaundrySubscriptionPlansData: LaundrySubscriptionPlansDataType[] =
  [
    {
      subImg: "/images/to clean.png",
      subType: "Weekly Plan",
      subAmount: "$40,000",
      subItem: [
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "2 meal per week",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Weekly delivery",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Standard plate",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Delivery",
        },
      ],
      subFeeText: "Service Fee:",
      ViewSubDetailsLink: "View",
    },
    {
      subImg: "/images/to clean.png",
      subType: "Weekly Plan",
      subAmount: "$40,000",
      subItem: [
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "2 meal per week",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Weekly delivery",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Standard plate",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Delivery",
        },
      ],
      subFeeText: "Service Fee:",
      ViewSubDetailsLink: "View",
    },
    {
      subImg: "/images/to clean.png",
      subType: "Weekly Plan",
      subAmount: "$40,000",
      subItem: [
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "2 meal per week",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Weekly delivery",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Standard plate",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Delivery",
        },
      ],
      subFeeText: "Service Fee:",
      ViewSubDetailsLink: "View",
    },
    {
      subImg: "/images/to clean.png",
      subType: "Weekly Plan",
      subAmount: "$40,000",
      subItem: [
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "2 meal per week",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Weekly delivery",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Standard plate",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Delivery",
        },
      ],
      subFeeText: "Service Fee:",
      ViewSubDetailsLink: "View",
    },
    {
      subImg: "/images/to clean.png",
      subType: "Weekly Plan",
      subAmount: "$40,000",
      subItem: [
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "2 meal per week",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Weekly delivery",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Standard plate",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Delivery",
        },
      ],
      subFeeText: "Service Fee:",
      ViewSubDetailsLink: "View",
    },
    {
      subImg: "/images/to clean.png",
      subType: "Weekly Plan",
      subAmount: "$40,000",
      subItem: [
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "2 meal per week",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Weekly delivery",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Standard plate",
        },
        {
          tickIcon: IoCheckmarkSharp,
          subItemText: "Delivery",
        },
      ],
      subFeeText: "Service Fee:",
      ViewSubDetailsLink: "View",
    },
  ];

export interface MobileRestaurantFoodType {
  id: string;
  img: string;
  prizeLink: string;
  favoriteIcon: IconType;
  smallTitle: string;
  starIcon: IconType;
  rating: string;
  timeIcon: IconType;
  timeText: string;
  remenderText: string;
  prizeText: string;
  prizeIcon: IconType;
}

export const MobileRestaurantFood: MobileRestaurantFoodType[] = [
  {
    id: "123",
    img: "/images/Rectangle 248 (12).png",
    prizeLink: "/cart",
    favoriteIcon: MdFavoriteBorder,
    smallTitle: "Fried Rice",
    starIcon: FaStar,
    rating: "4.5",
    timeIcon: IoMdStopwatch,
    timeText: "30mins",
    remenderText: "10 liters remaining",
    prizeText: "$40",
    prizeIcon: FaBagShopping,
  },
  {
    id: "456",
    img: "/images/Rectangle 248 (12).png",
    prizeLink: "/cart",
    favoriteIcon: MdFavoriteBorder,
    smallTitle: "Fried Rice",
    starIcon: FaStar,
    rating: "4.5",
    timeIcon: IoMdStopwatch,
    timeText: "30mins",
    remenderText: "10 liters remaining",
    prizeText: "$40",
    prizeIcon: FaBagShopping,
  },
  {
    id: "789",
    img: "/images/Rectangle 248 (12).png",
    prizeLink: "/cart",
    favoriteIcon: MdFavoriteBorder,
    smallTitle: "Fried Rice",
    starIcon: FaStar,
    rating: "4.5",
    timeIcon: IoMdStopwatch,
    timeText: "30mins",
    remenderText: "10 liters remaining",
    prizeText: "$40",
    prizeIcon: FaBagShopping,
  },
];

export const RestaurantFood: MobileRestaurantFoodType[] = [
  {
    id: "123",
    img: "/images/Rectangle 248 (11).png",
    prizeLink: "/cart",
    favoriteIcon: MdFavoriteBorder,
    smallTitle: "Fried Rice",
    starIcon: FaStar,
    rating: "4.5",
    timeIcon: IoMdStopwatch,
    timeText: "30mins",
    remenderText: "20 liters remaining",
    prizeText: "$40",
    prizeIcon: FaBagShopping,
  },
  {
    id: "456",
    img: "/images/Rectangle 248 (11).png",
    prizeLink: "/cart",
    favoriteIcon: MdFavoriteBorder,
    smallTitle: "Fried Rice",
    starIcon: FaStar,
    rating: "4.5",
    timeIcon: IoMdStopwatch,
    timeText: "30mins",
    remenderText: "20 liters remaining",
    prizeText: "$40",
    prizeIcon: FaBagShopping,
  },
  {
    id: "789",
    img: "/images/Rectangle 248 (11).png",
    prizeLink: "/cart",
    favoriteIcon: MdFavoriteBorder,
    smallTitle: "Fried Rice",
    starIcon: FaStar,
    rating: "4.5",
    timeIcon: IoMdStopwatch,
    timeText: "30mins",
    remenderText: "20 liters remaining",
    prizeText: "$40",
    prizeIcon: FaBagShopping,
  },
];

export const RestDiscountSale = [
  {
    img: "/images/component 112.png",
    alt: "hot jollof Rice",
  },
  {
    img: "/images/component 112.png",
    alt: "hot jollof Rice",
  },
  {
    img: "/images/component 112.png",
    alt: "hot jollof Rice",
  },
];
