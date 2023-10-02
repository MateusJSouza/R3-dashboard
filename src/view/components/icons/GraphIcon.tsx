export function GraphIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <mask
        id="a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={32}
        height={32}
      >
        <path fill="#fff" d="M0 0H32V32H0z" />
      </mask>
      <g mask="url(#a)" fill="#fff">
        <path d="M13.67 7.846l.372 5.52.184 2.774c.002.285.046.569.133.841a1.39 1.39 0 001.34.842l8.877-.581c.384-.006.755.137 1.031.4.23.218.38.504.426.812l.016.186c-.367 5.087-4.103 9.329-9.179 10.424-5.075 1.095-10.28-1.218-12.789-5.684a10.953 10.953 0 01-1.328-4.195 8.025 8.025 0 01-.085-1.315C2.661 12.417 6.544 7.703 11.98 6.566a1.455 1.455 0 011.558.841c.067.139.112.287.132.439z" />
        <path
          opacity={0.4}
          d="M29.334 13.083l-.01.043-.027.064.004.173c-.014.23-.103.45-.255.63-.16.186-.377.312-.617.361l-.146.02-10.241.664c-.34.034-.68-.076-.933-.302a1.178 1.178 0 01-.385-.716l-.687-10.227a.162.162 0 010-.106c.01-.282.134-.549.345-.74.21-.192.491-.292.778-.28 6.08.155 11.19 4.527 12.174 10.416z"
        />
      </g>
    </svg>
  )
}
