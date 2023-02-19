import "./Card.scss";
import Button from "../Button/Button";

const Card = ({ name, tags, image, description, preview, code }) => {
  return (
    <section className="card">
      <h3 className="card__name">{name}</h3>
      <img src={image} alt={name} className="card__image" />
      <p className="card__tag">{tags}</p>
      <p className="card__description"> {description}</p>
      <div className="card__buttons">
        <Button
          className="button--primary"
          buttonText="Preview"
          link={preview}
        />
        <Button className="button--primary" buttonText="Code" link={code} />
      </div>
    </section>
  );
};
export default Card;
