import React, { useState } from "react";
import FlipCardTools from "./FlipCardTools";
import { useData } from "../context/DataContext.jsx";

function SvgTools({ onToolFlip }) {
  const { data } = useData();
  if (!data || !data.changingWheel) return null;

  // דגשים מתוך ה-JSON
  const highlight1 = data.changingWheel[1].highlight1;
  const highlight2 = data.changingWheel[1].highlight2;
  const highlight3 = data.changingWheel[1].highlight3;
  const highlight4 = data.changingWheel[1].highlight4;
  const highlight5 = data.changingWheel[1].highlight5;
  const highlight6 = data.changingWheel[1].highlight6;
  return (
    <div>
      <svg width="310" height="462" viewBox="0 0 356 462" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="288" width="19" height="174" fill="#626262"/>
<rect x="42" y="249" width="19" height="169" fill="#626262"/>
<rect x="312" y="291" width="19" height="171" fill="#626262"/>
<rect x="282" y="249" width="19" height="169" fill="#626262"/>
<rect width="356" height="388" rx="2" fill="#9CB6C4"/>
<line x1="9.99902" y1="55.5" x2="342.001" y2="55.5" stroke="white" strokeWidth="2"/>
<line x1="9.99316" y1="231.488" x2="342.007" y2="231.488" stroke="white" strokeWidth="2"/>
<FlipCardTools
  x={237}
  y={12}
  width={101}
  height={161}
  flipText={highlight1}
  onFlip={() => onToolFlip(1)}
>
  {/* כלי 1 */}
<g filter="url(#filter0_d_361_19)">
<rect x="237" y="12" width="101" height="161" rx="9" fill="#889BA6"/>
<rect x="237.5" y="12.5" width="100" height="160" rx="8.5" stroke="#3D3D3D"/>
</g>
<line x1="236.998" y1="55.4902" x2="338.003" y2="55.4902" stroke="white" strokeWidth="2"/>
<path d="M279.086 33.1754C281.174 28.4219 288.438 23 288.438 23C288.438 23 294.314 28.6796 296.037 33.1754C298.204 38.8297 296.037 48.4386 296.037 48.4386L288.438 57C288.438 57 289.801 46.7693 289.5 44C289.104 40.3527 288.438 30.5 288.438 30.5C288.438 30.5 287.099 40.902 286.5 44C285.856 47.3308 288.438 55.5 288.438 55.5L279.086 48.4386C279.086 48.4386 276.642 38.7433 279.086 33.1754Z" fill="#C6C6C6"/>
<path d="M303.758 60.6923L298.123 56L293 62.5692C293 62.5692 295.549 69.0323 296.586 73.3615C297.9 78.8523 301.709 86.9692 301.709 86.9692C301.709 86.9692 301.729 99.7253 298.123 106.677C296.646 109.525 298.123 109.685 296.586 112.5C295.561 114.377 297.61 117 299.659 117C301.709 117 302.033 113.754 303.758 110.9C308.99 102.243 306.634 91.5246 305.295 85.0923C303.955 78.66 299.659 69.1385 299.659 69.1385L303.758 60.6923Z" fill="black" stroke="black"/>
<path d="M296.015 48L289 53.5836V69.8269C289 69.8269 291.357 82.3384 292.777 89.6234C294.719 99.5846 293.317 113.481 296.015 113.988C298.713 114.496 302.475 98.3221 301.951 88.1006C301.47 78.7358 294.396 64.7509 294.396 64.7509L298.713 55.614L296.015 48Z" fill="#3198FF"/>
<path d="M271.242 60.6923L276.877 56L282 62.5692C282 62.5692 279.451 69.0323 278.414 73.3615C277.1 78.8523 273.291 86.9692 273.291 86.9692C273.291 86.9692 273.271 99.7253 276.877 106.677C278.354 109.525 276.877 109.685 278.414 112.5C279.439 114.377 277.39 117 275.341 117C273.291 117 272.967 113.754 271.242 110.9C266.01 102.243 268.366 91.5246 269.705 85.0923C271.045 78.66 275.341 69.1385 275.341 69.1385L271.242 60.6923Z" fill="black" stroke="black"/>
<path d="M278.985 48L286 53.5836V69.8269C286 69.8269 283.643 82.3384 282.223 89.6234C280.281 99.5846 281.683 113.481 278.985 113.988C276.287 114.496 272.525 98.3221 273.049 88.1006C273.53 78.7358 280.604 64.7509 280.604 64.7509L276.287 55.614L278.985 48Z" fill="#3198FF"/>
<circle cx="288" cy="55" r="3" fill="white"/> 
</FlipCardTools>
{/* כלי 2 */}
<FlipCardTools
  x={126}
  y={12}
  width={101}
  height={161}
  flipText={highlight2} // כאן שמים את הטקסט המתאים
  onFlip={() => onToolFlip(2)}
>
<g filter="url(#filter5_d_361_19)">
<rect x="126" y="12" width="101" height="161" rx="9" fill="#889BA6"/>
<rect x="126.5" y="12.5" width="100" height="160" rx="8.5" stroke="#3D3D3D"/>
</g>
<line x1="126" y1="55.5" x2="227.005" y2="55.5" stroke="white" strokeWidth="2"/>
<path d="M169.06 61.1224C169.089 56.7026 172.967 53.0305 177.866 53.061C182.765 53.0915 186.594 56.8117 186.565 61.2316C186.536 65.6514 182.658 69.3236 177.759 69.293C172.861 69.2624 169.031 65.5422 169.06 61.1224Z" stroke="#C6C6C6" strokeWidth="2"/>
<path d="M170.683 57.845L170.643 63.954L175.132 68.1495L180.402 68.1823L184.947 64.0432L184.987 57.9342L180.498 53.5966L175.228 53.5638L170.683 57.845Z" stroke="#C6C6C6" strokeWidth="1.8"/>
<path d="M172.375 145.233C173.827 147.002 176.916 150.041 176.776 149.069C176.418 146.585 174.927 142.912 174.927 142.912L177.2 138.657L181.917 138.012L184.737 140.227C184.737 140.227 185.584 143.427 186.195 144.33C187.149 145.739 187.361 141.897 187.524 140.203C187.707 138.31 187.712 137.057 186.828 135.368C185.888 133.573 182.968 131.952 182.968 131.952L173.464 132.758C173.464 132.758 170.308 135.319 169.846 137.691C169.482 139.554 169.775 140.779 170.542 142.526C171.057 143.697 171.567 144.248 172.375 145.233Z" fill="#C6C6C6"/>
<rect x="173" y="68" width="10" height="65" fill="#C6C6C6"/>
<circle cx="178" cy="55" r="3" fill="white"/>
</FlipCardTools>

{/* כלי 3 */}
<FlipCardTools
  x={15}
  y={12}
  width={101}
  height={161}
  flipText={highlight3} 
  onFlip={() => onToolFlip(3)}
>
<g filter="url(#filter2_d_361_19)">
<rect x="15" y="12" width="101" height="161" rx="9" fill="#889BA6"/>
<rect x="15.5" y="12.5" width="100" height="160" rx="8.5" stroke="#3D3D3D"/>
</g>
<line x1="15" y1="55.5" x2="116.005" y2="55.5" stroke="white" strokeWidth="2"/>
<path d="M64.5974 39.1101C61.182 39.5131 60.2064 41.9311 59.2305 45.5579C58.2545 49.1848 60.6941 89.4833 60.6941 89.4833H71.9157C71.9157 89.4833 74.3554 52.0057 71.9157 45.5579C69.476 39.1102 68.0129 38.7071 64.5974 39.1101Z" fill="#414141"/>
<line x1="66.3545" y1="88.9702" x2="66.3545" y2="141.358" stroke="#C9C9C9" strokeWidth="3"/>
<rect x="63.8789" y="138.134" width="4.87894" height="8.86567" fill="#D9D9D9"/>
<ellipse cx="65.8307" cy="53.1045" rx="2.92737" ry="3.62687" fill="#889BA6"/>
<circle cx="66" cy="55" r="3" fill="white"/>
</FlipCardTools>
{/* כלי 4 */}
<FlipCardTools
  x={237}
  y={191}
  width={101}
  height={161}
  flipText={highlight4} 
  onFlip={() => onToolFlip(4)}
>
<g filter="url(#filter3_d_361_19)">
<rect x="237" y="191" width="101" height="161" rx="9" fill="#889BA6"/>
<rect x="237.5" y="191.5" width="100" height="160" rx="8.5" stroke="#3D3D3D"/>
</g>
<line x1="237" y1="231.5" x2="338.005" y2="231.5" stroke="white" strokeWidth="2"/>
<path d="M316.637 290.286C318.051 289.633 318.945 290.763 320.314 288.588C321.684 286.413 300.211 243.503 298.837 240.667C296.453 235.744 295.144 230.601 290.578 227.902C288.795 226.848 287.377 226.295 285.657 226.318C283.937 226.341 272.011 230.307 272.011 230.307C272.011 230.307 268.981 228.674 266.938 228.408C263.279 227.932 258.95 229.784 258.276 231.252C257.602 232.72 260.829 240.098 263.007 241.02C265.184 241.943 268.756 239.805 271.211 237.231C272.157 236.239 273.277 234.349 273.277 234.349L277.825 233.02C277.825 233.02 285.876 228.916 288.404 231.99C290.931 235.064 315.222 290.94 316.637 290.286Z" fill="#D9D9D9"/>
<circle cx="286" cy="231" r="3" fill="white"/>
<ellipse cx="262.988" cy="235.242" rx="2.87604" ry="5.54336" transform="rotate(-25.5893 262.988 235.242)" fill="#AEAEAE"/>
</FlipCardTools>
{/* כלי 5 */}
<FlipCardTools
  x={126}
  y={190}
  width={101}
  height={161}
  flipText={highlight5} // הטקסט המתאים לדגש החמישי
  onFlip={() => onToolFlip(5)}
>
<g filter="url(#filter4_d_361_19)">
<rect x="126" y="190" width="101" height="161" rx="9" fill="#889BA6"/>
<rect x="126.5" y="190.5" width="100" height="160" rx="8.5" stroke="#3D3D3D"/>
</g>
<line x1="126" y1="231.5" x2="227.005" y2="231.5" stroke="white" strokeWidth="2"/>
<path d="M170.752 306.695L182.827 309.741C182.827 309.741 192.268 318.216 193.786 325.679C194.502 329.196 195.781 333.196 193.966 336.252C190.936 341.354 188.53 343.106 187.413 343.704C185.648 344.649 182.126 346.998 179.9 347.03C178.87 347.045 183.258 335.026 183.258 335.026L175.189 331.923C175.189 331.923 171.8 342.088 171.386 343.933C170.869 346.239 168.796 338.813 168.121 335.243C167.454 331.716 167.964 326.048 167.964 326.048L161.668 322.459L170.752 306.695Z" fill="#C6C6C6"/>
<rect width="10.3408" height="6.97599" rx="2" transform="matrix(-0.959183 -0.285535 0.265749 -0.963274 180.571 323.83)" fill="#777777"/>
<line y1="-0.5" x2="8.32452" y2="-0.5" transform="matrix(-0.760015 -0.651991 0.62551 -0.778491 175.301 332.381)" stroke="#777777"/>
<path d="M184.444 241.661C184.707 268.077 182.924 309.28 182.924 309.28L171.309 307.146C171.309 307.146 167.326 267.445 166.635 241.915C166.48 236.171 166.596 239.617 166.494 233.64C166.421 229.358 171.094 224.378 175.242 224.318C179.389 224.259 184.229 229.103 184.303 233.386C184.39 238.443 184.386 235.915 184.444 241.661Z" fill="#414141" stroke="black"/>
<line y1="-0.5" x2="6.43681" y2="-0.5" transform="matrix(-0.017035 -0.999855 0.999898 -0.0142994 179.597 323.123)" stroke="#C6C6C6"/>
<line y1="-0.5" x2="6.43681" y2="-0.5" transform="matrix(-0.017035 -0.999855 0.999898 -0.0142994 176.91 322.241)" stroke="#C6C6C6"/>
<line y1="-0.5" x2="6.43681" y2="-0.5" transform="matrix(-0.017035 -0.999855 0.999898 -0.0142994 174.223 321.36)" stroke="#C6C6C6"/>
<ellipse cx="3.56529" cy="4.05519" rx="3.56529" ry="4.05519" transform="matrix(-0.999898 0.0142994 -0.017035 -0.999855 179.456 236.722)" fill="#9CB6C4"/>
<ellipse cx="176" cy="230.5" rx="3" ry="2.5" fill="white"/>
</FlipCardTools>

{/* כלי 6 */}
<FlipCardTools
  x={15}
  y={191}
  width={101}
  height={161}
  flipText={highlight6} // הטקסט המתאים לדגש השלישי
  onFlip={() => onToolFlip(6)}
>
<g filter="url(#filter1_d_361_19)">
<rect x="15" y="191" width="101" height="161" rx="9" fill="#889BA6"/>
<rect x="15.5" y="191.5" width="100" height="160" rx="8.5" stroke="#3D3D3D"/>
</g>
<line x1="15" y1="231.5" x2="116.005" y2="231.5" stroke="white" strokeWidth="2"/>
<path d="M61.1767 234.659L67.8313 234.93L65.1742 214.455C65.1742 214.455 67.568 200.948 66.0333 197.665C64.4986 194.382 63.1852 207.777 62.2166 214.334C61.0506 222.227 61.1767 234.659 61.1767 234.659Z" fill="#C6C6C6"/>
<path d="M71.8271 234.583L65.1797 234.971L67.3854 214.453C67.3854 214.453 64.6947 200.991 66.1568 197.681C67.6189 194.372 69.2271 207.742 70.3398 214.28C71.6795 222.151 71.8271 234.583 71.8271 234.583Z" fill="#C6C6C6"/>
<path d="M52.9421 238.535L58.9378 235.628L63.4884 240.875C63.4884 240.875 60.4154 245.351 59.0246 248.41C57.2606 252.29 52.7977 257.856 52.7977 257.856C52.7977 257.856 51.7181 267.144 54.7279 272.533C55.9607 274.741 54.4779 274.724 55.7732 276.913C56.6367 278.373 54.3801 280.097 52.3415 279.912C50.3029 279.726 50.2503 277.333 48.7711 275.099C44.285 268.32 47.5187 260.728 49.3861 256.165C51.2536 251.602 56.3175 245.057 56.3175 245.057L52.9421 238.535Z" fill="black" stroke="black"/>
<path d="M60.8052 230.411L65.1737 234.91L63.8268 246.718C63.8268 246.718 61.1659 255.665 59.5836 260.871C57.4201 267.991 58.3983 277.846 56.498 278.046C54.5976 278.246 52.1832 266.587 53.3918 259.19C54.4992 252.412 60.5312 242.69 60.5312 242.69L58.3156 235.777L60.8052 230.411Z" fill="#3198FF"/>
<path d="M79.7279 238.535L73.7322 235.628L69.1815 240.875C69.1815 240.875 72.2546 245.351 73.6454 248.41C75.4093 252.29 79.8722 257.856 79.8722 257.856C79.8722 257.856 80.9518 267.144 77.9421 272.533C76.7092 274.741 78.192 274.724 76.8967 276.913C76.0332 278.373 78.2899 280.097 80.3284 279.912C82.367 279.726 82.4197 277.333 83.8988 275.099C88.3849 268.32 85.1512 260.728 83.2838 256.165C81.4164 251.602 76.3524 245.057 76.3524 245.057L79.7279 238.535Z" fill="black" stroke="black"/>
<path d="M71.8637 230.411L67.4952 234.91L68.8422 246.718C68.8422 246.718 71.503 255.665 73.0853 260.871C75.2488 267.991 74.2706 277.846 76.171 278.046C78.0713 278.246 80.4858 266.587 79.2771 259.19C78.1697 252.412 72.1378 242.69 72.1378 242.69L74.3533 235.777L71.8637 230.411Z" fill="#3198FF"/>
<circle cx="66" cy="232" r="3" fill="white"/>
</FlipCardTools>

<defs>
<filter id="filter0_d_361_19" x="233" y="12" width="109" height="169" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_361_19"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_361_19" result="shape"/>
</filter>
<filter id="filter1_d_361_19" x="11" y="191" width="109" height="169" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_361_19"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_361_19" result="shape"/>
</filter>
<filter id="filter2_d_361_19" x="11" y="12" width="109" height="169" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_361_19"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_361_19" result="shape"/>
</filter>
<filter id="filter3_d_361_19" x="233" y="191" width="109" height="169" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_361_19"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_361_19" result="shape"/>
</filter>
<filter id="filter4_d_361_19" x="122" y="190" width="109" height="169" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_361_19"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_361_19" result="shape"/>
</filter>
<filter id="filter5_d_361_19" x="122" y="12" width="109" height="169" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_361_19"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_361_19" result="shape"/>
</filter>
</defs>
</svg>

    </div>
  )
}

export default SvgTools
