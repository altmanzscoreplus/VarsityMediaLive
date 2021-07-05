import { Box } from '@material-ui/core';

const Logo = (props) => (
         <Box
            alt="Logo Image"
            component="img"
            src="https://cdn.varsitymedialive.com/wp-content/uploads/2020/10/brand_logo.png"
            sx={{
              height: {xs: '80px',md: '130px'},
              position: 'absolute',
              top: '-40px',
              left: '50%',
              transform: 'translateX(-50%)',
              
            }}
          />
);

export default Logo;
