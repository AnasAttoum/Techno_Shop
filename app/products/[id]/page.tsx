import { getProduct } from "@/api/api";
import Image from "next/image";

export default async function page({ params: { id } }: { params: { id: string } }) {

    const product = await getProduct(parseInt(id))

    return (
        <>
            <div className="text-2xl font-bold">{product.title}</div>
            <div className="text-lg">{product.description}</div>
            <div className="relative w-full h-96 my-5" >
                <Image src={product.thumbnail}
                    fill={true} alt={product.title} className="object-contain rounded-lg" />
            </div>

            <div className="flex justify-center">
                {product.images.map((img: string, index: number) => {
                    return <Image key={index} src={img} width={150} height={150} alt={product.title} />
                })}
            </div>

            <div className="text-lg columns-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus magnam dolores dolorem eveniet nulla, incidunt dignissimos quia? Distinctio quas ullam ab, et corporis exercitationem earum est accusamus numquam repudiandae deleniti perferendis cum aspernatur tenetur dolor blanditiis nisi eveniet sit accusantium fugit atque maxime? Incidunt natus facere porro earum, eum hic rem. Molestiae excepturi enim odio veniam consequuntur reiciendis voluptas ad ipsam aliquid tempore esse, dolor nihil harum itaque aperiam facere nulla deleniti illo fuga asperiores officia nostrum? Dolorem earum, labore debitis itaque, aspernatur ut ipsa voluptas quo amet tempore quaerat consequatur dicta modi optio quasi voluptates repudiandae ipsum maiores animi sed harum. Rem eligendi assumenda quos corporis, natus quis. Explicabo ullam eum sequi, obcaecati repellendus culpa, odio nesciunt quas voluptas cum distinctio veritatis doloribus fugiat soluta laudantium odit ipsum. Adipisci perferendis sapiente rerum provident voluptas non, eligendi fugiat eum itaque amet hic ducimus modi natus voluptates vitae, officiis odio ea? Dignissimos, libero. Quasi, cum facere quam vitae aliquid placeat expedita voluptatem officia harum maxime vero nostrum veritatis quis autem sit necessitatibus molestias ad. Pariatur, architecto recusandae. Aliquid praesentium laboriosam, explicabo distinctio quam itaque consequuntur nihil libero eos vel, ex nisi! Ipsam, maiores. Cum, enim numquam minima modi nihil natus ut.</div>
        </>
    )
}
