import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Groups2Icon from '@mui/icons-material/Groups2';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Link from 'next/link';
import LinkButton from './LinkButton';

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
      {sideBarTopIcons.map(({ text, Icon, href }) => {
        const linkButtonProps = { isOpen, Icon, text };
        return (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <Link href={href} passHref>
              <LinkButton {...linkButtonProps} />
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default NavLinks;
