import { SearchOutlined } from "@material-ui/icons";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Chip, FormControl, InputLabel, List, ListItem, MenuItem, Select, Typography } from "@mui/material";
import React from "react";

const Search = () => {
    const [searchby, setSearchby] = React.useState('');
    const [value, setValue] = React.useState('');
    const [tags, setTags] = React.useState('');
    const [sortby, setSortBy] = React.useState('');

    const handleChange1 = (event) => {
        setSearchby(event.target.value);
    };

    const handleChange2 = (event) => {
        setValue(event.target.value);
    };

    const handleChange3 = (event) => {
        setTags(event.target.value);
    };
    const handleChange4 = (event) => {
        setSortBy(event.target.value);
    };

    const data = [
        {
            id: "Agent ID: 183499",
            name: "Axel González Carreto",
            date: "12/12/2022",
            tags: ["good", "fast"],
            video_id: "video1",
            image: "/images/aws-amazon.jpeg"
        },
        {
            id: "Agent ID: 2525254",
            name: "Lionel Messi",
            date: "24/12/2023",
            tags: ["goat", "sample"],
            video_id: "video2",
            image: "/images/aws-amazon.jpeg"
        },
        {
            id: "Agent ID: 12345678",
            name: "Neymar Junior",
            date: "01/01/2022",
            tags: ["food", "fail"],
            video_id: "video3",
            image: "/images/aws-amazon.jpeg"
        }
    ]

    return(
        <Box>
            <Typography variant="h5" color="rgba(35, 47, 62, 1)" textAlign="center" margin="20px">
                Search
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', position: 'static'}}>
                <Box sx={{
                    display: 'inline-flex',
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    justifyContent: 'space-evenly'
                }}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Search by</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select"
                            value={searchby}
                            label="Search by"
                            onChange={handleChange1}
                        >   
                            <MenuItem value={10}>Ejemplo 1</MenuItem>
                            <MenuItem value={20}>Ejemplo 2</MenuItem>
                            <MenuItem value={30}>Ejemplo 3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl  sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Value</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select"
                            value={value}
                            label="Value"
                            onChange={handleChange2}
                        >
                            <MenuItem value={40}>Ejemplo 4</MenuItem>
                            <MenuItem value={50}>Ejemplo 5</MenuItem>
                            <MenuItem value={60}>Ejemplo 6</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl  sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Tags</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select"
                            value={tags}
                            label="Tags"
                            onChange={handleChange3}
                        >
                            <MenuItem value={70}>Ejemplo 7</MenuItem>
                            <MenuItem value={80}>Ejemplo 8</MenuItem>
                            <MenuItem value={90}>Ejemplo 9</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained"  sx={{ m: 1}} startIcon={<SearchOutlined htmlColor="white"/>}>
                        <Typography color="white">
                            Search
                        </Typography>
                    </Button>
                    <FormControl sx={{ m: 1, minWidth: 150,}}>
                        <InputLabel id="demo-simple-select-autowidth-label">Sort by</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select"
                            value={sortby}
                            label="Sort by"
                            onChange={handleChange4}
                        >   
                            <MenuItem value={10}>Date</MenuItem>
                            <MenuItem value={20}>ID</MenuItem>
                            <MenuItem value={30}>Name</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', maxHeight: 300, overflow: 'auto', marginTop: 3}}>
                <List>
                    {data.map(item =>(
                        <ListItem key={item.id}>
                            <Card sx={{ display: 'inline-flex', justifyContent: 'center' , marginButton:"10px" }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: 250}}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {item.id}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {item.date}
                                        </Typography>
                                        {item.tags.map(tag =>(
                                            <Chip label={tag} />
                                        ))}
                                    </CardContent>
                                </Box>
                                <CardActionArea sx={{ width: 250 }} href="/agent/video">
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 280}}
                                        image={item.image}
                                        alt="imagen"
                                    />
                                </CardActionArea>
                            </Card>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
}

export default Search;