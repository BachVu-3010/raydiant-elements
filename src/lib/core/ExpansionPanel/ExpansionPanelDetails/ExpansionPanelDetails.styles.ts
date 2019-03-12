import { createStyles } from '../../withStyles';

const styles = () =>
  createStyles({
    root: {            
      "& > *": {
        marginTop: '0px'
      }
    },    
  });

export default styles;
