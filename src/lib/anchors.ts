/** Anchor id for an H2, stable across builds and safe for duplicate headings. */
export function headingId(heading: string): string {
  return (
    heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section"
  );
}

/** Unique anchor ids for a list of headings, in document order. */
export function headingIds(headings: string[]): string[] {
  const seen = new Map<string, number>();
  return headings.map((heading) => {
    const base = headingId(heading);
    const count = (seen.get(base) ?? 0) + 1;
    seen.set(base, count);
    return count === 1 ? base : `${base}-${count}`;
  });
}
