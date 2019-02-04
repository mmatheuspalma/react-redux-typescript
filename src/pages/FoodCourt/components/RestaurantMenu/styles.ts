import { createStyles } from '@material-ui/core/styles';

export default (theme: any) => createStyles({
   item: {
      [theme.breakpoints.down('sm')]: {
         width: '100%',
      }
   },
   card: {
      maxWidth: '100%',
      [theme.breakpoints.up('sm')]: {
         maxWidth: 300,
      },
   },
   media: {
      objectFit: 'cover',
      maxHeight: '190px',
   },
   link: {
      textDecoration: 'none',
   },
   title: {
      textTransform: 'capitalize',
      fontSize: '1.2rem',
   },
   content: {
      paddingBottom: '16px !important',
   },
   wrapper: {
      padding: '16px',
   },
});