import axios from 'axios';
import { toast } from 'sonner';

const useReferral = () => {
  const verifyReferralCode = async (referralCode: string) => {
    try {
      // Changed to GET request to only verify without incrementing
      const response = await axios.get(`${process.env.NEXT_PUBLIC_ADMIN_URL}/api/referrals/verify/${referralCode}`);

      if (!response.data.success) {
        toast.error("Invalid referral code, please verify or leave empty");
        throw new Error('Invalid referral code');
      }

      return {
        success: true,
        promoterId: response.data.referal?.promoter,
      };
    } catch (error: any) {
      toast.error("Invalid referral code, please verify or leave empty");
      throw new Error(error.response?.data?.error || 'Invalid referral code');
    }
  };

  return {
    verifyReferralCode,
  };
};

export default useReferral;
