import { Header } from 'widgets/Header';
import { Placeholder } from 'widgets/Placeholder';

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
