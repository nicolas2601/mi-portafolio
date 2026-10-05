import { describe, expect, it } from "vitest";
import { groupCertifications } from "../../src/lib/certifications";

const cert = (name: string, issuer: string, issuedAt: string | null) => ({
  name,
  issuer,
  issuedAt,
  date: issuedAt ?? "",
  type: "Curso",
});

describe("groupCertifications", () => {
  it("groups by issuer and puts the biggest group first", () => {
    const groups = groupCertifications([
      cert("A", "AWS Academy", "2025-09"),
      cert("B", "Cisco", "2026-05"),
      cert("C", "Cisco", "2026-03"),
    ]);
    expect(groups.map((group) => group.issuer)).toEqual(["Cisco", "AWS Academy"]);
    expect(groups[0].items).toHaveLength(2);
  });

  it("sorts each group newest first and puts undated items last", () => {
    const [group] = groupCertifications([
      cert("old", "Cisco", "2023-11"),
      cert("undated", "Cisco", null),
      cert("new", "Cisco", "2026-05"),
    ]);
    expect(group.items.map((item) => item.name)).toEqual(["new", "old", "undated"]);
  });

  it("breaks group size ties by the most recent credential", () => {
    const groups = groupCertifications([
      cert("a", "Older", "2024-01"),
      cert("b", "Newer", "2026-01"),
    ]);
    expect(groups.map((group) => group.issuer)).toEqual(["Newer", "Older"]);
  });

  it("returns an empty list for no credentials and does not mutate the input", () => {
    expect(groupCertifications([])).toEqual([]);
    const input = [cert("x", "Cisco", "2026-01"), cert("y", "Cisco", "2025-01")];
    groupCertifications(input);
    expect(input.map((item) => item.name)).toEqual(["x", "y"]);
  });
});
