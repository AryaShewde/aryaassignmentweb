import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/review.css"

const review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <div>
      <div className='head'>
        <h1 className='heading'>STUDENTS <span className='blues'>REVIEWS</span></h1>
        <div className='dash'></div>
      </div>
      <div className='review'>
        <div className='subr'>
          <Slider {...settings}>
            {data.map((d) => (
              <div className='aas'>
                <div className='demo'>
                  <img src={d.img} alt="" className='image' />
                  <div>
                    <p className='name'>{d.name}</p>
                    <div className='setofstar'>
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.hstarimg} alt="" className='starimg' />
                    </div>
                  </div>
                </div>
                <div className='demo2'>
                  <p>{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className='subr'>
          <Slider {...settings}>
            {data2.map((d) => (
              <div className='aas'>
                <div className='demo'>
                  <img src={d.img} alt="" className='image' />
                  <div>
                    <p className='name'>{d.name}</p>
                    <div className='setofstar'>
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.hstarimg} alt="" className='starimg' />
                    </div>
                  </div>
                </div>
                <div className='demo2'>
                  <p>{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className='subr'>
          <Slider {...settings}>
            {data3.map((d) => (
              <div className='aas'>
                <div className='demo'>
                  <img src={d.img} alt="" className='image' />
                  <div>
                    <p className='name'>{d.name}</p>
                    <div className='setofstar'>
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.hstarimg} alt="" className='starimg' />
                    </div>
                  </div>
                </div>
                <div className='demo2'>
                  <p>{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className='subr'>
          <Slider {...settings}>
            {data4.map((d) => (
              <div className='aas'>
                <div className='demo'>
                  <img src={d.img} alt="" className='image' />
                  <div>
                    <p className='name'>{d.name}</p>
                    <div className='setofstar'>
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.hstarimg} alt="" className='starimg' />
                    </div>
                  </div>
                </div>
                <div className='demo2'>
                  <p>{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className='subr'>
          <Slider {...settings}>
            {data5.map((d) => (
              <div className='aas'>
                <div className='demo'>
                  <img src={d.img} alt="" className='image' />
                  <div>
                    <p className='name'>{d.name}</p>
                    <div className='setofstar'>
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.starimg} alt="" className='starimg' />
                      <img src={d.hstarimg} alt="" className='starimg' />
                    </div>
                  </div>
                </div>
                <div className='demo2'>
                  <p>{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

const data = [
  {
    name: `RAGHAV SINGH`,
    img: `https://theankit.org/wp-content/uploads/2023/06/1648028377.jpeg`,
    starimg: `https://tmpfiles.nohat.cc/full-m2H7H7A0m2m2i8i8.png`,
    hstarimg: `/starimg/half.png`,
    review: `Before buying this course, I thought that this course would be like other courses but it is not so, after two weeks of buying this course, I started earning around ₹500 per day. Thank you so much sir.`
  },
  {
    name: `ANUBHAV DESAI`,
    img: `https://theankit.org/wp-content/uploads/2023/06/1648028202.jpeg`,
    starimg: `https://tmpfiles.nohat.cc/full-m2H7H7A0m2m2i8i8.png`,
    hstarimg: `/starimg/half.png`,
    review: `I have tried many courses earlier also but this is the only course through which I have been able to earn money and still i am earning, thank you so much to the team.`
  }
]
const data2 = [
  {
    name: `JIYA MALIK`,
    img: `https://theankit.org/wp-content/uploads/2023/06/1648103765.jpeg`,
    starimg: `https://tmpfiles.nohat.cc/full-m2H7H7A0m2m2i8i8.png`,
    hstarimg: `https://tmpfiles.nohat.cc/full-m2H7H7A0m2m2i8i8.png`,
    review: `Being a girl, I was not much interested in earning money from Telegram, but after enrolling in this course, I started earning ₹ 20,000 to ₹ 25,000 per month.`
  },
  {
    name: `NILIMA PALIWAL`,
    img: `https://theankit.org/wp-content/uploads/2023/06/1648103904.jpeg`,
    starimg: `https://tmpfiles.nohat.cc/full-m2H7H7A0m2m2i8i8.png`,
    hstarimg: `https://tmpfiles.nohat.cc/full-m2H7H7A0m2m2i8i8.png`,
    review: `This is the world's most detailed and comprehensive course to earn money from Telegram, I can say that this course is worth it.`
  }
]
const data3 = [
  {
    name: `SIMRAN SAHU`,
    img: `https://theankit.org/wp-content/uploads/2023/06/1648103679.jpeg`,
    starimg: `https://tmpfiles.nohat.cc/full-m2H7H7A0m2m2i8i8.png`,
    hstarimg: `/starimg/half.png`,
    review: `One of the best online earning course I've taken is Telegram Advance Money Making Course.`
  },
  {
    name: `UJJAWALL AWASTH`,
    img: `https://theankit.org/wp-content/uploads/2023/06/1648100132.jpeg`,
    starimg: `https://tmpfiles.nohat.cc/full-m2H7H7A0m2m2i8i8.png`,
    hstarimg: `/starimg/half.png`,
    review: `In this course, such secret things of Telegram have been told which are not available anywhere on the whole internet.`
  }
]
const data4 = [
  {
    name: `BHAVANA YADAV`,
    img: `https://theankit.org/wp-content/uploads/2023/06/1648028901.jpeg`,
    starimg: `https://tmpfiles.nohat.cc/full-m2H7H7A0m2m2i8i8.png`,
    hstarimg: `https://tmpfiles.nohat.cc/full-m2H7H7A0m2m2i8i8.png`,
    review: `I was using Telegram channel for last 2 years and could not grow even a single channel, but after following the process mentioned in this course, today my Telegram channel has more than 1.5 lakh subscribers.`
  },
  {
    name: `ARUN PANDEY`,
    img: `https://theankit.org/wp-content/uploads/2023/06/1648028637.jpeg`,
    starimg: `https://tmpfiles.nohat.cc/full-m2H7H7A0m2m2i8i8.png`,
    hstarimg: `https://tmpfiles.nohat.cc/full-m2H7H7A0m2m2i8i8.png`,
    review: `By following the secret tricks mentioned inside the course, I have created 4 Telegram channels, out of which 2 channels have more than 1,00,000 Subscribers. Thank you so much sir.`
  }
]
const data5 = [
  {
    name: `ANKUL MISHRA`,
    img: `https://theankit.org/wp-content/uploads/2023/06/1647929936.jpeg`,
    starimg: `https://tmpfiles.nohat.cc/full-m2H7H7A0m2m2i8i8.png`,
    hstarimg: `https://tmpfiles.nohat.cc/full-m2H7H7A0m2m2i8i8.png`,
    review: `Earlier I used to consider Telegram as a small social media application but unknowingly I bought this course, and you will not believe I have really earned a lot of money from Telegram`
  },
  {
    name: `GULSHAN KAUSHIK`,
    img: `https://theankit.org/wp-content/uploads/2023/06/gfgfhn.jpeg`,
    starimg: `https://tmpfiles.nohat.cc/full-m2H7H7A0m2m2i8i8.png`,
    hstarimg: `/starimg/half.png`,
    review: `I followed the methods mentioned in this course for only two weeks and so far it has been almost 2 months and I am still earning every day Without giving any effort.`
  }
]


export default review
