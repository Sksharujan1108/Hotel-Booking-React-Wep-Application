import React from 'react';
import Hero from '../component/hero';
import FeaturedDestination from '../component/featuredDestination';
import ExclusiveOffers from '../component/exclusiveOffers';
import Testimonial from '../component/testimonial';
import NewsLetter from '../component/newsLetter';
import Footer from '../component/footer';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonial />
      <NewsLetter />
    </>
  )
}

export default Home;