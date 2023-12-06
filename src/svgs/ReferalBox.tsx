import * as React from "react"
import Svg, { SvgProps, G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ReferalBox = (props: SvgProps) => (
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
      d="m44.296 105-2.324-3.99h-1.54V105h-1.274v-9.758h3.15c.737 0 1.358.126 1.862.378.513.252.896.593 1.148 1.022.252.43.378.92.378 1.47 0 .672-.196 1.265-.588 1.778-.383.513-.961.854-1.736 1.022l2.45 4.088h-1.526Zm-3.864-5.012h1.876c.69 0 1.209-.168 1.554-.504.345-.345.518-.803.518-1.372 0-.579-.173-1.027-.518-1.344-.336-.317-.854-.476-1.554-.476h-1.876v3.696Zm14.244.882c0 .243-.014.499-.042.77h-6.132c.046.756.303 1.349.77 1.778.476.42 1.05.63 1.722.63.55 0 1.008-.126 1.372-.378.373-.261.634-.607.784-1.036h1.372a3.335 3.335 0 0 1-1.232 1.806c-.616.457-1.382.686-2.296.686-.728 0-1.382-.163-1.96-.49a3.497 3.497 0 0 1-1.344-1.386c-.327-.607-.49-1.307-.49-2.1 0-.793.158-1.489.476-2.086a3.308 3.308 0 0 1 1.33-1.372c.578-.327 1.241-.49 1.988-.49.728 0 1.372.159 1.932.476.56.317.989.756 1.288 1.316.308.55.462 1.176.462 1.876Zm-1.316-.266c0-.485-.108-.9-.322-1.246a2.026 2.026 0 0 0-.882-.798 2.63 2.63 0 0 0-1.218-.28c-.644 0-1.195.205-1.652.616-.448.41-.705.98-.77 1.708h4.844Zm6.12-2.226h-1.61V105h-1.275v-6.622h-.994v-1.05h.994v-.546c0-.859.22-1.484.658-1.876.448-.401 1.162-.602 2.142-.602v1.064c-.56 0-.956.112-1.19.336-.224.215-.336.574-.336 1.078v.546h1.61v1.05Zm8.485 2.492c0 .243-.014.499-.042.77H61.79c.046.756.303 1.349.77 1.778.476.42 1.05.63 1.722.63.55 0 1.008-.126 1.372-.378.373-.261.634-.607.784-1.036h1.372a3.334 3.334 0 0 1-1.232 1.806c-.616.457-1.382.686-2.296.686-.728 0-1.382-.163-1.96-.49a3.499 3.499 0 0 1-1.344-1.386c-.327-.607-.49-1.307-.49-2.1 0-.793.158-1.489.476-2.086a3.31 3.31 0 0 1 1.33-1.372c.578-.327 1.241-.49 1.988-.49.728 0 1.372.159 1.932.476.56.317.99.756 1.288 1.316.308.55.462 1.176.462 1.876Zm-1.316-.266c0-.485-.108-.9-.322-1.246a2.025 2.025 0 0 0-.882-.798 2.63 2.63 0 0 0-1.218-.28c-.644 0-1.195.205-1.652.616-.448.41-.705.98-.77 1.708h4.844Zm4.271-2.03c.224-.439.542-.78.952-1.022.42-.243.929-.364 1.526-.364v1.316h-.336c-1.428 0-2.142.775-2.142 2.324V105h-1.274v-7.672h1.274v1.246Zm5.223 0c.224-.439.541-.78.952-1.022.42-.243.929-.364 1.526-.364v1.316h-.336c-1.428 0-2.142.775-2.142 2.324V105h-1.274v-7.672h1.274v1.246Zm3.473 2.562c0-.784.158-1.47.476-2.058a3.458 3.458 0 0 1 1.302-1.386c.56-.327 1.18-.49 1.862-.49.672 0 1.255.145 1.75.434.494.29.863.653 1.106 1.092v-1.4H87.4V105h-1.288v-1.428c-.252.448-.63.821-1.134 1.12-.495.289-1.074.434-1.736.434a3.477 3.477 0 0 1-1.848-.504 3.532 3.532 0 0 1-1.302-1.414c-.318-.607-.476-1.297-.476-2.072Zm6.496.014c0-.579-.117-1.083-.35-1.512a2.41 2.41 0 0 0-.952-.98 2.498 2.498 0 0 0-1.302-.35c-.476 0-.91.112-1.302.336-.392.224-.705.55-.938.98-.234.429-.35.933-.35 1.512 0 .588.116 1.101.35 1.54.233.429.546.761.938.994.392.224.826.336 1.302.336.476 0 .91-.112 1.302-.336.401-.233.718-.565.952-.994.233-.439.35-.947.35-1.526Zm4.715-6.51V105h-1.274V94.64h1.274Z"
    />
    <Path
      fill="#00AE5A"
      fillRule="evenodd"
      d="M59.725 72.873a5.868 5.868 0 0 0-1.883-4.027 6.212 6.212 0 0 0-4.226-1.646c-1.574 0-3.088.59-4.226 1.646a5.868 5.868 0 0 0-1.883 4.027A9.792 9.792 0 0 0 53.617 75a9.792 9.792 0 0 0 6.108-2.127Zm-3.53-6.709a3.51 3.51 0 0 0 1.016-1.907 3.453 3.453 0 0 0-.305-2.128 3.588 3.588 0 0 0-1.514-1.565 3.737 3.737 0 0 0-4.19.439 3.526 3.526 0 0 0-1.136 1.842 3.449 3.449 0 0 0 .169 2.142c.282.68.776 1.257 1.41 1.654a7.009 7.009 0 0 0-3.296 2.061 6.699 6.699 0 0 0-1.634 3.462 9.253 9.253 0 0 1-2.55-4.786 9.095 9.095 0 0 1 .595-5.359 9.41 9.41 0 0 1 3.544-4.147 9.82 9.82 0 0 1 5.312-1.555c1.89 0 3.737.541 5.312 1.555a9.41 9.41 0 0 1 3.544 4.147 9.095 9.095 0 0 1 .596 5.359 9.254 9.254 0 0 1-2.551 4.786 6.699 6.699 0 0 0-1.633-3.462 7.009 7.009 0 0 0-3.295-2.061c.22-.138.424-.297.608-.477h-.001Zm-2.579.202c.645 0 1.27-.217 1.768-.615.498-.397.84-.95.965-1.564a2.638 2.638 0 0 0-.275-1.804 2.76 2.76 0 0 0-1.391-1.225 2.864 2.864 0 0 0-1.875-.09 2.782 2.782 0 0 0-1.509 1.086 2.648 2.648 0 0 0 .346 3.419c.259.252.566.451.904.587.338.136.7.206 1.067.206Zm21.877-8.81a5.868 5.868 0 0 0-1.883-4.027 6.212 6.212 0 0 0-4.226-1.647c-1.574 0-3.088.59-4.226 1.647a5.868 5.868 0 0 0-1.883 4.026 9.792 9.792 0 0 0 6.109 2.128 9.792 9.792 0 0 0 6.11-2.128Zm-3.53-6.71c-.184.18-.388.34-.608.478a7.009 7.009 0 0 1 3.296 2.061 6.698 6.698 0 0 1 1.634 3.462 9.253 9.253 0 0 0 2.55-4.787 9.095 9.095 0 0 0-.595-5.358 9.409 9.409 0 0 0-3.544-4.147A9.82 9.82 0 0 0 69.384 41c-1.89 0-3.737.54-5.312 1.555a9.409 9.409 0 0 0-3.544 4.147 9.095 9.095 0 0 0-.596 5.358 9.254 9.254 0 0 0 2.551 4.787 6.698 6.698 0 0 1 1.634-3.462 7.01 7.01 0 0 1 3.296-2.061 3.67 3.67 0 0 1-.609-.477 3.513 3.513 0 0 1-.998-1.815 3.45 3.45 0 0 1 .208-2.047c.276-.647.743-1.2 1.343-1.59.6-.39 1.305-.597 2.027-.597.721 0 1.427.208 2.026.597.6.39 1.068.943 1.344 1.59a3.45 3.45 0 0 1 .208 2.047 3.514 3.514 0 0 1-.999 1.815Zm-2.58.203c-.644 0-1.269-.217-1.768-.614a2.695 2.695 0 0 1-.965-1.565 2.64 2.64 0 0 1 .275-1.805 2.76 2.76 0 0 1 1.391-1.226 2.864 2.864 0 0 1 1.876-.09c.618.182 1.15.566 1.51 1.087a2.648 2.648 0 0 1-.347 3.42 2.784 2.784 0 0 1-.904.587 2.85 2.85 0 0 1-1.067.206ZM51 49.033a5.56 5.56 0 0 0-2.468 1.095 5.342 5.342 0 0 0-1.625 2.111.42.42 0 0 1-.194.212.438.438 0 0 1-.538-.104.408.408 0 0 1-.094-.268 6.258 6.258 0 0 1 1.32-4.005A6.581 6.581 0 0 1 51 45.738v-1.993a.41.41 0 0 1 .066-.223.442.442 0 0 1 .634-.104l5.105 3.506a.42.42 0 0 1 .183.346.406.406 0 0 1-.192.341l-5.12 3.519a.44.44 0 0 1-.614-.124.41.41 0 0 1-.063-.216v-1.757H51Zm21.004 17.934a5.559 5.559 0 0 0 2.466-1.096 5.342 5.342 0 0 0 1.623-2.11.42.42 0 0 1 .194-.212.438.438 0 0 1 .538.104c.063.076.096.17.094.268a6.256 6.256 0 0 1-1.32 4.004 6.579 6.579 0 0 1-3.597 2.337v1.993a.41.41 0 0 1-.066.222.428.428 0 0 1-.414.193.437.437 0 0 1-.22-.09l-5.105-3.506a.419.419 0 0 1-.181-.345.406.406 0 0 1 .19-.34l5.12-3.518a.438.438 0 0 1 .614.124c.041.065.063.14.063.216v1.756Z"
      clipRule="evenodd"
    />
    <Defs></Defs>
  </Svg>
)
export  {ReferalBox};