import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import contactData from './data/contacts.json'
import comma from './util/comma';
import 'swiper/swiper-bundle.css';
import "swiper/css/navigation";

const App = () => {
  
  return (
    <Swiper className='productSwiper'
      spaceBetween={16}
      slidesPerView={4}
      div navigation={true}
      modules={[Navigation]}
    >
      {contactData.items.map((items) =>{
        const discountPrice = items.price - (items.price * items.discount) / 100
    return <SwiperSlide key={items.id}>
          <a href="/" className='flex flex-col gap-4pxr m-3pxr mb-8pxr'>
            <img className='w-250pxr h-320pxr bg-gray-100' src={`/image/${items.imgUrl}.png`} alt={items.name} />
            <span className='text-content'>[{items.brand}]{items.name}</span>
            <div>
              {items.discount === 0 ? " " : <b className='text-accent__yellow mr-4pxr'>{items.discount}%</b>}
              <span className='font-semibold indent-0'>{comma(discountPrice)}원</span>
            </div>
            <span className='text-12pxr text-gray-600 line-through'>{comma(items.price)}</span>
            <span className='text-12pxr font-semibold text-gray-600'>{items.label}</span>
            {items.limit === undefined ? " " :
            <span className='text-12pxr font-semibold text-content rounded-md w-50pxr pt-2pxr flex justify-center bg-gray-200 mt-4pxr'>
              {items.limit}
            </span>}
          </a>
            </SwiperSlide>
    })}
    </Swiper>

  );
};

export default App;

