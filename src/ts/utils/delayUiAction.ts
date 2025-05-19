export function delayUiAction( delay: number, ...actions: Array<() => void> ): number {
  const timeoutId: number = setTimeout( (): void => {
    actions.forEach( ( action: () => void ): void => {
      action();
    } );
  }, delay );

  return timeoutId;
}
