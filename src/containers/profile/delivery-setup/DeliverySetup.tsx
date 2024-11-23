import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { ToggleIcon } from "./ToggleIcon";
import "./delivery-setup.css";

export const DeliverySetup = () => {
  return (
    <div className="delivery_setup_container">
      <div className="delivery_setup_btns">
        <button className="delivery_setup_btn btn_mobile" type="submit">
          Add Now
        </button>
      </div>

      <div className="delivery_address_container">
        <div className="delivery_address_content content_1">
          <div className="question_det_connt">
            <p className="address_question">Are you still living here?</p>
            <div className="det_container">
              <AiOutlineDelete className="det_container_icon det_delete" />
              <BiEditAlt className="det_container_icon det_edit" />
              <ToggleIcon />
            </div>
          </div>

          <div className="delivery_address_area">
            <label htmlFor="address" className="delivery_address_label">
              Address
            </label>
            <textarea
              name="Address"
              id="address"
              rows={10}
              cols={10}
              className="delivery_address_textarea"
              placeholder="No 24 Eberechi street, umuahia, Eberechi street, umuahia, Abia state."
            ></textarea>
          </div>
        </div>
        <div className="delivery_address_content content_2">
          <div className="question_det_connt">
            <p className="address_question">Are you still living here?</p>
            <div className="det_container">
              <AiOutlineDelete className="det_container_icon det_delete" />
              <BiEditAlt className="det_container_icon det_edit" />
              <ToggleIcon />
            </div>
          </div>

          <div className="delivery_address_area">
            <label htmlFor="address" className="delivery_address_label">
              Address
            </label>
            <textarea
              name="Address"
              id="address"
              rows={10}
              cols={10}
              className="delivery_address_textarea"
              placeholder="No 24 Eberechi street, umuahia, Eberechi street, umuahia, Abia state."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
