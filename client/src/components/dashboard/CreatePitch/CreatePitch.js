import React from "react";
import { Grid, Container } from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Textfield from "../../FormsUI/Textfield/index";
import Select from "../../FormsUI/Select/index";
import Button from "../../FormsUI/Button/index";
import countries from "../../../data/countries.json";
import locations from "../../../data/locations.json";
import industries from "../../../data/industries.json";
import investmentRoles from "../../../data/investmentRoles.json";
import capitalAmounts from "../../../data/capitalAmounts.json";
import useStyles from "./CreatePitchStyle";

function CreatePitch(props) {
  let history = useHistory();
  const classes = useStyles();

  const INITIAL_FORM_STATE = {
    pitchTitle: "",
    website: "",
    location: "",
    country: "",
    industry: "",
    industry2: "",
    idealInvestmentRole: "",
    capitalNeeded: "",
    capitalRaised: "",
    pitchInfo: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    pitchTitle: Yup.string().required("Required").max(25).min(10),
    website: Yup.string().max(100),
    location: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    industry: Yup.string().required("Required"),
    industry2: Yup.string().required("Required"),
    idealInvestmentRole: Yup.string().required("Required"),
    capitalNeeded: Yup.string().required("Required"),
    capitalRaised: Yup.string().required("Required"),
    pitchInfo: Yup.string().required("Required").max(1000).min(50),
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={INITIAL_FORM_STATE}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                axios
                  .post("http://localhost:3001/pitches", values, {
                    headers: {
                      accessToken: localStorage.getItem("accessToken"),
                    },
                  })
                  .then((response) => {
                    history.push("/dashboard/pitches");
                  });
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <h2 className={classes.h2}> Pitch Title</h2>
                    <Textfield name="pitchTitle"></Textfield>

                    <h2 className={classes.h2}> Website (Optional)</h2>
                    <Textfield name="website"></Textfield>

                    <h2 className={classes.h2}> Location</h2>
                    <Select name="location" options={locations}></Select>

                    <h2 className={classes.h2}> Country</h2>
                    <Select name="country" options={countries}></Select>

                    <h2 className={classes.h2}> Industry</h2>
                    <Select name="industry" options={industries}></Select>

                    <h2 className={classes.h2}> Industry 2</h2>
                    <Select name="industry2" options={industries}></Select>

                    <h2 className={classes.h2}> Ideal Investment Role</h2>
                    <Select
                      name="idealInvestmentRole"
                      options={investmentRoles}
                    ></Select>

                    <h2 className={classes.h2}> Capital needed</h2>
                    <Select
                      name="capitalNeeded"
                      options={capitalAmounts}
                    ></Select>

                    <h2 className={classes.h2}> Capital raised</h2>
                    <Select
                      name="capitalRaised"
                      options={capitalAmounts}
                    ></Select>

                    <h2 className={classes.h2}> Pitch Info</h2>
                    <Textfield multiline rows={6} name="pitchInfo"></Textfield>

                    <Button> Post Listing</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default CreatePitch;
