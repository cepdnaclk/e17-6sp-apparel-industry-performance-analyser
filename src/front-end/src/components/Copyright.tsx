import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export function Copyright(props: any) {
  return (
    <Typography variant="body2" color="#2222A8" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://AiPaS.com/">
        AiPaS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
