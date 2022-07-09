import React from "react";
import s from "./Info.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
export const Info = () => {
  return (
    <div className={s.main}>
      <div className={s.img}><FontAwesomeIcon icon={faBowlFood} size='2x' spin ></FontAwesomeIcon></div>
      <p className={s.text}>
        One of the first to hone the concept of pre-plated Indian food, the
        award winning Varq purveys a modern Indian gourmet dining experience
        offering authenticity of taste and artistic presentation. The menu
        engages with all the five senses with visually stunning dishes, delight
        on the palate and aromas of Indian spices and promises to set a
        benchmark for contemporary Indian cuisine. The restaurant proudly houses
        priceless artwork - a mural by renowned artist Anjolie Ela Menon and the
        modern art forms of oil paintings, carvings and sculptures.
      </p>
    </div>
  );
};
