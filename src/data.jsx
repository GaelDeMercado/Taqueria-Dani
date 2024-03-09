import test1 from './images/test-1.png'
export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'nosotros' },
  { id: 3, href: '#services', text: 'servicios' },
  { id: 4, href: '#tours', text: 'eventos' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
]

export const prices = [
  {
    id: 1,
    title: 'Small',
    description: 'Perfecto para eventos de un dia como cumpleanos',
    duration: 'duration de 1 Dia',
    price: 'Desde $2100',
    image: test1,
  },
  {
    id: 2,
    title: 'Medium',
    description:
      '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque',
    duration: 'duration de 3 Dias',
    price: 'Desde $5000',
    image: test1,
  },
  {
    id: 3,
    title: 'Large',
    description: 'Este es el plan ideal para celebrar eventos navidad o ferias',
    duration: 'duration de 7 Dias',
    price: 'Desde $15000',
    image: test1,
  },
  {
    id: 4,
    title: 'Custom',
    description:
      'Especial para eventos donde la duration es de mas de una semana o con una duration no determinada y que puede cambiar en cualquier momento',
    duration: 'Desde 7 Dias En Adelante',
    price: 'Precio A Tratar',
    image: test1,
  },
]
