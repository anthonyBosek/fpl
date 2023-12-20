import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import basic from "../assets/images/basic.png";
import rainbow from "../assets/images/rainbow.webp";
import hdr1 from "../assets/images/articles/hdr1.png";
import hdr2 from "../assets/images/articles/hdr2.png";
import box1 from "../assets/images/articles/box1.png";
import box2 from "../assets/images/articles/box2.png";
import story1 from "../assets/images/articles/story1.webp";
import story2 from "../assets/images/articles/story2.webp";
import table from "../assets/images/articles/table.png";
import { ColorButtonSolid } from "../components/styledComponents/colorBtnSolid";
import "../styles/home.css";

const Home = () => {
  const nav = useNavigate();
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-cover">
          <div className="hero-title">Welcome to Fantasy Eleven</div>
          <div className="line"></div>
          <p className="hero-txt">
            The Premier League Enthusiast's Fantasy Football home for nonstop
            action and all things Premier League.
          </p>
          <div className="hero-logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="divider1"></div>
      <div className="info-sect-box">
        <div className="info-section">
          <a
            href="https://www.premierleague.com/home"
            rel="noreferrer"
            target="_blank"
          >
            <img src={basic} alt="pl-link" className="pl-link-img" />
          </a>
          <div className="line4"></div>
          <ColorButtonSolid
            sx={{ height: "150px", width: "400px", fontSize: "1.3rem" }}
            onClick={() => nav("/auth")}
          >
            <img src={rainbow} alt="rainbow" className="fan-link-img" />
            Register Now & Play <br />
            Fantasy Eleven
          </ColorButtonSolid>
        </div>
      </div>
      <div className="divider1"></div>
      <img src={hdr1} alt="article-1" className="article-img" />
      <section>
        <img src={story1} alt="story1" className="story-img left" />
        <div className="article-header">
          Liverpool left frustrated after they failed to convert dominance in a
          goalless draw at Anfield
        </div>
        <p>
          Liverpool were denied a return to the top of the Premier League as a
          resolute Manchester United defensive display held their dominant hosts
          to a 0-0 draw at Anfield. Andre Onana made his league-high eight saves
          in a match, while his team-mates battled to only the fourth goalless
          draw of the season so far to frustrate the home crowd.
          <br />
          <center>
            <b>How the match unfolded</b>
          </center>
          Centre-back Ibrahima Konate replaced Jarell Quansah in Liverpool’s
          only change from their late victory at Crystal Palace last weekend.
          Erik ten Hag made four changes, with Jonny Evans, Raphael Varane,
          Rasmus Hojlund and Kobbie Mainoo all returning. Liverpool started
          ferociously, winning a corner inside the opening 20 seconds, which was
          met by a roar from the Anfield crowd, the largest since the 1960s
          thanks to the redeveloped Anfield Road stand being opened for the
          first time.
        </p>
        <p>
          The home side continued to apply the pressure, Darwin Nunez’s
          back-post header testing Onana, who could only parry to the feet of
          Mohamed Salah, whose effort from close range was scrambled behind for
          a corner. Then Virgil van Dijk, up from the back for Liverpool’s
          seventh corner, powered a header that Onana had to tip over. With the
          first half approaching its conclusion, Ryan Gravenberch cut a low ball
          back to the edge of the box to find Salah, but his low shot was saved
          by Onana. It was Man Utd who had the first real chance of the second
          half. Alejandro Garnacho was sent through on goal, but Trent-Alexander
          Arnold got back to deny the Argentinian with a brilliant tackle. Owen
          and Scholes on Man Utd's approach at Anfield Michael Owen and Paul
          Scholes debate Ten Hag's tactics and what the Red Devils need to work
          on Following his substitution for the injured Gravenberch on the hour,
          Cody Gakpo immediately found himself in space and passed to Salah,
          whose curled shot towards the top corner was comfortably saved by
          Onana. The hosts came forward again, with Salah setting up
          Alexander-Arnold, whose fierce low shot brushed the near post. But in
          the next minute, Man Utd, much against the run of play, came close to
          breaking the deadlock, with some neat passing resulting in a Hojlund
          shot from close range that was straight at Alisson. With the contest
          now stretched Liverpool came forward once more, Salah jinking inside
          on to his left and bending a well-hit shot that forced Onana into
          another flying save.
        </p>
        <p>
          In the fourth of five additional minutes of stoppage time, Man Utd
          were reduced to 10 men after Diogo Dalot was shown two yellow cards
          for dissent in the space of 10 seconds by referee Michael Oliver. But
          Liverpool were unable to capitalise and their fifth draw of the season
          means they slip to second on 38 points, one behind Arsenal, whom they
          face next weekend. Man Utd are seventh on 28 points, one off Newcastle
          United in sixth and one ahead of West Ham United, where they travel to
          next weekend.
        </p>
      </section>
      <div className="divider2"></div>
      <div className="info-section2">
        <img src={box1} alt="score1" className="score-img" />
        <div className="line3"></div>
        <img src={box2} alt="score2" className="score-img" />
      </div>
      <div className="divider2"></div>
      <img src={hdr2} alt="article-1" className="article-img" />
      <section>
        <img src={story2} alt="story2" className="story-img right" />
        <div className="article-header">
          Arsenal manager praises his side for learning lessons from last
          season's home defeat to Brighton
        </div>
        <p>
          Mikel Arteta praised his Arsenal side for learning lessons from last
          season's home defeat to Brighton & Hove Albion as they came from
          behind to win 2-1 at Emirates Stadium. The Gunners were beaten 2-1 by
          the Seagulls in May, but this time it was Arsenal who came out on top
          thanks to goals from Bukayo Saka and Gabriel Magalhaes. It was a third
          successive Premier League win for Arsenal, who have now scored 10
          goals in their last three matches. "I think we started the game really
          well and we were really dominant," Arteta told Arsenal Media. "We
          scored a really good goal and after that we conceded a goal from a
          set-piece, which is something that we have to improve. "After that we
          reacted really well, we didn't panic, we kept playing our game and we
          scored a really good goal. "In the second half we had to manage the
          game a little bit better. We had some really good moments and we had
          some moments where we were a little bit sloppy, but overall I think we
          deserved to win the game."
        </p>
        <p>
          Arteta believes that stronger character from his team this season made
          the difference from the 3-0 defeat in the corresponding fixture last
          season. “I think we had a really good first half last season as well,"
          he said. “We should have scored one or two goals but we didn’t. That
          was my concern today at half-time as well. But [last season] when we
          conceded the first goal, the team went down because we didn’t have
          that belief. “Today we showed a real determination to beat them from
          the beginning until the end - and we have managed to do it.” Arsenal
          have a chance to extend their lead at the top when they visit
          second-placed Liverpool on Saturday, who sit a point behind the
          Gunners after they drew 0-0 with Manchester United.
        </p>
        <p>
          Mikel Arteta praised his Arsenal team after a dominant display in a
          2-0 win over Brighton & Hove Albion ended a poor run against the
          Seagulls and returned his team to the top of the league. Sunday 17
          December ARS 2 - 0 BHA Second-half goals from Gabriel Jesus and Kai
          Havertz gave Arsenal a first victory in four home matches against
          Brighton and eased nerves at Emirates Stadium after a number of
          first-half chances had gone begging. “Big compliment to the team and
          to the players,” Arteta said. “I think we had an incredible
          performance against a top team. "We fully deserved to win the game. I
          have to praise them because I know how difficult it is and what
          Brighton do to teams. We didn’t allow that to happen, so I’m super
          happy.”
        </p>
        <div className="line end"></div>
        <div className="league-table">
          <img src={table} alt="table" className="table-img" />
        </div>
        <div className="line end"></div>
      </section>
    </div>
  );
};

export default Home;
