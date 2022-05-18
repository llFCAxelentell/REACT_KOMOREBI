import {Send } from "@material-ui/icons";
import { Box, Button, FormControl, InputLabel, List, ListItem, MenuItem, Select, Typography } from "@mui/material";
import React from "react";

const Survey = () => {
    const [value, setValue] = React.useState('');
    const [tags, setTags] = React.useState('');
    const [tags2, setTags2] = React.useState('');
    const [tags3, setTags3] = React.useState('');

    const handleChange2 = (event) => {
        setValue(event.target.value);
    };

    const handleChange3 = (event) => {
        setTags(event.target.value);
    };

    const handleChange4 = (event) => {
        setTags2(event.target.value);
    };

    const handleChange5 = (event) => {
        setTags3(event.target.value);
    };



    return(
        <Box>
            <Typography variant="h5" color="rgba(35, 47, 62, 1)" textAlign="center" margin="20px">
                Survey
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', maxHeight: 300, overflow: 'auto', marginTop: 3}}>
                <Box sx={{
                    display: 'inline-flex',
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    justifyContent: 'space-evenly'
                }}>
                    
                    <FormControl  sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Category of Call</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select"
                            value={value}
                            label="Value"
                            onChange={handleChange2}
                        >
                            <MenuItem value={40}>Ejemplo 1</MenuItem>
                            <MenuItem value={50}>Ejemplo 2</MenuItem>
                            <MenuItem value={60}>Ejemplo 3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl  sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Tag 1</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select"
                            value={tags}
                            label="Tags"
                            onChange={handleChange3}
                        >
                            <MenuItem value={70}>Sells</MenuItem>
                            <MenuItem value={80}>Information</MenuItem>
                            <MenuItem value={90}>Purchase</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl  sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Tag 2</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select"
                            value={tags2}
                            label="Tags2"
                            onChange={handleChange4}
                        >
                            <MenuItem value={100}>Sells</MenuItem>
                            <MenuItem value={110}>Information</MenuItem>
                            <MenuItem value={120}>Purchase</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl  sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Tag 3</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select"
                            value={tags3}
                            label="Tags3"
                            onChange={handleChange5}
                        >
                            <MenuItem value={130}>Sells</MenuItem>
                            <MenuItem value={140}>Information</MenuItem>
                            <MenuItem value={150}>Purchase</MenuItem>
                        </Select>
                    </FormControl>

                    

                    <Button variant="contained"  onClick={() => {
    alert('Enviado correctamente');
  }} sx={{ m: 1}} startIcon={<Send htmlColor="white"/>} >
                        <Typography color="white">
                            Send
                        </Typography>
                    </Button>
                    
                </Box>
            </Box>

            
        </Box>
    );
}

export default Survey;