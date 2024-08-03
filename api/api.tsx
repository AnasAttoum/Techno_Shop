export async function getLaptopsProducts() {
    const res = await fetch('https://dummyjson.com/products/category/laptops')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function getTabletsProducts() {
    const res = await fetch('https://dummyjson.com/products/category/tablets')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function getProduct(id:number) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}