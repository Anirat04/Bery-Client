import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ProviderContext } from "../../../Provider/Provider";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Details = () => {
    const { user } = useContext(ProviderContext)
    const axiosSecure = useAxiosSecure()
    const propertyDetails = useLoaderData()
    console.log(propertyDetails)

    const handleAddToWishlist = (wishItem) => {
        const {_id, Agent_img, Agent_name, Price_range, Property_img, Property_location, Property_title, description, verification_status} = wishItem
        if (user && user.email) {
            // ToDo: send data to the wish database
            const wishItem = {
                propertyID: _id,
                wishUserEmail: user.email,
                Agent_img,
                Agent_name,
                Price_range,
                Property_img,
                Property_location,
                Property_title,
                description,
                verification_status
            }
            axiosSecure.post('/wishlist', wishItem)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Added to cart list",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // refetch data to update the cart length
                    // refetch()
                }
            })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Login to add this property to your wishlist",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login to proceed",
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page by navigate
                    // navigate('/login')
                }
            });
        }
        console.log(wishItem)
    }

    return (
        <div>
            <div className="hero h-[513px]" style={{ backgroundImage: 'url(https://i.ibb.co/5YrgV3F/bg-1.png)' }}>
                <div className="hero-overlay bg-black bg-opacity-70"></div>
                <div className="hero-content text-center text-white -content">
                    <div className="max-w-[600px]">
                        <p className="karla-font text-[18px]">Our Properties</p>
                        <h1 className="mb-5 text-[68px] font-semibold lora-font">Properties Details</h1>
                        <p className="mb-5 px-[74px] karla-font text-[18px]">Huge number of propreties availabe here for buy and sell also you can find here co-living property as you like</p>
                    </div>
                </div>
            </div>
            <div>
                {/* <section className="py-6  dark:text-gray-50">
                    <div className="max-w-[1320px] mx-auto flex gap-5">
                        <div className="flex w-1/2">
                            <img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 aspect-square" />
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 w-1/2 gap-5">
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/x2DgyJM/01.png" />
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/4K0nsrt/03.png" />
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/CJfWqhV/05.png" />
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/ZBydNz1/07.png" />
                        </div>
                    </div>
                </section> */}
                <section>
                    <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                            <div className="relative z-10 lg:py-16">
                                <div className="relative h-64 sm:h-80 lg:h-full">
                                    <img
                                        alt="House"
                                        src={propertyDetails.Property_img}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* details section */}
                            <div className="relative flex items-center bg-gray-100">
                                <span
                                    className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                                ></span>

                                <div className="p-8 sm:p-16 lg:p-24">
                                    <div className="flex items-center gap-4">
                                        <img className="w-[70px] h-[70px] rounded-full" src={propertyDetails.Agent_img} alt="" />
                                        <div>
                                            <p className="text-[#b39359] text-[22px] lora-font font-semibold">{propertyDetails.Agent_name}</p>
                                            <div className="badge text-white bg-[#0b2c3d]">{propertyDetails.verification_status}</div>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl lora-font font-semibold sm:text-4xl mt-[20px]">
                                        {propertyDetails.Property_title}
                                    </h2>
                                    <p className="text-gray-400 text-[14px] underline-offset-1">{propertyDetails.Property_location}</p>

                                    <p className="mt-4 text-gray-600 karla-font text-[20px]">
                                        <span className="font-bold">Description:</span>
                                        <br />
                                        {propertyDetails.description}
                                    </p>
                                    <p className="text-[24px] text-[#0b2c3d] lora-font font-semibold mt-5">Price: {propertyDetails.Price_range}</p>

                                    <div className="flex gap-5">
                                        <a
                                            onClick={() => handleAddToWishlist(propertyDetails)}
                                            href="#"
                                            className="mt-8 inline-block rounded border border-[#0b2c3d] bg-[#0b2c3d] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white hover:bg-[#b39359] focus:outline-none focus:ring active:text-indigo-500"
                                        >
                                            Add to wishlist
                                        </a>
                                        <a
                                            href="#"
                                            className="mt-8 inline-block rounded border border-[#0b2c3d] bg-[#0b2c3d] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white hover:bg-[#b39359] focus:outline-none focus:ring active:text-indigo-500"
                                        >
                                            Review
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Details;