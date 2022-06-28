import { React, useEffect, useState} from 'react'
import { Grid, TextField, Select, MenuItem, Box, Typography, Button, Alert } from '@mui/material';

const CompanyAddJob = () => {

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

    const [companyName, setCompanyName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyPass, setCompanyPass] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [jobPosition, setJobPosition] = useState('');
    const [type, setType] = useState('Full Time');
    const [desc, setDesc] = useState('');
    const [langQualification, setLangQualification] = useState([]);
    const [langQualificationString, setLangQualificationString] = useState('');

    const handlePost = async (e) => {
        e.preventDefault()
        let stringLang = ''

        try{
            setError('')
            setLoading(true)

            if(desc.length < 1 || jobPosition.length < 1 || langQualification.length < 1){
                return setError('Fill required field')
            }

            else{
                for(let i=0; i<langQualification.length; i++){
                    if(i+1 === langQualification.length){
                        stringLang += langQualification[i]
                    }
                    else{
                        stringLang += (langQualification[i] + ', ')
                    }
                }        
                await fetch('/jobs/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        company_name: companyName,
                        address: address,
                        phone_no: phoneNo,
                        email: companyEmail,
                        job_position: jobPosition,
                        type: type,
                        desc: desc,
                        lang_qualification: stringLang,
                    })
                })
            }
        }catch (err){
            setError('Unexpected error occured')
            console.log(err)
        }
        setLoading(false)
        window.location.reload()
    }

        const handleEditSkill = (skill) => {
            if(langQualification.includes(skill)){
                setLangQualification(langQualification => langQualification.filter(s => s !== skill)) 
            }
            else {
                setLangQualification([...langQualification, skill]) 
            }
        }

    return (
        <Grid container width='450px' height='300px' mx={1} px={5} py={3} borderRadius='10px' justifyContent="center" bgcolor='#D7A367'>
            <Grid item xs={12}>
                <Typography variant='body' fontSize='25px'>Give Feedback</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    margin="normal"
                    variant='filled'
                    required
                    multiline
                    rows={4}
                    fullWidth
                    label="Write feedback here"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </Grid>
            <Button variant='contained' onClick={handlePost} sx={{backgroundColor:'#B15E22'}}>Send Feedback</Button>
        </Grid>
    )
}

export default CompanyAddJob