import { INavItem } from '@/components/navList/NavList';
import { IoMdHeadset, IoMdHeart, IoMdList } from 'react-icons/io';
import { MdSearch } from 'react-icons/md';
import { BsPlayCircle } from 'react-icons/bs';
import { RoutesEnum } from '@/shared/constants';

export const navMenu: INavItem[] = [
  {
    display: 'Discover',
    Icon: IoMdHeadset,
    path: RoutesEnum.DISCOVER,
  },
  {
    display: 'Search',
    Icon: MdSearch,
    path: RoutesEnum.DISCOVER,
  },
  {
    display: 'Favorites',
    Icon: IoMdHeart,
    path: RoutesEnum.DISCOVER,
  },
  {
    display: 'Playlists',
    Icon: BsPlayCircle,
    path: RoutesEnum.DISCOVER,
  },
  {
    display: 'Charts',
    Icon: IoMdList,
    path: RoutesEnum.DISCOVER,
  },
];
