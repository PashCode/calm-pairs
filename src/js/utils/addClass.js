export function addClass( element, ...className ) {
    if ( element && className ) element.classList.add( ...className );
}