import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import matcha from '../images/matchaCappuccino.jpg'
import React from 'react';

const Job = (job) => {
    return (
        <Grid container pb={1} width='800px' justifyContent="center">
            <Grid container item px={3} py={2} display="flex" border="1px solid #D7A367" borderRadius='10px' alignItems='center' sx={{cursor: 'pointer', transition: '.3s', backgroundColor: '#D7A367', '&:hover':{boxShadow: '0px 5px 25px rgba(0, 0, 0, 0.1)', borderLeft: '6px solid #B15E22'}}}>
                <Grid item xs>
                    <Avatar src={job.logo} sx={{ width: 60, height: 60,mr: 1, cursor: 'pointer', '&:hover':{boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)'}}}/>
                </Grid>
                <Grid item xs>
                    <Typography variant="body1">{job.menu}</Typography>
                    <Typography variant="body" sx={{bgcolor: '#B15E22', padding: 0.75, borderRadius: '5px', display: 'inline-block', color: 'white'}}>{job.price}</Typography>
                </Grid>
                <Grid container item xs>
                    {job.temperature.map((temp) =>(
                        <Grid item key={temp} sx={{bgcolor: '#0A0B14', margin: 0.5, padding: 0.75, borderRadius: '5px', color: 'white', display: 'inline-block'}}>
                            {temp}
                        </Grid>                        
                    ))}
                </Grid>
                <Grid item container xs justifyContent="flex-end">
                    <Button variant="outlined" color='secondary'>Order Online Now</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Job