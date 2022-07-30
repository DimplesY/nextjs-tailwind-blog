import { atom } from 'recoil';

export const navAtom = atom({
  key: 'NAV_ATOM',
  default: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
    {
      name: 'Projects',
      link: '/projects',
    },
    {
      name: 'Collection',
      link: '/collection',
    },
    {
      name: 'Talks',
      link: '/talks',
    },
    {
      name: 'Links',
      link: '/links',
    },
  ],
});
