import "./Heading.scss";
const Heading = ({ text }) => {
  return (
    <div className="heading">
      <h1 className="heading__text">{text}</h1>
    </div>
  );
};
export default Heading;
