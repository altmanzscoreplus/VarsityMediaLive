import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Button, Divider, IconButton, Link, Toolbar } from '@material-ui/core';
import AccountPopover from './dashboard/AccountPopover';
import MenuIcon from '../icons/Menu';
import Logo from './Logo';
import useAuth from '../hooks/useAuth';

const MainNavbar = (props) => {
  const { onSidebarMobileOpen } = props;
  const auth = useAuth();

  return (
    <>
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: '#fff',
        color: 'text.secondary',
        boxShadow: '0 1px 30px rgb(0 0 0 / 10%)',
      }}
    >
    <Box sx={{ 
      height: 40,
      borderBottom: "4px solid #ffea00",
      backgroundColor: "#404042"
    }}>
    </Box>
      <Toolbar sx={{ minHeight: {xs: 84, md:64} }}>
       {/* <IconButton
          color="inherit"
          onClick={onSidebarMobileOpen}
          sx={{
            display: {
              md: 'none'
            }
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton> */}
        <RouterLink to="/">
          <Logo
            sx={{
              display: {
                md: 'inline',
                xs: 'none'
              },
              height: 40,
              width: 40
            }}
          />
        </RouterLink>
        <Box sx={{ flexGrow: {md: 1}}} />
        <Box
          sx={{
            alignItems: 'center',
            display: {
              md: 'flex',
            },
              margin: {md: 0, xs: '0 auto'},
              pt: {xs: 4, md: 0}
          }}
        >
          <Link
            color="#333"
            component={RouterLink}
            to="/"
            underline="none"
            variant="body1"
            sx={{ mx: 2 }}
          >
            Home
          </Link>
          <Link
            color="#333"
            component={RouterLink}
            to="/buypass"
            underline="none"
            variant="body1"
            sx={{ mx: 2 }}
          >
            Buy Pass
          </Link>
          {!auth.isAuthenticated 
            ? (
              <Button
                component="a"
                href="/authentication/login"
                size="small"
                variant="outlined"
                sx={{ px: 2, mx: 2, borderRadius: '5px !important', borderColor: "#ffea00", color: "#ffea00",
                "&:hover": {
                    borderColor: "#ffc107", color: "#ffc107"
                  }
            }}
              >
                Log In
              </Button>
            ) : (
              <Box sx={{ ml: 2 }}>
                <AccountPopover />
              </Box>
            )}
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
    </>
  );
};

MainNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func
};

export default MainNavbar;
