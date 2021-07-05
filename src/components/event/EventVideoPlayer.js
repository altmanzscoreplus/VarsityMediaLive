import PropTypes from 'prop-types';
import { Modal, Box, Container, Paper, Typography } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';
import 'video.js/dist/video-js.css';


const EventVideoPlayer = (props) => {
  const {
    video,
    onClose
  } = props;

  return (
    <Modal open={video.displaying} onClose={onClose}>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          pt: 15
        }}
      >
        <Container
          sx={{ width: '820px' }}
        >
          <Paper
            elevation={12}
            sx={{ position: 'relative' }}
          >
            <Box
              sx={{
                pb: 3,
                pt: 3,
                px: 3
              }}
            >
              <Box>
                <Typography
                  color="textPrimary"
                  variant="h6"
                >
                  {video.choosenEvent.title}
                </Typography>
                <Typography
                  color="textSecondary"
                  sx={{
                    mt: 1,
                    mb: 3
                  }}
                  variant="body2"
                >
                  {video.choosenEvent.description}
                </Typography>
              </Box>
              <Box>
                <VideoPlayer
                  controls
                  sources={video.sources}
                  width={720}
                  height={420}
                  bigPlayButton={false}
                  autoplay
                />
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Modal>
  );
};

EventVideoPlayer.propTypes = {
  video: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

export default EventVideoPlayer;
