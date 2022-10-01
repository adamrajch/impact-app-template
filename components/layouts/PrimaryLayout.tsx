import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Head>
        <title>App Name</title>
      </Head>
      <div {...divProps}>
        <div>Header</div>
        <main className="px-5">{children}</main>
        <div className="m-auto" />
        <div>Footer</div>
      </div>
    </>
  );
};

export default PrimaryLayout;
