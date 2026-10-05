export interface Certification {
  name: string;
  issuer: string;
  /** Sortable "YYYY-MM"; null when the credential carries no issue date. */
  issuedAt: string | null;
  /** Human readable date shown on the page. */
  date: string;
  type: string;
  detail?: string;
}

export interface CertificationGroup {
  issuer: string;
  items: Certification[];
}

const byNewestFirst = (a: Certification, b: Certification): number => {
  if (a.issuedAt === b.issuedAt) return 0;
  if (a.issuedAt === null) return 1;
  if (b.issuedAt === null) return -1;
  return b.issuedAt.localeCompare(a.issuedAt);
};

const newestDate = (group: CertificationGroup): string =>
  group.items[0]?.issuedAt ?? "";

export function groupCertifications(
  certifications: readonly Certification[],
): CertificationGroup[] {
  const groups = new Map<string, Certification[]>();
  for (const certification of certifications) {
    const items = groups.get(certification.issuer) ?? [];
    items.push(certification);
    groups.set(certification.issuer, items);
  }

  return [...groups.entries()]
    .map(([issuer, items]) => ({ issuer, items: [...items].sort(byNewestFirst) }))
    .sort(
      (a, b) =>
        b.items.length - a.items.length ||
        newestDate(b).localeCompare(newestDate(a)),
    );
}
