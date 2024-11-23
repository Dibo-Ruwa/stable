import React from "react";
import styles from "../MovingPost.module.css";

// Array of vendor posts
const vendorPosts = [
  {
    id: 1,
    image: "/images/image 170.png",
    text: "Our trained movers handle your belongings with the utmost care and professionalism, ensuring they arrive safely at your new destination.",
  },
  {
    id: 2,
    image: "/images/image 171.png",
    text: "Our trained movers handle your belongings with the utmost care and professionalism, ensuring they arrive safely at your new destination.",
  },
  {
    id: 3,
    image: "/images/image 172.png",
    text: "Our trained movers handle your belongings with the utmost care and professionalism, ensuring they arrive safely at your new destination.",
  },
  // Add more posts here if needed
];

export const VendorPost = () => {
  return (
    <div className={styles.VendorPostContainer}>
      <div className={styles.VendorPostCards}>
        {vendorPosts.map((post) => (
          <div key={post.id} className={styles.VendorPostCard}>
            <div className={styles.VendorPostImage}>
              <img
                src={post.image}
                alt=""
                className={styles.VendorPostCardImage}
              />
            </div>
            <p className={styles.VendorPostText}>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
