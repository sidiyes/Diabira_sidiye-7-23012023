import { useParams } from "react-router-dom";
import data from "../../api/data";
import "./Estates.css";
import Rating from "../../components/Rating/Rating";
import Host from "../../components/Host/Host";
import Slider from "../../components/Slider/Slider";
import Tags from "../../components/Tags/Tags";
import Collapse from "../../components/Collapse/Collapse";

const Estate = () => {
  const { estateId } = useParams();
  const estateOption = data.find(
    (estateOption) => estateOption.id === estateId
  );

  /* if (estateOption.id !== estateId) {
    return alert("yesss");
  } */

  const { pictures, title, location, host, description, rating, equipments } =
    estateOption;

  return (
    <main className="estate__main">
      <Slider slides={pictures} />
      <div className="estate__content">
        <div className="estate__informations">
          <h1 className="estate__title">{title}</h1>
          <p className="estate__location">{location}</p>
          <div className="estate__tags">
            {estateOption.tags.map((tag, index) => (
              <Tags key={index} tagPlaceholder={tag} />
            ))}
          </div>
        </div>
        <div className="hostRating__overlay">
          <Host host={host} />
          <Rating rating={rating} />
        </div>
      </div>
      <div className="estate__collapse">
        <div className="collapse__overlay">
          <Collapse title="Description" content={description} />
        </div>
        <div className="collapse__overlay">
          <Collapse title="Équipements" content={equipments} />
        </div>
      </div>
    </main>
  );
};

export default Estate;
