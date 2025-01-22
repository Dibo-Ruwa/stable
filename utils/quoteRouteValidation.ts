import moment from "moment";

interface RequestItem {
  name: string;
  quantity: number;
  image?: string | null;
  video?: string | null;
}

interface RequestData {
  items: RequestItem[];
  currentLocation?: string;
  deliveryLocation?: string;
  pickUpDate?: string;
  pickUpTime?: string;
  description?: string;
  categories?: string[];
}

export const validateAndFormatRequest = (type: string, data: RequestData) => {
  // Define required fields for each type
  const requiredFields: Record<string, string[]> = {
    moving: ["items", "currentLocation", "deliveryLocation", "pickUpDate", "pickUpTime"],
    laundry: ["items", "currentLocation", "pickUpDate", "pickUpTime"],
    cleaning: ["items", "currentLocation", "pickUpDate", "pickUpTime"],
  };

  // Ensure required fields are present
  const missingFields = requiredFields[type]?.filter((field) => !(data as any)[field]) || [];
  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
  }

  // Format items to include optional `image` and `video` fields
  const formattedItems = data.items.map((item) => ({
    name: item.name,
    quantity: item.quantity,
    image: item.image || null,
    video: item.video || null,
  }));

  // Return the formatted data object
  return {
    ...data,
    items: formattedItems,
    description: data.description || "",
    date: moment().format("YYYY-MM-DD"), // Add current date
  };
};
