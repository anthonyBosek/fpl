import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { ColorButtonOutlined } from "../styledComponents/colorBtnOutline";
import EditIcon from "@mui/icons-material/Edit";
import logo from "../../assets/images/logo.png";
import basic from "../../assets/images/basic.png";
import { getCookie, randomThumb } from "../../utils/main";
import { Button } from "@mui/material";

const leagueSchema = yup.object().shape({
  name: yup.string().required("League name is required"),
});

const initialValues = {
  name: "",
  scored: "Head-To-Head",
  team_limit: 6,
};

const LeagueForm = ({ isNew, handleFormToggle }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);
  const [league, setLeague] = useState({});

  // useEffect(() => {
  //   const getLeague = async () => {
  //     try {
  //       const res = await axios.get(`/leagues/${id}`);
  //       setLeague(res.data);
  //     } catch (error) {
  //       toast.error(error.message);
  //     }
  //   };
  //   if (id) {
  //     getLeague();
  //   }
  // }, [id]);

  const handleFormSubmit = async (values) => {
    values.team_limit = parseInt(values.team_limit);
    if (isNew) {
      values.manager_id = user?.id;
      try {
        const res = await axios({
          method: "POST",
          url: "/leagues",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": getCookie("csrf_access_token"),
          },
          data: JSON.stringify(values),
        });
        // navigate(`/users/${user.id}/dashboard/`);
        handleFormToggle(false);
        toast.success("League created");
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      delete values.manager_name;
      delete values.manager;
      try {
        const res = await axios({
          method: "PATCH",
          url: `/leagues/${league.id}`,
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": getCookie("csrf_access_token"),
          },
          data: JSON.stringify(values),
        });
        // navigate(`/users/${user.id}/dashboard/`);
        toast.success("League updated", {
          duration: 4000,
          // position: "top-right",
          // style: {
          //   border: "1px solid #333",
          //   backgroundImage: "linear-gradient(to right, #f61a71, #ff311e)",
          //   padding: "10px",
          //   color: "#333",
          // },
        });
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  // const allMenuItems = PL_CLUBS.map(({ team }) => (
  //   <MenuItem key={`menu-${team.id}`} value={team.code}>
  //     {team.name}
  //   </MenuItem>
  // ));

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={leagueSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <Grid item sm={6}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "#f8f9fa",
              boxShadow: "0 0 6px #381d54",
            }}
          >
            <Box component="form" noValidate onSubmit={handleSubmit}>
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
                  image={randomThumb(league)}
                  alt="default"
                />
                <CardContent
                  sx={{ flex: "1 0 auto", padding: "8px 16px 16px 16px" }}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    fontFamily="Oswald"
                    fontSize="2.25rem"
                    fontWeight="600"
                    paddingBottom="7px"
                    borderBottom="1px solid #ccc"
                  >
                    <TextField
                      fullWidth
                      type="text"
                      label="League Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      name="name"
                      error={!!touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                    />
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    marginTop="10px"
                  >
                    <FormControl sx={{ width: "48%" }}>
                      <InputLabel id="scored">League Type</InputLabel>
                      <Select
                        labelId="scored"
                        fullWidth
                        label="League Type"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.scored || "Head-To-Head"}
                        name="scored"
                      >
                        <MenuItem value="Head-To-Head">Head-To-Head</MenuItem>
                        <MenuItem value="Total Points">Total Points</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl sx={{ width: "48%" }}>
                      <InputLabel id="team_limit">Number of Teams</InputLabel>
                      <Select
                        labelId="team_limit"
                        fullWidth
                        label="Number of Teams"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.team_limit || "6"}
                        name="team_limit"
                      >
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                        <MenuItem value="7">7</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                        <MenuItem value="9">9</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                      </Select>
                    </FormControl>
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
                    <Button type="submit" size="small" variant="outlined">
                      Add League
                    </Button>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: "140px" }}
                    image={basic}
                    alt="basic-logo"
                  />
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
      )}
    </Formik>
  );
};

export default LeagueForm;
