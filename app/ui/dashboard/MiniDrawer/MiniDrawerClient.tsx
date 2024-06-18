'use client';
import * as React from 'react';
import MiniDrawer from '.';

interface Props {
  children: React.ReactNode;
}

export default function MiniDrawerClient({ children }: Props) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const miniDrawerProps = { open, handleDrawerClose, handleDrawerOpen };

  return <MiniDrawer {...miniDrawerProps}>{children}</MiniDrawer>;
}
