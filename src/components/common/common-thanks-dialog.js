"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";

const CommonThanksDialog = forwardRef((props, ref) => {
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
          Thank you
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className="font-style-2"
            fontSize={20}
            align="center"
          >
            We will connect with you soon.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className="color-gold" onClick={handleClose}>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});

CommonThanksDialog.displayName = "CommonThanksDialog";

export default CommonThanksDialog;
