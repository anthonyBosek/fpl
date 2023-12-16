import { PL_CLUBS } from "../assets/data/pl";

const links = PL_CLUBS.map(({ team }) => (
  <li key={`club-link-${team.name}`}>
    <a href={team.zine} rel="noreferrer" target="_blank">
      <img className="club-link" src={team.logo} alt="logo" />
    </a>
  </li>
));

const ClubLinks = () => {
  return (
    <div className="club-links">
      <ul className="club-links-box">{links}</ul>
    </div>
  );
};

export default ClubLinks;
