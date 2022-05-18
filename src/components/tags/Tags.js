import React from "react";
import { Button, Box, Paper, Grid, styled, Typography } from "@mui/material";
import { Add } from "@material-ui/icons";

  

const Tags = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border:"1px solid grey",
    borderRadius: 0
    
  }));
  return (
    
    <Box >
      <Typography variant="h5" color="rgba(28, 29, 31, 0.8)" textAlign="center" fontWeight="500" fontSize={45} mb={4}>
              Tag Configuration
        </Typography>
      <Box sx={{display:"block", justifyContent:"center", backgroundColor:"text.main",  p: 5 , borderRadius:4, maxWidth:850, height: 625, margin: "auto", boxShadow:"5px 0 5px -2px #888"}}>
        
        <Box sx={{display:"block", justifyContent:"center"}}>
          <Grid container sx={{marginTop:8, justifyContent:"center", maxHeight: 400, overflow: 'auto'}}>
            <Grid item xs={5} >
              <Item sx={{borderTopLeftRadius:16, backgroundColor: 'dark' ? '#252e3c' : 'red'}}><Typography fontWeight={600} color='#fdfdfc'>Name</Typography>
                </Item>
            </Grid>
            <Grid item xs={5}>
              <Item sx={{borderTopRightRadius:16, backgroundColor: 'dark' ? '#252e3c' : 'red'}}><Typography fontWeight={600} color='#fdfdfc'>Category</Typography>
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Model A</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Sales</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Model B</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Sales</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Hung up call</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>General</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Not interested</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>General</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Need follow-up call</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Process</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Model B</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Sales</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Hung up call</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>General</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Not interested</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>General</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Need follow-up call</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Process</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Model B</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Sales</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Hung up call</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>General</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Not interested</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>General</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Need follow-up call</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Process</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Model B</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Sales</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Hung up call</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>General</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Not interested</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>General</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Need follow-up call</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Process</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Model B</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Sales</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Hung up call</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>General</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Not interested</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>General</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Need follow-up call</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Process</Item>
            </Grid>
          </Grid>
          <Button variant="contained"  sx={{ ml: 75, mt:4, borderRadius:16}} startIcon={<Add htmlColor="white"/>}>
            <Typography color="white" m={1}>
                Add
            </Typography>
          </Button>

        </Box>
      </Box>
    </Box>
    
  );
};
  
export default Tags;
  