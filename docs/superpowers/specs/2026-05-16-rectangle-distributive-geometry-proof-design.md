# Rectangle Distributive Geometry Proof Design

## Goal

Extend `square_identities_geometry_proof.html` with an interactive geometric proof of:

`(a+b)(c+d) = ac + ad + bc + bd`

## Chosen approach

Add a second controls row for `c` and `d`, and add a fourth wide proof card to the existing proof grid.

This keeps the original three `a`/`b` square-identity proofs unchanged while giving the new rectangle identity the extra dimensions it actually needs.

## Page changes

- Add `c` and `d` sliders with visible numeric values.
- Keep the existing reset button behavior, expanding it so reset restores `a`, `b`, `c`, and `d`.
- Add a new wide proof card:
  - title: `4. Splitting a rectangle with sides a + b and c + d`
  - formula: `(a+b)(c+d) = ac + ad + bc + bd`
  - SVG diagram: one rectangle split into four smaller rectangles by the `a | b` and `c | d` partitions
  - regions labeled `ac`, `ad`, `bc`, and `bd`
  - edge labels identifying the horizontal `a`, `b` pieces and vertical `c`, `d` pieces
- Add a fourth summary fact explaining that multiplying two sums can be seen as adding the four sub-rectangle areas.

## Interaction model

- Existing proofs continue to respond only to `a` and `b`.
- The new rectangle proof responds to all four sliders:
  - width uses `a + b`
  - height uses `c + d`
- `c` and `d` do not need the `b < a` restriction used by subtraction identities, because the rectangle proof only uses positive sums.

## Visual design

- Reuse the page’s existing card, formula, note, SVG, and color styles.
- Use the existing four region colors so the new proof feels consistent with the earlier diagrams.
- Keep the new proof `wide` so the rectangle has enough room for readable labels at several slider values.

## Validation

- Verify the four sliders update their displayed values.
- Verify the fourth SVG redraws when any slider changes.
- Verify reset restores all four values and redraws all diagrams.
- Manually inspect narrow and wide viewport layouts to ensure the extra controls and summary tile still flow cleanly.
