import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import TopLeftLogo from './TopLeftLogo';
import AppBar from './Styles';
export interface Props {
  isOpen: boolean;
  onOpen: () => void;
}

const TopAppBar = ({ isOpen, onOpen }: Props) => {
  return (
    <AppBar position="fixed" open={isOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(isOpen && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <TopLeftLogo show={!isOpen} />
      </Toolbar>
    </AppBar>
  );
};

export { TopAppBar };
