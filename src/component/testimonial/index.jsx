import React from "react";
import Title from "../title";
import { testimonials } from "../../utils";
import StartRating from "../starRating";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travelers consistently choose us for their unforgettable journeys. Our guests' testimonials speak volumes about the exceptional experiences we provide, from luxurious accommodations to personalized service. Join the ranks of satisfied travelers and see why we are the preferred choice for those seeking the best in travel."
      />
      {/*  */}
      <div className="flex items-center gap-6 mt-20">
        {testimonials?.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-xl shadow"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <StartRating rating={testimonial.rating} />
            </div>
            <p className="text-gray-500 max-w-90 mt-4 text-sm">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
