import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeReview.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
// import react ratings
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const HomeReview = () => {
    const [reviewsData, setReviewsData] = useState([])
    const [rating, setRating] = useState(3);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviewsData(data))
    }, [])
    // console.log(reviewsData);

    return (
        <div className='max-w-[1170px] mx-auto my-[200px]'>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[550px]">
                    {
                        reviewsData.map(review => (
                            <SwiperSlide key={review._id}>
                                <div className='relative pt-[45px]'>
                                    <div className='bg-[#f5f9f8] p-[60px] flex justify-end rounded-3xl'>
                                        <div className='w-[480px]'>
                                            <h3 className='text-[#b39359] text-[16px] font-semibold'>Review</h3>
                                            <h2 className='text-[#0b2c3d] text-[36px] lora-font font-semibold my-[20px]'>Reviews from our <br /> happy Clients</h2>
                                            <p>
                                                {review.Review_description}
                                            </p>
                                            <div className='flex items-center justify-between'>
                                                {/* <img className='min-w-full max-w-[60px] max-h-[60px] border rounded-full' src="https://i.ibb.co/RHB41Jp/person4.webp" alt="" /> */}
                                                <h3 className='text-[#b39359] mt-[20px] lora-font text-[20px]'>{review.Reviewer_name}</h3>
                                                <div className='mt-[20px]'>
                                                    <Rating
                                                        style={{ maxWidth: 80, }}
                                                        value={review.Rating}
                                                        onChange={setRating}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-[#0b2c3d] w-[402px] h-[505px] absolute top-0 left-[150px] z-10 rounded-[32px]'>
                                        <img className='h-full' src={review.Reviewer_img} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </>
        </div>
    );
};

export default HomeReview;