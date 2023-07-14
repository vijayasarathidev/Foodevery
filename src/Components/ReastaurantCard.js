const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {name,image,category,rating,price}= resData?. data;
  
    return (
      <div className="cards">
        <div className="res-card">
        <h3>{name}</h3>
        <img className="card-img" alt="Restaurant" src={image} />
        <div>
          <h2>{category}</h2>
          <p>{rating}</p>
          <p>{price}</p>
        </div>
        </div>
      </div>
    );
  };

  export default RestaurantCard;