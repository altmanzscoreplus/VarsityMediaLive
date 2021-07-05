import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
import {
  Box,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
  Typography
} from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClockIcon from '../../icons/Clock';
import ShareIcon from '../../icons/Share';

const EventCard = (props) => {
  const {
    event,
    onClick,
    ...other
  } = props;
  
  // Set placeholder values temporarily
  event.likes = 28;
  event.thumbnail = '/static/mock-images/covers/cover_5.jpeg';

  const updatedAtUnix = Math.floor(new Date(event.updatedAt).getTime());

  return (
    <div {...other}>
      <Card>
        <CardHeader
          subheader={(
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                mt: 1
              }}
            >
              <ClockIcon
                fontSize="small"
                sx={{ color: 'text.secondary' }}
              />
              <Typography
                color="textSecondary"
                sx={{ ml: '6px' }}
                variant="caption"
              >
                {formatDistanceToNowStrict(updatedAtUnix)}
                {' '}
                ago
              </Typography>
            </Box>
          )}
          title={event.title}
        />
        <Box
          sx={{
            px: 2
          }}
        >
          <Typography
            color="textPrimary"
            variant="body1"
          >
            {event.description}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <CardActionArea
              onClick={() => onClick(event)}>
              <CardMedia
                image={event.thumbnail}
                sx={{
                  backgroundPosition: 'top',
                  height: 200
                }}
              />
            </CardActionArea>
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              mt: 2
            }}
          >
            <Tooltip title="Unlike">
              <IconButton sx={{ color: red['600'] }}>
                <FavoriteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Typography
              color="textSecondary"
              variant="subtitle2"
            >
              {event.likes}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton>
              <ShareIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default EventCard;
