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

export async function getProduct(id: number) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export async function logInUser(username: string,password:string) {
    return await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
        })
    })
    .then( res => res.json())
    .then(data =>{return data});
    
}

export async function signUpUser(username: string,email:string,password:string) {
    return await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          /* other user data */
        })
      })
      .then(res => res.json())
      .then(data =>{return data});
}
