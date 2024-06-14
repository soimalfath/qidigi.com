import heroImage from '@/assets/landingpage/hero-image.png';
import logoMeta from '@/assets/landingpage/logo-brand/meta.png';
import logoGoogle from '@/assets/landingpage/logo-brand/adwords.png';
import logoTiktok from '@/assets/landingpage/logo-brand/tik-tok.png';
import logoReact from '@/assets/landingpage/logo-brand/physics.png';
import logoVue from '@/assets/landingpage/logo-brand/document.png';
import logoNest from '@/assets/landingpage/logo-brand/nestjs.svg';
import { ImageHero, IlustWhatWeDO } from '@/types/landingPage/landingPage';
import ilusCompleteProject from '@/assets/landingpage/ilustration/complete-project.svg';
import ilusCustomer from '@/assets/landingpage/ilustration/customer.svg';
import ilusExperience from '@/assets/landingpage/ilustration/experience.svg';
import ilusOmsetCust from '@/assets/landingpage/ilustration/omset-client.svg';

export default heroImage;

export const HeroImages: ImageHero[] = [
  { src: logoMeta, alt: 'Meta Logo' },
  { src: logoGoogle, alt: 'Google Logo' },
  { src: logoTiktok, alt: 'TikTok Logo' },
  { src: logoReact, alt: 'React Logo' },
  { src: logoVue, alt: 'Vue Logo' },
  { src: logoNest, alt: 'NestJS Logo' },
];

export const ilustrationWhatWeDo: IlustWhatWeDO[] = [
  {
    src: ilusCompleteProject,
    alt: 'logo project',
    caption: 'Project Selesai',
    number: '20+',
  },
  {
    src: ilusCustomer,
    alt: 'logo pelanggan',
    caption: 'Customer Puas',
    number: '10+',
  },
  {
    src: ilusOmsetCust,
    alt: 'logo pelanggan',
    caption: 'Omset Customer',
    number: '300jt+',
  },
  {
    src: ilusExperience,
    alt: 'logo pelanggan',
    caption: 'Pengalaman Kami',
    number: '6th+',
  },
];
