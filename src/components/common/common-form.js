"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";

const CommonDialog = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    handleOpen: () => {
      setOpen(true);
    },
  }));

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="mt10" align="center">
          Talk To Us
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className="font-style-2"
            fontSize={20}
            align="center"
          >
            Tell us specifications about your future property.
          </DialogContentText>
          <form
            className="form-style1"
            method="POST"
            action="https://www.indus-inhouse.com/lead-api-v2"
          >
            {/* Hidden Fields */}
            <input type="hidden" value="5f41397a7ff24" name="campaign" />
            <input type="hidden" value="sale" name="lead_type" />
            <input type="hidden" value="apartment" name="property_type" />
            <input type="hidden" value="lp" name="source" />

            <TextField
              margin="dense"
              id="name"
              type="text"
              fullWidth
              label="Name"
              placeholder="Type name"
              name="name"
              required
            />

            <TextField
              margin="dense"
              label="Phone"
              placeholder="Type phone number"
              name="phone"
              required
              fullWidth
            />

            <TextField
              margin="dense"
              label="Email"
              placeholder="Type email"
              name="email"
              type="email"
              required
              fullWidth
            />

            <TextField
              margin="dense"
              label="Message"
              placeholder="Type message.."
              name="message"
              multiline
              rows={4}
              fullWidth
            />

            <DialogActions>
              <Button className="color-gold" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" name="submit" className="color-gold">
                Send
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
});

CommonDialog.displayName = "CommonDialog";

export default CommonDialog;
