/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/style/App.scss';

const API = 'http://localhost:3000/initalState';
const Home = () => {
  const initalState = useInitialState(API);
  return initalState.length === 0 ? <h1>Loading...</h1> : (
    <>
      <Search />
      {initalState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {initalState.mylist.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>

          {initalState.trends.map((item) => (
            <CarouselItem key={item.id} {... item} />
          ))}

        </Carousel>
      </Categories>

      <Categories title="Originales de Plazi">
        <Carousel>
          {initalState.originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

    </>
  );
};
export default Home;
