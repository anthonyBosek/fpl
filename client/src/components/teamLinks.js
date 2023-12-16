import { PL_TEAMS } from "../assets/data/pl";

const links = PL_TEAMS.map(({ team }) => (
  <li key={`team-link-${team.name}`}>
    <a href={team.zine} target="_blank">
      <img className="team-link" src={team.logo} alt="logo" />
    </a>
  </li>
));

const TeamLinks = () => {
  return (
    <div className="team-links">
      <ul className="team-links-box">{links}</ul>
    </div>
  );
};

export default TeamLinks;
