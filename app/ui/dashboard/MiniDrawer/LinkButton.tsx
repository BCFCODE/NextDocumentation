import React, { ElementType } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface Props {
  isOpen: boolean;
  Icon: ElementType;
  text: string;
}

const LinkButton = ({ text, isOpen, Icon }: Props) => {
  return (
    <ListItemButton
      LinkComponent="a"
      sx={{
        minHeight: 48,
        justifyContent: isOpen ? 'initial' : 'center',
        px: 2.5,
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
