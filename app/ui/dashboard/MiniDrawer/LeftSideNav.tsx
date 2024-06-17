import React from 'react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@mui/material/styles';
import DrawerHeader from './common/DrawerHeader';
import NavLinks from './NavLinks';
import Drawer from './common/Drawer';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LeftSideNav = ({ isOpen, onClose }: Props) => {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={isOpen}>
      <DrawerHeader>
        <IconButton onClick={() => onClose()}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <NavLinks isOpen={isOpen} />
      <Divider />
      {/* <NavLinks isOpen={isOpen} /> */}
    </Drawer>
  );
};

export { LeftSideNav };
