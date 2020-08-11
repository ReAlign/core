/**
 * Detailed type
 * @param o {*} value need to be typeof
 *
 * ```typescript
 * const type = typeOf(1);
 * ```
 */
export default function typeOf(o: any): string {
  return ({}).toString.call(o).slice(8, -1).toLowerCase();
}