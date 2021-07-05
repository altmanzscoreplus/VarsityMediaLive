import { useState, useEffect } from 'react';
import { Box, Container, Skeleton, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const HomeHero = (props) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch(`/static/home/hero_${theme.palette.mode}.png`);
      const blob = await response.blob();

      setImage(URL.createObjectURL(blob));
      setIsLoading(false);
    })();
  }, [theme.palette.mode]);

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
      }}
      {...props}
    >
      <Container
        maxWidth="lg"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          px: {
            md: '130px !important'
          }
        }}
      >
        <Typography
          align="center"
          color="#000"
          variant="h4"
          sx={{ 
            mt: 6,
            pt: 6,
            pb: 5,
            fontWeight: 900
          }}
        >
          American Youth Football King of Spring 2021
        </Typography>
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          width: '100%',
          px: {
            md: 15
          }
        }}
      >
        <Box
          sx={{
            position: 'relative'
          }}
        >
          <Box
            alt="Logo Image"
            component="img"
            src="https://cdn.varsitymedialive.com/wp-content/uploads/2021/05/KOS-logo.png"
            sx={{
              width: '100%',
            }}
          />
        </Box>
      </Container>
      <Typography
          align="center"
          color="#000"
          variant="h5"
          sx={{ 
            mt: 2,
            pt: 2,
            pb: 6,
            fontWeight: 800
          }}
        >
          Live streaming on computer only.
        </Typography>
    </Box>
  );
};

export default HomeHero;
