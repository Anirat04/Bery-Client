import { Link } from "react-router-dom";
import usePropertyBought from "../../../../hooks/usePropertyBought";


const Property_bought = () => {

    const [propertyBought] = usePropertyBought()
    console.log('propertyBought', propertyBought)



    return (
        <div className="ml-[300px] w-full flex justify-center">
            <div className="grid grid-cols-3 gap-8 mt-[80px]">
                {
                    propertyBought.map(PropertyInfo => (
                        <div key={PropertyInfo._id} className="card w-[410px] h-[542px] bg-base-100 shadow-xl rounded-lg relative hover:bottom-2">
                            <figure><img className="w-full" src={PropertyInfo.Property_img} alt="Shoes" /></figure>
                            <div className="card-body pt-5 flex">
                                <div className="flex gap-3 items-center mb-3 justify-center">
                                    <div className="text-center">
                                        <p className="text-[#0b2c3d] font-semibold text-[26px]">Agent: <span className="font-bold">{PropertyInfo.Agent_name}</span></p>
                                        <div className="badge text-white bg-[#0b2c3d] capitalize">{PropertyInfo.status}</div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h2 className="card-title text-[#0b2c3d] text-[26px] lora-font">
                                        {PropertyInfo.Property_title}
                                    </h2>
                                    <p>Location: {PropertyInfo.Property_location}</p>
                                </div>
                                <div>
                                    <p className="text-[18px] text-[#0b2c3d] lora-font font-medium text-center">Offered Amount: <span className="font-bold">${PropertyInfo.offered_Price}</span></p>
                                </div>
                                <div className="divider my-[8px]"></div>
                                <div className="">
                                    <div>
                                        {
                                            PropertyInfo.status === 'accepted' ?
                                                <Link to={`details/${PropertyInfo._id}`}>
                                                    <button className="btn bg-[#0b2c3d] text-white w-full">Pay</button>
                                                </Link>
                                                :
                                                <></>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Property_bought;