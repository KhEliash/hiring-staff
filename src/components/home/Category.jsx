import SectionTitle from "../shared/SectionTitle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import content from "../../assets/Category/content-writer.svg";
import customer from "../../assets/Category/customer-service.svg";
import finance from "../../assets/Category/finance.svg";
import management from "../../assets/Category/management.svg";
import marketing from "../../assets/Category/marketing.svg";
import research from "../../assets/Category/research (1).svg";
import retail from "../../assets/Category/retail.svg";
import sale from "../../assets/Category/sale.svg";

function Category() {
  const categories = [
    { img: retail, name: "Retail & Product", jobs: "No Job Available" },
    { img: content, name: "Content Writer", jobs: "4 Jobs Available" },
    { img: customer, name: "Human Resource", jobs: "No Job Available" },
    { img: marketing, name: "Market Research", jobs: "1 Job Available" },
    { img: research, name: "Software", jobs: "No Job Available" },
    { img: finance, name: "Finance", jobs: "2 Jobs Available" },
    { img: management, name: "Management", jobs: "No Job Available" },
    { img: sale, name: "Marketing & Sale", jobs: "No Job Available" },
    { img: research, name: "Software", jobs: "No Job Available" },
    { img: retail, name: "Design", jobs: "3 Jobs Available" },
    { img: sale, name: "Legal", jobs: "1 Job Available" },
    { img: management, name: "Health & Fitness", jobs: "2 Jobs Available" },
    { img: management, name: "Health & Fitness", jobs: "2 Jobs Available" },
    { img: management, name: "Health & Fitness", jobs: "2 Jobs Available" },
    { img: management, name: "Health & Fitness", jobs: "2 Jobs Available" },
    { img: management, name: "Health & Fitness", jobs: "2 Jobs Available" },
    { img: management, name: "Health & Fitness", jobs: "2 Jobs Available" },
    { img: management, name: "Health & Fitness", jobs: "2 Jobs Available" },
    { img: management, name: "Health & Fitness", jobs: "2 Jobs Available" },
    { img: management, name: "Health & Fitness", jobs: "2 Jobs Available" },
  ];

  // Create pairs of categories for two rows of items
  const itemsPerSlide = 10; // Adjust to 10 for 5 columns and 2 rows
  const slides = [];
  for (let i = 0; i < categories.length; i += itemsPerSlide) {
    slides.push(categories.slice(i, i + itemsPerSlide));
  }

  return (
    <div className=" container mx-0 p-0 md:mx-auto">
      <SectionTitle
        title={"Browse by category"}
        subTitle={
          "Find the job that’s perfect for you. about 800+ new jobs everyday"
        }
      />
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 mx-14 mt-14   mb-10">
                {slide.map((category, idx) => (
                  <div
                    key={idx}
                    className="h-24 w-auto  bg-white border border-lightGray hover:border-gray rounded-lg shadowtext-center flex justify-center items-center gap-2 p-1 md:p-0"
                  >
                    <div className="flex justify-center items-center ">
                      <img src={category.img} alt="img" />
                    </div>
                    <div>
                      <h3 className="text-12 md:text-14">{category.name}</h3>
                      <p className="text-12 mt-2">{category.jobs}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}

          <style jsx>{`
            .swiper-button-next,
            .swiper-button-prev {
              background-color: rgba(194, 217, 238, 0.8);
              padding: 10px;
              border-radius: 50%;
              width: 30px;
              height: 30px;
            }

            .swiper-button-next::after,
            .swiper-button-prev::after {
              font-size: 14px;
              font-weight: 900;
              color: rgba(149, 149, 242, 0.86);
            }

            .swiper-button-next:hover::after,
            .swiper-button-prev:hover::after {
              color: rgba(69, 69, 238, 0.86);
            }
          `}</style>
        </Swiper>
      </div>
    </div>
  );
}

export default Category;
