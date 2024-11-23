import React from "react";
import "./security-setting.css";
export const SecuritySetting = () => {
  return (
    <div className="security_container">
      <form className="password_form_container">
        <div className="password_box">
          <label className="password_form_label">Old Password</label>
          <input
            type="password"
            name="Old Password"
            id="password"
            className="password_form_input"
            placeholder="********"
          />
        </div>
        <hr className="password_form_subline" />
        <div className="password_box">
          <label className="password_form_label">New Password</label>
          <input
            type="password"
            name="Old Password"
            id="password"
            className="password_form_input"
            placeholder="********"
          />
        </div>
        <div className="password_box">
          <label className="password_form_label">Re-Enter New Password</label>
          <input
            type="password"
            name="Old Password"
            id="password"
            className="password_form_input"
            placeholder="********"
          />
        </div>
        <button type="submit" className="password_save_btn">
          Save
        </button>
      </form>
    </div>
  );
};
