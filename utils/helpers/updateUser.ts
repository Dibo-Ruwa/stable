// src/services/profileService.ts
import axios from "axios";

interface UpdateProfileResponse {
  success: boolean;
  message: string;
}

export async function updateProfile(
  userId: string,
  userProfile: { [key: string]: string }
): Promise<UpdateProfileResponse> {
  try {
    const response = await axios.put(`/api/user/update-profile`, {
      userId,
      userProfile,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      // The request was made, but the server responded with an error status code.
      return {
        success: false,
        message: error.response.data.message || "Update profile failed",
      };
    } else if (error.request) {
      // The request was made but no response was received, or an error occurred while setting up the request.
      return {
        success: false,
        message: "No response from the server",
      };
    } else {
      // Something happened in setting up the request that triggered an Error.
      return {
        success: false,
        message: "An error occurred while updating the profile",
      };
    }
  }
}
