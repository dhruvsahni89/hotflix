import React from 'react'
import { img_300, unavailable } from '../../config/config'
const SingleContent = ({
    id,
    title,
    poster,
    date,
    media_type,
    vote_average
}) => {
    return (
        <div>
          <img src={  poster ? `${img_300}/${poster}` : unavailable} />
        </div>
    )
}

export default SingleContent
