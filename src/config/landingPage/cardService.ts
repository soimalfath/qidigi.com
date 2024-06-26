import ilustWeb from '@/assets/landingpage/ilustration/web-design.png';
import ilustSEO from '@/assets/landingpage/ilustration/seo.png';
import ilustAds from '@/assets/landingpage/ilustration/ads.png';
import ilustSosmed from '@/assets/landingpage/ilustration/sosmed.png';

import { CardService } from '@/types/landingPage/landingPage';

export const CardServices: CardService[] = [
  {
    img: ilustWeb,
    alt: 'ilustrasi web',
    tittle: ' Jasa Pembuatan Website',
    content:
      ' Kamu ingin Membangun situs web yang menarik, responsif, dan dioptimalkan untuk pengalaman pengguna yang luar biasa ? Serahkan saja pada kami',
  },
  {
    img: ilustSEO,
    alt: 'ilustrasi seo',
    tittle: ' Jasa Optimasi Mesin Pencari (SEO)',
    content:
      'Kamu ingin meningkatkan peringkat situs web Kamu di mesin pencari seperti google untuk mendatangkan traffic organik yang berkualitas ? Serahkan saja pada kami',
  },
  {
    img: ilustAds,
    alt: 'ilustrasi ads',
    tittle: ' Jasa Digital Marketing',
    content:
      ' Apakah Anda ingin meningkatkan visibilitas online di sosmed seperti Facebook, Instagram, Tiktok, Youtube, Google dll dan mengonversi audiens menjadi pelanggan melalui kampanye pemasaran digital yang ditargetkan dan terukur?  Serahkan saja pada kami',
  },
  {
    img: ilustSosmed,
    alt: 'ilustrasi sosmed',
    tittle: ' Private Coaching Meta Ads',
    content:
      ' Apakah Anda ingin menguasai Meta Ads (Facebook & Instagram Ads) untuk meningkatkan visibilitas dan penjualan bisnis Anda ?  Serahkan saja pada kami',
  },
];
