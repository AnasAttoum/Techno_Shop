import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


export const WhiteBorderTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#3b82f6',
    },
    '& label': {
        color: '#3b82f6',
    },

    '& .MuiInput-underline:after': {
        //   borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            color: '#666',
            borderColor: '#666',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#3b82f6',
        },
        '&.MuiOutlinedInput-root': {
            color: '#666',
        },


    },
});