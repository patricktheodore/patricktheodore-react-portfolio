import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function NameInput() {

    function validateName(name) {
        const regex = /^[a-zA-Z\s]*$/;
        return regex.test(String(name));
    }

    const [name, setName] = React.useState('');
    const handleChange = (event) => {
    setName(event.target.value);
    validateName(name);
  };

    if (!validateName(name)) {
        return (
            <TextField 
            error
            className="input-field is-roboto"
            id="outlined-basic name-input" 
            label='Invalid Name' 
            variant="outlined"
            size="small"
            value={name}
            onChange={handleChange} /> 
        )
    } 

    return (
        <TextField 
        id="outlined-basic name-input is-roboto"
        className="input-field" 
        label='Name' 
        variant="outlined"
        size="small"
        value={name}
        onChange={handleChange} />
    )
}
