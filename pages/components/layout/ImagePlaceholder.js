const imagePlaceholder = Buffer.from(`<svg
role="img"
width="800"
height="300"
aria-labelledby="loading-aria"
viewBox="0 0 800 300"
preserveAspectRatio="none"
>
<title id="loading-aria">Loading...</title>
<rect
  x="0"
  y="0"
  width="100%"
  height="100%"
  clip-path="url(#clip-path)"
  style='fill: url("#fill");'
></rect>
<defs>
  <clipPath id="clip-path">
      <rect x="71" y="27" rx="0" ry="0" width="211" height="212" />
  </clipPath>
  <linearGradient id="fill">
    <stop
      offset="0.599964"
      stop-color="#f3f3f3"
      stop-opacity="1"
    >
      <animate
        attributeName="offset"
        values="-2; -2; 1"
        keyTimes="0; 0.25; 1"
        dur="2s"
        repeatCount="indefinite"
      ></animate>
    </stop>
    <stop
      offset="1.59996"
      stop-color="#ecebeb"
      stop-opacity="1"
    >
      <animate
        attributeName="offset"
        values="-1; -1; 2"
        keyTimes="0; 0.25; 1"
        dur="2s"
        repeatCount="indefinite"
      ></animate>
    </stop>
    <stop
      offset="2.59996"
      stop-color="#f3f3f3"
      stop-opacity="1"
    >
      <animate
        attributeName="offset"
        values="0; 0; 3"
        keyTimes="0; 0.25; 1"
        dur="2s"
        repeatCount="indefinite"
      ></animate>
    </stop>
  </linearGradient>
</defs>
</svg>`).toString('base64');

export default imagePlaceholder;