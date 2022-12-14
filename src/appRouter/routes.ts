import { HomePage } from '@/components/screens/home/HomePage';
import { FunctionComponent } from 'react';

export enum RoutesEnum {
  HOME = '/',
  DISCOVER = '/discover',
  SEARCH = '/search',
}

interface IRoute {
  path: string;
  component: FunctionComponent;
}

export const routes: IRoute[] = [
  { path: RoutesEnum.HOME, component: HomePage },
];
