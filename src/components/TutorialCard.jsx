import React from 'react'

export default function TutorialCard({number, heading, body}) {
  return (
    <article className="tutorial-card">
        <span className="tutorial-card__number | fs-tutorial-number clr-blue" aria-hidden="true"> {number} </span>

        <h2 className="tutorial-card__heading heading-2"> {heading} </h2>

        <p className="tutorial-card__body clr-purple">
        {body}
        </p>
    </article>
  )
}
