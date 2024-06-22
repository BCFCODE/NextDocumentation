import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import * as React from 'react';
// import { lusitana } from '@/app/ui/fonts';
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  CardActions,
  Button,
} from '@mui/material';

interface Props {
  title?: string;
  value?: number | string;
  type?: 'invoices' | 'customers' | 'pending' | 'collected';
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardHeading?: string | JSX.Element;
  headTitle?: string | JSX.Element;
  headSubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middleContent?: string | JSX.Element;
}

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default function DashboardCard({
  title,
  value,
  type,
  action,
  cardHeading,
  children,
  footer,
  headSubtitle,
  headTitle,
  middleContent,
  subtitle,
}: Props) {
  const Icon = type ? iconMap[type] : null;

  return (
    <Card sx={{ padding: 0 }} elevation={10} variant={undefined}>
      {cardHeading ? (
        <CardContent>
          <Typography variant="h5">{headTitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headSubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: '30px' }}>
          {title ? (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems={'center'}
              mb={3}
            >
              <Box>
                {title ? <Typography variant="h5">{title}</Typography> : ''}

                {subtitle ? (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                ) : (
                  ''
                )}
              </Box>
              {action}
              {value}
            </Stack>
          ) : null}
          {children}
        </CardContent>
      )}

      {middleContent}
      {footer}
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
