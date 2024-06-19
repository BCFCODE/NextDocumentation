// import SideNav from '@/app/ui/dashboard/sidenav';
import MiniDrawerClient from '../ui/dashboard/MiniDrawer/MiniDrawerClient';
import { Box } from '@mui/material';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    <Box
      sx={
        {
          // display: 'flex',
          // height: '100vh',
          // flexDirection: { xs: 'column', md: 'row', overflow: { md: 'hidden' } },
        }
      }
    >
      <MiniDrawerClient>{children}</MiniDrawerClient>
    </Box>
/*  <div className="w-full flex-none md:w-64">
          <SideNav />
      </div>
    <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div> */
    // </div>
  );
}
