
import PropertyCard from "../../Shared/PropertyCard/PropertyCard";
import CommonHeading from "../../Shared/CommonHeading/CommonHeading";
import useProperty from "../../../hooks/useProperty";

const AllProperties = () => {
    const [allProperties] = useProperty()
    const verifiedProperties = allProperties.filter(property => property.verification_status === 'Verified')

    return (
        <>
            <div className="hero h-[513px]" style={{ backgroundImage: 'url(https://i.ibb.co/5YrgV3F/bg-1.png)' }}>
                <div className="hero-overlay bg-black bg-opacity-70"></div>
                <div className="hero-content text-center text-white -content">
                    <div className="max-w-[600px]">
                        <p className="karla-font text-[18px]">Our Properties</p>
                        <h1 className="mb-5 text-[68px] font-semibold lora-font">All of our properties</h1>
                        <p className="mb-5 px-[74px] karla-font text-[18px]">Huge number of propreties availabe here for buy and sell also you can find here co-living property as you like</p>
                    </div>
                </div>
            </div>
            <div className="mb-[120px] mt-[60px]">
                <CommonHeading
                    subHeading={'Admin Verified'}
                    heading={'All Properties'}
                ></CommonHeading>
                <div className="max-w-[1320px] mx-auto grid grid-cols-3 justify-between gap-10">
                    {
                        verifiedProperties.map(property => (
                            <PropertyCard
                                key={property._id}
                                PropertyInfo={property}
                            ></PropertyCard>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default AllProperties;