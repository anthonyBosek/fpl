import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import thumb1 from "../assets/images/thumbs/thumb-01.jpg";

const LeagueCard = ({ league, handleLeagueView }) => {
  return (
    <Grid
      item
      xs={12}
      sm={4}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Card
        sx={{ display: "flex" }}
        onClick={() => handleLeagueView(league.id)}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: 200 }}
            image={thumb1}
            alt={league.name}
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Box sx={{ display: "flex" }}>
              <Typography component="div" variant="h4" fontFamily="Oswald">
                {league.name}
              </Typography>
            </Box>
            <hr style={{ margin: "6px 0" }} />
            <Box sx={{ float: "right" }}>
              <Typography
                color="text.secondary"
                component="div"
                fontFamily="Oswald"
              >
                {league.manager_name}
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              fontFamily="Oswald"
            >
              blank
            </Typography>
            <Box sx={{ float: "right", margin: "6px 0" }}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                fontFamily="Oswald"
              >
                blank
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              fontFamily="Oswald"
              margin="6px 0"
            >
              blank
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default LeagueCard;
