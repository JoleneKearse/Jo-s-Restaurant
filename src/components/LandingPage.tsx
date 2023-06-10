import hero from "../assets/hero.png";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <h1>New York's Favorite Burger</h1>
      <p>
        In a world so painfully serious, yet so ridiculous, you knew it was only
        a matter of time before plant-based steak became a thing.
      </p>
      <img src={hero} alt="Jo's Restaurant world famous Shrimp Yo burger" />
      <button>Browse Menu</button>
    </div>
  );
};

export default LandingPage;
