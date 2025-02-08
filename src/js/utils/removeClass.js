export function removeClass( element, ...className ) {
  if ( element && className ) element.classList.remove( ...className );
}


