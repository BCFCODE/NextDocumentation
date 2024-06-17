import React, { ElementType } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { usePathname } from 'next/navigation';

interface Props {
  Icon: ElementType;
  isOpen: boolean;
  text: string;
  href?: string
}

const LinkButton = ({ text, isOpen, Icon, href }: Props) => {
  const pathname = usePathname();

  return (
    <ListItemButton
      LinkComponent="a"
      sx={{
        minHeight: 48,
        justifyContent: isOpen ? 'initial' : 'center',
        px: 2.5,
        backgroundColor: href === pathname ? 'yellowgreen' : 'initial',
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: isOpen ? 3 : 'auto',
          justifyContent: 'center',
          
        }}
      >
        {<Icon />}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: isOpen ? 1 : 0 }} />
    </ListItemButton>
  );
};

export default LinkButton;
