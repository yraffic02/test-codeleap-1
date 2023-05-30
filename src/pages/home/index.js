import React, { useEffect, useState } from 'react';
import { CardComents } from '../../components/CardComents';
import { CardContent } from '../../components/CardContent';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import './styles.css';

export const Home = () => {
  const [listContents, setListContents] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);
  const [count, setCount] = useState(null);

  

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await api.get(`careers/?limit=10&offset=${pageOffset}`);
        const { results, count } = response.data;
        
        const newContents = results;
        const newCount = count;
  
        setCount(newCount);
        setListContents((prevContents) => [...prevContents, ...newContents]);
        setPageOffset((prevOffset) => prevOffset + 10);
      } catch (error) {
        alert('Erro no servidor!');
      }
    };

    fetchContents();
  
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight &&
        listContents.length < count
      ) {
        fetchContents();
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [listContents, count, pageOffset]);


  return (
    <div className='container'>
      <div className='home flex align-items flex-col'>
        <Header />
        <div className='home-content flex align-items flex-col'>
          <CardComents />
          {listContents.map((item) => (
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
  );
};


