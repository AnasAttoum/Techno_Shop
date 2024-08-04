import { getLaptopsProducts, getTabletsProducts } from "@/api/api";
import CardProduct from "@/components/CardProduct";
import { product } from "@/CONSTANTS/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Techno Shop | Products',
};

export default async function Products() {

  const laptops = await getLaptopsProducts()
  const tablets = await getTabletsProducts()
  const products = [...laptops.products,...tablets.products]

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {
        products.map((product: product) => {
          return (
            <CardProduct key={product.id} product={product}/>
          )
        })
      }

    </div>
  )
}