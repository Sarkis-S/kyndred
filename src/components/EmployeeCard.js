import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

// TODO: Card click
// I'm thinking to bring up a modal with the complete employee data

// TODO: Card refresh
// make onClick handler for another API request, attach to CardActions button
// the new data should be re-applied to user data below
// will need to ensure the right card is updated (id reference)

// This component dynamically maps out each users to create individual cards
export const EmployeeCard = ({ users }) => {
  return (
    <>
        {users.map((user, index) => {
          let key = user.id.value;

          // sometimes user.id / id.values don't exist from API
          // if that is the case we'll use index instead
          if (user.id === undefined || user.id.value === null) {
            key = index;
          }

          return (
            <Box sx={{ width: 275 }} key={key}>
              <Card variant="outlined">
                <CardMedia
                  style={{height: '200px'}}
                  image={user.picture.large}
                />

                <CardContent>
                  <Typography variant="h6" color="text.primary">
                    {`${user.name.first} ${user.name.last}`}
                  </Typography>
                  <Typography component="div" color="text.secondary">
                    {user.gender}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button size="small">Refresh</Button>
                </CardActions>
              </Card>
            </Box>
          );
        })}
    </>
  );
}

export default EmployeeCard;
