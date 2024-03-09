import React from 'react'
import { prices } from '../data'

export const Prices = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          nuestros <span>paquetes</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {prices.map((plan) => {
          const { id, title, description, duration, price, image } = plan
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt={title} />
                <p className="tour-date">{duration}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">{/* <h4>{title}</h4> */}</div>
                <p>{description}</p>
                <div className="tour-footer">
                  <p>{duration}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
