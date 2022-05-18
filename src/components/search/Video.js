import { Add, Share } from '@material-ui/icons';
import { ContentCopy } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, IconButton, Link, List, ListItem, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

function Video() {

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [snack, setOpenSnack] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);

    };
    const handleClose2 = () => {
        setOpen2(false);
    };

    const handleCloseSnack = () => {
        setOpenSnack(false);
    };
    const linkShare = () => {
        var copyText = document.getElementById("linkShare");
        navigator.clipboard.writeText(copyText.defaultValue);
        setOpenSnack(true);
    };

    const checkTags = ["ej 1", "ej 2", "ej 3", "ej 4", "ej 2", "ej 3", "ej 4", "ej 2", "ej 3", "ej 4"];

    const tags = [
        {
            tag: ["good", "fast", "sell", "sample 1", "red"]
        }
    ];

    const notes = [
        {
            name: "Lionel Messi",
            date: "04/26/2022",
            time: "04:02",
            tags: ["goat", "mvp", "god", "best"]
        },
        {
            name: "Cristiano Ronaldo",
            date: "05/26/2022",
            time: "01:11",
            tags: ["penaldo", "cr7", "segundon"]
        },
        {
            name: "Neymar jr",
            date: "06/26/2022",
            time: "00:34",
            tags: ["skill", "shadow"]
        },
        {
            name: "Chicharito Hernandez",
            date: "06/26/2022",
            time: "00:20",
            tags: ["mexican", "great", "stop","sample1"]
        },

    ]


    return(
        <Box sx={{ flexGrow: 1, marginTop: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <iframe width="100%" height="350" src="https://www.youtube.com/embed/WkgHkrM9fo0" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} >
                            <Card sx={{ height: 320 }}>
                                <CardContent>
                                    <Typography variant="subtitle1" color="#555555" fontWeight="600" component="div">
                                        INFORMATION
                                    </Typography>
                                    <Typography variant="subtitle1" color="#555555" component="div">
                                        Agent ID: <Link href="/agentID">1234</Link>
                                    </Typography>
                                    <Typography variant="subtitle1" color="#555555" component="div">
                                       Name: Axel González Carreto
                                    </Typography>
                                    <Typography variant="subtitle1" color="#555555" component="div">
                                       Date: 04/25/2022
                                    </Typography>
                                    <Typography variant="subtitle1" color="#555555" component="div">
                                       Category: Selling
                                    </Typography>
                                    <Typography variant="subtitle1" color="#555555" component="div">
                                       Duration: 10 minutes
                                    </Typography>
                                    <Typography variant="subtitle1" color="#555555" component="div">
                                       Start time: 10:58 AM
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Dialog
                                        aria-labelledby="customized-dialog-title"
                                        fullWidth="true"
                                        maxWidth="xs"
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <DialogTitle>Share </DialogTitle>
                                        <DialogContent >
                                            <DialogContentText marginTop={2}>
                                                <TextField
                                                    disabled
                                                    id="linkShare"
                                                    style ={{width: '85%'}}
                                                    defaultValue="http://localhost:3000/agent/video123456789"
                                                />
                                                <IconButton color="primary" aria-label="copy link" sx={{ m: 1 }} onClick={linkShare}>
                                                    <ContentCopy fontSize='medium'/>
                                                </IconButton>
                                                <Snackbar
                                                    open={snack}
                                                    autoHideDuration={3000}
                                                    onClose={handleCloseSnack}
                                                    message="Copied"
                                                />
                                                
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>
                                                <Typography color="#555555" fontWeight="600" component="div">
                                                    Close
                                                </Typography>
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    <Button onClick={handleClickOpen} variant="contained"  sx={{ m: 1}} startIcon={<Share htmlColor="white"/>}>
                                        <Typography color="white">
                                            SHARE
                                        </Typography>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Card sx={{ height: 320 }}>
                                <CardContent>
                                    <Typography variant="subtitle1" color="#555555" fontWeight="600" component="div">
                                        TAGS
                                    </Typography>
                                    <Box sx={{ marginTop: 2 }}>
                                        {tags.map(item =>(
                                            <Grid container spacing={1}>
                                                {item.tag.map(tagItem =>(
                                                    <Grid item xs={4} md={4}>
                                                        <Chip label={tagItem} />
                                                    </Grid>
                                                ))}
                                            </Grid> 
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: 675 }}>
                        <CardContent>
                            <Typography variant="subtitle1" color="#555555" fontWeight="600" component="div" textAlign="center">
                                NOTES
                            </Typography>
                            <Box sx={{ justifyContent: 'center', maxHeight: 500, overflow: 'auto', marginTop: 2 }}>
                                <List>
                                    {notes.map(item =>(
                                        <ListItem>
                                            <Card sx={{ width: "100vh", backgroundColor: 'rgba(238, 238, 238, 1)' }}>
                                                <CardContent>
                                                    <Typography fontSize={14} color="#555555" fontWeight="600" component="div">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography fontSize={12} color="#555555" component="div">
                                                        {item.date}
                                                    </Typography>
                                                    <Typography fontSize={12} color="#555555" component="div">
                                                        {item.time}
                                                    </Typography>
                                                    <Grid container spacing={1}>
                                                        {item.tags.map(tag =>(
                                                            <Grid item xs={4} md={6}>
                                                                <Chip label={tag} />
                                                            </Grid>
                                                        ))}
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                            <Dialog
                                aria-labelledby="customized-dialog-title"
                                fullWidth="true"
                                maxWidth="xs"
                                
                                open={open2}
                                onClose={handleClose2}
                            >
                                <DialogTitle>Create a new note </DialogTitle>
                                    <DialogContent >
                                        <DialogContentText marginTop={2}>
                                            <from>
                                                <TextField
                                                    id="outlined-read-only-input"
                                                    label="Time"
                                                    margin="normal"
                                                    defaultValue="Tiempo del video"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                                <FormControl fullWidth component="fieldset" margin="normal">
                                                    <FormLabel component="legend" focused={false}>
                                                        SELECT TAGS
                                                    </FormLabel>
                                                    <FormGroup style={{ margin: 5 }} row={true}>
                                                        {checkTags.map((tag, i) => (
                                                            <FormControlLabel
                                                                key={tag}
                                                                control={
                                                                    <input
                                                                        type="checkbox"
                                                                        name={`tags[${i}]`}
                                                                        value={tag}
                                                                        //register={register}
                                                                        //setValue={setValue}
                                                                    />
                                                                }
                                                                label={tag}
                                                            />
                                                        ))}
                                                    </FormGroup>
                                                </FormControl>
                                                <Button variant="contained"  sx={{ m: 1, marginTop: 2 }}>
                                                    <Typography color="white">
                                                        Save
                                                    </Typography>
                                                </Button>
                                            </from>
                                            
                                                <Snackbar
                                                    open={snack}
                                                    autoHideDuration={3000}
                                                    onClose={handleCloseSnack}
                                                    message="Created"
                                                />
                                                
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose2}>
                                                <Typography color="#555555" fontWeight="600" component="div">
                                                    Close
                                                </Typography>
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                            <Button onClick={handleClickOpen2} variant="contained"  sx={{ m: 1, marginTop: 4 }} startIcon={<Add htmlColor="white"/>}>
                                <Typography color="white">
                                    CREATE
                                </Typography>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Video;