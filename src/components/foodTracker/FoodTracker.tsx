import React from "react";
import "./FoodTracker.css";
import { PiCube } from "react-icons/pi";

type TrackerContentProps = {
  title: string;
  date: string;
  time: string;
  isActive: boolean;
};

const TrackerContent: React.FC<TrackerContentProps> = ({
  title,
  date,
  time,
  isActive,
}) => {
  return (
    <div className="Tracker_content">
      <div className="Tracker_BT">
        <PiCube
          className={`TrackerBox_Icon ${isActive ? "active" : "inactive"}`}
        />
        <div
          className={`Tracker_Line ${
            isActive ? "isLineActive" : "isLineInactive"
          }`}
        ></div>
      </div>
      <div className="Tracker_Title_Date">
        <p className={`Trackers_Text ${isActive ? "active" : "inactive"}`}>
          {title}
        </p>
        <p className={`Trackers_Text ${isActive ? "active" : "inactive"}`}>
          {time}, {date}
        </p>
      </div>
    </div>
  );
};

export const FoodTracker: React.FC = () => {
  const trackingData: TrackerContentProps[] = [
    {
      title: "Order Placed",
      date: "9 August 2024",
      time: "09:30am",
      isActive: true,
    },
    {
      title: "Preparing",
      date: "9 August 2024",
      time: "10:00am",
      isActive: true,
    },
    {
      title: "Out for Delivery",
      date: "9 August 2024",
      time: "10:30am",
      isActive: false,
    },
    {
      title: "Delivered",
      date: "9 August 2024",
      time: "11:00am",
      isActive: false,
    },
  ];

  return (
    <div className="FoodTracker_Container">
      {trackingData.map((data, index) => (
        <TrackerContent
          key={index}
          title={data.title}
          date={data.date}
          time={data.time}
          isActive={data.isActive}
        />
      ))}
    </div>
  );
};
