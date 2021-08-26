import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleListing = () => {
  let { id } = useParams();
  const [pitchObject, setPitchObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/pitches/byId/${id}`).then((response) => {
      setPitchObject(response.data);
    });
  }, [id]);
  return (
    <div>
      <div className=""> {pitchObject.pitchTitle} </div>
      <div className="">{pitchObject.website}</div>
      <div className="">{pitchObject.location}</div>
      <div className="">{pitchObject.country}</div>
      <div className="">{pitchObject.industry}</div>
      <div className="">{pitchObject.industry2}</div>
      <div className="">{pitchObject.idealInvestmentRole}</div>
      <div className="">{pitchObject.capitalNeeded}</div>
      <div className="">{pitchObject.capitalRaised}</div>
      <div className="">{pitchObject.pitchInfo}</div>
      <div className="">Created by: {pitchObject.displayName}</div>
    </div>
  );
};

export default SingleListing;
