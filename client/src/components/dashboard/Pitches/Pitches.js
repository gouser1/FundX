import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Pitches = () => {
  const [listOfPitches, setListOfPitches] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3001/pitches").then((response) => {
      setListOfPitches(response.data);
    });
  }, []);

  return (
    <div>
      {listOfPitches.map((value, key) => {
        return (
          <div
            className=""
            onClick={() => {
              history.push(`/dashboard/pitch/${value.id}`);
            }}
          >
            <div className=""> {value.pitchTitle} </div>
            <div className="">{value.website}</div>
            <div className="">{value.location}</div>
            <div className="">{value.idealInvestmentRole}</div>
            <div className="">{value.pitchInfo}</div>
            <div className="">Created by: {value.displayName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Pitches;
