'use client'

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function Filter({brands}:{brands:string[]}) {

    const router = useRouter()
    const path = usePathname()
    const searchParams = useSearchParams();

    const createQueryString = React.useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    const deleteQueryString = React.useCallback(
        (name: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.delete(name);
            return params.toString();
        },
        [searchParams]
    );

    return (
        <div className='flex'>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label"
                    sx={{ color: 'var(--primary)' }}
                >Category</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={searchParams.get("category") || ""}
                    label="Category"
                    onChange={(e) => {
                        if (e.target.value !== '') {
                            router.push(path + "?" + createQueryString("category", e.target.value))
                        }
                        else{
                            router.push(path + "?" + deleteQueryString("category"))
                        }
                    }}
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
                        // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        //   borderColor: 'rgba(228, 219, 233, 0.25)',
                        // },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#999',
                        },
                        // '.MuiSvgIcon-root ': {
                        //   fill: "white !important",
                        // }
                    }}
                >
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    <MenuItem value={'laptop'}>Laptop</MenuItem>
                    <MenuItem value={'tablet'}>Tablet</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label"
                    sx={{ color: 'var(--primary)' }}
                >Brand</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={searchParams.get("brand") || ""}
                    label="Brand"
                    onChange={(e) => {
                        if (e.target.value !== '') {
                            router.push(path + "?" + createQueryString("brand", e.target.value))
                        }
                        else{
                            router.push(path + "?" + deleteQueryString("brand"))
                        }
                    }}
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
                        // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        //   borderColor: 'rgba(228, 219, 233, 0.25)',
                        // },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#999',
                        },
                        // '.MuiSvgIcon-root ': {
                        //   fill: "white !important",
                        // }
                    }}
                >
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    {brands.map((brand,index)=>{
                        return <MenuItem key={index} value={brand}>{brand}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    )
}