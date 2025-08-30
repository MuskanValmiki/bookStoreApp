import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../components/Cards';
import list from "../../public/list.json";

export default function Freebook() {
    const filterData = list.filter((item) => item.category === "Free");

    var settings = {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-semibold text-x1 pb-2'>Free Offered Courses</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                        veritatis alias pariatur ad dolor repudiandaw wligendi corporis nulla
                        non suscipit, iure neque earun?
                    </p></div>

                <div>
                    <Slider {...settings}>
                        {filterData.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}
