import { useSelector } from 'react-redux';

export default function MiniCart() {
    const itemCount = useSelector(state => state.cart.itemCount);
    const items = useSelector(state => state.cart.items);

    return (
        <div className="fixed top-1/2 right-0 bg-green-600 bg-opacity-50 hover:bg-opacity-95 cursor-pointer rounded-lg">
            <div className="rounded-md m-10 font-bold text-pink-100">
                Cart : {itemCount}
            </div>
            {
                items.map(
                    (item, index)=>(
                        <div key={index}>{item.name}</div>
                    )
                  )
            }
        </div>
    )
}
