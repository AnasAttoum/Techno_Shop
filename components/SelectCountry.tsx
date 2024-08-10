import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { countryList } from "@/CONSTANTS/data"
import { useState } from 'react';

export default function SelectCountry() {

    const [country, setCountry] = useState('');

    return (
        <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel id="demo-select-small-label"
                sx={{ color: 'var(--primary)' }}
            >Country</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={country}
                onChange={(e) => { setCountry(e.target.value) }}
                label="Country"
                sx={{
                    '& .MuiSelect-select': {
                        color: '#3b82f6',
                    },
                    "& .MuiSvgIcon-root": {
                        color: "#3b82f6",
                    },
                    color: "white",
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#555',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#999',
                    },
                }}
            >
                <MenuItem value="">
                    <em>All</em>
                </MenuItem>
                {countryList.map((country, index) => {
                    return <MenuItem key={index} value={country}>{country}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}
