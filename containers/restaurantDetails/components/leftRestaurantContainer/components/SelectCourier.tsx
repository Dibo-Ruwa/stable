import React, { useState } from "react";
import "../LeftRestaurantContainer.css";
import { FaStar } from "react-icons/fa";
import { Checkbox } from "@/component/Checkbox/Checkbox"; // Assuming Checkbox is your custom reusable checkbox component
import { Button } from "@/component/shared/Button";

interface Courier {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
}

interface SelectCourierProps {
  onClose: () => void; // Function to close the modal
}

const couriers: Courier[] = [
  {
    id: 1,
    name: "Express Delivery",
    image: "/images/image 150.png",
    rating: 4.0,
    price: 40000,
  },
  {
    id: 2,
    name: "Standard Delivery",
    image: "/images/image 150.png",
    rating: 3.8,
    price: 30000,
  },
  {
    id: 3,
    name: "Economy Delivery",
    image: "/images/image 150.png",
    rating: 4.2,
    price: 20000,
  },
  {
    id: 4,
    name: "Premium Delivery",
    image: "/images/image 150.png",
    rating: 4.5,
    price: 50000,
  },
];

export const SelectCourier: React.FC<SelectCourierProps> = ({ onClose }) => {
  const [selectedCourier, setSelectedCourier] = useState<number | null>(null); // Track the selected courier ID

  const handlePay = () => {
    // Payment logic can go here
    console.log("Payment processed.");
    // Call the onClose function to close the modal
    onClose();
  };

  const handleCourierSelection = (courierId: number) => {
    setSelectedCourier(
      (prevSelected) => (prevSelected === courierId ? null : courierId) // Toggle selection
    );
  };

  // Get the selected courier price safely with a fallback
  const getSelectedCourierPrice = (): number => {
    return (
      couriers.find((courier) => courier.id === selectedCourier)?.price ?? 0
    );
  };

  return (
    <div className="selectCourierModal">
      <div className="courierContent">
        <div className="courierModal_LeftContent">
          <h2 className="courierModal_Title">Select Courier</h2>

          <div className="courierModal_Cards">
            {couriers.map((courier) => (
              <div className="courierModal_Card" key={courier.id}>
                <div className="courierModal_Card_Image_and_D">
                  <img
                    src={courier.image}
                    alt={courier.name}
                    className="courierModal_CardImage"
                  />
                  <div className="courierModal_CardContent">
                    <p className="courierModal_CardContent_Text">
                      {courier.name}
                    </p>
                    <div className="courierModal_CardContentRating">
                      <FaStar className="courierModal_CardContent_ratingStar" />
                      <p className="courierModal_CardContent_ratingNum">
                        {courier.rating}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="CourierModal_card_Prize">
                  ${courier.price.toLocaleString()}
                </p>
                <Checkbox
                  checked={selectedCourier === courier.id}
                  onChange={() => handleCourierSelection(courier.id)}
                  labelClassName="CourierCheckBox_Label"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="courierModal_RightContent">
          <div className="courierModal_RightContent_Card">
            <div className="courierModal_RightContent_SubTotal">
              <p className="courierModal_RightContent_SubTotal_Text">
                Sub Total:
              </p>
              <p className="courierModal_RightContent_SubTotal_Num">$40,000</p>
            </div>
            <div className="courierModal_RightContent_SubTotal">
              <p className="courierModal_RightContent_SubTotal_Text">
                Delivery:
              </p>
              <p className="courierModal_RightContent_SubTotal_Num">
                {selectedCourier
                  ? `$${couriers
                      .find((c) => c.id === selectedCourier)
                      ?.price.toLocaleString()}`
                  : "$0"}
              </p>
            </div>
            <div className="courierModal_RightContent_SubTotal">
              <p className="courierModal_RightContent_SubTotal_Text">Total:</p>
              <p className="courierModal_RightContent_SubTotal_Num">
                {selectedCourier
                  ? `$${(40000 + getSelectedCourierPrice()).toLocaleString()}`
                  : "$40,000"}
              </p>
            </div>
          </div>

          <Button text="Pay" onClick={handlePay} className="payButton" />
        </div>
      </div>
    </div>
  );
};
