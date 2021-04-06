import React from 'react'
import { Link } from 'react-router-dom'
import './NewlyAddedPreview.css'

const NewlyAddedPreview = (props) => {

  const imgSrc = `https://picsum.photos/100?id=${props.details.id}` 

  return (
    <article className="NewlyAddedPreview">
      
      <Link to={{
            pathname: `/photocard/${props.details.id}`,
            state: props.details
          }}>
        <img alt={props.details.photocard_name} src={imgSrc} />
        <h2>{props.details.photocard_name}</h2>
      </Link>
    </article>
  )
}

export default NewlyAddedPreview
