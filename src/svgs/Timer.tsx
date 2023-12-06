import * as React from "react"
import Svg, { SvgProps, G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Timer = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={127}
    height={135}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Rect width={107} height={115} x={10} y={9} fill="#263238" rx={11} />
      <Rect
        width={106}
        height={114}
        x={10.5}
        y={9.5}
        stroke="#00AE5A"
        rx={10.5}
      />
    </G>
    <Path
      fill="#fff"
      d="M47.786 95.242V105h-1.274v-4.424h-4.97V105h-1.274v-9.758h1.274v4.284h4.97v-4.284h1.274Zm2.834.84a.838.838 0 0 1-.616-.252.838.838 0 0 1-.252-.616c0-.243.084-.448.252-.616a.838.838 0 0 1 .616-.252c.233 0 .43.084.588.252a.838.838 0 0 1 .252.616.838.838 0 0 1-.252.616.777.777 0 0 1-.588.252Zm.616 1.246V105h-1.274v-7.672h1.274Zm4.887 7.798c-.588 0-1.115-.098-1.582-.294-.467-.205-.835-.485-1.106-.84a2.27 2.27 0 0 1-.448-1.246h1.316c.037.383.215.695.532.938.327.243.751.364 1.274.364.485 0 .868-.107 1.148-.322.28-.215.42-.485.42-.812a.786.786 0 0 0-.448-.742c-.299-.168-.76-.331-1.386-.49a11.408 11.408 0 0 1-1.4-.448 2.658 2.658 0 0 1-.924-.686c-.252-.308-.378-.71-.378-1.204 0-.392.117-.751.35-1.078.233-.327.565-.583.994-.77.43-.196.92-.294 1.47-.294.85 0 1.535.215 2.058.644.523.43.803 1.017.84 1.764H57.58a1.307 1.307 0 0 0-.49-.966c-.29-.243-.681-.364-1.176-.364-.457 0-.821.098-1.092.294-.27.196-.406.453-.406.77 0 .252.08.462.238.63.168.159.373.289.616.392.252.093.597.201 1.036.322.55.149.999.299 1.344.448.345.14.64.355.882.644.252.289.383.667.392 1.134 0 .42-.117.798-.35 1.134-.233.336-.565.602-.994.798-.42.187-.905.28-1.456.28Zm6.153-6.748v4.522c0 .373.079.639.238.798.158.149.434.224.826.224h.938V105H63.13c-.71 0-1.242-.163-1.596-.49-.355-.327-.532-.863-.532-1.61v-4.522h-.994v-1.05h.994v-1.932h1.274v1.932h2.002v1.05h-2.002Zm6.891 6.748a3.963 3.963 0 0 1-1.96-.49 3.566 3.566 0 0 1-1.372-1.386c-.326-.607-.49-1.307-.49-2.1 0-.784.168-1.475.504-2.072a3.507 3.507 0 0 1 1.4-1.386 3.995 3.995 0 0 1 1.974-.49c.728 0 1.386.163 1.974.49a3.44 3.44 0 0 1 1.386 1.372c.346.597.518 1.293.518 2.086 0 .793-.177 1.493-.532 2.1a3.61 3.61 0 0 1-1.414 1.386c-.597.327-1.26.49-1.988.49Zm0-1.12c.457 0 .887-.107 1.288-.322a2.41 2.41 0 0 0 .966-.966c.252-.429.378-.952.378-1.568 0-.616-.121-1.139-.364-1.568-.243-.43-.56-.747-.952-.952a2.61 2.61 0 0 0-1.274-.322c-.466 0-.896.107-1.288.322-.383.205-.69.523-.924.952-.233.429-.35.952-.35 1.568 0 .625.112 1.153.336 1.582.233.429.541.751.924.966.383.205.803.308 1.26.308Zm6.883-5.432c.224-.439.542-.78.952-1.022.42-.243.929-.364 1.526-.364v1.316h-.336c-1.428 0-2.142.775-2.142 2.324V105h-1.274v-7.672h1.274v1.246Zm10.557-1.246-4.62 11.284H80.67l1.512-3.696-3.094-7.588h1.414l2.408 6.216 2.38-6.216h1.316Z"
    />
    <Path
      fill="#00AE5A"
      fillRule="evenodd"
      d="M60.5 78C50.835 78 43 70.165 43 60.5S50.835 43 60.5 43 78 50.835 78 60.5 70.165 78 60.5 78Zm-3.937-25.93v-1.129h-5.644v1.135l2.975-.003c-2.501 1.966-4.113 5.01-4.113 8.439 0 5.933 4.81 10.743 10.743 10.743 1.648 0 3.203-.382 4.598-1.045l-.84-.864a9.598 9.598 0 0 1-13.355-8.834c-.001-3.427 1.801-6.424 4.504-8.121v4.198h1.135l-.005-4.519h.002Zm5.58 8.43c0-.72-.466-1.324-1.11-1.547l-.005-8.009H59.9v8.03a1.64 1.64 0 1 0 1.259 3.03l6.318 6.31.798-.798-6.302-6.302c.105-.217.17-.457.17-.714Z"
      clipRule="evenodd"
    />
    <Defs></Defs>
  </Svg>
)
export  {Timer}