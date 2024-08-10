'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Title from "@/components/Title";
import Link from "next/link";
import { WhiteBorderTextField } from '@/components/WhiteBorderTextField';
import styles from '@/styles/logIn.module.css'
import Button from '@/components/Button';
import { logInUser } from '@/api/api';
import { useDispatch, useSelector } from 'react-redux';
import { logInData } from '@/lib/slices/userSlice';
import { useRouter } from 'next/navigation';
import { RootState } from '@/lib/store';
import Spinner from '@/components/Spinner';

export default function LogIn() {
  const dispatch = useDispatch()
  const router = useRouter()
  const userName = React.useRef<HTMLInputElement>(null)
  const password = React.useRef<HTMLInputElement>(null)
  const [warning, setWarning] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  const logIn = async () => {
    setLoading(true)
    if (userName.current && password.current && userName.current.value !== '' && password.current.value !== '') {
      const data = await logInUser(userName.current.value, password.current.value)
      if (Object.keys(data).includes('message')) {
        setWarning(data.message)
      }
      else {
        setWarning('')
        dispatch(logInData(data.username))
        router.push('/')
      }

    }
    else if (!userName.current || userName.current.value === '') {
      setWarning('Invalid UserName')
    }
    else if (!password.current || password.current.value === '') {
      setWarning('Invalid Password')
    }
    setLoading(false)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Title title='Log In' />
        <div className={`${styles.container} flex flex-col items-center mt-10 mb-5 p-5 rounded-md relative`} style={{ zIndex: '1' }}>
          <Box
            className="my-5"
            sx={{
              width: 500,
              maxWidth: '100%',
              backgroundColor: '#5555', backdropFilter: 'blur(2px)'
            }}
          >
            <WhiteBorderTextField fullWidth label="UserName" id="fullWidth" inputRef={userName} />
          </Box>
          <Box
            className="my-5"
            sx={{
              width: 500,
              maxWidth: '100%',
              backgroundColor: '#5555', backdropFilter: 'blur(2px)'
            }}
          >
            <FormControl sx={{ width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password" sx={{ color: '#3b82f6' }}>Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                sx={{
                  '& .MuiOutlinedInput-input': {
                    color: '#555',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#666',
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#B2BAC2"
                  },

                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      color='primary'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputRef={password}
              />
            </FormControl>
          </Box>
          <div className='mb-5' style={{ color: 'red' }}>{warning}</div>
          <div className='flex items-center gap-5'>
            <Button title='Log In' func={logIn} />
            {loading && <Spinner />}
          </div>
          <div className={styles.overlay}></div>
        </div>

        <div>Don’t have an account yet?<Link href={'/joinUs/signUp'} style={{ color: 'var(--primary)' }}>&nbsp;Sign up</Link></div>
      </div>
    </>
  )
}