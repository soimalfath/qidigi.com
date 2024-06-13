import heroImage from '@/assets/landingpage/hero-image.png';
import logoMeta from '@/assets/landingpage/logo-brand/meta.png';
import logoGoogle from '@/assets/landingpage/logo-brand/adwords.png';
import logoTiktok from '@/assets/landingpage/logo-brand/tik-tok.png';
import logoReact from '@/assets/landingpage/logo-brand/physics.png';
import logoVue from '@/assets/landingpage/logo-brand/document.png';
import logoNest from '@/assets/landingpage/logo-brand/nestjs.svg';
import { ImageHero } from '@/types/landingPage/landingPage';

export default heroImage;

export const HeroImages: ImageHero[] = [
  { src: logoMeta, alt: 'Meta Logo' },
  { src: logoGoogle, alt: 'Google Logo' },
  { src: logoTiktok, alt: 'TikTok Logo' },
  { src: logoReact, alt: 'React Logo' },
  { src: logoVue, alt: 'Vue Logo' },
  { src: logoNest, alt: 'NestJS Logo' },
];
