import sharp from 'sharp'
import { fileURLToPath } from 'node:url'

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#11100e"/>
  <g stroke="#e9e2d7" stroke-opacity=".07">
    <path d="M0 105H1200M0 210H1200M0 315H1200M0 420H1200M0 525H1200"/>
    <path d="M150 0V630M300 0V630M450 0V630M600 0V630M750 0V630M900 0V630M1050 0V630"/>
  </g>
  <rect x="28" y="28" width="1144" height="574" fill="none" stroke="#e9e2d7" stroke-opacity=".28"/>
  <g font-family="Arial, sans-serif" font-size="13" letter-spacing="3" fill="#e9e2d7" fill-opacity=".56">
    <text x="58" y="71">MACHINE PORTRAIT 001</text>
    <text x="1142" y="71" text-anchor="end">CAPTURED JULY 2026</text>
  </g>
  <g transform="translate(914 302)">
    <circle r="139" fill="none" stroke="#e9e2d7" stroke-opacity=".32"/>
    <circle r="61" fill="none" stroke="#83917d" stroke-opacity=".9"/>
    <path d="M-164 0H164M0-164V164" stroke="#e9e2d7" stroke-opacity=".18"/>
    <rect x="-20" y="-20" width="40" height="40" transform="rotate(45)" fill="none" stroke="#e9e2d7" stroke-opacity=".54"/>
    <circle r="6" fill="#cf7951"/>
    <circle cy="-139" r="4" fill="#cf7951"/>
    <text x="107" y="112" font-family="monospace" font-size="11" letter-spacing="2" fill="#e9e2d7" fill-opacity=".48">M / 001</text>
  </g>
  <g fill="#f2ece2" font-family="Georgia, 'Times New Roman', serif">
    <text x="62" y="235" font-size="82" letter-spacing="-3">Flori Vula,</text>
    <text x="62" y="326" font-size="82" letter-spacing="-3">according to</text>
    <text x="62" y="417" font-size="82" letter-spacing="-3">the machines</text>
  </g>
  <path d="M62 454H486" stroke="#cf7951" stroke-width="3"/>
  <text x="62" y="501" font-family="Arial, sans-serif" font-size="18" letter-spacing=".6" fill="#e9e2d7" fill-opacity=".62">
    This is not my biography.
  </text>
  <text x="62" y="544" font-family="monospace" font-size="13" letter-spacing="2.5" fill="#cf7951">
    FLORIVULA.COM / JULY 2026
  </text>
</svg>`

const outputPath = fileURLToPath(
  new URL('../public/og-image.png', import.meta.url),
)

await sharp(Buffer.from(svg)).png().toFile(outputPath)

console.log('Generated public/og-image.png (1200 × 630).')
