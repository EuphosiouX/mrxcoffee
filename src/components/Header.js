import { React, useState, useEffect, useRef } from 'react'
import logo from '../images/konnekt-logo.png'
import instagram from '../images/Instagram_70px.png'
import twitter from '../images/twitter_70px.png'
import whatsapp from '../images/whatsapp_70px.png'
import { TextField, Avatar, Link, Button, Fab, AppBar, Box, Grid, Badge,  Select, MenuItem, Alert, Typography, Dialog, DialogTitle, DialogContent, DialogActions, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LoginIcon from '@mui/icons-material/Login';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {

    const [id, setId] = useState()
    const [image, setImage] = useState('');
    const [imageFile, setImageFile] = useState();
    const [picture, setPicture] = useState('');
    const [image64, setImage64] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('');
    const [enrollError, setEnrollError] = useState('');
    const [matchError, setMatchError] = useState('');
    const [uploadError, setUploadError] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenn, setIsOpenn] = useState(false);
    const [isOpennn, setIsOpennn] = useState(false);
    
    const webcamRef = useRef();

    const toBase64 = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setImage64(reader.result)
        }
    }

    
    return (
        <header>
            <AppBar sx={{bgcolor: '#D7A367'}}>
                <Grid container justifyContent="center" py={2}>
                    <Grid item xs={11} display="flex" justifyContent="space-between">
                        <Box display="flex" alignItems='center' justifyContent='center'>
                            <Link href="/" style={{ textDecoration: 'none' }}><Typography variant="h3" color="#B15E22">KOFFIE</Typography></Link>
                            {/* <Select variant='filled' defaultValue='Full Time' sx={{marginLeft: 3}} size='small'>
                                <MenuItem value="Full Time">Full-Time</MenuItem>
                                <MenuItem value="Part Time">Part-Time</MenuItem>
                                <MenuItem value="Full and Part">Full/Part</MenuItem>
                            </Select>
                            <TextField label="Search Job Now" type="search" variant='filled' size='small' sx={{mx: 3}}/>  
                            <Button variant="contained" startIcon={<SearchIcon />} sx={{bgcolor:'#008ED3'}}>Search</Button> */}
                        </Box>
                        <Box display="flex" alignItems='center'>
                            <Link href="/" style={{ textDecoration: 'none' }}><Typography mx={3} variant="h5" color="black">Menu</Typography></Link>
                            <Link href="/" style={{ textDecoration: 'none' }}><Typography mx={3} variant="h5" color="black">About Us</Typography></Link>
                            <Link href="/" style={{ textDecoration: 'none' }}><Typography mx={3} variant="h5" color="black">Promo</Typography></Link>
                            <Link href="/" style={{ textDecoration: 'none' }}><Typography mx={3} variant="h5" color="black">Order</Typography></Link>
                            <Button variant="contained" startIcon={<AssignmentIcon/>} sx={{bgcolor:'#B15E22', mx: 1}}>Sign In</Button>
                            <Button variant="contained" startIcon={<LoginIcon/>} sx={{bgcolor:'#B15E22', mx: 1}}>Log In</Button>
                            {/* <Fab size="small" href="http://localhost:3000/" sx={{bgcolor:'#008ED3'}} color='primary'>
                                <Badge color="secondary" badgeContent={3}>
                                    <MailIcon sx={{color: 'white'}}/>
                                </Badge>
                            </Fab>
                            <Fab size="small" href="http://localhost:3000/" sx={{bgcolor:'#008ED3', mx: 1}} color='primary'>
                                <Badge color="secondary" variant="dot">
                                    <NotificationsIcon sx={{color: 'white'}}/>
                                </Badge>
                            </Fab>
                            <Avatar src={image} sx={{ width: 60, height: 60, border: "1px solid #008ED3", mr: 1, cursor: 'pointer', '&:hover':{boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)'}}}/>
                            <Link sx={{color:'#008ED3', fontSize: '20px'}}>Logout</Link> */}
                        </Box>
                    </Grid> 
                </Grid>
            </AppBar>
        </header>
    )
}

export default Header