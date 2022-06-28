import { React, useState, useEffect } from 'react'
import { Alert, Button, Typography, Avatar, Box, Grid, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, IconButton, Link } from '@mui/material'
import instagram from '../images/Instagram_70px.png'
import twitter from '../images/twitter_70px.png'
import whatsapp from '../images/whatsapp_70px.png'

const Profile = () => {

    const skillList = [
        'Python',
        'C++',
        'C',
        'Java',
        'Javascript',
        'Node',
        'SQL',
        'HTML',
        'CSS'
    ]

    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [name, setName] = useState('');
    const [bdate, setBdate] = useState(new Date());
    const [gender, setGender] = useState('Female');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [desc, setDesc] = useState('');
    const [pref, setPref] = useState([]);
    const [prefString, setPrefString] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const dateStyle = (date) => {
        let dd = date.getDate();
        let mm = date.getMonth()+1;
        const yyyy = date.getFullYear();

        if(dd<10){
            dd = '0' + dd
        }

        if(mm<10){
            mm = '0' + mm
        }

        return setBdate(yyyy + '-' + mm + '-' + dd)
    }

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
        window.location.reload()
    }

    const handleUpdateProfile = async (e) => {
        e.preventDefault()
        let stringPref = ''

        try{
            setError('')
            setLoading(true)

            if(desc.length < 1 || firstName.length < 1 || lastName.length < 1 || pref.length < 1){
                handleClose()
            }

            else{
                for(let i=0; i<pref.length; i++){
                    if(i+1 === pref.length){
                        stringPref += pref[i]
                    }
                    else{
                        stringPref += (pref[i] + ', ')
                    }
                }        
                await fetch('/jobseeker/' + id + '/', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: firstName + ' ' + lastName,
                        birth_date: bdate,
                        gender: gender,
                        desc: desc,
                        lang_preference: stringPref
                    })
                })
            }
        }catch (err){
            setError('Unexpected error occured')
            console.log(err)
        }
        setLoading(false)
        handleClose()
    }

    const handleEditSkill = (skill) => {
        if(pref.includes(skill)){
            setPref(pref => pref.filter(s => s !== skill)) 
        }
        else {
            setPref([...pref, skill]) 
        }
    }

    return (
        <div>
            <Grid container width='450px' height='500px' mx={1} borderRadius='10px' justifyContent="center" sx={{cursor: 'pointer', backgroundColor: '#D7A367', '&:hover':{boxShadow: '0px 25px 25px rgba(0, 0, 0, 0.1)'}}}>
                <Grid container height='250px' borderRadius='10px' sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random/?coffeeshop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'}}
                />
                <Grid container mx={2} justifyContent='center'>
                    <Grid container>
                        <Typography variant='body' fontWeight='700' fontSize='45px' color='#black'>Visit Our Shop</Typography>
                        <Typography variant='body' fontWeight='500' fontSize='20px' color='#black'>Address: Addison Street 8 Ave 3</Typography>
                        <Typography variant='body' fontWeight='500' fontSize='20px' color='#black'>Open Hour: 9AM - 11PM</Typography>
                        <Typography variant='body' fontWeight='500' fontSize='20px' color='#black'>Contacts: +62 85771736879</Typography>
                    </Grid>
                    <Link href="https://www.instagram.com/"><Avatar src={instagram} sx={{ width: 60, height: 60, ml: 3,mr: 1, cursor: 'pointer', '&:hover':{boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)'}}}/></Link>
                    <Link href="https://www.twitter.com/"><Avatar src={twitter} sx={{ width: 60, height: 60,mr: 1, cursor: 'pointer', '&:hover':{boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)'}}}/></Link>
                    <Link href="https://web.whatsapp.com/"><Avatar src={whatsapp} sx={{ width: 60, height: 60,mr: 1, cursor: 'pointer', '&:hover':{boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)'}}}/></Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile