import Head from 'next/head';
import React from 'react';

type Props = {
  description?: string;
  children: React.ReactNode;
  title?: string;
};

const PageContainer = ({ title = 'Main Page', description, children }: Props) => (
  <div>
    <Head >
      <title key="title">{title}</title>
      {description && <meta key="description" name="description" content={description} />}
    </Head>
    {children}
  </div>
);

export default PageContainer;
