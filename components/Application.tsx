import React from 'react';
import Image from 'next/image';
import Card from './Card';
import { CardDatasLeft, CardDatasRight } from '@/constant/index';
import Home from "@/public/assets/home-p.svg";

type CardData = {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  badgeSrc: string;
};

const Application: React.FC = () => {
  return (
    <section className="sm:container sm:px-24 sm:py-14 px-4 py-6">
      <h2 className="font-bold sm:text-4xl text-3xl pb-12">Application Development Stages</h2>
      <div className="flex sm:flex-row flex-col justify-between">
        <div className="flex flex-col gap-5">
          {CardDatasLeft.map((data: CardData) => (
            <Card 
              key={data.id} 
              imageSrc={data.imageSrc} 
              title={data.title} 
              description={data.description} 
              badgeSrc={data.badgeSrc} 
            />
          ))}
        </div>
        <Image src={Home} height={564} width={440} alt="home-p" className='sm:py-0 py-7 items-center mx-auto'  />
        <div className="flex flex-col gap-5">
          {CardDatasRight.map((data: CardData) => (
            <Card 
              key={data.id} 
              imageSrc={data.imageSrc} 
              title={data.title} 
              description={data.description} 
              badgeSrc={data.badgeSrc} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Application;
