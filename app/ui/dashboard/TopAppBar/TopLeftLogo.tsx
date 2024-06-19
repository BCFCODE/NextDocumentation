import React from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
interface Props {
  show: boolean;
}

const TopLeftLogo = ({ show }: Props) => {
  if (show)
    return (
      <Link
        // className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
        passHref
      >
        <Button>
          {/* <div className="w-32 text-white md:w-40">
        <AcmeLogo />
          </div> */}
          <Typography  variant="h6" noWrap component="div">
            BCFCODEWars
          </Typography>
        </Button>
      </Link>
    );
};

export default TopLeftLogo;
