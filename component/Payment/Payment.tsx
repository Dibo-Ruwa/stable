"use client";
import { useCart } from "@/hooks/useCart";
import React, { useEffect } from "react"
import { Column, Container, PayButton } from "./payment.styles";
import useOrder from "@/hooks/useOrder";
import useCartStore from "@/store/useCart.store";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";
import { usePaystackPayment } from "react-paystack";
import { nanoid } from "nanoid";
import useAuth from "@/hooks/useAuth";
import Cookies from 'js-cookie';

import PaymentButton from "../paymentButton/PayButton";
import { FC, useState } from "react";
import CustomSelect from "../customSelect";

interface Props {
  modal: (errorType: "success" | "error" | "info", errorMessage: string) => void;
}

interface Location {
  name: string;
  fee: number;
}

interface LocationOption {
  label: string;
  value: string;
  fee: number;
}
interface StateAndRegionData {
  [key: string]: { // Adding the index signature
    locations: Location[];
  };
}
const Payment: FC<Props> = ({ modal }) => {
  const { data: session } = useSession();
  // const [location, setLocation] = useState("");

  const { cartItems, subscriptions } = useCartStore();
  const { totalPrice } = useCart();
  const { isSubmitting, isError, isSuccess, handleCartOrderSubmit } =
    useOrder();
  
  const [state, setState] = useState("");
  const [region, setRegion] = useState("");
  const [location, setLocation] = useState<string>('');
  const [deliveryFees, setDeliveryFees] = useState<number>(0);


  const referenceId = nanoid(8);

  const locations = [
    "Danbare",
    "Rimin Gata",
    "Rijia Zaki",
    "Jambulo",
    "Buk Old Site",
    "Buk New Site",
    "Kabuga",
    "Sabon Gari",
    "Hotoro",
    "Fagge",
    "Naibawa",
    "Gwale",
    "Tarauni",
    "Kano Municipal",
    "Dala",
    "Zoo Road",
  ];

  // const getDeliveryFee = (address: string | undefined) => {
  //   switch (address) {
  //     case "Danbare":
  //       return 300;
  //     case "Rimin Gata":
  //       return 300;
  //     case "Rijia Zaki":
  //       return 400;
  //     case "Jambulo":
  //       return 500;
  //     case "Buk Old Site":
  //       return 500;
  //     case "Buk New Site":
  //       return 300;
  //     case "Kabuga":
  //       return 500;
  //     case "Sabon Gari":
  //         return 1300;
  //     case "Kano Municipal":
  //       return 1200;
  //     case "Dala":
  //       return 800;
  //     case "Fagge":
  //       return 1300;
  //     case "Tarauni":
  //       return 1500;
  //     case "Hotoro":
  //         return 1500;
  //     case "Gwale":
  //       return 1200;
  //     case "Naibawa":
  //       return 1200;
  //     case "Zoo Road":
  //       return 1000;
  //     default:
  //       // Default delivery fee if the address doesn't match any known locations
  //       return 0;
  //   }
  // };

  const statesAndRegions: StateAndRegionData = {
    Kano: {
      locations: [
        { name: "Danbare", fee: 300 },
        { name: "Rimin Gata", fee: 300 },
        { name: "Rijia Zaki", fee: 400 },
        { name: "Jambulo", fee: 500 },
        { name: "Buk Old Site", fee: 500 },
        { name: "Buk New Site", fee: 300 },
        { name: "Kabuga", fee: 500 },
        { name: "Sabon Gari", fee: 1300 },
        { name: "Hotoro", fee: 1500 },
        { name: "Naibawa", fee: 1200 },
        { name: "Gwale", fee: 1200 },
        { name: "Tarauni", fee: 1500 },
        { name: "Kano Municipal", fee: 1200 },
        { name: "Dala", fee: 800 },
        { name: "Zoo Road", fee: 1000 },
      ],
    },
    Ilorin: {
      locations: [
        { name: "Taiwo road", fee: 500 },
        { name: "Tanke", fee: 400 },
        { name: "Oja oba", fee: 600 },
        { name: "Challenge", fee: 500 },
        { name: "Sawmill", fee: 450 },
        { name: "Unilorin", fee: 300 },
        { name: "Kwarapoly", fee: 300 },
        { name: "Unity road", fee: 500 },
        { name: "Post office", fee: 400 },
        { name: "Adeta", fee: 500 },
        { name: "Agbooba", fee: 450 },
        { name: "Adewole", fee: 500 },
        { name: "Gaa-Akanbi", fee: 550 },
        { name: "Fate", fee: 600 },
        { name: "Basin", fee: 500 },
        { name: "Kulende", fee: 450 },
        { name: "Pakata", fee: 400 },
        { name: "Oloje", fee: 500 },
        { name: "Oko olowo", fee: 550 },
      ],
    }
  };

  // const locationOptions: LocationOption[] = Object.entries(statesAndRegions).flatMap(([state, data]) =>
  //   data.locations.map((loc) => ({
  //     label: `${loc.name}`,
  //     value: loc.name,
  //     fee: loc.fee,
  //   }))
  // );

    // Create an array of location options from statesAndRegions

    const locationOptions: LocationOption[] = React.useMemo(() => {
      const savedState = Cookies.get('selectedState');
      if (!savedState || !statesAndRegions[savedState]) {
        return [];
      }
      return statesAndRegions[savedState].locations.map(loc => ({
        label: loc.name,
        value: loc.name,
        fee: loc.fee,
      }));
    }, []);
  
    useEffect(() => {
      const savedRegion = Cookies.get('selectedRegion');
      if (savedRegion) {
        const selectedOption = locationOptions.find(option => option.value === savedRegion);
        if (selectedOption) {
          setLocation(selectedOption.label);
          setDeliveryFees(selectedOption.fee);
        }
      }
    }, [locationOptions]);
  
    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedOption = locationOptions.find(option => option.value === e.target.value);
      if (selectedOption) {
        setLocation(selectedOption.label);
        setDeliveryFees(selectedOption.fee);
      }
    };
  
    // const totalPriceWithDelivery = totalPrice + deliveryFees;

  // useEffect(() => {
  //   const savedState = Cookies.get('selectedState');
  //   const savedRegion = Cookies.get('selectedRegion');
  //   if (savedState && savedRegion) {
  //     const selectedOption = locationOptions.find(option => option.value === savedRegion);
  //     if (selectedOption) {
  //       setLocation(selectedOption.label);
  //       setDeliveryFees(selectedOption.fee);
  //     }
  //   } else {
  //     // Set default location or handle missing cookie scenario
  //     setLocation('Error fetching your location');
  //     setDeliveryFees(0); // Set to default fee or a meaningful default
  //   }
  // }, [locationOptions]);
  

  // const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedOption = locationOptions.find(option => option.value === e.target.value);
  //   if (selectedOption) {
  //     setLocation(selectedOption.label);
  //     setDeliveryFees(selectedOption.fee);
  //   }
  // };
  const getDeliveryFee = (selectedRegion: string) => {
    const locationInfo = Object.values(statesAndRegions).find(state => 
      state.locations.some(loc => loc.name === selectedRegion)
    );
    return locationInfo?.locations.find(loc => loc.name === selectedRegion)?.fee || 0;
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRegion = e.target.value;
    setRegion(newRegion);
    setDeliveryFees(getDeliveryFee(newRegion));
  };

  const loc = localStorage.getItem(`diboruwa__selectedState`);


  const deliveryFee = getDeliveryFee(location);
  const totalPriceWithDelivery = totalPrice + deliveryFees;

  const onSuccess = () => {
    handleCartOrderSubmit(referenceId, totalPrice, deliveryFees);
  };

  const onClose = () => {
    console.log("closed");
  };

  const { totalQuantities } = useCart();
  return (
    <Container>
      <Column>
        <strong>Location:</strong>

        <div className="select">
          {/* <CustomSelect
            // label="State"

            options={locations}
            value={location}
            name="location"
            onChange={(e) => setLocation(e.target.value)}
          /> */}

        <CustomSelect
            // label="Select a Location"
            options={locationOptions?.map(option => option.label)}
            value={location}
            name="location"
            onChange={handleLocationChange}
        />

        </div>
      </Column>
      <Column>
        <strong>Items</strong> <span>{totalQuantities}</span>
      </Column>
      <Column>
        <strong>Delivery fee</strong> <span>{deliveryFees}</span>
      </Column>
      <Column>
        <strong>Total</strong> <span>₦{totalPriceWithDelivery.toFixed(2)}</span>
      </Column>
      {/* {location && <button onClick={onSuccess}>submit</button>} */}
      {location && (
        <PaymentButton
          totalPrice={totalPriceWithDelivery}
          openModal={modal}
          buttonText="Pay Now"
          color="primary"
          onSuccess={onSuccess}
          onClose={onClose}
          referenceId={referenceId}
        />
      )}
    </Container>
  );
};

export default Payment;
