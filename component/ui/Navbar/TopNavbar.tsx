"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaRegCopy } from "react-icons/fa";

const phoneNumber = "+2348059303261";
const whatsappNumber = "2348059303261";
const address = "Suit 4, SUG Secretariat, Bayero University, Kano, Nigeria";

export default function TopNavbar() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <style>
        {`
          .diboruwa-top-navbar {
            width: 100%;
            min-height: 50px;
            background: #4BB149;
            color: #fff;
            padding: 0;
            font-size: 0.95rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 4rem;
            z-index: 30;
            position: fixed;
            left: 0;
            top: 0;
          }
          .diboruwa-top-row {
            display: flex;
            flex-direction: row;
            gap: 2rem;
            justify-content: center;
            align-items: center;
            width: 100%;
          }
          .diboruwa-top-address-desktop {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 6px;
          }
          .diboruwa-top-address-mobile {
            display: none;
          }
          @media (max-width: 700px) {
            .diboruwa-top-navbar {
              flex-direction: column;
              gap: 0.05rem;
              min-height: 80px;
              font-size: 0.72rem;
              align-items: center;
              padding: 2px 2px;
            }
            .diboruwa-top-row {
              display: flex;
              flex-direction: row;
              gap: 1.2rem;
              justify-content: center;
              align-items: center;
              width: 100%;
            }
            .diboruwa-top-address-desktop {
              display: none !important;
            }
            .diboruwa-top-address-mobile {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              width: 100%;
              margin-top: 0.2rem;
              gap: 6px;
            }
          }
          .diboruwa-top-navbar .diboruwa-top-item {
            display: flex;
            align-items: center;
            gap: 6px;
            font-weight: 500;
            justify-content: center;
          }
          .diboruwa-top-navbar .diboruwa-top-copy {
            cursor: pointer;
            font-size: 1rem;
          }
          .diboruwa-top-navbar .diboruwa-top-copied {
            font-size: 0.85rem;
            margin-left: 4px;
          }
        `}
      </style>
      <div className="diboruwa-top-navbar">
        <div className="diboruwa-top-row">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="diboruwa-top-item"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <FaWhatsapp style={{ fontSize: "1.2rem" }} />
            WhatsApp Us
          </a>
          <span className="diboruwa-top-item">
            <FaPhoneAlt style={{ fontSize: "1.1rem" }} />
            {phoneNumber}
            <FaRegCopy
              className="diboruwa-top-copy"
              title="Copy number"
              onClick={handleCopy}
            />
            {copied && <span className="diboruwa-top-copied">Copied!</span>}
          </span>
          <span className="diboruwa-top-item diboruwa-top-address-desktop">
            <FaMapMarkerAlt style={{ fontSize: "1.2rem" }} />
            {address}
          </span>
        </div>
        <div className="diboruwa-top-address-mobile">
          <span className="diboruwa-top-item">
            <FaMapMarkerAlt style={{ fontSize: "1.2rem" }} />
            {address}
          </span>
        </div>
      </div>
    </>
  );
}
