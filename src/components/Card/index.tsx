import { IProduct } from '../../Models/Product'

function Card(props: { data: IProduct[] }) {
    return (
        <div className='bg-pink cursor-pointer w-56 h-60 mt-5 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5 '>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-1 py-.5'>{props.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={props.data.images[0]} alt={props.data.title} />
                <div className='absolute rounded-full m-2 bg-white/60 w-6 h-6 top-0 right-0 flex justify-center items-center'>
                    +
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{props.data.title}</span>
                <span className='text-lg font-medium'>${props.data.price}</span>
            </p>
        </div>
    )
}

export default Card