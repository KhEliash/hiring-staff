import RecruiterCard from "../shared/RecruiterCard";
import SectionTitle from "../shared/SectionTitle";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Recruiter() {
  const topRecruiters = [
    {
      img: "https://example.com/logo1.png",
      name: "Tech Innovators Inc.",
      review: 4.5,
      location: "New York, NY",
      open_jobs: "No Open Jobs",
    },
    {
      img: "https://example.com/logo2.png",
      name: "NextGen Solutions",
      review: 4.8,
      location: "San Francisco, CA",
      open_jobs: "5 Open Jobs",
    },
    {
      img: "https://example.com/logo3.png",
      name: "Future Technologies",
      review: 4.7,
      location: "Austin, TX",
      open_jobs: "3 Open Jobs",
    },
    {
      img: "https://example.com/logo4.png",
      name: "Creative Minds Ltd.",
      review: 4.6,
      location: "Chicago, IL",
      open_jobs: "No Open Jobs",
    },
    {
      img: "https://example.com/logo5.png",
      name: "BrightPath Inc.",
      review: 4.9,
      location: "Boston, MA",
      open_jobs: "8 Open Jobs",
    },
    {
      img: "https://example.com/logo6.png",
      name: "Global Ventures",
      review: 4.4,
      location: "Miami, FL",
      open_jobs: "2 Open Jobs",
    },
    {
      img: "https://example.com/logo7.png",
      name: "Synergy Networks",
      review: 4.2,
      location: "Seattle, WA",
      open_jobs: "No Open Jobs",
    },
    {
      img: "https://example.com/logo8.png",
      name: "Infinity Labs",
      review: 4.3,
      location: "Denver, CO",
      open_jobs: "7 Open Jobs",
    },
    {
      img: "https://example.com/logo9.png",
      name: "Prime Talent Agency",
      review: 4.5,
      location: "Dallas, TX",
      open_jobs: "4 Open Jobs",
    },
    {
      img: "https://example.com/logo10.png",
      name: "Elite Tech Partners",
      review: 4.7,
      location: "Los Angeles, CA",
      open_jobs: "1 Open Job",
    },
    {
      img: "https://example.com/logo11.png",
      name: "Digital Horizons",
      review: 4.1,
      location: "Portland, OR",
      open_jobs: "No Open Jobs",
    },
    {
      img: "https://example.com/logo12.png",
      name: "Peak Performance Group",
      review: 4.9,
      location: "Phoenix, AZ",
      open_jobs: "6 Open Jobs",
    },
    {
      img: "https://example.com/logo13.png",
      name: "Nexus Technologies",
      review: 4.6,
      location: "Atlanta, GA",
      open_jobs: "No Open Jobs",
    },
    {
      img: "https://example.com/logo14.png",
      name: "Visionary Solutions",
      review: 4.3,
      location: "Raleigh, NC",
      open_jobs: "3 Open Jobs",
    },
    {
      img: "https://example.com/logo15.png",
      name: "Velocity Innovations",
      review: 4.7,
      location: "Orlando, FL",
      open_jobs: "No Open Jobs",
    },
    {
      img: "https://example.com/logo16.png",
      name: "TechWave Ltd.",
      review: 4.8,
      location: "Houston, TX",
      open_jobs: "5 Open Jobs",
    },
    {
      img: "https://example.com/logo17.png",
      name: "Quantum Enterprises",
      review: 4.4,
      location: "Philadelphia, PA",
      open_jobs: "2 Open Jobs",
    },
    {
      img: "https://example.com/logo18.png",
      name: "Apex Systems",
      review: 4.5,
      location: "Charlotte, NC",
      open_jobs: "4 Open Jobs",
    },
    {
      img: "https://example.com/logo19.png",
      name: "TechSphere Solutions",
      review: 4.2,
      location: "Columbus, OH",
      open_jobs: "No Open Jobs",
    },
    {
      img: "https://example.com/logo20.png",
      name: "Innovative Thinkers",
      review: 4.9,
      location: "San Diego, CA",
      open_jobs: "6 Open Jobs",
    },
    {
      img: "https://example.com/logo21.png",
      name: "Agile Works",
      review: 4.3,
      location: "Las Vegas, NV",
      open_jobs: "No Open Jobs",
    },
    {
      img: "https://example.com/logo22.png",
      name: "SmartTalent Agency",
      review: 4.7,
      location: "Kansas City, MO",
      open_jobs: "2 Open Jobs",
    },
    {
      img: "https://example.com/logo23.png",
      name: "BlueSky Technologies",
      review: 4.6,
      location: "Salt Lake City, UT",
      open_jobs: "3 Open Jobs",
    },
    {
      img: "https://example.com/logo24.png",
      name: "EmpowerTech",
      review: 4.1,
      location: "Indianapolis, IN",
      open_jobs: "No Open Jobs",
    },
    {
      img: "https://example.com/logo25.png",
      name: "Cloud9 Solutions",
      review: 4.9,
      location: "Tampa, FL",
      open_jobs: "5 Open Jobs",
    },
    {
      img: "https://example.com/logo26.png",
      name: "DataStream Partners",
      review: 4.4,
      location: "Nashville, TN",
      open_jobs: "2 Open Jobs",
    },
    {
      img: "https://example.com/logo27.png",
      name: "BrightTech",
      review: 4.5,
      location: "Cincinnati, OH",
      open_jobs: "No Open Jobs",
    },
    {
      img: "https://example.com/logo28.png",
      name: "AlphaTalent Solutions",
      review: 4.3,
      location: "St. Louis, MO",
      open_jobs: "3 Open Jobs",
    },
    {
      img: "https://example.com/logo29.png",
      name: "TalentForge",
      review: 4.8,
      location: "San Antonio, TX",
      open_jobs: "No Open Jobs",
    },
    {
      img: "https://example.com/logo30.png",
      name: "Elite Workforce",
      review: 4.7,
      location: "Jacksonville, FL",
      open_jobs: "4 Open Jobs",
    },
    {
      img: "https://example.com/logo31.png",
      name: "MetaTech Solutions",
      review: 4.4,
      location: "Omaha, NE",
      open_jobs: "No Open Jobs",
    },
    {
      img: "https://example.com/logo32.png",
      name: "WorkSmart Agency",
      review: 4.5,
      location: "Cleveland, OH",
      open_jobs: "5 Open Jobs",
    },
    {
      img: "https://example.com/logo33.png",
      name: "Forward Talent",
      review: 4.6,
      location: "Milwaukee, WI",
      open_jobs: "No Open Jobs",
    },
    {
      img: "https://example.com/logo34.png",
      name: "VisionTalent",
      review: 4.3,
      location: "New Orleans, LA",
      open_jobs: "1 Open Job",
    },
    {
      img: "https://example.com/logo35.png",
      name: "TalentBridge Ltd.",
      review: 4.9,
      location: "Louisville, KY",
      open_jobs: "3 Open Jobs",
    },
    {
      img: "https://example.com/logo36.png",
      name: "Prospera Group",
      review: 4.7,
      location: "Buffalo, NY",
      open_jobs: "No Open Jobs",
    },
    {
      img: "https://example.com/logo37.png",
      name: "CareerBuilders Inc.",
      review: 4.8,
      location: "Richmond, VA",
      open_jobs: "6 Open Jobs",
    },
    {
      img: "https://example.com/logo38.png",
      name: "Peak Talent Partners",
      review: 4.2,
      location: "Birmingham, AL",
      open_jobs: "2 Open Jobs",
    },
    {
      img: "https://example.com/logo39.png",
      name: "Momentum Recruiting",
      review: 4.4,
      location: "Tulsa, OK",
      open_jobs: "No Open Jobs",
    },
    {
      img: "https://example.com/logo40.png",
      name: "Pinnacle Workforce",
      review: 4.6,
      location: "Minneapolis, MN",
      open_jobs: "4 Open Jobs",
    },
  ];

  const chunkArray = (arr, size) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size));
    }
    return chunked;
  };

  const recruitersInSlides = chunkArray(topRecruiters, 12);

  return (
    <div className=" container">
      <SectionTitle
        title={"Top Recruiters"}
        subTitle={
          "Discover your next career move, freelance gig, or internship"
        }
      />

      <div className="relative sm:mt-6 max-sm:mt-8">
        <div className="absolute top-[-20px] right-[-5px] flex gap-2 z-10">
          <button className="swiper-button-prev-custom p-2 rounded-full bg-lightGray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[15px] h-[15px] text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button className="swiper-button-next-custom bg-lightGray p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[15px] h-[15px] text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5L15.75 12l-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {recruitersInSlides.map((recruitersGroup, index) => (
            <SwiperSlide key={index}>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-3 my-10">
                {recruitersGroup.map((recruiter) => (
                  <RecruiterCard key={recruiter.name} {...recruiter} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Recruiter;
