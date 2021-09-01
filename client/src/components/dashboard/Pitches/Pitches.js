import React from "react";
import {
  IconButton,
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Badge,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Favorite from "@material-ui/icons/Favorite";
import Location from "@material-ui/icons/LocationOn";
import cardImage from "../../../images/dashboard/placeholder.jpg";
import userIcon from "../../../images/dashboard/usericon.png";
import ArrowBack from "@material-ui/icons/ArrowBackIos";
import ArrowForward from "@material-ui/icons/ArrowForwardIos";
import useStyles from "./PitchesStyle";

const Pitches = () => {
  const [listOfPitches, setListOfPitches] = useState([]);
  const [favouritedPitches, setFavouritedPitches] = useState([]);
  let history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("http://localhost:3001/pitches", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        setListOfPitches(response.data.pitchList);
        // list of favourited posts favourited by current user
        setFavouritedPitches(
          response.data.favouritedPitches.map((favourite) => {
            return favourite.PitchId;
          })
        );
      });
  }, []);

  const favouritePitch = (pitchId) => {
    axios
      .post(
        "http://localhost:3001/favourite",
        { PitchId: pitchId },
        { headers: { accessToken: localStorage.getItem("accessToken") } }
      )
      .then((response) => {
        // setting state of list to modified list
        setListOfPitches(
          listOfPitches.map((pitch) => {
            if (pitch.id === pitchId) {
              if (response.data.favourited) {
                // Destructure pitch and modify favourites field and adding 0 so the length is modified to favourite the post
                return { ...pitch, Favourites: [...pitch.Favourites, 0] };
              } else {
                // Remove last element from array to update state of favourited post to remove favourite
                const FavouritesArray = pitch.Favourites;
                FavouritesArray.pop();
                return { ...pitch, Favourites: FavouritesArray };
              }
            } else {
              return pitch;
            }
          })
        );
        if (favouritedPitches.includes(pitchId)) {
          setFavouritedPitches(
            favouritedPitches.filter((id) => {
              return id !== pitchId;
            })
          );
        } else {
          setFavouritedPitches([...favouritedPitches, pitchId]);
        }
      });
  };

  return (
    <div>
      {listOfPitches.map((value, pos) => {
        return (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            {" "}
            <Grid item xs={10} md={4}>
              <Card className={classes.card}>
                <CardContent>
                  <CardHeader
                    avatar={
                      <Link to={`profile/${value.UserId}`}>
                        <Avatar>
                          <img
                            src={userIcon}
                            alt=""
                            width="50px"
                            height="35px"
                          />
                        </Avatar>
                      </Link>
                    }
                    title={value.pitchTitle}
                    subheader={
                      <Badge className={classes.badge}>
                        {value.location}, {value.country}
                        <Location />{" "}
                      </Badge>
                    }
                  />
                  <CardMedia className={classes.media} image={cardImage} />
                  <Typography
                    classname={classes.p1}
                    style={{ marginTop: "3%" }}
                  >
                    {value.pitchInfo}
                  </Typography>
                </CardContent>

                <CardActions
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    size="small"
                    className={classes.button}
                    style={{ marginTop: "3%" }}
                    onClick={() => {
                      history.push(`/dashboard/pitch/${value.id}`);
                    }}
                  >
                    Find Out More{" "}
                  </Button>
                  <IconButton aria-label="add to favorites">
                    <Favorite
                      className={
                        favouritedPitches.includes(value.id)
                          ? "unfavouriteButton"
                          : "FavouriteButton"
                      }
                      onClick={() => {
                        favouritePitch(value.id);
                      }}
                    />
                    <Typography classname={classes.h1} style={{}}>
                      {value.Favourites.length}
                    </Typography>
                  </IconButton>
                </CardActions>

                <Grid
                  item
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "2%",
                  }}
                >
                  <Button>
                    <ArrowBack color="primary" />
                    <p1 className={classes.p1}>Previous Pitch</p1>
                  </Button>
                  <Button>
                    <p1 className={classes.p1} style={{ paddingRight: "5px" }}>
                      Next Pitch
                    </p1>
                    <ArrowForward color="primary" />
                  </Button>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};

export default Pitches;
