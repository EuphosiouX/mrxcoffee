import React from 'react'
import Header from './Header'
import Job from './Job';
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import Profile from './Profile';
import { Typography } from '@mui/material';
import Promo from './Promo';
import CompanyAddJob from './CompanyAddJob';

const data = [
    {
        "id": 1,
        "menu": "Match Cappucinno",
        "price": "$6.49",
        "logo": require("../images/matchaCappuccino.jpg"),
        "postedAt": "1d ago",
        "temperature": ["Cold", "Hot"]
    },
    {
        "id": 2,
        "menu": "Cafe Latte",
        "price": "$5.49",
        "logo": require("../images/caffeLatte.jpg"),
        "postedAt": "2d ago",
        "temperature": ["Cold", "Hot"]
    },
    {
        "id": 3,
        "menu": "Blended Coffee",
        "price": "$8.49",
        "logo": require("../images/blendedCoffee.jpg"),
        "postedAt": "5hrs ago",
        "temperature": ["Cold", 'Blended']
    },
]

const Dashboard = () => {
    return (
        <div>
            <Header/>
            <Box py={15}>
                <Grid container ml={4} position='fixed'>
                    <Profile/>
                </Grid>
                <Grid container mx={176} position='fixed'>
                    <Promo/>
                </Grid>
                <Grid container mx={176} mt={40} position='fixed'>
                    <CompanyAddJob/>
                </Grid>
                <Grid container ml={69} width='800px'>
                    <Typography variant='body' fontWeight='700' fontSize='35px' color='#B15E22'>What's New?</Typography>
                    {data.map(job => <Job key={job.id} {...job}/>)}
                </Grid>
            </Box>    
        </div>
    )
}

export default Dashboard