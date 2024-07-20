import React from 'react';
import Image from 'next/image';

type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
  badgeSrc: string;
};

const Card: React.FC<CardProps> = ({ imageSrc, title, description, badgeSrc }) => {
  return (
    <div className="flex flex-col gap-5 px-6 py-6 rounded-lg shadow-custom relative ">
      <div className="flex flex-row gap-7 items-center">
        <Image src={imageSrc} height={45} width={42} alt={title} />
        <span className="font-semibold text-xl">{title}</span>
      </div>
      <p className="text-sm font-normal">{description}</p>
      <Image src={badgeSrc} height={145} width={85} alt="badge" className="absolute right-0 bottom-0" />
    </div>
  );
};

export default Card;
