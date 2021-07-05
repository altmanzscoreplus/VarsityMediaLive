import { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { EventCard, EventVideoPlayer } from '../../components/event';
import useMounted from '../../hooks/useMounted';
import useSettings from '../../hooks/useSettings';
import gtm from '../../lib/gtm';

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import awsvideo from '../../aws-video-exports';
import { onCreateVodAsset } from '../../graphql/subscriptions';

const EventList = () => {
  const mounted = useMounted();
  const { settings } = useSettings();
  const [events, setEvents] = useState([]);
  const [nextToken, setNextToken] = useState('');
  const [displayMovie, setDisplayMovie] = useState({
    displaying: false,
    sources: [],
    choosenEvent: {}
  });

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getEvents = useCallback(async () => {
    try {
      const assets = await API.graphql(graphqlOperation(queries.listVodAssets));

      if (mounted.current) {
        let { nextToken } = assets.data.listVodAssets;
        if (nextToken === undefined) {
          nextToken = '';
        }

        setEvents(assets.data.listVodAssets.items);
        setNextToken(nextToken);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => {
    getEvents();
  }, [getEvents]);
  
  const showMovie = (event) => {
    setDisplayMovie({
      ...displayMovie, 
      displaying: true,
      sources: [{
        src: `https://${awsvideo.awsOutputVideo}/${event.video.id}/${event.video.id}.m3u8`,
        type: 'application/x-mpegURL',
      }],
      choosenEvent: event
    });
  };

  const hideMovie = () => {
    setDisplayMovie({
      displaying: false,
    });
  }

  return (
    <>
      <Helmet>
        <title>Events</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Grid
            container
            justifyContent="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Events
              </Typography>
            </Grid>
          </Grid>

          {displayMovie.displaying && (
            <EventVideoPlayer 
              video={displayMovie} 
              onClose={hideMovie}
            />
          )}

          <Grid
            container
            spacing={3}
            sx={{ mt: 3 }}
          >
            {events.map((event) => (
              <Grid
                item
                key={event.id}
                lg={3}
                md={4}
                xs={12}
              >
                <EventCard
                  event={event}
                  onClick={showMovie}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default EventList;
