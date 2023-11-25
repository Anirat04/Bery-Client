import { useParams } from "react-router-dom";
import useWishData from "../../../hooks/useWishData";
import { useState } from "react";


const MakeAnOffer = () => {
    const [wishData] = useWishData();
    const currentOffer = useParams()
    let offerData = wishData.filter(data => data._id === currentOffer.id)
    offerData = offerData[0]
    // console.log('make offer data', wishData)
    // console.log('make offer data', currentOffer)
    // console.log('make offer data', offerData)
    return (
        <div className="ml-[300px] w-full min-h-screen">
            <section className="bg-gray-100 h-full">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="">
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="" className="space-y-4">
                                <h1 className="text-[#0b2c3d] text-center text-[36px] font-semibold">Property price: </h1>
                                <div>
                                    <label >Property Title</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                        placeholder="Property Title"
                                        type="text"
                                        name="Property_title"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label>Agent Name</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                            placeholder="Agent name"
                                            type="text"
                                            name="email"
                                        />
                                    </div>
                                    <div>
                                        <label>Location</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                            placeholder="location"
                                            type="text"
                                            name="email"
                                        />
                                    </div>

                                    <div>
                                        <label>Buyer Name</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                            placeholder="Email address"
                                            type="text"
                                            name="BuyerName"
                                        />
                                    </div>
                                    <div>
                                        <label>Buyer Mail</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                            placeholder="your email"
                                            type="email"
                                            name="email"
                                        />
                                    </div>

                                    <div>
                                        <label>Buying date</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="date"
                                            name="Date"
                                        />
                                    </div>
                                    <div>
                                        <label>Offered Price</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                            placeholder="$"
                                            type="number"
                                            name="offeredPrice"
                                        />
                                    </div>
                                </div>

                                {/* <div>
                                    <label className="sr-only" htmlFor="message">Message</label>

                                    <textarea
                                        className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                    ></textarea>
                                </div> */}

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Send Enquiry
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MakeAnOffer;