import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import useCartStore from "@/store/useCart.store";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";

const LocationContainer = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 11.304px;
  padding: 1rem;
  background: #f7f7f7;
  box-shadow: 0px 7.913px 18.086px 0px rgba(158, 158, 158, 0.05);
  transition: padding 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem 0.75rem;
    margin: 0.5rem 0;
  }
`;

const LocationDle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: auto;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const LocationDleText = styled.p`
  color: var(--Green1, #27a124);
  font-family: Poppins;
  font-size: 15.825px;
  font-style: normal;
  font-weight: 500;
  line-height: 27.129px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: normal;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 1.2;
  }
`;

const CouponContent = styled.div`
  width: 100%;

  .input-group {
    display: flex;
    gap: 0.75rem;
    align-items: stretch;
    
    @media (max-width: 480px) {
      flex-direction: column;
      gap: 0.5rem;
    }

    .apply-button {
      min-width: 120px;
      height: 48px;
      border-radius: 8px;
      background: var(--Green1, #27a124);
      color: white;
      font-weight: 500;
      cursor: pointer;
      
      &:hover {
        background: #228f1f;
      }
      
      @media (max-width: 480px) {
        width: 100%;
        min-width: unset;
      }
    }
  }
`;

const AppliedCoupon = styled.div`
  background: rgba(39, 161, 36, 0.05);
  border: 1px solid rgba(39, 161, 36, 0.1);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  .coupon-info {
    .code {
      color: var(--Green1, #27a124);
      font-weight: 600;
    }
    
    .savings {
      color: var(--Green1, #27a124);
      opacity: 0.9;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.75rem;
    gap: 0.75rem;

    .coupon-info {
      width: 100%;
      
      .code {
        font-size: 14px;
        margin-bottom: 2px;
      }
      
      .savings {
        font-size: 13px;
      }
    }

    .remove-button {
      width: 100%;
      height: 36px;
    }
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const CouponInput = () => {
  const { applyCoupon, removeCoupon, coupon } = useCartStore();
  const { data: session, status } = useSession();
  const [couponCode, setCouponCode] = useState("");
  const [isApplying, setIsApplying] = useState(false);

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      toast.error("Please enter a coupon code.");
      return;
    }

    // Debug logs
    console.log('Session check:', {
      status,
      id: session?.user?._id,
      user: session?.user
    });

    if (status !== 'authenticated' || !session?.user) {
      toast.error("Please login to use coupons");
      return;
    }

    setIsApplying(true);
    try {
      await applyCoupon(couponCode); // Remove userId parameter since it's handled in the API route
      toast.success("Coupon applied successfully!");
      setCouponCode("");
    } catch (error) {
      toast.error(error?.message || "Failed to apply coupon.");
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <LocationContainer>
      <LocationDle>
        <LocationDleText>Have a coupon code?</LocationDleText>
      </LocationDle>

      <CouponContent>
        {!coupon.code ? (
          <div className="input-group">
            <Input
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              isInvalid={!!coupon.error}
              errorMessage={coupon.error}
              size="lg"
              style={{
                height: "48px",
                padding: "4px 10px",
              }}
            />
            <Button
              className="apply-button min-h-unit-12"
              size="lg"
              onPress={handleApplyCoupon}
              isDisabled={isApplying || !couponCode}
            >
              {isApplying ? "Applying..." : "Apply"}
            </Button>
          </div>
        ) : (
          <AppliedCoupon>
            <div className="coupon-info">
              <p className="code font-medium">Applied: {coupon.code}</p>
              <p className="savings text-green-600">
                Savings: ₦{coupon.discount.toLocaleString()}
              </p>
            </div>
            <Button
              color="danger"
              variant="light"
              size="md"
              onPress={removeCoupon}
              className="remove-button"
            >
              Remove
            </Button>
          </AppliedCoupon>
        )}
      </CouponContent>
    </LocationContainer>
  );
};
