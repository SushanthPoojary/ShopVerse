import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';
import { Link } from 'react-router';

const CartPage = () => {

    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.cartItems);
    // console.log(cartItems);

    const getCartTotal = () => {

        // cartItems.reduce((total, item) => {
        //     console.log(item);
        //     console.log(total);
        //     console.log(item.price);
        //     console.log(item.quantity);
        // }, 0);

        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="max-w-[1440px] mx-auto px-[24px] py-[64px]">
            <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>
            <div className="bg-[#1E293B] rounded-lg p-6">
                {cartItems.length === 0 ? (
                    <div className="text-center text-[#E2E8F0] py-8">
                        <span>Your cart is empty.</span>
                        <Link to="/products" className="text-[#FBBF24] ml-2 hover:underline">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <img
                                        className="w-20 h-20 object-cover rounded"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-medium">{item.name}</h3>
                                        <div className="text-[#E2E8F0] mt-1">₹{item.price}</div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                className="bg-[#334155] w-8 h-8 rounded flex items-center justify-center"
                                                onClick={() => dispatch(updateQuantity(item.id, item.quantity - 1))}
                                                aria-label={`Decrease quantity of ${item.name}`}
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                className="bg-[#334155] w-8 h-8 rounded flex items-center justify-center"
                                                onClick={() => dispatch(updateQuantity(item.id, item.quantity + 1))}
                                                aria-label={`Increase quantity of ${item.name}`}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        className="text-[#E2E8F0] hover:text-white"
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                        aria-label={`Remove ${item.name} from cart`}
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 border-t border-[#334155] mt-4">
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-medium">Total</span>
                                <span className="font-bold text-xl">₹{getCartTotal()}</span>
                            </div>
                            <button
                                className="w-full bg-[#FBBF24] text-[#1E293B] py-3 rounded font-medium hover:bg-[#F59E0B] transition"
                                onClick={() => alert("Checkout functionality would go here")}
                            >
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPage;