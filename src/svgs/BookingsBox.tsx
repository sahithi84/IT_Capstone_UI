import * as React from "react"
import Svg, { SvgProps, G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const BookingsBox = (props: SvgProps) => (
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
      fill="#00AE5A"
      d="M73.063 52.892c.415 0 .793.038 1.21.076v-8.013c0-2.533-2.08-4.612-4.612-4.612h-2.948V39.21c0-.68-.53-1.209-1.21-1.209-.68 0-1.21.53-1.21 1.21v1.133h-8.315V39.21c0-.68-.529-1.209-1.21-1.209-.68 0-1.209.53-1.209 1.21v1.133h-2.91c-2.57 0-4.649 2.08-4.649 4.612v15.799c0 2.532 2.079 4.611 4.611 4.611h11.226c-.038-.416-.076-.794-.076-1.21.038-6.198 5.103-11.263 11.302-11.263Zm-24.644-5.556v-2.344c0-1.21.983-2.23 2.23-2.23h2.91v1.134c0 .68.53 1.21 1.21 1.21.68 0 1.21-.53 1.21-1.21v-1.134h8.315v1.134c0 .68.529 1.21 1.21 1.21.68 0 1.209-.53 1.209-1.21v-1.134h2.948c1.21 0 2.192.983 2.192 2.23v2.344H48.42Z"
    />
    <Path
      fill="#00AE5A"
      d="M73.062 55.311c-4.876 0-8.844 3.969-8.844 8.845 0 4.875 3.968 8.844 8.844 8.844 4.876 0 8.845-3.969 8.845-8.844 0-4.876-3.969-8.845-8.845-8.845Zm3.326 10.054h-3.326c-.68 0-1.21-.53-1.21-1.21v-4.12c0-.68.53-1.209 1.21-1.209.68 0 1.21.53 1.21 1.21v2.91h2.116c.68 0 1.21.53 1.21 1.21 0 .68-.53 1.209-1.21 1.209Z"
    />
    <Path
      fill="#fff"
      d="M33.198 93.312V103h-1.274v-7.224L28.704 103h-.896l-3.234-7.238V103H23.3v-9.688h1.372l3.584 8.008 3.584-8.008h1.358Zm8.768 2.016-4.62 11.284H36.03l1.512-3.696-3.094-7.588h1.414l2.408 6.216 2.38-6.216h1.316Zm9.9 2.646c.354.056.676.2.965.434.299.233.532.523.7.868.178.345.266.714.266 1.106 0 .495-.126.943-.378 1.344-.252.392-.62.705-1.106.938-.476.224-1.04.336-1.694.336h-3.64v-9.758h3.5c.663 0 1.228.112 1.694.336.467.215.817.509 1.05.882.234.373.35.793.35 1.26 0 .579-.158 1.06-.476 1.442-.308.373-.718.644-1.232.812Zm-3.613-.518h2.142c.598 0 1.06-.14 1.386-.42.327-.28.49-.667.49-1.162 0-.495-.163-.882-.49-1.162-.326-.28-.798-.42-1.414-.42h-2.114v3.164Zm2.254 4.494c.635 0 1.13-.149 1.484-.448.355-.299.532-.714.532-1.246 0-.541-.186-.966-.56-1.274-.373-.317-.872-.476-1.498-.476h-2.212v3.444h2.254Zm8.404 1.176a3.963 3.963 0 0 1-1.96-.49 3.566 3.566 0 0 1-1.372-1.386c-.326-.607-.49-1.307-.49-2.1 0-.784.168-1.475.504-2.072a3.508 3.508 0 0 1 1.4-1.386 3.996 3.996 0 0 1 1.974-.49c.728 0 1.386.163 1.974.49a3.44 3.44 0 0 1 1.386 1.372c.346.597.518 1.293.518 2.086 0 .793-.177 1.493-.532 2.1a3.609 3.609 0 0 1-1.414 1.386 4.07 4.07 0 0 1-1.988.49Zm0-1.12c.458 0 .887-.107 1.288-.322a2.41 2.41 0 0 0 .966-.966c.252-.429.378-.952.378-1.568 0-.616-.121-1.139-.364-1.568-.242-.43-.56-.747-.952-.952a2.61 2.61 0 0 0-1.274-.322c-.466 0-.896.107-1.288.322-.382.205-.69.523-.924.952-.233.43-.35.952-.35 1.568 0 .625.112 1.153.336 1.582.234.429.542.751.924.966.383.205.803.308 1.26.308Zm8.955 1.12a3.963 3.963 0 0 1-1.96-.49 3.566 3.566 0 0 1-1.372-1.386c-.326-.607-.49-1.307-.49-2.1 0-.784.168-1.475.504-2.072a3.508 3.508 0 0 1 1.4-1.386 3.996 3.996 0 0 1 1.974-.49c.728 0 1.386.163 1.974.49a3.44 3.44 0 0 1 1.386 1.372c.346.597.518 1.293.518 2.086 0 .793-.177 1.493-.532 2.1a3.61 3.61 0 0 1-1.414 1.386c-.597.327-1.26.49-1.988.49Zm0-1.12c.458 0 .887-.107 1.288-.322a2.41 2.41 0 0 0 .966-.966c.252-.429.378-.952.378-1.568 0-.616-.121-1.139-.364-1.568-.242-.43-.56-.747-.952-.952a2.61 2.61 0 0 0-1.274-.322c-.466 0-.896.107-1.288.322-.382.205-.69.523-.924.952-.233.43-.35.952-.35 1.568 0 .625.112 1.153.336 1.582.234.429.542.751.924.966.383.205.803.308 1.26.308Zm9.894.994-3.01-3.388V103h-1.275V92.64h1.275v6.09l2.954-3.402h1.778L75.87 99.15l3.626 3.85H77.76Zm3.578-8.918a.838.838 0 0 1-.615-.252.838.838 0 0 1-.252-.616c0-.243.084-.448.251-.616a.838.838 0 0 1 .617-.252c.233 0 .429.084.588.252a.838.838 0 0 1 .251.616.838.838 0 0 1-.251.616.776.776 0 0 1-.589.252Zm.617 1.246V103H80.68v-7.672h1.274Zm5.909-.14c.933 0 1.69.285 2.268.854.578.56.868 1.372.868 2.436V103h-1.26v-4.34c0-.765-.191-1.349-.574-1.75-.383-.41-.906-.616-1.568-.616-.672 0-1.209.21-1.61.63-.392.42-.588 1.031-.588 1.834V103h-1.274v-7.672H85.4v1.092a2.54 2.54 0 0 1 1.022-.91c.439-.215.92-.322 1.442-.322Zm8.38.014c.664 0 1.242.145 1.737.434.504.29.877.653 1.12 1.092v-1.4h1.288v7.84c0 .7-.149 1.321-.448 1.862-.299.551-.728.98-1.288 1.288-.55.308-1.195.462-1.932.462-1.008 0-1.848-.238-2.52-.714a2.791 2.791 0 0 1-1.19-1.946h1.26c.14.467.43.84.868 1.12.439.289.966.434 1.582.434.7 0 1.27-.219 1.708-.658.448-.439.672-1.055.672-1.848v-1.61c-.252.448-.625.821-1.12 1.12-.495.299-1.073.448-1.736.448a3.55 3.55 0 0 1-1.862-.504 3.534 3.534 0 0 1-1.302-1.414c-.317-.607-.476-1.297-.476-2.072 0-.784.159-1.47.476-2.058a3.46 3.46 0 0 1 1.302-1.386c.56-.327 1.18-.49 1.862-.49Zm2.857 3.948c0-.579-.117-1.083-.35-1.512a2.41 2.41 0 0 0-.952-.98 2.498 2.498 0 0 0-1.302-.35c-.476 0-.91.112-1.302.336-.392.224-.705.55-.938.98-.233.43-.35.933-.35 1.512 0 .588.117 1.101.35 1.54.233.429.546.761.938.994.392.224.826.336 1.302.336.476 0 .91-.112 1.302-.336.401-.233.719-.565.952-.994.233-.439.35-.947.35-1.526Zm6.157 3.976a4.052 4.052 0 0 1-1.582-.294c-.467-.205-.835-.485-1.106-.84a2.267 2.267 0 0 1-.448-1.246h1.316c.037.383.215.695.532.938.327.243.751.364 1.274.364.485 0 .868-.107 1.148-.322.28-.215.42-.485.42-.812a.786.786 0 0 0-.448-.742c-.299-.168-.761-.331-1.386-.49a11.408 11.408 0 0 1-1.4-.448 2.651 2.651 0 0 1-.924-.686c-.252-.308-.378-.71-.378-1.204 0-.392.117-.751.35-1.078.233-.327.565-.583.994-.77.429-.196.919-.294 1.47-.294.849 0 1.535.215 2.058.644.523.43.803 1.017.84 1.764h-1.274a1.306 1.306 0 0 0-.49-.966c-.289-.243-.681-.364-1.176-.364-.457 0-.821.098-1.092.294-.271.196-.406.453-.406.77a.88.88 0 0 0 .238.63c.168.159.373.29.616.392.252.093.597.2 1.036.322.551.15.999.299 1.344.448.345.14.639.355.882.644.252.289.383.667.392 1.134 0 .42-.117.798-.35 1.134-.233.336-.565.602-.994.798-.42.187-.905.28-1.456.28Z"
    />
    <Defs></Defs>
  </Svg>
)
export  {BookingsBox};