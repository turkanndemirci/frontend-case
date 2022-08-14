import { DefaultLayoutMain } from './DefaultLayout.styles';
import Header from '../components/Header/Header';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <DefaultLayoutMain>{children}</DefaultLayoutMain>
    </>
  );
};

export default DefaultLayout;
