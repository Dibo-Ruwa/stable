"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlinePlusCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
import { toast } from "react-hot-toast";
import axios from "axios";

interface Item {
  id: number;
  name: string;
  quantity: number;
  image: string | null;
  video: string | null;
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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  width: 100%;
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

  @media (max-width: 768px) {
  font-size: 20px;
  }
`;

const AddPropertyAddMoreText = styled.p`
  font-size: 16px;
  color: green;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MediaContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const VideoContainer = styled.div`
  width: 100%;
`;

const VideoUpload = styled(ImageUpload)`
  flex: 1;
  background: rgba(233, 233, 233, 0.2);
  position: relative;

  video {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .video-size-limit {
    font-size: 0.75rem;
    color: #666;
    position: absolute;
    bottom: 8px;
  }
`;

const VideoIcon = styled(BiVideoPlus)`
  width: 24px;
  height: 24px;
`;

const UploadProgessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  height: 6px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 8px;

  &::after {
    content: "";
    display: block;
    width: ${({ progress }) => progress}%;
    height: 100%;
    background: #27a124; /* Green color for progress */
    transition: width 0.3s ease;
  }
`;

export const AddItem: React.FC<AddItemProps> = ({ onItemsChange }) => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "", quantity: 0, image: null, video: null },
  ]);
  const [imageUploadProgress, setImageUploadProgress] = useState<{
    [id: number]: number;
  }>({});
  const [videoUploadProgress, setVideoUploadProgress] = useState<{
    [id: number]: number;
  }>({});

  useEffect(() => {
    onItemsChange(items); // Notify parent component whenever items are updated
  }, [items, onItemsChange]);

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length + 1, name: "", quantity: 0, image: null, video: null },
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

  const validateVideo = async (file: File): Promise<boolean> => {
    const maxSize = 50 * 1024 * 1024; // 50MB in bytes
    if (file.size > maxSize) {
      toast.error("Video must be less than 50MB");
      return false;
    }

    // Create video element to check duration
    const video = document.createElement("video");
    video.preload = "metadata";

    return new Promise((resolve) => {
      video.onloadedmetadata = () => {
        window.URL.revokeObjectURL(video.src);
        if (video.duration > 60) {
          toast.error("Video must be less than 1 minute");
          resolve(false);
        }
        resolve(true);
      };
      video.src = URL.createObjectURL(file);
    });
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
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const progress = Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
              );
              setImageUploadProgress((prev) => ({ ...prev, [id]: progress }));
            }
          },
        }
      );

      handleInputChange(id, "image", response.data.secure_url);
      setImageUploadProgress((prev) => ({ ...prev, [id]: 0 })); // Reset progress
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error("Failed to upload image");
      setImageUploadProgress((prev) => ({ ...prev, [id]: 0 })); // Reset progress
    }
  };

  const uploadVideo = async (id: number, file: File) => {
    const isValid = await validateVideo(file);
    if (!isValid) return;

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
    formData.append("resource_type", "video");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const progress = Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
              );
              setVideoUploadProgress((prev) => ({ ...prev, [id]: progress }));
            }
          },
        }
      );

      handleInputChange(id, "video", response.data.secure_url);
      setVideoUploadProgress((prev) => ({ ...prev, [id]: 0 })); // Reset progress
    } catch (error) {
      console.error("Video upload failed:", error);
      toast.error("Failed to upload video");
      setVideoUploadProgress((prev) => ({ ...prev, [id]: 0 })); // Reset progress
    }
  };

  return (
    <AddPropertyContainer>
      <FormContainer>
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
              placeholder="E.g Room"
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
            <MediaContainer>
              <ImageContainer>
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
                  ) : imageUploadProgress[item.id] &&
                    imageUploadProgress[item.id] > 0 ? (
                    <UploadProgessContainer>
                      <p> Uploading... </p>
                      <ProgressBar progress={imageUploadProgress[item.id]} />
                    </UploadProgessContainer>
                  ) : (
                    <AddImageIcon />
                  )}
                </ImageUpload>
              </ImageContainer>

              <VideoContainer>
                <Label>Video (optional)</Label>
                <VideoUpload
                  onClick={() => {
                    const fileInput = document.createElement("input");
                    fileInput.type = "file";
                    fileInput.accept = "video/*";
                    fileInput.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0];
                      if (file) uploadVideo(item.id, file);
                    };
                    fileInput.click();
                  }}
                >
                  {item.video ? (
                    <video src={item.video} controls />
                  ) : videoUploadProgress[item.id] &&
                    videoUploadProgress[item.id] > 0 ? (
                    <UploadProgessContainer>
                      <p> Uploading... </p>
                      <ProgressBar progress={videoUploadProgress[item.id]} />
                    </UploadProgessContainer>
                  ) : (
                    <>
                      <VideoIcon />
                      <span className="video-size-limit">Max: 1 min, 50MB</span>
                    </>
                  )}
                </VideoUpload>
              </VideoContainer>
            </MediaContainer>
          </AddPropertyCard>
        ))}
        <AddPropertyAddMore onClick={addItem}>
          <AddPropertyAddMoreIcon />
          <AddPropertyAddMoreText>Add More</AddPropertyAddMoreText>
        </AddPropertyAddMore>
      </FormContainer>
    </AddPropertyContainer>
  );
};
