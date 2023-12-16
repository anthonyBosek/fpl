import { PL_CLUBS } from "../assets/data/pl";

const links = PL_CLUBS.map(({ club }) => (
  <li key={`club-link-${club.name}`}>
    <a href={club.zine} rel="noreferrer" target="_blank">
      <img className="club-link" src={club.logo} alt="logo" />
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
