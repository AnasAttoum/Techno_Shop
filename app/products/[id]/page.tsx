import { getProduct } from "@/api/api";
import Title from "@/components/Title";
import ImagesInProductPage from "@/sections/ImagesInProductPage";
import TableDetails from '@/sections/TableDetails'
import { Metadata } from "next";
import Reviews from '@/sections/Reviews'
import AddToCart from "@/components/AddToCart";


export async function generateMetadata({
  params: { id }
}: { params: { id: string } }): Promise<Metadata> {
  const product = await getProduct(parseInt(id))
  return {
    title: 'Techno Shop | ' + product.title,
    description: product.description
  };
}


export default async function page({ params: { id } }: { params: { id: string } }) {


  const product = await getProduct(parseInt(id))


  return (
    <>
      <div className="text-2xl font-bold">{product.title} ( <span style={product.stock < 15 ? { color: 'red' } : { color: 'var(--primary)' }}>{product.stock}</span> in Stock )</div>
      <div className="text-lg">{product.description}</div>
      <div className="flex my-5">
        <AddToCart id={parseInt(id)} price={product.price} />
      </div>

      <ImagesInProductPage product={product} />
      <TableDetails product={product} />

      <div className="text-lg columns-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus magnam dolores dolorem eveniet nulla, incidunt dignissimos quia? Distinctio quas ullam ab, et corporis exercitationem earum est accusamus numquam repudiandae deleniti perferendis cum aspernatur tenetur dolor blanditiis nisi eveniet sit accusantium fugit atque maxime? Incidunt natus facere porro earum, eum hic rem. Molestiae excepturi enim odio veniam consequuntur reiciendis voluptas ad ipsam aliquid tempore esse, dolor nihil harum itaque aperiam facere nulla deleniti illo fuga asperiores officia nostrum? Dolorem earum, labore debitis itaque, aspernatur ut ipsa voluptas quo amet tempore quaerat consequatur dicta modi optio quasi voluptates repudiandae ipsum maiores animi sed harum. Rem eligendi assumenda quos corporis, natus quis. Explicabo ullam eum sequi, obcaecati repellendus culpa, odio nesciunt quas voluptas cum distinctio veritatis doloribus fugiat soluta laudantium odit ipsum. Adipisci perferendis sapiente rerum provident voluptas non, eligendi fugiat eum itaque amet hic ducimus modi natus voluptates vitae, officiis odio ea? Dignissimos, libero. Quasi, cum facere quam vitae aliquid placeat expedita voluptatem officia harum maxime vero nostrum veritatis quis autem sit necessitatibus molestias ad. Pariatur, architecto recusandae. Aliquid praesentium laboriosam, explicabo distinctio quam itaque consequuntur nihil libero eos vel, ex nisi! Ipsam, maiores. Cum, enim numquam minima modi nihil natus ut.</div>

      <Title title="Reviews" />
      <Reviews rate={product.rating} reviews={product.reviews} />
    </>
  )
}
