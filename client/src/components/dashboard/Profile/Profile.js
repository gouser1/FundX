import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function Profile(props) {
  let { id } = useParams();
  let history = useHistory();
  const [displayName, setDisplayName] = useState("");
  const [listOfPitches, setListOfPitches] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/auth/userinfo/${id}`).then((response) => {
      setDisplayName(response.data.displayName);
    });

    axios
      .get(`http://localhost:3001/pitches/byuserId/${id}`)
      .then((response) => {
        setListOfPitches(response.data);
      });
  }, []);
  return (
    <div className="listOfPosts">
      <h1> {displayName} </h1>
      {listOfPitches.map((value, key) => {
        return (
          <div key={key} className="post">
            <div
              className="body"
              onClick={() => {
                history.push(`/post/${value.id}`);
              }}
            >
              Pitch Title: {value.pitchTitle}
              <div className="">Website:{value.website}</div>
              <div className="">Location:{value.location}</div>
              <div className="">InvestmentRole:{value.idealInvestmentRole}</div>
              <div className="">Pitch Info:{value.pitchInfo}</div>
              <div className="">Created by: {value.displayName}</div>
            </div>

            <div className="buttons">
              <label> Favourites: {value.Favourites.length}</label>
            </div>
          </div>
        );
      })}
    </div>

    //     <div>
    //       <div className="basicInfo">
    //         {""}
    //         <h1> Name: {displayName} </h1>
    //       </div>
    //       <div className="listOfPitches">
    //         {listOfPitches.map((value, pos) => {
    //           return (
    //             <div className="" key={pos}>
    //               <div
    //                 className=""
    //                 onClick={() => {
    //                   history.push(`/dashboard/pitch/${value.id}`);
    //                 }}
    //               >
    //                 {value.pitchTitle}
    //               </div>
    //               <div className="">{value.website}</div>
    //               <div className="">{value.location}</div>
    //               <div className="">{value.idealInvestmentRole}</div>
    //               <div className="">{value.pitchInfo}</div>
    //               <div className="">Created by: {value.displayName}</div>

    //               <h1>{value.Favourites.length}</h1>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
  );
}

export default Profile;
