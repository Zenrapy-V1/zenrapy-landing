import React, { useState, useEffect } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FlashMessage = ({message}) => {
    
    const [open, setOpen] = useState(true);

      const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
          setTimeout(() => {
            setOpen(false)
          }, 1000) 
        };
    
    return (
        <>
        <Snackbar open={open} onClose={handleClose} autoHideDuration={5000}>
            <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
        </>
    )
}

export default FlashMessage