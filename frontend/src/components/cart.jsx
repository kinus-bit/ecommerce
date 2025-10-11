import { useState, useEffect } from "react";
import API from "@/services/API";
export default function Cart() {
    const [displayProducts, setDisplayProducts] = useState([]);

    const fetchProducts = async (req, res) => {
        try {
            const res = await API.get("/products/all")
            setDisplayProducts(res.data);
        } catch (error) {
            console.log("Failed to fetch products:", error)
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className="min-h-screen grid grid-cols-2 relative   ">
            <div>
                <h1 className="m-3 text-[35px] font-bold">My Cart</h1>
                <hr />
                <div className="w-full">
                    {displayProducts.map((product) => (
                        <div key={product._id}>
                            <div className=" grid grid-cols-3 ">
                                <div className="flex bg-zinc-200 size-32 ml-5 m-3">
                                    <img src={product.productUrl} alt="image" className="object-cover rounded-md w-full" />
                                </div>
                                <div className="flex flex-col justify-center items-center colspan-2">
                                    <p className="font-bold">${product.productPrice}</p>
                                    <p>{product.productName}</p>
                                    <p>{product.productDescription}</p>
                                    <p>quantity:</p>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>

            </div>
            <div className=" absolute fixed right-0 shadow-md h-full flex w-120 justify-center items-center ">
                <div className="">
                    <h2 className="flex justify-center items-center font-bold text-[30px]">Total</h2>

                    <div className="flex mb-10">
                        <h2 className="font-bold text-[20px]">subtotal</h2>
                        <p className="flex w-full justify-around font-semibold ">$50.55</p>
                    </div>
                    <div className="flex w-full">
                        <h2 className="font-bold text-[20px]">Delivery</h2>
                        <p className="flex w-full justify-around font-semibold">(free)</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="flex w-70 border rounded-md justify-center items-center p-2 bg-green-400 font-semibold m-4">Checkout</button>
                    </div>
                    <div>
                        <p className="font-bold text-[20px]">We accept:</p>
                        <div className="flex space-x-6">
                            <p className="border p-3 m-3 rounded-md bg-green-200 font-semibold">mpesa</p>
                            <p className="border p-3 m-3 rounded-md bg-blue-800 text-zinc-400 font-semibold">paypal</p>
                            <p className="border p-3 m-3 rounded-md bg-black  text-white font-semibold">grey</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

