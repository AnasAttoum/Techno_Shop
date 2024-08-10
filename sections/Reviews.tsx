import { product } from "@/CONSTANTS/types";
import Rating from '@mui/material/Rating';
import AddReview from '@/sections/AddReview'

export default function Reviews({ reviews,rate }: { reviews: product['reviews'],rate:number }) {
    return (
        <>
            <AddReview rate={rate} num={reviews.length}/>
            {reviews.map((review, index) => {
                return (
                    <div key={index} style={{ backgroundColor: '#555', color: 'white', border: '1px solid var(--primary)', borderRadius: '10px', marginTop: '50px', padding: '25px' }}>
                        <h1 style={{ fontWeight: '700', fontSize: '25px' }}>{review.reviewerName}</h1>
                        <Rating name='read-only' value={review.rating} size="small" readOnly />
                        <div>{review.comment}</div>
                    </div>
                )
            })}
        </>
    )
}