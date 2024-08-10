'use client'
import * as React from 'react';
import Box from '@mui/material/Box';

import { WhiteBorderTextField } from '@/components/WhiteBorderTextField';
import styles from '@/styles/logIn.module.css'
import Button from '@/components/Button';

import Title from "@/components/Title";

export default function SIGNUP() {


  return (
    <div className="flex flex-col justify-center items-center">
      <Title title='Contact Us' />
      <div className={`${styles.container} flex flex-col items-center mt-10 mb-5 p-5 rounded-md relative`} style={{ zIndex: '1' }}>
        <Box
          className="my-5"
          sx={{
            width: 500,
            maxWidth: '100%',
            backgroundColor: '#5555', backdropFilter: 'blur(2px)'
          }}
        >
          <WhiteBorderTextField fullWidth label="UserName" id="fullWidth" />
        </Box>
        <Box
          className="my-5"
          sx={{
            width: 500,
            maxWidth: '100%',
            backgroundColor: '#5555', backdropFilter: 'blur(2px)'
          }}
        >
          <WhiteBorderTextField fullWidth label="Email" id="fullWidth" />
        </Box>
        <Box
          className="my-5"
          sx={{
            width: 500,
            maxWidth: '100%',
            backgroundColor: '#5555', backdropFilter: 'blur(2px)'
          }}
        >
          <WhiteBorderTextField fullWidth label="Message" multiline rows={5} id="fullWidth" />
        </Box>
        <div className='flex items-center gap-5'>
          <Button title='Send' func={() => { }} />
        </div>
        <div className={styles.overlay}></div>
      </div>

    </div>
  )
}