import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

export const WhiteBorderRating = styled(Rating)({
    // '& svg.MuiSvgIcon-root': {
    //     stroke: '#666'
    // },
    '& .MuiRating-icon': {
        color: '#faaf00'
    }
});