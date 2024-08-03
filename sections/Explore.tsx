import { getLaptopsProducts } from "@/api/api"
import CardProduct from "@/components/CardProduct"
import Title from "@/components/Title"
import { product } from "@/CONSTANTS/types"
import { Kurale } from "next/font/google"
import styles from "@/styles/home.module.css"
import Link from "next/link"

const kurale = Kurale({ subsets: ["latin"], weight: ['400'] });

export default async function Explore() {

  const { products } = await getLaptopsProducts()

  return (
    <>
      <Title title='Most Loved Laptops' />

      <div className="flex flex-wrap justify-center gap-5 text-center" style={{ marginTop: '50px' }}>
        <div className={`${kurale.className} ${styles.intro}`} style={{ width: '23.7%', alignSelf: 'center' }}>
          <h1 className="mb-5" style={{ fontSize: '3vw' }}>Find what you need with us.</h1>
          <Link href={'/products'} className={styles.btn}>Explore</Link>
        </div>
        
        {products.slice(0, 3).map((product: product) => {
          return (
            <CardProduct key={product.id} product={product} />
          )
        })}
      </div>
    </>
  )
}