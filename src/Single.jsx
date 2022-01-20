import React from 'react';
import { Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import {LocationOn,AccessTime,HomeOutlined} from '@mui/icons-material';
import Link from '@mui/material/Link';
import './App.css'
function Single(props) {
    return (
        <Grid item sx={{ mt: 5 }} >
            <Typography sx={{ fontWeight: 'semiBold', textAlign:'center' , mb:  1 }} variant="h4">
                {props.title}
            </Typography>
            <img width={320}  src={props.src} alt="" />
            <Grid item  sx={{width :' 80%'}}>
                <Typography sx={{ mt: 1 }} variant="h6">{props.speaker}</Typography>

                 <Typography sx={{ mt: 1,display: 'block' }} variant="p" >{props.address}</Typography>
                <Typography sx={{ mt: 1, display: 'block' }} variant="p">{props.timings}</Typography> 


                <Typography sx={{ mt: 1 }} variant="h6">{props.audience}</Typography>
                <Link sx={{ textDecoration: 'none' }} target='_blank' href={props.href}> <Button sx={{ mt: 1, width: 200 }} variant="contained" color="success" size='large' startIcon={<LocationOn />}>Pin</Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Single;
