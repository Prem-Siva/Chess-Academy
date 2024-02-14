/* import name from "../assets/images/name.png";
 */ import chess from "../assets/images/Team/chess.png";

 function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="col1">
          <h1>Learn</h1>
          <h2>and Rule !</h2>
        </div>
        <div className="col2 ">
          <img className="img" src={chess}></img>
          <div className="ball"> </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Hero;
