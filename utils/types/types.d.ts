export type UploadFormState = {
  image: any;
  name: string;
  price: number | null;
  weight: number | null;
  tags: string;
};

export type ModalProps = {
  open: boolean;
  onClose: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  children?: React.ReactNode;
};

export type ImageSliderProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  visibleEl: number;
};

export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
  city?: string;
  state?: string;
  phone?: string;
  role: string;
  emailVerified: boolean;
  accessToken: string;
};

export type LoginUserParams = {
  email: string;
  password: string;
};

export interface Product {
  id: string | number;
  title: string;
  prep_time: string;
  opening_time: string;
  categories: string[];
  slug: string;
  price: number;
  imageUrl: string; // Changed from imageURL to imageUrl
  vendor: {
    _id: string;
    name: string;
  };
  discount?: number;
  extras?: Extra[];
  quantity?: number;
}

export interface Subscription {
  _id?: string;
  type: string;
  plan:
    | {
        bagCount: number;
        regularity: string;
      }
    | string;
  total: number;
  start?: string;
  due?: string;
}

export type CartItem = Product & {
  _id?: string;
  quantity: number;
  total: number;
};

export type Modal = {
  isOpen: boolean;
  message: string;
  type: "success" | "error";
};

export interface ExtraInfo {
  _id: string;
  title: string;
  price: number;
  quantity: number;
}

export type CartState = {
  modal: Modal;
  cartItems: CartItem[];
  subscriptions: Subscription[];
  getCart: () => void;
  getCurrentVendor: () => string | null;
  getSubscriptions: () => void;
  addSubscription: (item: Subscription) => void;
  removeSubscription: (itemId: string | undefined) => void;
  addToCart: (item: FoodData) => void;
  addToCartWithExtras: (item: FoodData, extras: Extra[]) => void;
  removeFromCart: (itemId: string) => void;
  // updateQuantity: (id: string, action: "increase" | "decrease", extraId?: string) => void;
  updateQuantity: (itemId: string, action: string, extraId?: string, extraInfo?: ExtraInfo) => Promise<void>;
  clearCart: () => void;
  closeModal: () => void;
  updateExtraQuantity: (itemId: string, extraId: string, newQuantity: number) => Promise<void>;
};

export interface Order {
  _id: string;
  orderItems: any;
  type: string;
  total: number;
  email: string;
  address: string;
  phone: string;
  deliveryFee: number;
  paymentId: string;
  user: UserType;
  createdAt: Date;
  updatedAt: Date;
}


export interface MovingItemType {
  id: number;
  name: string;
  quantity: number;
  image: string | null;
}

export interface CleaningItemType {
  id: number;
  name: string;
  quantity: number;
  image: string | null;
  video: string | null;
}


export interface LaundryItemType {
  id: number;
  name: string;
  quantity: number;
  image: string | null;
}

// export interface FoodData {
//   _id: string;
//   title: string;
//   prep_time: string;
//   categories: string[];
//   price: number;
//   imageUrl: string;
//   vendor: {
//     _id: string;
//     name: string;
//     owner: string;
//     branch: {
//       location: {
//         city: {
//           _id: string;
//           name: string;
//         };
//         region: {
//           _id: string;
//           name: string;
//         };
//       };
//       _id: string;
//       deliveries: {
//         region: {
//           _id: string;
//           name: string;
//         };
//         price: number;
//         _id: string;
//       }[];
//     }[];
//     operations: {
//       day: string;
//       openingHour: string;
//       closingHour: string;
//       _id: string;
//     }[];
//   };
//   discount: number;
//   extras: any[];
//   createdAt: string;
//   updatedAt: string;
//   slug: string;
//   __v: number;
//   id: string;
// }

export interface Extra {
  quantity: number;
  _id: string;
  title: string;
  prep_time: string;
  categories: string[];
  price: number;
  imageUrl: string;
  vendor: {
    _id: string;
    name: string;
  };
  discount?: number;
  slug: string;
  id: string;
  // quantity?: number; 
}

// Remove ExtraWithQuantity interface
// export interface ExtraWithQuantity extends Extra {
//   quantity: number;
// }

export interface ProductData {
  _id: string;
  title: string;
  prep_time: string;
  categories: string[];
  price: number;
  totalPrice?: number; // Optional
  imageUrl: string;
  vendor: {
    _id: string;
    name: string;
    owner: string;
    branch: {
      location: {
        city: {
          _id: string;
          name: string;
        };
        region: {
          _id: string;
          name: string;
        };
      };
      _id: string;
      deliveries: {
        region: {
          _id: string;
          name: string;
        };
        price: number;
        _id: string;
      }[];
    }[];
    operations: {
      day: string;
      openingHour: string;
      closingHour: string;
      _id: string;
    }[];
  };
  discount: number;
  extras: Extra[]; // Updated to use the `Extra` interface
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v: number;
  id: string;
  quantity?: number; // Optional
}

export interface FoodData {
  _id: string;
  title: string;
  prep_time: string;
  categories: string[];
  price: number;
  totalPrice?: number; // Optional
  imageUrl: string;
  vendor: {
    _id: string;
    name: string;
    owner: string;
    branch: {
      location: {
        city: {
          _id: string;
          name: string;
        };
        region: {
          _id: string;
          name: string;
        };
      };
      _id: string;
      deliveries: {
        region: {
          _id: string;
          name: string;
        };
        price: number;
        _id: string;
      }[];
    }[];
    operations: {
      day: string;
      openingHour: string;
      closingHour: string;
      _id: string;
    }[];
  };
  discount: number;
  extras: Extra[]; // Updated to use the `Extra` interface
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v: number;
  id: string;
  quantity?: number; // Optional
}

export type FoodDatas = FoodData[];
