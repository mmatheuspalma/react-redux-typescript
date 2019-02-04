import { createStyles } from '@material-ui/core/styles';

export default (theme: any) => createStyles({
  root: {
    width: '100%',
    backgroundColor: '#009ca3',
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    maxHeight: '40px',
  },
  logoTitle: {
    fontWeight: 300,
    fontSize: '23px',
    marginTop: '4px',
  },
});