import { product } from "@/CONSTANTS/types";
import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/cardProducts.module.css'

export default function CardProduct({ product }: { product: product }) {
    return (
        <Link href={`/products/${product.id}`} className={`${styles.container} flex flex-col bg-blue-50 p-5 rounded-xl`} style={{ width: '18.5vw', border: '1px solid var(--primary)' }}>
            <Image src={product.thumbnail}
                width={350} height={150} alt={product.title} className="object-cover rounded-lg" />
            <h1 className={`text-gray-950 text-center my-3`} style={{fontSize:'1.3vw'}}>{product.title}</h1>
            <h3 className={`text-gray-950 text-center`} style={{fontSize:'.9vw',display:'-webkit-box',WebkitLineClamp:'3',WebkitBoxOrient:'vertical',overflow:'hidden'}}>{product.description}</h3>
        </Link>
    )
}
