import { CDN_URL} from "../utils/Constants"

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} />
      <div className="line"></div>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <div className="card-bottom"><button>{avgRating}</button><h4>{lastMileTravelString} minutes</h4></div>
    </div>
  );
};

export default RestrauntCard;