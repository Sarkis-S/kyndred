// import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


// TODO: Save form data to Redux, should populate in employeee listing
// Redux needed here to pass data between child components

// Question about image handling:
// Are users providing a link or actual file? Both?
// if a file, how do I want to persist this piece of data without database, image hosting?

// initial value is structured based on API, non-alphabetical order (essential keys only)
// const initialValues = {
//   id: {
//     name: '',
//     value: '',
//   },
//   picture: {
//     large: '',
//     medium: '',
//     thumbnail: ''
//   },
//   name: {
//     first: '',
//     last: ''
//   },
//   gender: 'male',
//   dob: {
//     age: 1,
//     date: ''
//   },
//   email: '',
//   phone: '',
//   cell: '',
//   location: {
//     city: '',
//     country: '',
//     postcode: '',
//     state: '',
//     street: {
//       name: '',
//       number: 0
//     },
//     timezone: {
//       description: ''
//     }
//   }
// }

const Onboarding = () => {
  // const [values, setValues] = useState(initialValues);

  return (
    <>
      <div className='onboard'>
        <h1>Onboarding</h1>
      </div>

      <section className='form-section'>
        <form>
          <FormControl>

            <Grid container>
              <Grid items={10}>
                <Box m={1}>
                  <TextField
                    className='textfield'
                    variant='outlined'
                    label='First Name'
                  />
                </Box>
                <Box m={1}>
                  <TextField
                    className='textfield'
                    variant='outlined'
                    label='Last Name'
                  />
                </Box>
                
                <Box m={1}>
                  <span>Gender</span>
                  <RadioGroup
                    row
                    aria-labelledby="row-radio-buttons-group-gender-label"
                    name="row-radio-buttons-group-gender"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </Box>

              </Grid>
            </Grid>
          </FormControl>
        </form>
      </section>
    </>

  )
}

export default Onboarding;
