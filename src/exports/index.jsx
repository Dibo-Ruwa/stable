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
    author: "John Doe",
    text: "Proin eget placerat libero, vel pulvinar enim. Vivamus ac justo sed felis bibendum mollis eu ut est.",
  },
  {
    id: 2,
    author: "Jane Smith",
    text: "Proin eget placerat libero, vel pulvinar enim. Vivamus ac justo sed felis bibendum mollis eu ut est.",
  },
  {
    id: 3,
    author: "Bob Johnson",
    text: "Proin eget placerat libero, vel pulvinar enim. Vivamus ac justo sed felis bibendum mollis eu ut est.",
  },
  {
    id: 4,
    author: "Mary Williams",
    text: "Proin eget placerat libero, vel pulvinar enim. Vivamus ac justo sed felis bibendum mollis eu ut est.",
  },
  {
    id: 5,
    author: "Tom Davis",
    text: "Proin eget placerat libero, vel pulvinar enim. Vivamus ac justo sed felis bibendum mollis eu ut est.",
  },
];

export const benefits = [
  {
    imgSrc: truck,
    imgAlt: "Image 1",
    title: "Clean Resukts",
    subtitle: "Duis aute irure dolor simply free in voluptate velit.",
  },
  {
    imgSrc: washer,
    imgAlt: "Image 2",
    title: "Fast Delivery",
    subtitle: "Duis aute irure dolor simply free in voluptate velit.",
  },
];
