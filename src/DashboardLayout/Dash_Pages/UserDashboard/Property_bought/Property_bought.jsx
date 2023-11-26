import usePropertyBought from "../../../../hooks/usePropertyBought";


const Property_bought = () => {

    const [propertyBought] = usePropertyBought()
    console.log('propertyBought', propertyBought)



    return (
        <div className="ml-[300px]">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>Property Image</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Agent name</th>
                            <th>Offered Amount</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="text-center">
                            <td>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <td>Purple</td>
                            <td>Purple</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 2 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Property_bought;