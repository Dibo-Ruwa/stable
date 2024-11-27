import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import Image from "next/image";
export const OurTeam = () => {
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
        <div className="OurTeams_Cards">
          <div className="OurTeam_Card Green_Card">
            <div className="OurTeam_CardImage">
              <Image
                src="/images/image 22.png"
                alt="Team image"
                width={314}
                height={396}
                className="OurTeam_Card_img"
              />
            </div>
            <div className="Teams_Name_skill">
              <p className="Teams_Name">Mustapha Idris</p>
              <p className="Teams_Skills"> Marketing & Customer Success</p>
            </div>
          </div>

          <div className="OurTeam_Card Blue_Card">
            <div className="OurTeam_CardImage">
              <Image
                src="/images/image 22.png"
                alt="Team image"
                width={314}
                height={396}
                className="OurTeam_Card_img"
              />
            </div>
            <div className="Teams_Name_skill">
              <p className="Teams_Name">Mustapha Idris</p>
              <p className="Teams_Skills"> Marketing & Customer Success</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};
