"use client";
import { FC } from "react";
import { HiShoppingBag } from "react-icons/hi2";
import {
  CartBtn,
  CartOverlay,
  Container,
  ImageContainer,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductImage,
  PrepTime,
} from "./productCard.styles";
import useCartStore from "@/store/useCart.store";

import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Product } from "@/constants";

interface ProductCardProps {
  product: Product;
  active: boolean;
  restaurant?: string;
}

const calculateDiscountedPrice = (price: any, discount: any) => {
  return price - price * discount;
};

const ProductCard: FC<ProductCardProps> = ({ product, active, restaurant }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { addToCart } = useCartStore();
  const putToCart = () => {
    if (session) {
      const discountedPrice = product.discount
        ? calculateDiscountedPrice(product.price, product.discount)
        : product.price;

      const productWithDiscountedPrice = { ...product, price: discountedPrice };
      addToCart(productWithDiscountedPrice);
    } else {
      router.push("signin");
      toast("Please sign in to add item to cart");
    }
  };

  const isProductOpen = () => {
    if (product.openingDays) {
      const currentDay = new Date()
        .toLocaleString("en-us", { weekday: "short" })
        .toLowerCase();

      return product.openingDays.includes(currentDay);
    }

    return true;
  };

  return (
    <Container isOpen={isProductOpen()}>
      <ImageContainer disabled={!active}>
        <div className="discount_card">{product.discount}</div>
        <Image src={product?.imageURL} alt=".." fill={true} />
        <div className="vendor">{product?.vendor}</div>
        <CartOverlay>
          <CartBtn onClick={putToCart}>
            <HiShoppingBag />
          </CartBtn>
          <PrepTime><p>ready in:</p> <span>{product.prep_time}</span></PrepTime>
        </CartOverlay>
      </ImageContainer>
      <ProductInfo>
        <ProductName
          href={`/food/${product?.slug}`}
          style={{ textDecoration: "none" }}
        >
          {product?.title}
        </ProductName>

        <ProductPrice>₦{product.price}</ProductPrice>
      </ProductInfo>
    </Container>
  );
};

export default ProductCard;
