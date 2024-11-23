"use client";

import useForm from "@/hooks/useForm";
import useQuote from "@/hooks/useQuote";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import Button from "../ui/button/Button";
import NotificationModal from "../NotificationModal";
import { BsPlus } from "react-icons/bs";
import Loader from "../Loader";

// Define the Properties interface
interface Properties {
  id: number;
  name: string;
  amount: number;
}

const Container = styled.div`
  background: #fff;
  padding: 2%;
  border-radius: 20px;
  height: auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  @media screen and (max-width: 768px) {
      flex-direction: column;
  padding: 3%;

    }

  h2 {
    font-size: 22px;
    margin-bottom: 30px;
  }

  .title{
    display: flex;
    justify-content: center;
    align-items: center;
   
    p{
        font-size: 16px;
        margin-bottom: 30px;
        width: 70%;
        text-align: center;
    }
  }

  p {
    color: var(--content);
    margin-bottom: 30px;
  }

  .formControl {
    wdith: 100%;
    display: flex;
    align-items: flex-start;
    gap: 20px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .input_field {
    margin-bottom: 10px;
  }

  .input_field small {
    font-size: 10px;
  }
`;
const MultiSelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  border-radius: 8px;
  width: 100%;
  /* height: 100%; */
`;

const MultiSelectDropdown = styled.div`
  position: absolute;
  border: 1px solid #ccc;
  max-height: 150px;
  overflow-y: auto;
  background-color: #fff;
  z-index: 1;
  font-size: 18px;
  width: 100%;
  border-radius: 12px;
  top: 105%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    width: 5px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: var(
      --primary-20
    ); /* Track color (the background behind the scrollbar) */
  }

  &::-webkit-scrollbar-thumb {
    background: var(
      --primary-20
    ); /* Thumb color (the draggable part of the scrollbar) */
    border-radius: 20px; /* Rounded corners on the thumb */
  }
`;

const MultiSelectOption = styled.div`
  padding: 7px 20px;
  font-size: 14px;
  background-color: var(--primary-20);
`;

const SelectedOptions = styled.div`
  display: grid;
  gap: 10px;
  margin: 10px;
  max-height: 150px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 2px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: var(
      --primary-20
    ); /* Track color (the background behind the scrollbar) */
  }

  &::-webkit-scrollbar-thumb {
    background: var(
      --primary-20
    ); /* Thumb color (the draggable part of the scrollbar) */
    border-radius: 20px; /* Rounded corners on the thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Thumb color on hover */
  }
`;

const MultiSelectButton = styled.button`
  display: flex;
  align-items: center;

  padding: 2px 5px;
  font-size: 18px;
  background-color: var(--primary-20);
  width: 100%;
  color: #000000;
  border: none;
  cursor: pointer;
  text-align: left;
  border-radius: 8px;
  transition: all 0.5s ease;

  button {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background: #fff;
    border-radius: 8px;
    outline: none;
    border: none;
    transition: all 0.5s ease;
    color: var(--primary);

    &:hover {
      background-color: var(--primary-20);
      color: #fff;
    }
  }
`;

const CustomInput = styled.input`
  height: 100%;
  width: 100%;
  background: transparent;
  padding: 15px 20px;
  outline: none;
  border: none;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  gap: 8px;
`;

const CounterButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: var(--primary);
  border-radius: 5px;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 14px;
  background-color: var(--primary-20);
`;

const ItemName = styled.span`
  flex-grow: 1;
  padding: 0 8px;
`;

const Notification = styled.small`
  color: #ff0000;
  margin-top: 10px;
`;

export const LocationInput = styled.input`
  padding: 10px 15px;
  background: var(--primary-20);
  outline: none;
  border: none;
  border-radius: 8px;

  width: 100%;
`;

const QuoteButton = styled.div`
  background: var(--primary);
  padding: 10px 20px;
  border-radius: 8px;
  color: #fff;
  margin-top: auto;
  margin-left: auto;
  cursor: pointer;
`;

const validateForm = (formData: any) => {
  const errors: any = {};

  if (!formData.from) {
    errors.from = "Please enter a 'from' location.";
  }
  if (!formData.to) {
    errors.to = "Please enter a 'to' location.";
  }
  if (!formData.date) {
    errors.date = "Please select a date.";
  }

  return errors;
};

