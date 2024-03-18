import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    Box,
    Grid,
    Typography,
    Divider,
} from "@mui/material";

const ImageViewModal = ({ onClose, data, docUrl }) => {
    const image = docUrl + data;

    return (
        <>
            <Grid container justifyContent="space-between" direction="row">
                <Typography variant="h5" fontWeight={700}>
                    Image Detail
                </Typography>
                <CloseIcon
                    onClick={onClose}
                    sx={{
                        fontSize: "24px",
                        cursor: "pointer",
                        "&:hover": {
                            transform: "scale(1.2)",
                            transition: "transform 0.5s ease-in-out",
                            backgroundColor: "#F85862",
                            borderRadius: "50%",
                        },
                    }}
                />
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container direction="column">
                <Box
                    style={{
                        border: "1px solid rgb(171, 180, 188)",
                        borderRadius: "4px",
                        width: "100%",
                        height: "400px",
                        padding: "14px",
                    }}
                >
                    <img
                        src={image}
                        alt="Payment 1"
                        style={{ width: "100%", height: "100%" }}
                    />
                </Box>
            </Grid>
        </>
    );
};

export default ImageViewModal;
