import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ColorButtonOutlined } from "./styledComponents/colorBtnOutline";
import "../styles/club.css";

const LeagueView = ({ league, handleLeagueView }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${league.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="club-view-img"
      ></div>
      <ColorButtonOutlined
        size="small"
        variant="outlined"
        sx={{ margin: "6px", float: "right" }}
        startIcon={<ArrowBackIosNewIcon />}
        onClick={() => handleLeagueView(null)}
      >
        Back
      </ColorButtonOutlined>
      <div className="club-view-info">
        <div className="club-view-name">{league.name}</div>
        <div className="club-view-est">{league.manager_name}</div>
      </div>
    </div>
  );
};

export default LeagueView;
