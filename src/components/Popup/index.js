import React, { useState } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Box from "@material-ui/core/Box";
import * as EmailValidator from "email-validator";
// https://material-ui.com/components/dialogs/#FormDialog.js
const Popup = ({ callback }) => {
  const [open, setOpen] = useState(false);
  // TODO: set timeout to call setOpen after a few seconds
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const verifyEmail = (email) => {
    if (!EmailValidator.validate(email)) {
      throw Error("Invalid email. Try again.");
    }
    return;
  };

  return (
    <div className="container">
      <Button
        variant="outlined"
        color="default"
        size="large"
        onClick={handleClickOpen}
      >
        SUBSCRIBE
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <Box letterSpacing={"0.15em"}>SUBSCRIBE</Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="EMAIL ADDRESS"
            type="email"
            fullWidth
            // TODO: test this works
            error={error !== null}
            helperText={error}
            // TODO
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              try {
                verifyEmail(email);
                callback(email);
                handleClose();
                setError(null);
              } catch (err) {
                console.log(err.message);
                setError(err.message);
              }
            }}
            color="primary"
          >
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Popup;
