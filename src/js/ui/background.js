import { sizeParticles } from './sizeParticles.js';

const MAX_PARTICLES = 60;
const container = document.querySelector( '.background' );
const particles = [];

class Particle {
  constructor() {
    this.element = document.createElement( 'div' );
    this.element.className = 'background__particle';
    this.reset();
    container.append( this.element );
  }

  reset() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = sizeParticles();
    this.speedX = ( Math.random() - 0.5 ) * 0.5;
    this.speedY = ( Math.random() - 0.5 ) * 0.5;
    this.opacity = 0;
    this.element.style.width = this.element.style.height = `${ this.size }px`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Плавное появление и исчезновение
    if ( this.opacity < 0.7 ) this.opacity += 0.01;

    // Проверка границ экрана
    if ( this.x < -this.size || this.x > window.innerWidth ||
      this.y < -this.size || this.y > window.innerHeight ) {
      this.reset();
    }

    this.element.style.transform = `translate(${ this.x }px, ${ this.y }px)`;
    this.element.style.opacity = this.opacity;
  }
}

// Создаем пул частиц
for ( let i = 0; i < MAX_PARTICLES; i++ ) {
  particles.push( new Particle() );
}

// Используем requestAnimationFrame для оптимизированной анимации
export function backgroundStart() {
  particles.forEach( particle => particle.update() );
  requestAnimationFrame( backgroundStart );
}
