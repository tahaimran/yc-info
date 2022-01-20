import React from 'react';
import { Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from '@mui/material/Link';

function Single(props) {
    return <Grid item sx={{mt:5}} >
        <Typography sx={{ fontWeight: 'bold' }} variant="h4">
            {props.title}
        </Typography>
        <img src={props.src} width={350} alt="" />
        <Typography sx={{mt:1}}  variant="h6">{props.speaker}</Typography>
        <Typography sx={{mt:1}}  variant="h6">{props.audience}</Typography>
        <Link  sx={{ textDecoration: 'none' }} target='_blank' href={props.href}> <Button sx={{mt:1}} variant="contained" color="success" size='large' startIcon={<LocationOnIcon />}  > Find Us </Button>
        </Link>
    </Grid>
}

export default Single;
