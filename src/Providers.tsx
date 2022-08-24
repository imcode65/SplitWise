import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from 'store';

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children as unknown as JSX.Element}</Provider>;
};

export default Providers;
