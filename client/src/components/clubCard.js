import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ClubCard = ({ team, venue, handleClubView }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Card
        sx={{ display: "flex", boxShadow: "0 0 6px #381d54" }}
        onClick={() => handleClubView(team.id)}
      >
        <CardActionArea>
          <Box
            sx={{
              float: "right",
              position: "absolute",
              right: 12,
              top: 12,
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 70 }}
              image={team.logo}
              alt={team.code}
            />
          </Box>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: 200 }}
            image={venue.image}
            alt={team.code}
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Box sx={{ display: "flex" }}>
              <Typography component="div" variant="h4" fontFamily="Oswald">
                {team.name}
              </Typography>
            </Box>
            <hr style={{ margin: "6px 0" }} />
            <Box sx={{ float: "right" }}>
              <Typography
                color="text.secondary"
                component="div"
                fontFamily="Oswald"
              >
                Est. {team.founded}
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              fontFamily="Oswald"
            >
              {venue.city + " • " + team.country}
            </Typography>
            <Box sx={{ float: "right", margin: "6px 0" }}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                fontFamily="Oswald"
              >
                {venue.address}
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              fontFamily="Oswald"
              margin="6px 0"
            >
              {venue.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ClubCard;
