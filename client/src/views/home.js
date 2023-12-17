import "../styles/home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div
          className="hero-text"
          style={{
            height: "800px",
            width: "1000px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* <div className="hero-title">Fantasy Eleven</div>
          <div className="hero-subtitle">Fantasy Football App</div> */}
          <div
            style={{
              fontFamily: "Oswald",
              fontSize: "6rem",
              color: "#381d54",
              textShadow: "0 0 6px #ccc",
            }}
          >
            Welcome to Fantasy Eleven
          </div>
          <p
            style={{
              fontFamily: "Oswald",
              fontSize: "2rem",
              color: "black",
              textShadow: "0 0 6px white",
            }}
          >
            Fantasy Eleven is a fantasy football app that allows you to create
            your own fantasy football league, draft your own team, and compete
            with your friends.
          </p>
        </div>
      </div>
      <div className="home-title">Welcome to the Football App</div>
    </div>
  );
};

export default Home;
