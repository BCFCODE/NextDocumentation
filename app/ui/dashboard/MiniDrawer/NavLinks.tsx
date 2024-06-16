import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Groups2Icon from '@mui/icons-material/Groups2';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Link from 'next/link';

const sideBarTopIcons = [
  { text: 'Home', href: '/dashboard', Icon: HomeIcon },
  { text: 'Invoices', href: '/dashboard/invoices', Icon: FileCopyIcon },
  { text: 'Customers', href: '/dashboard/customers', Icon: Groups2Icon },
];

interface Props {
  isOpen: boolean;
}

const NavLinks = ({ isOpen }: Props) => {
  return (
    <List>
      {sideBarTopIcons.map(({ text, Icon, href }) => (
        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
          <Link href={href} passHref>
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
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavLinks;
