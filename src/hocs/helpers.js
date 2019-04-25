export function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export function compose(...functions) {
  return Component => functions.reduceRight((Comp, fn) => fn(Comp), Component)
}
