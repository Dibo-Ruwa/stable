import React from 'react'
import './notifications.css'
import Link from 'next/link';
import { MessageData, MessageDataType } from "@/constants/index";

export const Notifications: React.FC = () => {
  return (
    <div className="message_container">
      <p className="message_title">Notifications</p>
      <hr className="message_divider" />

      <div className="message_cards">
        {MessageData.map((message: MessageDataType, index) => (
          <div key={index} className="message_card">
            <div className="message_card_image">
              <img
                src={message.messageImg}
                alt={`${message.messageTitle} image`}
                className="message_img"
              />
            </div>
            <div className="message_details">
              <p className="message_details_title">{message.messageTitle}</p>
              <p className="message_details_des">{message.messageDes}</p>
              <Link href="" className="message_details_link">
                {message.viewOrderLink} <message.viewOrderIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
