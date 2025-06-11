import { Header } from '../../widgets/Header/ui/Header.tsx';
import { Placeholder } from '../../shared/ui/Placeholder/Placeholder.tsx';

export const HomePage = () => {
  let status;
  status = 'idle';
  // status = 'not-found'

  return (
    <>
      <Header />
      <main>
        {status === 'idle' && <Placeholder type="idle" />}
        {status === 'not-found' && <Placeholder type="not-found" />}
      </main>
    </>
  );
};
