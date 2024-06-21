'use client'
import { useTheme } from '@mui/material/styles';

const useYearlyTargetTheme = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primaryLight = '#ecf2ff';
  const successLight = theme.palette.success.light;

  return {
    primary,
    primaryLight,
    successLight,
  };
};

export default useYearlyTargetTheme;
