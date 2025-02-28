export async function updateCouponUsage({
  couponId,
  userId,
  orderId,
  orderTotal,
  discountAmount
}: {
  couponId: string;
  userId: string;
  orderId: string;
  orderTotal: number;
  discountAmount: number;
}) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/coupon/usage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          couponId,
          userId,
          orderId,
          orderTotal,
          discountAmount
        })
      }
    );

    if (!response.ok) {
      throw new Error('Failed to update coupon usage');
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating coupon usage:', error);
    throw error;
  }
}
