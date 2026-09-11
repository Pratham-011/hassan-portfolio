/**
 * Split an array into fixed-size groups.
 *
 *   chunk([1,2,3,4,5,6,7], 3)  ->  [[1,2,3], [4,5,6], [7]]
 *
 * The SEO Work section uses this to split a flat list of case studies into its
 * two rows. Note it takes a GROUP SIZE, not a group count — that section wants
 * a fixed number of rows, so it passes `ceil(length / 2)` rather than 2.
 */
export function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}
