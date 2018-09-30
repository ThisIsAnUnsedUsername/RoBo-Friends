import React from "react"; //if we are writting JSX, we need React

const Card = ({ id, email, name }) => {
  //const Card = (props) or const Card = () also can, can use any argument name
  //const {id, name, email} = props;

  return (
    //must return only one element/container
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        {/*javascript expression in JSX need to wrap in curly bracket, just like this comment*/}
        <h2>{name}</h2> {/*or props.name*/}
        <p>{email}</p> {/*or this.props.name if no arguement in card*/}
      </div>
    </div>
  );
};

export default Card;
