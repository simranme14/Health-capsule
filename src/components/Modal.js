import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}
function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}
export default function CustomizedDialogs({ children, popupOpen = true, setOpen }) {
    const [openPopup, setOpenPopup] = React.useState(popupOpen);
    const handleClickOpen = () => {
        setOpenPopup(true);
    };
    const handleClose = () => {
        setOpen("")
        setOpenPopup(false);
    };
    return (
        <div className='Modal'>
            <Dialog
                open={openPopup}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
                fullWidth={true}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                </BootstrapDialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
        </div>
    );
}