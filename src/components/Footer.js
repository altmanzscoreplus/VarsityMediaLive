import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import MinusIcon from '../icons/Minus';
import Logo from './Logo';

const sections = [
  {
    title: 'Menu',
    links: [
      {
        title: 'Browse Components',
        href: '/browse'
      },
      {
        title: 'Documentation',
        href: '/docs'
      }
    ]
  },
  {
    title: 'Placeholders',
    links: [
      {
        title: 'Terms & Conditions',
        href: '#'
      },
      {
        title: 'License',
        href: '#'
      },
      {
        title: 'Contact',
        href: '#'
      }
    ]
  },
  {
    title: 'Social',
    links: [
      {
        title: 'Instagram',
        href: '#'
      },
      {
        title: 'LinkedIn',
        href: '#'
      }
    ]
  }
];

const Footer = (props) => (
  <Box
    sx={{
      backgroundColor: '#000',
      py: 3
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Typography
        color="textSecondary"
        variant="caption"
        sx={{
          fontSize: 16
        }}
      >
        © Copyright Varsity Media Live
      </Typography>
      <Typography
        color="#fff"
        variant="h6"
        sx={{
          fontSize: '14px !important',
          mt: 2
        }}
      >
        PLEASE NOTE: In the event of any technical issues with the live stream, Varsity Media will upload an online version of your game by end of the day. No refunds will be issued.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
