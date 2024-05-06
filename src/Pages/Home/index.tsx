import { useState, useEffect } from 'react'
import Card from '../../components/Card/index.tsx'
import Layout from '../../components/Layout/index.tsx'
import { IProduct } from '../../Models/Product.tsx'

function Home() {
    const [items, setItems] = useState<IProduct[]>([])

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => {
                setItems(data)
                console.log(data)
            }
            )
    }, [])

    return (
        <Layout>
            <>
                <h3 className='text-black'>Home</h3>
                <div className="bg-white  gap-4 grid grid-cols-4 w-full max-w-screen-lg">

                    {
                        items?.map(item => (
                            <Card key={item.id} data={item} />
                        )) ?? 'Loading ...'
                    }
                </div>
            </>
        </Layout>
    )
}

export default Home