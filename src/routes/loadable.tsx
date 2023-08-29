import { Suspense, ElementType } from 'react';
import LoadingScreen from '../components/loading-screen/loading-screen';

const Loadable = (Component: ElementType) => (props: any) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
