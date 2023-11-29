
import PropertyCard from "../../Shared/PropertyCard/PropertyCard";
import CommonHeading from "../../Shared/CommonHeading/CommonHeading";
import useProperty from "../../../hooks/useProperty";

const AllProperties = () => {
    const [allProperties] = useProperty()
    const verifiedProperties = allProperties.filter(property => property.verification_status === 'Verified')
     
    return (
        <>
            <CommonHeading
                subHeading={'Best Choice'}
                heading={'Popular Properties'}
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
        </>
    );
};

export default AllProperties;