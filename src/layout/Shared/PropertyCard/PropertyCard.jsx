
const PropertyCard = ({ PropertyInfo }) => {
    console.log('this is', PropertyInfo)
    return (
        <div>
            <div className="card w-[410px] h-[542px] bg-base-100 shadow-xl rounded-lg relative hover:bottom-2">
                <figure><img className="w-full" src={PropertyInfo.Property_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title text-[#0b2c3d] text-[26px] lora-font">
                            {PropertyInfo.Property_title}
                        </h2>
                        <div className="badge text-white bg-[#0b2c3d] mt-[5px]">{PropertyInfo.verification_status}</div>
                    </div>
                    <p>{PropertyInfo.Property_location}</p>
                    <div className="divider my-[8px]"></div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-[18px] text-[#0b2c3d] lora-font font-semibold">Price: {PropertyInfo.Price_range}</p>
                        </div>
                        <div className="">
                            <button className="btn bg-[#0b2c3d] text-white">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;