import washer from "../assets/Truck.svg";
import truck from "../assets/washing-machine.svg";

export const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export const variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0 },
};

export const spring = {
  type: "spring",
  stiffness: 500,
  damping: 50,
  duration: 0.7,
};

export const feedbacks = [
  {
    id: 1,
    author: "Khalifah Abdul",
    text: "I am so impressed with Dibo Ruwa's laundry service! The website was easy to use and intuitive, and the free pick-up and delivery made my life so much easier. My clothes came back clean and fresh, and I will definitely be using this service again.",
  },
  {
    id: 2,
    author: "Adetohun Blessing",
    text: "I was hesitant to try an online laundry service, but Dibo Ruwa exceeded my expectations! The convenience of free pick-up and delivery was a game-changer, and my clothes came back looking like new. I highly recommend this service.",
  },
  {
    id: 3,
    author: "Engr. Yusuf Tahir",
    text: "I cannot say enough good things about Dibo Ruwa's laundry service. The website is easy to use, and the free pick-up and delivery make it so convenient. Plus, the quality of the laundry is fantastic. I will definitely be recommending this service to my friends and family.",
  },
  {
    id: 4,
    author: "Mariam Dankaka",
    text: "Dibo Ruwa is a game-changer for busy students like me. I don't have to spend hours doing laundry anymore, and I can focus on my studies and social life. The customer service is exceptional. I appreciate their dedication to providing a hassle-free laundry experience.",
  },
  
];

export const benefits = [
  {
    imgSrc: truck,
    imgAlt: "Image 1",
    title: "Quality Cleaning",
    subtitle: "Our laundry service uses only high-quality, eco-friendly detergents and follows laundry practices that ensure the clothes are cleaned to the highest standard",
  },
  {
    imgSrc: washer,
    imgAlt: "Image 2",
    title: "Fast Delivery",
    subtitle: "Our fast delivery is a highly beneficial feature of our laundry service, as it saves you time and meets your urgent needs.",
  },
];
