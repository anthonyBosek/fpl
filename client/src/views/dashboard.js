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
  const [league, setLeague] = useState(null);
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState(null);
  const [showLeagueForm, setShowLeagueForm] = useState(false);
  const [showTeamForm, setShowTeamForm] = useState(false);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const getLeagues = async () => {
      try {
        const res = await axios.get("/leagues");
        res.data.forEach((league) => (league.img = randomThumb("league")));
        setLeagues(res.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getLeagues();
    const getTeams = async () => {
      try {
        const res = await axios.get("/teams");
        setTeams(res.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getTeams();
  }, [updated]);

  const handleUpdate = () => setUpdated((prev) => !prev);

  // show form for league -- in form component user can create new league or edit existing league
  const handleLeagueFormToggle = (bool) => setShowLeagueForm((prev) => !prev);
  // set league to edit
  const handleLeagueEdit = (id) =>
    setLeague(id ? leagues.find((league) => league.id === id) : null);

  // show form for team -- in form component user can create new team or edit existing team
  const handleTeamFormToggle = (bool) => setShowTeamForm((prev) => !prev);
  // set team to edit
  const handleTeamEdit = (id) => {};

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
        handleUpdate();
        toast.success("League deleted");
      } else {
        toast.error("Unable to delete league, please try again");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const allLeagues = leagues?.map(
    (league) =>
      league.manager_id === user?.id && (
        <LeagueCard
          key={league.id}
          isOwn={true}
          league={league}
          handleLeagueEdit={handleLeagueEdit}
          handleLeagueDelete={handleLeagueDelete}
        />
      )
  );

  const allTeams = teams?.map(
    (team) =>
      team.owner_id === user?.id && (
        <TeamRow
          key={team.id}
          team={team}
          league={leagues.find((league) => league.id === team.league_id)}
          handleTeamEdit={handleTeamEdit}
          handleTeamDelete={handleTeamDelete}
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
          onClick={handleLeagueFormToggle}
        >
          Create League
        </ColorButtonOutlined>
      </div>
      <Grid container spacing={5}>
        {showLeagueForm && (
          <LeagueForm
            manager={user?.username}
            handleUpdate={handleUpdate}
            handleLeagueFormToggle={handleLeagueFormToggle}
          />
        )}
        {league && (
          <LeagueForm
            id={league.id}
            manager={user?.username}
            handleUpdate={handleUpdate}
            handleLeagueFormToggle={handleLeagueEdit}
          />
        )}
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
                Team
              </StyledTableCell>
              <StyledTableCell align="center" width="26%">
                League
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
