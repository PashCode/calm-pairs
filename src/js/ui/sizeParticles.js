const innerWidth = window.innerWidth;

export function sizeParticles() {
  if ( innerWidth <= 600 ) {
    return Math.random() * 7;
  } else if ( innerWidth <= 1024 ) {
    return Math.random() * 10;
  } else {
    return Math.random() * 15;
  }
}
