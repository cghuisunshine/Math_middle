# Rectangle Distributive Geometry Proof Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an interactive geometric proof of `(a+b)(c+d) = ac + ad + bc + bd` to `square_identities_geometry_proof.html`.

**Architecture:** Extend the existing single-file HTML page in place. Preserve the current `a`/`b` square-identity behavior, add separate `c`/`d` controls, and render the new identity as a fourth SVG proof card using the page’s existing helpers and visual language.

**Tech Stack:** HTML, CSS, inline JavaScript, SVG.

---

## File structure

- Modify `square_identities_geometry_proof.html`: all UI, copy, SVG rendering, slider wiring, and reset behavior remain in the existing single-file page.
- Add `tests/square_identities_geometry_proof.test.mjs`: lightweight DOM-oriented regression checks for the new controls, formula copy, and render wiring.

### Task 1: Add regression coverage for the new proof

**Files:**
- Create: `tests/square_identities_geometry_proof.test.mjs`

- [ ] **Step 1: Write failing tests**

Add assertions that the HTML contains:

```js
assert.match(html, /id="cSlider"/);
assert.match(html, /id="dSlider"/);
assert.match(html, /id="rectangleProductDiagram"/);
assert.match(html, /\(a\+b\)\(c\+d\) = ac \+ ad \+ bc \+ bd/);
assert.match(html, /renderRectangleProductDiagram\(a, b, c, d\)/);
```

- [ ] **Step 2: Run tests to verify they fail**

Run:

```bash
node --test tests/square_identities_geometry_proof.test.mjs
```

Expected: FAIL because `cSlider`, `dSlider`, `rectangleProductDiagram`, and the new render call do not exist yet.

### Task 2: Add the rectangle identity UI and rendering

**Files:**
- Modify: `square_identities_geometry_proof.html`

- [ ] **Step 1: Add the minimal controls and proof markup**

Add a second controls section for `c` and `d`, a fourth wide proof card, and a fourth summary tile. Reuse existing classes rather than inventing new visual patterns.

- [ ] **Step 2: Add rectangle rendering logic**

Add:

```js
function renderRectangleProductDiagram(a, b, c, d) {
  // compute rectangle dimensions from a+b and c+d
  // draw ac, ad, bc, bd regions with existing addRect/addLine/addText helpers
}
```

Wire `cSlider`, `dSlider`, `cValue`, `dValue`, and `rectangleProductDiagram` into `update()`, input listeners, and reset.

- [ ] **Step 3: Run tests to verify they pass**

Run:

```bash
node --test tests/square_identities_geometry_proof.test.mjs
```

Expected: PASS.

### Task 3: Verify behavior and layout

**Files:**
- Review: `square_identities_geometry_proof.html`

- [ ] **Step 1: Run automated verification**

Run:

```bash
node --test tests/square_identities_geometry_proof.test.mjs
```

Expected: PASS.

- [ ] **Step 2: Inspect the final diff**

Run:

```bash
git diff -- square_identities_geometry_proof.html tests/square_identities_geometry_proof.test.mjs
```

Expected: only the new controls, proof card, summary item, JS wiring, and tests are changed.

- [ ] **Step 3: Commit**

```bash
git add square_identities_geometry_proof.html tests/square_identities_geometry_proof.test.mjs
git commit -m "feat: add rectangle distributive geometry proof"
```
