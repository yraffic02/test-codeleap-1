import React, { useEffect } from 'react';
import { CardComents } from '../../components/CardComents';
import { CardContent } from '../../components/CardContent';
import { Header } from '../../components/Header';
import useApiRequest from '../../utils/useApiRequest';
import './styles.css';

export const Home = () => {
  const { data, loading, getContents } = useApiRequest();

  useEffect(() => {
    getContents()
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight &&
      !loading
    ) {
      getContents()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [loading])

  return (
    <div className='container'>
      <div className='home flex align-items flex-col'>
        <Header />
        <div className='home-content flex align-items flex-col'>
          <CardComents />
          {data.map((item) => (
            <CardContent
              key={item.id}
              title={item.title}
              username={item.username}
              datetime={item.created_datetime}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  )
}






