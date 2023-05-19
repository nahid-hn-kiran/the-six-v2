import React, { useEffect } from 'react';
import FeaturedSlider from './FeatredSlilder/FeaturedSlider';
import HeroSlider from './HeroSlider/HeroSlider';
import News from './News/News';
import Sidebar from './Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEightArticles,
  getFeaturedArticles,
  getFirstTwoArticle,
  getTwoArticleBottom,
} from '../../redux/actionCreators/articleActions';
import { getHeroslider } from '../../redux/actionCreators/sliderActions';
import { getUpcomingMatches } from '../../redux/actionCreators/upcomingMatchesActions';

const Home = () => {
  const dispatch = useDispatch();

  const { data: heroSlider, message: heroSliderMessage } = useSelector(
    (state) => state.heroSlider
  );
  useEffect(() => {
    dispatch(getHeroslider());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getUpcomingMatches());
  }, [dispatch]);

  const { data: articles } = useSelector((state) => state.featuredArticles);

  useEffect(() => {
    dispatch(getFeaturedArticles());
  }, [dispatch]);

  const { data: firstTwoArticle } = useSelector(
    (state) => state.firstTwoArticle
  );
  const { data: bottomTwoData } = useSelector(
    (state) => state.twoArticleBottom
  );
  const { data: eightData } = useSelector((state) => state.eightArticles);
  useEffect(() => {
    dispatch(getFirstTwoArticle());
    dispatch(getEightArticles());
    dispatch(getTwoArticleBottom());
  }, [dispatch]);
  return (
    <div>
      <HeroSlider data={heroSlider} message={heroSliderMessage} />
      <section className='grid grid-cols-1 lg:grid-cols-3 container my-5 gap-5'>
        <div className='lg:col-span-2'>
          <div className='border-t-8 border-indigo-700'>
            <h2 className='text-2xl my-3 ml-2'>Featured News</h2>
            <>
              <FeaturedSlider data={articles} />
              <News
                data={firstTwoArticle}
                bottomTwoData={bottomTwoData}
                eightData={eightData}
              />
            </>
          </div>
        </div>
        <div>
          <Sidebar />
        </div>
      </section>
    </div>
  );
};

export default Home;
