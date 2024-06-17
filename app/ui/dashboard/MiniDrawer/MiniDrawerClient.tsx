'use client';
import * as React from 'react';
import MiniDrawer from '.';

export default function MiniDrawerClient() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const miniDrawerProps = { open, handleDrawerClose, handleDrawerOpen };

  return <MiniDrawer {...miniDrawerProps} />;
}
