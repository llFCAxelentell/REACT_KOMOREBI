import { Share } from '@material-ui/icons';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import React, { useState } from 'react';

function Prueba() {
    const [open, setOpen] = useState(true);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <>
            <Dialog
                                        aria-labelledby="customized-dialog-title"
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <DialogTitle>Share</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                A
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>Close</Button>
                                        </DialogActions>
                                    </Dialog>
                                    <Button onClick={handleClickOpen} variant="contained">
                                        <Typography color="white">
                                            SHARE
                                        </Typography>
                                    </Button>
        </>
    );
}

export default Prueba;