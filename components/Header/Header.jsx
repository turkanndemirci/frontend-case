import {
  HeaderWrapper,
  LeftContent,
  LogoWrapper,
  RightContent,
  RightContentItem,
} from './Header.styles';

import Link from 'next/link';
import Logo from '../../assets/icons/logo.svg';
import { useRouter } from 'next/router';

const routes = [
  { key: '', label: 'List' },
  { key: 'form', label: 'Form' },
];

const Header = ({}) => {
  const router = useRouter();
  return (
    <HeaderWrapper>
      <LeftContent>
        <LogoWrapper>
          <Logo></Logo>
        </LogoWrapper>
      </LeftContent>
      <RightContent>
        {routes &&
          routes.length > 0 &&
          routes.map((route) => {
            return (
              <RightContentItem
                active={router.pathname === `/${route.key}`}
                key={route.key}>
                <Link href={`/${route.key}`}>
                  <a>{route.label}</a>
                </Link>
              </RightContentItem>
            );
          })}
      </RightContent>
    </HeaderWrapper>
  );
};

export default Header;
