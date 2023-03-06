/* eslint-disable prettier/prettier */
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <li className={`${className} card-container`}>
      <div>
        <h1 className="card-heading">{headerText}</h1>
        <p className="card-description">{description}</p>
        <button className="card-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default CardItem
