
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


export const EmployeeCard = ({ users }) => {
  return (
    <>
        {users.map((user, index) => {
          let key = user.id.value;

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
