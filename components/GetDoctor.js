import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
  memo,
} from "react";
import styles from "../styles/doctorcard.module.css";

import { useDispatch, useSelector } from "../redux/store/store";
import { getallDoctorAction } from "../redux/actions/docActions";
import { bgPriColor } from "./theam/theam";
import DoctorCard from "./DoctorCard";

const GetDoctor = () => {
  const [doctorData, setDoctorData] = useState("");

  const dispatch = useDispatch();

  const getDoctor = useSelector((state) => state.getDoctorReducer);
  console.log(getDoctor && getDoctor);

  useEffect(() => {
    dispatch(getallDoctorAction());
  }, [dispatch]);

  if (getDoctor.loading) {
    return <h1>loading... </h1>;
  }

  return (
    <>
      <div className={`${styles.doc_container}`}>
        {getDoctor.doctor &&
          getDoctor.doctor
            .slice(0)
            .reverse()
            .map((doctor) => {
              console.log(doctor);
              return (
                <DoctorCard
                  key={doctor._id}
                  name={doctor.doctor.name}
                  specialist={doctor.specialist}
                  location={doctor.location}
                  phone={doctor.doctor.phone}
                  fees={doctor.fees}
                  timing={doctor.timing}
                  docid={doctor.doctor._id}
                />
              );
            })}
      </div>
    </>
  );
};

export default React.memo(GetDoctor);
