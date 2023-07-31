export const cx = (...classNames: (boolean | string | undefined)[]) =>
  classNames.filter(Boolean).join(' ')
