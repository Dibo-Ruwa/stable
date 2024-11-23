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
  id: string | number ;
  title: string;
  prep_time: string;
  opening_time: string;
  categories: string[];
  slug: string;
  price: number;
  imageURL: string;
  vendor: string;
  discount?: number;
  extras?: Extra[]; // Nested extras property within Product
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

export type CartState = {
  modal: Modal;
  cartItems: CartItem[];
  subscriptions: Subscription[];
  getCart: () => void;
  getSubscriptions: () => void;
  addSubscription: (item: Subscription) => void;
  removeSubscription: (itemId: string | undefined) => void;
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (id: string, action: "increase" | "decrease") => void;
  clearCart: () => void;
  closeModal: () => void;
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
