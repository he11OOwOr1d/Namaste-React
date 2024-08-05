import { RES_IMAGE } from "../utils/constants"
const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo
  } = resData?.info
  const {deliveryTime} = resData.info?.sla 
  
  return (
    <div className="res-card">
      <img
        className="res-card-img"
        src={RES_IMAGE + cloudinaryImageId}
        alt={name}
      />
      <div className="res-details">
        <div className="res-n-r">
          <h4 className="res-name">{name}</h4>
          <p className="res-rating" style={{display:"flex",alignItems:"center"}}>
            {avgRating}{" "}
            <span className="star">
              <svg
                width="15px"
                viewBox="0 0 25 25"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                style={{ verticalAlign: 'middle' }}
              >
                <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z" />
              </svg>
            </span>
          </p>
        </div>
        <div className="res-cuis-price">
          <p className="res-cuisine">
            {cuisines.join(', ') || 'No cuisines listed'}
          </p>
          <div className="res-p-deliv">
            <p className="res-price">{costForTwo || 'N/A'}</p>
            <p className="res-delivery-time">
              {deliveryTime ? `${deliveryTime} min` : 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;