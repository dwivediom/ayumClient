import React from "react";
import styles from "../styles/doctorcard.module.css";

const DoctorCard = (props) => {
  const { name, specialist, location, fees, phone, timing } = props;
  return (
    <div className={`${styles.doctorcard}`}>
      <div className={`${styles.shell}`}>
        <div className={`${styles.about}`}>
          <span className={`${styles.name}`}>{name}</span>
          <span className={`${styles.specialist}`}>{specialist}</span>
        </div>
        <div className={`${styles.info}`}>
          <span className={`${styles.location}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.3}
              stroke="aqua"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            {location}
          </span>
          <span className={`${styles.timing}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.3}
              stroke="aqua"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {timing}
          </span>
        </div>
      </div>
      <div className={`${styles.appoint_btn}`}>
        <span>Book Slot</span>
      </div>
    </div>
  );
};

export default DoctorCard;