import React from 'react'

export const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          nuestros <span>servicios</span>
        </h2>
      </div>
      <div className="section-center services-center">
        <article className="service">
          <span className="service-icon">
            <i className="fas fa-wallet fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">Ahorro de dinero</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon">
            <i className="fas fa-hamburger fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">Buffet</h4>
            <p className="service-text">
              ¡Evento inolvidable con comida ilimitada! Entradas, postres y más.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon">
            <i className="fas fa-shipping-fast fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">Comodidad asombrosa</h4>
            <p className="service-text">
              Vamos hacia ti con nuestro servicio a domicilio!
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
