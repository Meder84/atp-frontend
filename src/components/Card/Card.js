import React, {useContext} from "react";
import './Card.css'
// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  // const currentUser = useContext(CurrentUserContext);

  // const isOwn = props.card.owner._id === currentUser._id;
  // const cardDeleteButtonClassName = (
  //   `card__delete-button ${isOwn 
  //   ? '' 
  //   : 'card__delete-button_hidden'}`
  // )

  // const isLiked = props.card.likes.some(i => i._id === currentUser._id)
  // const cardLikeButtonClassName = (
  //   `card__like-button ${isLiked 
  //   ? 'card__like-button_black' 
  //   : ''}`
  // )
    
  function handleClick() {
    props.onCardClick(props.card);
  } 

  // function handleLikeClick() {
  //   props.onCardLike(props.card);
  // }

  // function handleDeleteClick() {
  //   props.onCardDelete(props.card)
  // }

  return(
    <li className="card">
      <img 
        className="card__image imageScale opacity" 
        src={props.card.url} 
        alt={props.card.name}
        onClick={handleClick}
      />
      {props.children}
    </li>
  )
}

export default Card;