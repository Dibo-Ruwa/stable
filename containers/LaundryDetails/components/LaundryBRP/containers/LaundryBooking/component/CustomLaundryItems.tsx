import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { toast } from "react-hot-toast";
import axios from "axios";
import styles from "../LaundryBooking.module.css";

interface CustomItem {
  id: number;
  name: string;
  quantity: number;
  image: string | null;
}

interface CustomLaundryItemsProps {
  onItemsChange: (items: Array<{ name: string; quantity: number; image: string | null }>) => void;  // Updated to include image
  show: boolean;
  onClose?: () => void;  // Make onClose optional
}

export const CustomLaundryItems: React.FC<CustomLaundryItemsProps> = ({ 
  onItemsChange, 
  show 
}) => {
  const [items, setItems] = useState<CustomItem[]>([
    { id: 1, name: "", quantity: 0, image: null },
  ]);
  const [imageUploadProgress, setImageUploadProgress] = useState<{ [key: number]: number }>({});

  // Only notify parent when items actually change
  useEffect(() => {
    if (show) {
      const validItems = items.filter(item => item.name && item.quantity > 0);
      const itemsToSend = validItems.map(({ name, quantity, image }) => ({
        name,
        quantity,
        image
      }));
      onItemsChange(itemsToSend);
    }
  }, [items, show]); // Only depend on items and show prop

  if (!show) return null;

  const addItem = () => {
    const lastItem = items[items.length - 1];
    if (lastItem.name.trim() && lastItem.quantity > 0) {
      setItems(prev => [...prev, { id: Date.now(), name: "", quantity: 0, image: null }]);
    } else {
      toast.error("Please fill in the current item details first");
    }
  };

  const removeItem = (id: number) => {
    // Find the index of the item to be removed
    const itemIndex = items.findIndex(item => item.id === id);
    
    if (items.length === 1) {
      // If it's the last item, just reset it
      setItems([{ id: Date.now(), name: "", quantity: 0, image: null }]);
      return;
    }

    // Remove the specific item
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleInputChange = (id: number, field: keyof CustomItem, value: string | number | null) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const incrementQuantity = (id: number) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id: number) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    ));
  };

  const uploadImage = async (id: number, file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET || "");
    formData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "");
  
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
              setImageUploadProgress(prev => ({ ...prev, [id]: progress }));
            }
          },
        }
      );
  
      handleInputChange(id, "image", response.data.secure_url);
      setImageUploadProgress(prev => ({ ...prev, [id]: 0 }));
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error("Failed to upload image");
      setImageUploadProgress(prev => ({ ...prev, [id]: 0 }));
    }
  };

  return (
    <div className={`${styles.AddPropertyContainer} ${show ? styles.Show : ''}`}>
      <div className={styles.CustomHeaderContainer}>
        <h3 className={styles.CustomHeaderText}>Custom Items</h3>
      </div>

      {items.map((item) => (
        <div key={item.id} className={styles.AddPropertyCard}>
          <div className={styles.CustomItemHeader}>
            <input
              type="text"
              placeholder="Item name"
              value={item.name}
              onChange={(e) => handleInputChange(item.id, "name", e.target.value)}
              className={styles.CustomItemInput}
            />
            <button 
              onClick={() => removeItem(item.id)}
              className={styles.CustomItemRemoveButton}
              title={items.length > 1 ? "Remove this item" : undefined}
              disabled={items.length === 1 && !item.name && item.quantity === 0}
            >
              <AiOutlineClose />
            </button>
          </div>
          
          <div className={styles.CustomItemCounter}>
            <button onClick={() => decrementQuantity(item.id)}>
              <AiOutlineMinus />
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => incrementQuantity(item.id)}>
              <AiOutlinePlus />
            </button>
          </div>
          
          <div 
            className={styles.CustomItemImageUpload}
            onClick={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = 'image/*';
              input.onchange = (e) => {
                const file = (e.target as HTMLInputElement).files?.[0];
                if (file) uploadImage(item.id, file);
              };
              input.click();
            }}
          >
            {item.image ? (
              <img src={item.image} alt="Custom item" />
            ) : (
              imageUploadProgress[item.id] ? (
                <div className={styles.UploadProgress}>
                  <p>Uploading... {imageUploadProgress[item.id]}%</p>
                </div>
              ) : (
                <AiOutlinePlus />
              )
            )}
          </div>
        </div>
      ))}
      
      <button 
        onClick={addItem} 
        className={styles.AddCustomItemButton}
        disabled={!items[items.length - 1].name || items[items.length - 1].quantity === 0}
      >
        <AiOutlinePlus /> Add Another Item
      </button>
    </div>
  );
};
