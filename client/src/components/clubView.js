import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ColorButtonOutlined } from "./styledComponents/colorBtnOutline";
import "../styles/club.css";

const ClubView = ({ team, venue, handleClubView }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${venue.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="club-view-img"
      >
        <img src={team.logo} alt={team.code} className="club-view-logo" />
      </div>
      <ColorButtonOutlined
        size="small"
        variant="outlined"
        sx={{ margin: "6px", float: "right" }}
        startIcon={<ArrowBackIosNewIcon />}
        onClick={() => handleClubView(null)}
      >
        Back
      </ColorButtonOutlined>
      <div className="club-view-info">
        <div className="club-view-name">{team.name}</div>
        <div className="club-view-est">Est. {team.founded}</div>
      </div>
    </div>
  );
};

export default ClubView;
