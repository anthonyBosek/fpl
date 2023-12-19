import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StyledTableCell } from "../components/styledComponents/tableCell";
import { ColorButtonOutlined } from "../components/styledComponents/colorBtnOutline";
import TeamRow from "../components/teamRow";
import LeagueCard from "../components/leagueCard";
import { getCookie, randomThumb } from "../utils/main";
import "../styles/dashboard.css";
import LeagueForm from "../components/forms/leagueForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);
  const [leagues, setLeagues] = useState([]);
  const [teams, setTeams] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    // console.log("user", user);
    setLeagues(user?.leagues);
    setTeams(user?.teams);
    const getLeagues = async () => {
      try {
        const res = await axios.get("/leagues");
        res.data.forEach((league) => (league.img = randomThumb("league")));
        setLeagues(res.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    if (!isNew) getLeagues();
    // const getTeams = async () => {
    //   try {
    //     const res = await axios.get("/teams");
    //     setTeams(res.data);
    //   } catch (error) {
    //     toast.error(error.message);
    //   }
    // };
    // getTeams();
  }, [isNew]);

  useEffect(() => {
    setIsNew(true);
  }, [leagues]);

  const handleFormToggle = (bool) => {
    setShowForm((prev) => !prev);
    setIsNew(bool);
  };

  // const handleFormToggle = () => navigate("/leagues/new");

  const handleLeagueEdit = (id) => navigate(`/leagues/${id}/edit`);
  // const handleLeagueEdit = (id) => navigate(`/leagues/${id}/edit`);

  const handleTeamAdd = (id) => navigate(`/leagues/${id}/teams/new`);

  const handleTeamDisplay = (id) => navigate(`/teams/${id}/edit`);

  const handleTeamDelete = (id) => {
    console.log("del team", id);
  };

  const handleLeagueDelete = async (id) => {
    try {
      const res = await axios({
        method: "DELETE",
        url: `/leagues/${id}`,
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": getCookie("csrf_access_token"),
        },
      });
      if (res.status === 200) {
        try {
          const res = await axios.get("/leagues");
          setLeagues(res.data);
          setTeams((prev) => prev.filter((team) => team.league_id !== id));
        } catch (error) {
          toast.error(error.message);
        }
      }
      toast.success("League deleted");
      navigate(`/users/${user?.id}/dashboard/`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const allLeagues = leagues?.map(
    (league) =>
      league.manager_id === user?.id && (
        <LeagueCard key={league.id} league={league} />
      )
  );

  const allTeams = teams?.map(
    (team) =>
      team.owner_id === user?.id && (
        <TeamRow
          key={team.id}
          team={team}
          handleTeamDisplay={handleTeamDisplay}
          // handleDelete={handleTeamDelete}
        />
      )
  );

  return (
    <div className="dashboard">
      <div className="dash-header">
        <div className="dash-title">{user?.username} Fantasy Dashboard</div>
        <ColorButtonOutlined
          size="small"
          variant="outlined"
          onClick={handleFormToggle}
        >
          Create League
        </ColorButtonOutlined>
      </div>
      <Grid container spacing={5}>
        {/* {showForm && (
          <LeagueForm isNew={isNew} handleFormToggle={handleFormToggle} />
        )} */}
        {allLeagues}
      </Grid>
      <div className="dash-sub-title">Teams</div>
      <TableContainer>
        <Table
          sx={{
            margin: "20px auto",
            border: "1px solid #ccc",
            boxShadow: "0 0 6px #381d54",
          }}
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" width="11%"></StyledTableCell>
              <StyledTableCell align="center" width="26%">
                Team Name
              </StyledTableCell>
              <StyledTableCell align="center" width="26%">
                Owner Name
              </StyledTableCell>
              <StyledTableCell align="center" width="11%"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{allTeams}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
