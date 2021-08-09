import React from "react";
import {
  Grid,
  Box,
  Hidden,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  TextField,
} from "@material-ui/core";
import useStyles from "./SupportStyle";

function Features(props) {
  const [open, setOpen] = React.useState(false);

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ minHeight: "0vh" }}
      >
        <Grid item xs={12}>
          <Box className={classes.box} textAlign="center">
            <h1 className={classes.h1}>Ask us a Question</h1>
          </Box>
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Box className={classes.box}>
            <h2 className={classes.h2}>
              Providing Unique Value to Entrepreneurs and Investors
            </h2>
          </Box>
          <Box>
            <p className={classes.p1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </Box>
          <Box pt={2} xs={12}>
            <Button
              onClick={() => handleButtonClick("/")}
              className={classes.button}
            >
              Contact us
            </Button>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Contact Us</DialogTitle>
              <DialogTitle id="form-dialog-title">
                What can we help you with?
              </DialogTitle>
              <DialogContent>
                <Select
                  native
                  fullWidth
                  margin="dense"
                  id="category"
                  label="How can we help?"
                  autoFocus
                >
                  <option aria-label="None" value="" />
                  <option value={10}>I need Technical Support</option>
                  <option value={10}>I need help with my Account</option>
                  <option value={20}>I'd like a Guided Demo</option>
                  <option value={30}>I'd like to Report a Bug</option>
                  <option value={30}>I'd like to Report a Legal Issue</option>
                  <option value={30}>I need help with Something Else</option>
                </Select>
                <TextField
                  margin="dense"
                  id="name"
                  label="Name"
                  type="name"
                  fullWidth
                />
                <TextField
                  margin="dense"
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                />
                <TextField id="message" label="Message" fullWidth />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="#3bc693">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="#3bc693">
                  Send
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Hidden mdDown>
            <Box pt={15} pl={10} justifyContent="center" display="flex">
              <img src="https://loremflickr.com/600/300" alt=""></img>
            </Box>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
}

export default Features;
