const assert = require("node:assert/strict");
const fs = require("node:fs");
const test = require("node:test");

const htmlPath = "square_identities_geometry_proof.html";

test("geometry proof page contains both square identities and interactive controls", () => {
  assert.ok(fs.existsSync(htmlPath), `${htmlPath} should exist`);

  const html = fs.readFileSync(htmlPath, "utf8");

  assert.match(html, /Geometry Proofs of Algebraic Identities/);
  assert.match(html, /\(a\+b\)<sup>2<\/sup> = a<sup>2<\/sup> \+ 2ab \+ b<sup>2<\/sup>/);
  assert.match(html, /\(a-b\)<sup>2<\/sup> = a<sup>2<\/sup> - 2ab \+ b<sup>2<\/sup>/);
  assert.match(html, /id="sumDiagram"/);
  assert.match(html, /id="differenceDiagram"/);
  assert.match(html, /id="aSlider"/);
  assert.match(html, /id="bSlider"/);
  assert.match(html, /function renderSumDiagram/);
  assert.match(html, /function renderDifferenceDiagram/);
});

test("difference proof explains subtracting two strips and restoring the overlap", () => {
  assert.ok(fs.existsSync(htmlPath), `${htmlPath} should exist`);

  const html = fs.readFileSync(htmlPath, "utf8");

  assert.match(html, /remove two b-wide strips/i);
  assert.match(html, /overlap was removed twice/i);
  assert.match(html, /add back one b<sup>2<\/sup>/i);
});

test("geometry proof page includes the difference of squares identity", () => {
  assert.ok(fs.existsSync(htmlPath), `${htmlPath} should exist`);

  const html = fs.readFileSync(htmlPath, "utf8");

  assert.match(html, /a<sup>2<\/sup> - b<sup>2<\/sup> = \(a\+b\)\(a-b\)/);
  assert.match(html, /id="differenceSquaresDiagram"/);
  assert.match(html, /function renderDifferenceSquaresDiagram/);
  assert.match(html, /L-shaped region/i);
  assert.match(html, /rectangle whose sides are a \+ b and a - b/i);
});

test("geometry proof page includes an interactive rectangle product identity", () => {
  assert.ok(fs.existsSync(htmlPath), `${htmlPath} should exist`);

  const html = fs.readFileSync(htmlPath, "utf8");

  assert.match(html, /id="cSlider"/);
  assert.match(html, /id="dSlider"/);
  assert.match(html, /id="rectangleProductDiagram"/);
  assert.match(html, /\(a\+b\)\(c\+d\) = ac \+ ad \+ bc \+ bd/);
  assert.match(html, /function renderRectangleProductDiagram/);
  assert.match(html, /renderRectangleProductDiagram\(a, b, c, d\)/);
});
