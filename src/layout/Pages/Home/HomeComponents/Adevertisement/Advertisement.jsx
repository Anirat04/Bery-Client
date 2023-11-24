// import { useEffect, useState } from "react";
import CommonHeading from "../../../../Shared/CommonHeading/CommonHeading";
import useProperty from "../../../../../hooks/useProperty";
import { Link } from "react-router-dom";

const Advertisement = () => {
    const [allProperties] = useProperty()
    const advertisementProperties = allProperties.slice(0, 6)
    // const [allProperties, setAllProperties] = useState([])
    // const advertisementProperties = allProperties.slice(0, 6)
    // useEffect(() => {
    //     fetch('property.json')
    //         .then(res => res.json())
    //         .then(data => setAllProperties(data))
    // }, [])


    // console.log('all properties', allProperties)
    console.log('Advertisement properties', advertisementProperties)
    return (
        <div className="max-w-[1320px] mx-auto">
            <CommonHeading
                subHeading={'Best Choice'}
                heading={'Popular Properties'}
            ></CommonHeading>
            <div className="grid grid-cols-3 justify-between gap-10">
                {
                    advertisementProperties.map(property => (
                        <div key={property._id} className="card w-[410px] h-[542px] bg-base-100 shadow-xl rounded-lg relative hover:bottom-2">
                            <figure><img className="w-full" src={property.Property_img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="flex justify-between">
                                    <h2 className="card-title text-[#0b2c3d] text-[26px] lora-font">
                                        {property.Property_title}
                                    </h2>
                                    <div className="badge text-white bg-[#0b2c3d] mt-[5px]">{property.verification_status}</div>
                                </div>
                                <p>{property.Property_location}</p>
                                <div className="divider my-[8px]"></div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-[18px] text-[#0b2c3d] lora-font font-semibold">Price: {property.Price_range}</p>
                                    </div>
                                    <div className="">
                                        <Link to={`all_properties/details/${property._id}`}>
                                            <button className="btn bg-[#0b2c3d] text-white">Details</button>
                                        </Link>
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

export default Advertisement;