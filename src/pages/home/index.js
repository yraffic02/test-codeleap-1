import React, { useCallback, useEffect } from 'react';
import { CardComents } from '../../components/CardComents';
import { CardContent } from '../../components/CardContent';
import { Header } from '../../components/Header';
import useApiRequest from '../../hooks/useApiRequest';
import './styles.css';
import BasicModal from '../../components/Modal';

export const Home = () => {
  const { data, loading, getContents, reachedEnd } = useApiRequest();

  useEffect(() => {
    getContents();
  }, [getContents]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight &&
      !loading &&
      !reachedEnd
    ) {
      getContents();
    }
  }, [loading, reachedEnd, getContents]);

  useEffect(() => {
    if (reachedEnd) {
      window.removeEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, reachedEnd]);

  return (
    <div className="container">
      <div className="home flex align-items flex-col">
        <Header />
        <div className="home-content flex align-items flex-col">
          <CardComents />
          {data.map((item) => (
            <CardContent
              key={item.id}
              idItem={item.id}
              title={item.title}
              username={item.username}
              datetime={item.created_datetime}
              content={item.content}
            />
          ))}
        </div>
      </div>
      <BasicModal />
    </div>
  );
};
