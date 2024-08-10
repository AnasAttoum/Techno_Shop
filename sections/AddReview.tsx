'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import { WhiteBorderTextField } from '@/components/WhiteBorderTextField';
import { WhiteBorderRating } from '@/components/WhiteBorderRating';
import Button from '@/components/Button';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

export default function AddReview({ rate, num }: { rate: number, num: number }) {

    const [NewReview, setNewReview] = React.useState<(number | string)[]>([]);
    const [warning, setWarning] = React.useState<string>('');
    const [userName, setUserName] = React.useState<string>(useSelector((state: RootState) => state.persistedReducer.user.userName));
    const comment = React.useRef<HTMLInputElement>(null)
    const rating = React.useRef<number>(0)


    const addRev = () => {
        if (userName!=='') {
            if (NewReview.length !== 2) {
                if (rating.current > 0 && comment.current?.value) {
                    setNewReview([rating.current, comment.current.value])
                    setWarning('')
                }
                else if (rating.current === 0) {
                    setWarning('Please rate the product for best review')
                }
                else if (comment.current === null || comment.current.value === '') {
                    setWarning('Please write your comment for best review')
                }
                else {
                    setWarning('Somthing Wrong')
                }
            }
            else {
                setWarning('You can’t review twice on the same product')
            }
        }
        else{
            setWarning('Please Log In First')
        }
    }

    return (
        <>
            <div style={{ marginTop: '50px' }} className='flex flex-col justify-center items-center gap-5'>
                <div className='flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 72 72"><path fill="#fcea2b" d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z" /><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.1" d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z" /></svg>
                    {rate} ( {num} )
                </div>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        borderColor: 'red',
                        color: 'red'
                    }}
                >
                    <WhiteBorderTextField fullWidth label="Comment" id="fullWidth" multiline rows={4} inputRef={comment} />
                </Box>

                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <WhiteBorderRating
                        name="simple-controlled"
                        // value={rating.current}
                        onChange={(event, newValue) => {
                            if (newValue)
                                rating.current = newValue
                        }}
                    />

                </Box>
                <div style={{ color: 'red' }}>{warning}</div>
                <Button title='Add Comment' func={addRev} />


            </div>
            {(NewReview.length === 2 && typeof NewReview[0] === 'number') &&
                <div style={{ backgroundColor: '#555', color: 'white', border: '1px solid var(--primary)', borderRadius: '10px', marginTop: '50px', padding: '25px' }}>
                    <h1 style={{ fontWeight: '700', fontSize: '25px' }}>{userName}</h1>
                    <Rating name='read-only' value={NewReview[0]} size="small" readOnly />
                    <div>{NewReview[1]}</div>
                </div>
            }

        </>

    )
}