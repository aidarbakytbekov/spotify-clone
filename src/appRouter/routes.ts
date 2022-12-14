import { HomePage } from '@/components/screens/home/HomePage';
import { FunctionComponent } from 'react';
import { LoginPage } from '@/components/screens/loginPage/LoginPage';
import { RoutesEnum } from '@/shared/constants';
import { LoginWithCode } from '@/components/screens/loginWithCode/LoginWithCode';

interface IRoute {
  path: string;
  component: FunctionComponent;
}

export const userRoutes: IRoute[] = [
  { path: RoutesEnum.HOME, component: HomePage },
];

export const loginRoutes: IRoute[] = [
  { path: RoutesEnum.LOGIN, component: LoginPage },
  { path: RoutesEnum.LOGIN_WITH_CODE, component: LoginWithCode },
];
