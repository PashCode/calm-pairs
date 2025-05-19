import { sizeParticles } from './sizeParticles';
import { SELECTORS } from '../gameState';

const MAX_PARTICLES = 60;
const particles: Particle[] = [];
const backgroundContainer = SELECTORS.BACKGROUND as HTMLDivElement;

class Particle {
  private readonly element: HTMLDivElement;
  private x: number;
  private y: number;
  private size: number;
  private speedX: number;
  private speedY: number;
  private opacity: number;

  constructor() {
    this.element = document.createElement( 'div' );
    this.x = 0;
    this.y = 0;
    this.size = 0;
    this.speedX = 0;
    this.speedY = 0;
    this.opacity = 0;

    this.element.className = 'background__particle';
    this.reset();
    backgroundContainer.append( this.element );
  }

  reset(): void {
    // Ініціалізуємо частинку у випадковій позиції з випадковим розміром і швидкістю
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = sizeParticles();
    this.speedX = ( Math.random() - 0.5 ) * 0.5;
    this.speedY = ( Math.random() - 0.5 ) * 0.5;
    this.opacity = 0;
    this.element.style.width = this.element.style.height = `${ this.size }px`;
  }

  update(): void {
    this.x += this.speedX;
    this.y += this.speedY;

    // Частинка плавно зʼявляється
    if ( this.opacity < 0.7 ) this.opacity += 0.01;

    // Якщо частинка вийшла за межі — скидаємо
    if (
      this.x < -this.size || this.x > window.innerWidth ||
      this.y < -this.size || this.y > window.innerHeight
    ) {
      this.reset();
    }

    // Оновлюємо позицію і прозорість
    this.element.style.transform = `translate(${ this.x }px, ${ this.y }px)`;
    this.element.style.opacity = String( this.opacity );
  }
}

// Створюємо пул частинок
for ( let i: number = 0; i < MAX_PARTICLES; i++ ) {
  particles.push( new Particle() );
}

// Запускаємо анімацію
export function backgroundStart(): void {
  particles.forEach( ( particle: Particle ): void => particle.update() );
  requestAnimationFrame( backgroundStart );
}
