import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ColorButtonOutlined } from "../components/styledComponents/colorBtnOutline";
import EditIcon from "@mui/icons-material/Edit";
import { CardActionArea } from "@mui/material";
import logo from "../assets/images/logo.png";
import basic from "../assets/images/basic.png";

const LeagueCard = ({ isOwn, league, handleLeagueView, handleLeagueEdit }) => {
  const user = useSelector((state) => state.user.data);

  return (
    <Grid item sm={6}>
      {/* {console.log(user)} */}
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#f8f9fa",
          boxShadow: "0 0 6px #381d54",
        }}
        onClick={!isOwn ? () => handleLeagueView(league.id) : null}
      >
        <CardActionArea>
          <Box
            sx={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundImage:
                "linear-gradient(to right,#ff311e,#f61a71,#dd16c0)",
              borderBottom: "1px solid #381d54",
              boxShadow: "0 0 6px #381d54",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "50px", marginLeft: "8px" }}
              image={logo}
              alt="basic-logo"
            />
            <Box
              sx={{
                float: "right",
                height: "66px",
                width: "250px",
                background: "#381d54",
              }}
            >
              <Box
                sx={{
                  height: "96px",
                  width: "96px",
                  marginTop: "-50px",
                  marginLeft: "-48px",
                  background: "#381d54",
                  transform: "rotate(45deg)",
                }}
              ></Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 150, margin: "3px", borderRadius: 1 }}
              image={league.img}
              alt={league.name}
            />
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h5"
                fontFamily="Oswald"
                fontSize="2.25rem"
                fontWeight="600"
                paddingBottom="4px"
                borderBottom="1px solid #ccc"
              >
                {league.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                fontFamily="Oswald"
                fontSize="1.5rem"
              >
                <b>Manager:</b> {league.manager_name}
              </Typography>
              <Box display="flex" justifyContent="space-between">
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <b>League Type:</b> {league.scored}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <b>Number of Teams:</b> {league.team_limit}
                </Typography>
              </Box>
            </CardContent>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid #ccc",
                padding: "2px",
              }}
            >
              <Box
                sx={{
                  width: "200px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                {user && (
                  <>
                    <ColorButtonOutlined
                      size="small"
                      variant="outlined"
                      // onClick={handleClick}
                    >
                      {isOwn ? "Add Team" : "Join League"}
                    </ColorButtonOutlined>
                    {isOwn && (
                      <ColorButtonOutlined
                        size="small"
                        variant="outlined"
                        onClick={() => handleLeagueEdit(league.id)}
                      >
                        <EditIcon />
                        Edit
                      </ColorButtonOutlined>
                    )}
                  </>
                )}
              </Box>
              <CardMedia
                component="img"
                sx={{ width: "140px" }}
                image={basic}
                alt="basic-logo"
              />
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default LeagueCard;
