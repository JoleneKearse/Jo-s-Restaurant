import kitchen from "../assets/kitchen.png";

const RestaurantIntro = () => {
  return (
    <div className="flex">
      <div className="container">
        <h2 className="text-uppercase text-accent">
          Hi, We’re Jo’s Burgers, a collective of creators who Love burger and
          good mood.
        </h2>
        <figure>
          <img
            src={kitchen}
            alt="Restauranter Jo working in the kitchen he started from scratch"
          />
          <figcaption className="text-center">
            This is Jo. He started everything 40 years ago.
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default RestaurantIntro;
