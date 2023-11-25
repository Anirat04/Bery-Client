import useWishData from "../../../../hooks/useWishData";
import PropertyCard from "../../../../layout/Shared/PropertyCard/PropertyCard";

const Wishlist = () => {
    const [wishData] = useWishData()
    return (
        <div className=" w-full bg-base-200 p-[60px] ml-[300px]">
            <h1>this is wishlist {wishData.length}</h1>
            <div className="grid">
                {
                    wishData.map(data => (
                        <div key={data._id} className=" card card-side mb-6 max-h-[380px] bg-base-100 shadow-xl rounded-lg relative hover:bottom-2">

                            <figure><img className="w-full h-full" src={data.Property_img} alt="Shoes" /></figure>
                            <div className="card-body pt-5">
                                <div className="flex gap-3 items-center mb-3">
                                    <img className="w-[44px] h-[44px] rounded-full" src={data.Agent_img} alt="" />
                                    <div>
                                        <p className="text-[#0b2c3d] font-bold">{data.Agent_name}</p>
                                        <div className="badge text-white bg-[#0b2c3d]">{data.verification_status}</div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <h2 className="card-title text-[#0b2c3d] text-[26px] lora-font">
                                        {data.Property_title}
                                    </h2>
                                </div>
                                <p>{data.Property_location}</p>
                                <div className="divider my-[8px]"></div>

                                <div className="flex justify-center items-center">
                                    <div>
                                        <p className="text-[24px] text-[#0b2c3d] lora-font font-semibold">Price: {data.Price_range}</p>
                                    </div>
                                    {/* <div>
                                    <button className="btn bg-[#0b2c3d] text-white">Remove</button>
                                </div> */}
                                </div>
                                <form className="flex flex-col justify-between">
                                    <div>
                                        {/* <p className="text-[18px] text-[#0b2c3d] lora-font font-semibold">Price: {data.Price_range}</p> */}
                                        <input
                                            type="text"
                                            placeholder="Make an offer"
                                            className="min-w-full h-[40px] border border-[#0b2c3d] rounded-md pl-5 mb-5"

                                        />
                                    </div>
                                    <div className="flex gap-5 justify-center">
                                        {/* <Link to={`details/${data._id}`}> */}
                                        <button className="btn w-1/2 bg-[#0b2c3d] text-white">Make an offer</button>
                                        <button className="btn w-1/2 bg-[#0b2c3d] text-white">Remove</button>
                                        {/* </Link> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Wishlist;