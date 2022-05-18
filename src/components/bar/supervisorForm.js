import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import { useFormik } from 'formik';

// Colapsar supervisor si no es 'Agent" o 'null' el rol.

function SupervisorForm() {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    });

    const [filter, setFilter] = React.useState('');
    const [supervisor, setSupervisor] = React.useState('');

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const handleChange2 = (event) => {
        setSupervisor(event.target.value);
    }

    return(
        <div>
            <div className="form-container">
            <h1>Agent Information</h1>
            <form onSubmit={formik.handleSubmit} className="userForm">
                <div className="inner-flex">
                <TextField
                    type="text"
                    label="ID"
                    style={{marginBottom:'3.5vh', height:'', width:'15vw', fontSize:'2rem', margin: '2vw'}}
                />
                <TextField
                    type="name"
                    label="Name"
                    style={{marginBottom:'3.5vh', height:'', width:'30vw', fontSize:'2rem', margin: '1vw'}}
                />
                </div>
                <div className="inner-flex">
                <TextField
                    type="number"
                    label="Number of Calls"
                    style={{marginBottom:'3.5vh', height:'', width:'15vw', fontSize:'2rem', margin: '2vw'}}
                />
                <TextField
                    type="email"
                    label="Email"
                    style={{marginBottom:'3.5vh', height:'', width:'30vw', fontSize:'2rem', margin: '1vw'}}
                />
                </div>
                
                <div className="inner-flex">
                <FormControl sx={{ m: 1, minWidth: '30vw' }}>
                <InputLabel id="demo-simple-select-helper-label"style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>Status</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={filter}
                label="Status"
                onChange={handleChange}
                >
                <MenuItem value={10}>Active</MenuItem>
                <MenuItem value={20}>Inactive</MenuItem>
                </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: '30vw' }}>
                <InputLabel id="demo-simple-select-helper-label"style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>Supervisor</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={supervisor}
                label="Supervisor"
                onChange={handleChange2}
                >
                <MenuItem value={10}>Rebeca Guevara</MenuItem>
                <MenuItem value={20}>Marcia Lechuga</MenuItem>
                <MenuItem value={30}>Jonatan Hernandez</MenuItem>
                <MenuItem value={40}>Axel Gonzalez</MenuItem>
                </Select>
                </FormControl>
                </div>
                <div className="buttons">
                <Button
                    style={{
                        backgroundColor: '#86dc3d',
                        color: '#ffffff',
                        width: '15vw',
                        height: '5.25vh',
                        justifyContent: 'center',
                        borderRadius: '2vw',
                        boxShadow: '0 0.45vh 0 0 rgba(0, 0, 0, 0.05)',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        margin: '2vw',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textTransform: 'none'
                    }}
                    >Save</Button>
                    <Button
                    style={{
                        backgroundColor: '#e60026',
                        color: '#ffffff',
                        width: '15vw',
                        height: '5.25vh',
                        justifyContent: 'center',
                        borderRadius: '2vw',
                        boxShadow: '0 0.45vh 0 0 rgba(0, 0, 0, 0.05)',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        margin: '2vw',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textTransform: 'none'
                    }}
                    >Delete</Button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default SupervisorForm;