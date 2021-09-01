import React, { useEffect, useState, useContext } from "react";
import { Button } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../helpers/AuthContext";

const SingleListing = () => {
  let { id } = useParams();
  const [pitchObject, setPitchObject] = useState({});
  const { authState } = useContext(AuthContext);
  let history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:3001/pitches/byId/${id}`).then((response) => {
      setPitchObject(response.data);
    });
  }, [id]);

  const deletePitch = (id) => {
    axios
      .delete(`http://localhost:3001/pitches/${id}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then(() => {
        history.push("/dashboard/pitches");
      });
  };
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
      {authState.displayName === pitchObject.displayName && (
        <Button
          onClick={() => {
            deletePitch(pitchObject.id);
          }}
        >
          {" "}
          Delete Pitch
        </Button>
      )}
    </div>
  );
};

export default SingleListing;
