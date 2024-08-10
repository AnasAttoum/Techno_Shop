import { getLaptopsProducts, getTabletsProducts } from "@/api/api";
import CardProduct from "@/components/CardProduct";
import { product } from "@/CONSTANTS/types";
import { Metadata } from "next";
import Filter from "@/sections/Filter";

export const metadata: Metadata = {
  title: 'Techno Shop | Products',
};

export default async function Products({ searchParams: { category, brand } }: {
  searchParams: { category: string, brand: string }
}) {

  const laptops = await getLaptopsProducts()
  const tablets = await getTabletsProducts()
  let products: product[] = [];
  let categoryProduct: product[] = [];
  let brands: string[] = [];

  if (category === undefined) {
    products = [...laptops.products, ...tablets.products]
    categoryProduct = [...products]

    if (brand !== undefined)
      products = products.filter((product) => {
        return product.brand === brand
      })
  }
  else if (category === 'laptop') {
    products = [...laptops.products]
    categoryProduct = [...products]

    if (brand !== undefined)
      products = products.filter((product) => {
        return product.brand === brand
      })
  }
  else if (category === 'tablet') {
    products = [...tablets.products]
    categoryProduct = [...products]

    if (brand !== undefined)
      products = products.filter((product) => {
        return product.brand === brand
      })
  }


  categoryProduct.forEach((product) => {
    if (
      !brands.some((brand:string) => {
        return brand===product.brand
      })
    )
      return brands.push(product.brand)
    else
      return null
  })


  return (
    <>
      <Filter brands={brands} />
      <div className="flex flex-wrap justify-center gap-5">
        {
          products.map((product: product) => {
            return (
              <CardProduct key={product.id} product={product} />
            )
          })
        }

      </div>
    </>
  )
}