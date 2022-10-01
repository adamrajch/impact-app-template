import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from '../types/PageLayout';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <div>Page Content</div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
