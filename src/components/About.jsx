import React from 'react'
import aboutImg from '../images/about.png'

export const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>
          sobre <span>nosotros</span>
        </h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>Conocenos</h3>
          <p>
            Bienvenido a Taquería Dani, un auténtico pedacito de México en el
            corazón de Ahome, Sinaloa. Hemos deleitado a nuestros clientes con
            los sabores tradicionales y la calidez de la cocina mexicana.
          </p>
          <p>
            En Taquería Dani, no solo se trata de la comida, sino también de la
            cultura y la pasión que compartimos por la cocina mexicana. Estamos
            comprometidos con mantener viva la tradición culinaria de nuestro
            país y compartir nuestra herencia gastronómica con nuestra
            comunidad.
          </p>
          <p>
            ¡Ven y descubre por qué Taquería Dani es el destino favorito de los
            amantes de los tacos en Ahome, Sinaloa!
          </p>

          <a href="#" className="btn">
            leer mas
          </a>
        </article>
      </div>
    </section>
  )
}
