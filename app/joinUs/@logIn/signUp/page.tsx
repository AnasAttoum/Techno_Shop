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

import { WhiteBorderTextField } from '@/components/WhiteBorderTextField';
import styles from '@/styles/logIn.module.css'
import Button from '@/components/Button';
import { signUpUser } from '@/api/api';
import { useDispatch, useSelector } from 'react-redux';
import { logInData } from '@/lib/slices/userSlice';
import { useRouter } from 'next/navigation';

import Title from "@/components/Title";
import Link from "next/link";
import Spinner from '@/components/Spinner';

export default function SIGNUP() {

  // eslint-disable-next-line
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const dispatch = useDispatch()
  const router = useRouter()
  const userName = React.useRef<HTMLInputElement>(null)
  const email = React.useRef<HTMLInputElement>(null)
  const password = React.useRef<HTMLInputElement>(null)
  const [warning, setWarning] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const signUp = async () => {
    setLoading(true)
    if (userName.current && email.current && password.current && userName.current.value !== '' && password.current.value !== '' && password.current.value !== '') {
      if (regEmail.test(email.current.value)) {
        const data = await signUpUser(userName.current.value, email.current.value, password.current.value)

        setWarning('')
        dispatch(logInData(data.username))
        router.push('/')
      }
      else {
        setWarning('Invalid Email')
      }

    }
    else if (!userName.current || userName.current.value === '') {
      setWarning('Invalid UserName')
    }
    else if (!email.current || email.current.value === '') {
      setWarning('Invalid Email')
    }
    else if (!password.current || password.current.value === '') {
      setWarning('Invalid Password')
    }
    setLoading(false)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Title title='Sign Up' />
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
            <WhiteBorderTextField fullWidth label="Email" id="fullWidth" inputRef={email} />
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
            <Button title='Sign Up' func={signUp} />
            {loading && <Spinner />}
          </div>
          <div className={styles.overlay}></div>
        </div>

        <div>Have an account?<Link href={'/joinUs'} style={{ color: 'var(--primary)' }}>&nbsp;Log in</Link></div>
      </div>
    </>
  )
}