import "./card.css";

const Card = (props: any) => {
  let classes = `card ${props.className ? props.className : ''}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;