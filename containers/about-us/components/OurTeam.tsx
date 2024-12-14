import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import Image from "next/image";
import { teamMembers } from "@/constants";

export const OurTeam = () => {
  const cardStyles = [
    "Green_Card",
    "Blue_Card",
    "Purple_Card",
    "periwinkleBlue_Card",
  ];

  return (
    <section className="OurTeam_Container">
      <div className="OurTeam_title_icon">
        <p className="OurTeam_Title">Our Team</p>
        <div className="OurTeam_Icon-Line">
          <GoArrowDownRight className="OurTeam_Icon" />
          <span className="OurTeam_Line"></span>
        </div>
      </div>
      <div className="TeamsCards_Container">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`OurTeam_Card ${cardStyles[index % cardStyles.length]}`}
          >
            <div className="OurTeam_CardImage">
              <Image
                src={member.imageUrl}
                alt={`${member.name}'s picture`}
                width={314}
                height={396}
                className={`OurTeam_Card_img ${cardStyles[
                  index % cardStyles.length
                ]
                  .split("_")[0]
                  .toLowerCase()}_image`}
              />
            </div>
            <div className="Teams_Name_skill">
              <p className="Teams_Name">{member.name}</p>
              <p className="Teams_Skills">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
