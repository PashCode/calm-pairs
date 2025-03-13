export function timeout( delay, ...actions ) {
  setTimeout( () => {
    actions.forEach( action => action() );
  }, delay );
}
