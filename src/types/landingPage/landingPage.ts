import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface DataCard {
  icon: ReactNode;
  title: string;
  content: string;
}

export interface ImageHero {
  src: string;
  alt: string;
}

export interface IlustWhatWeDO {
  src: string;
  alt: string;
  caption: string;
  number: string;
}

export interface CardService {
  img: StaticImageData;
  alt: string;
  tittle: string;
  content: string;
}
