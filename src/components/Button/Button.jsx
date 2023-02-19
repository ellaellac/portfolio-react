import "./Button.scss";

const Button = ({ className, buttonText, link }) => {
  return (
    <button className={className}>
      <a href={link} target="_blank">
        {buttonText}
      </a>
    </button>
  );
};
export default Button;
