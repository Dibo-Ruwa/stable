"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlinePlusCircle,
  AiOutlineClose,
} from "react-icons/ai";


interface Item {
  id: number;
  name: string;
  quantity: number; // Unified naming
  image: string | null;
}

interface AddItemProps {
  onItemsChange: (items: Item[]) => void;
}

const AddPropertyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const AddPropertyCard = styled.div`
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  max-width: 600px;
`;

const Label = styled.p`
  color: var(--primary-color-2-black-50, #3f3f3f);
  font-family: Poppins, sans-serif;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  background: rgba(233, 233, 233, 0.13);
`;

const CounterWrapper = styled.div`
  display: flex;
  width: 109px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-radius: 4px;
  background: rgba(233, 233, 233, 0.13);
  padding: 9.5px 10.5px;
`;

const CounterButton = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
`;

const CounterValue = styled.span`
  font-size: 15px;
  line-height: 24px;
`;

const ImageUpload = styled.div`
  width: 433px;
  height: 105px;
  border-radius: 4px;
  border: 1px dashed rgba(0, 0, 0, 0.53);
  opacity: 0.4;
  background: rgba(233, 233, 233, 0.13);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Ensures the image scales proportionally */
  }
`;

const AddImageIcon = styled(AiOutlinePlus)`
  width: 24px;
  height: 24px;
`;

const RemoveButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #ff4d4f;
  font-size: 20px;
`;

const AddPropertyAddMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  width: 100%;
`;

const AddPropertyAddMoreIcon = styled(AiOutlinePlus)`
  font-size: 24px;
  margin-right: 8px;
  color: green;
`;

const AddPropertyAddMoreText = styled.p`
  font-size: 16px;
  color: green;
`;

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddItem: React.FC<AddItemProps> = ({ onItemsChange }) => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "", quantity: 0, image: null },
  ]);

  useEffect(() => {
    onItemsChange(items); // Notify parent component whenever items are updated
  }, [items, onItemsChange]);

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length + 1, name: "", quantity: 0, image: null },
    ]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleInputChange = (
    id: number,
    field: keyof Item,
    value: string | number | File | null
  ) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const incrementCount = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementCount = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const uploadImage = async (id: number, file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_UPLOAD_PRESET || ""
    );
    formData.append(
      "cloud_name",
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || ""
    );

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      handleInputChange(id, "image", data.secure_url);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  return (
    <AddPropertyContainer>
      <form>
        {items.map((item, index) => (
          <AddPropertyCard key={item.id}>
            {index !== 0 && (
              <RemoveButton onClick={() => removeItem(item.id)}>
                <AiOutlineClose />
              </RemoveButton>
            )}
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Enter Name"
              value={item.name}
              onChange={(e) =>
                handleInputChange(item.id, "name", e.target.value)
              }
            />
            <CounterContainer>
              <CounterWrapper>
                <CounterButton onClick={() => decrementCount(item.id)}>
                  <AiOutlineMinus />
                </CounterButton>
                <CounterValue>{item?.quantity}</CounterValue>
                <CounterButton onClick={() => incrementCount(item.id)}>
                  <AiOutlinePlus />
                </CounterButton>
              </CounterWrapper>
            </CounterContainer>
            <Label>Image (optional)</Label>
            <ImageUpload
              onClick={() => {
                const fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.accept = "image/*";
                fileInput.onchange = (e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) uploadImage(item.id, file);
                };
                fileInput.click();
              }}
            >
              {item.image ? (
                <img src={item.image} alt="Uploaded" />
              ) : (
                <AddImageIcon />
              )}
            </ImageUpload>
          </AddPropertyCard>
        ))}
        <AddPropertyAddMore onClick={addItem}>
          <AddPropertyAddMoreIcon />
          <AddPropertyAddMoreText>Add More</AddPropertyAddMoreText>
        </AddPropertyAddMore>
      </form>
    </AddPropertyContainer>
  );
};
