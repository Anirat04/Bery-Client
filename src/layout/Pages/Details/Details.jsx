

const Details = () => {
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
                                        src="https://i.ibb.co/bsWwFh1/post1.webp"
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="relative flex items-center bg-gray-100">
                                <span
                                    className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                                ></span>

                                <div className="p-8 sm:p-16 lg:p-24">
                                    <h2 className="text-2xl font-bold sm:text-3xl">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
                                        debitis.
                                    </h2>

                                    <p className="mt-4 text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
                                        molestiae! Quidem est esse numquam odio deleniti, beatae, magni
                                        dolores provident quaerat totam eos, aperiam architecto eius quis
                                        quibusdam fugiat dicta.
                                    </p>

                                    <a
                                        href="#"
                                        className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                    >
                                        Get in Touch
                                    </a>
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