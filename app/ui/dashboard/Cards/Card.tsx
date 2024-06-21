import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function DashboardCard({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

// import React from "react";
// import { Card, CardContent, Typography, Stack, Box } from "@mui/material";

// type Props = {
//   title?: string;
//   subtitle?: string;
//   action?: JSX.Element | any;
//   footer?: JSX.Element;
//   cardHeading?: string | JSX.Element;
//   headTitle?: string | JSX.Element;
//   headSubtitle?: string | JSX.Element;
//   children?: JSX.Element;
//   middleContent?: string | JSX.Element;
// };

// const DashboardCard = ({
//   title,
//   subtitle,
//   children,
//   action,
//   footer,
//   cardHeading,
//   headTitle,
//   headSubtitle,
//   middleContent,
// }: Props) => {
//   return (
//     <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
//       {cardHeading ? (
//         <CardContent>
//           <Typography variant="h5">{headTitle}</Typography>
//           <Typography variant="subtitle2" color="textSecondary">
//             {headSubtitle}
//           </Typography>
//         </CardContent>
//       ) : (
//         <CardContent sx={{ p: "30px" }}>
//           {title ? (
//             <Stack
//               direction="row"
//               spacing={2}
//               justifyContent="space-between"
//               alignItems={"center"}
//               mb={3}
//             >
//               <Box>
//                 {title ? <Typography variant="h5">{title}</Typography> : ""}

//                 {subtitle ? (
//                   <Typography variant="subtitle2" color="textSecondary">
//                     {subtitle}
//                   </Typography>
//                 ) : (
//                   ""
//                 )}
//               </Box>
//               {action}
//             </Stack>
//           ) : null}

//           {children}
//         </CardContent>
//       )}

//       {middleContent}
//       {footer}
//     </Card>
//   );
// };

// export default DashboardCard;