const Moving: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [customItem, setCustomItem] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<Properties[]>([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [quote, setQuote] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
  });
  const [errors, setErrors] = useState({
    from: "",
    to: "",
    date: "",
  });

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const { handleQuote, showModal, modalErrorType, modalMessage, closeModal, loading } =
    useQuote();

  const Props: Properties[] = [
    { id: 1, name: "Bed", amount: 0 },
    { id: 2, name: "Chair", amount: 0 },
    { id: 3, name: "Wardrope", amount: 0 },
    { id: 5, name: "Sofa", amount: 0 },
    { id: 6, name: "Mattress", amount: 0 },
    { id: 7, name: "Food stuff", amount: 0 },
    { id: 8, name: "Fridge", amount: 0 },
    { id: 9, name: "TV sets", amount: 0 },
    { id: 10, name: "Fan", amount: 0 },
    { id: 11, name: "Air condition", amount: 0 },
    { id: 12, name: "Other electronics", amount: 0 },
    { id: 13, name: "Clothing materials", amount: 0 },
    { id: 14, name: "Solar battery", amount: 0 },
    { id: 15, name: "Other items", amount: 0 },

    // Add more laundry items as needed
  ];

  const handleItemClick = (item: Properties) => {
    if (selectedItems.some((i) => i.id === item.id)) {
      // If the item is already in the selectedItems array, update its amount
      const updatedItems = selectedItems.map((i) =>
        i.id === item.id ? { ...i, amount: i.amount + 1 } : i
      );
      setSelectedItems(updatedItems);
    } else {
      // If the item is not in the selectedItems array, add it with amount 1
      setSelectedItems([...selectedItems, { ...item, amount: 1 }]);
    }
  };

  const handleDecrease = (item: Properties) => {
    const updatedItems = selectedItems.map((i) => {
      if (i.id === item.id && i.amount > 0) {
        return { ...i, amount: i.amount - 1 };
      }
      return i;
    });
    setSelectedItems(updatedItems);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to add a custom item to the selected items
  const handleAddCustomItem = () => {
    if (customItem.trim() !== "") {
      setSelectedItems((prevSelectedItems) => [
        ...prevSelectedItems,
        { id: Date.now(), name: customItem, amount: 1 }, // Assign a unique id
      ]);
      setCustomItem(""); // Clear the input field after adding the item
    }
  };

  const handleGetQuote = async () => {
    if (selectedItems.length <= 0) {
      setNotification("Please add item amounts before getting a quote.");
    } else {
      const quoteText = selectedItems
        .filter((item) => item.amount > 0)
        .map((item) => `${item.name} -- ${item.amount}`)
        .join(", ");
      console.log(selectedItems);

      setQuote(`Quote: ${quoteText}`);
      setNotification(null);
      try {
        const data = {
          type: "cleaning",
          quote: selectedItems,
        };
        handleQuote(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onSubmit = (type: any) => {
    const errors = validateForm(formData);

    if (session) {
      if (selectedItems.length > 0) {
        setNotification(null);
        if (Object.keys(errors).length === 0) {
          const data = {
            properties: selectedItems,
            type,
            address: formData,
          };
          console.log(data);

          handleQuote(data);
        } else {
          setErrors(errors);
        }
      } else {
        setNotification("Please add item amounts before getting a quote.");
      }
    } else {
      router.push("/signin");
      toast("please sign in to make requests");
    }
  };

  return (
    <Container>
      <div className="title"> 
        <p> 
          Fill the form below to simplify your move and delivery
        </p>
      </div>
      <MultiSelectWrapper ref={dropdownRef}>
        {/* Add an input field for custom items */}
        <MultiSelectButton onClick={() => setDropdownOpen(!isDropdownOpen)}>
          <CustomInput
            type="text"
            placeholder="Select or type the item to move or deliver"
            value={customItem}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCustomItem(e.target.value)
            }
          />
          <button onClick={handleAddCustomItem}>
            <BsPlus />
          </button>
        </MultiSelectButton>
        {isDropdownOpen && (
          <MultiSelectDropdown>
            {Props.map((item) => (
              <MultiSelectOption
                key={item.id}
                onClick={() => {
                  handleItemClick(item);
                  setDropdownOpen(false);
                }}
              >
                {item.name}
              </MultiSelectOption>
            ))}
          </MultiSelectDropdown>
        )}
      </MultiSelectWrapper>

      <SelectedOptions>
        {selectedItems.map((item) => (
          <ItemInfo key={item.id}>
            <ItemName>{item.name}</ItemName>
            <Counter>
              <CounterButton onClick={() => handleDecrease(item)}>
                -
              </CounterButton>
              <span>{item.amount}</span>
              <CounterButton onClick={() => handleItemClick(item)}>
                +
              </CounterButton>
            </Counter>
          </ItemInfo>
        ))}
      </SelectedOptions>
      {notification && <Notification>{notification}</Notification>}

      <div className="formControl">
        <div className="input_field">
          <LocationInput
            type="text"
            name="from"
            placeholder="from"
            value={formData.from}
            onChange={(e: any) =>
              setFormData({ ...formData, from: e.target.value })
            }
          />
          {errors.from && <Notification>{errors.from}</Notification>}
        </div>

        <div className="input_field">
          <LocationInput
            type="text"
            name="to"
            placeholder="to"
            value={formData.to}
            onChange={(e: any) =>
              setFormData({ ...formData, to: e.target.value })
            }
          />
          {errors.to && <Notification>{errors.to}</Notification>}
        </div>
      </div>

      <div className="input_field">
        {" "}
        <LocationInput
          type="date"
          name="date"
          // placeholder="to"
          value={formData.date}
          onChange={(e: any) =>
            setFormData({ ...formData, date: e.target.value })
          }
        />
        {errors.date && <Notification>{errors.date}</Notification>}
      </div>

      <QuoteButton onClick={() => onSubmit("moving")}>
       
        {loading ? <Loader /> : " Get a Quote"}
      </QuoteButton>
      {showModal && (
        <NotificationModal
          message={modalMessage}
          errorType={modalErrorType}
          onClose={closeModal}
        />
      )}
    </Container>
  );
};

export default Moving;
