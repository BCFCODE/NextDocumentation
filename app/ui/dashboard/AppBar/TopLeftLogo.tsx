import React from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';

interface Props {
  show: boolean;
}

const TopLeftLogo = ({ show }: Props) => {
  return (
    <Link
      // className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
      href="/"
    >
      {/* <div className="w-32 text-white md:w-40">
        <AcmeLogo />
          </div> */}
      {show && (
        <Typography variant="h6" noWrap component="div">
          BCFCODEWars
        </Typography>
      )}
    </Link>
  );
};

export default TopLeftLogo;
