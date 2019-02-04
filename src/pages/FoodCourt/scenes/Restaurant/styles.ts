import { createStyles } from '@material-ui/core/styles';

export default createStyles({
   card: {
      maxWidth: '100%',
      boxShadow: 'none',
   },
   media: {
      objectFit: 'cover',
      maxHeight: 400,
   },
   link: {
      textDecoration: 'none',
   },
   title: {
      marginBottom: '0px',
      fontSize: '1.8rem',
   },
   content: {
      padding: '16px',
   },
});