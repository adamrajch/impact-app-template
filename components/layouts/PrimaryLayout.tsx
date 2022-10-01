import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
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
