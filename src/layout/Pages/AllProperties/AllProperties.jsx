import { useEffect, useState } from "react";
import PropertyCard from "../../Shared/PropertyCard/PropertyCard";

const AllProperties = () => {
    const [allProperties, setAllProperties] = useState([])
    // const advertisementProperties = allProperties.slice(0, 6)
    useEffect(() => {
        fetch('property.json')
            .then(res => res.json())
            .then(data => setAllProperties(data))
    }, [])
    return (
        <div className="max-w-[1320px] mx-auto grid grid-cols-3 justify-between gap-10">
            {
                allProperties.map(property => (
                    <PropertyCard
                        key={property._id}
                        PropertyInfo={property}
                    ></PropertyCard>
                ))
            }
        </div>
    );
};

export default AllProperties;