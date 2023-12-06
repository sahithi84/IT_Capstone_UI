import * as React from "react";
import Svg, {
  SvgProps,
  Circle,
  Mask,
  G,
  Path,
  Defs,
  ClipPath,
} from "react-native-svg";

const ReduceCarbonImg = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={338}
    height={389}
    fill="none"
    {...props}
  >
    <Circle cx={169} cy={193} r={164} fill="#080808" />
    <Mask
      id="a"
      width={290}
      height={290}
      x={24}
      y={48}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Circle cx={169} cy={193} r={145} fill="#92E3A9" />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#92E3A9" d="M-39 35h358v368H-39z" />
    </G>
    <G clipPath="url(#b)">
      <Path
        fill="#263238"
        d="M107.01 203h-7.6c-.38 0-.69.31-.69.69 0 .38.31.69.69.69h7.6c.38 0 .69-.31.69-.69 0-.38-.31-.69-.69-.69ZM133.9 203h-13.45c-.38 0-.69.31-.69.69 0 .38.31.69.69.69h13.45c.38 0 .69-.31.69-.69 0-.38-.31-.69-.69-.69ZM214.58 202.69h-13.45c-.38 0-.69.31-.69.69 0 .38.31.69.69.69h13.45c.38 0 .69-.31.69-.69 0-.38-.31-.69-.69-.69ZM160.79 202.69h-13.45c-.38 0-.69.31-.69.69 0 .38.31.69.69.69h13.45c.38 0 .69-.31.69-.69 0-.38-.31-.69-.69-.69ZM187.68 202.69h-13.45c-.38 0-.69.31-.69.69 0 .38.31.69.69.69h13.45c.38 0 .69-.31.69-.69 0-.38-.31-.69-.69-.69ZM235.62 202.69h-7.6c-.38 0-.69.31-.69.69 0 .38.31.69.69.69h7.6c.38 0 .69-.31.69-.69 0-.38-.31-.69-.69-.69Z"
      />
      <Path
        fill="#92E3A9"
        stroke="#263238"
        d="m232.603 125.25-.041-.455a44.71 44.71 0 0 0-.851-5.459l-.083-.383.353-.172c3.969-1.939 6.858-4.939 8.728-7.669.934-1.364 1.609-2.652 2.035-3.695.213-.522.361-.975.449-1.341.091-.379.107-.622.091-.741-.024-.179-.149-.51-.431-.982a12.184 12.184 0 0 0-1.178-1.605c-1.018-1.199-2.477-2.583-4.291-3.848-3.217-2.246-8.433-4.713-15.068-3.844l10.287 30.194Zm0 0h.372m-.372 0h.372m0 0c14.328 5.685 23.555 19.286 23.555 34.8v72.62c0 5.834-4.746 10.59-10.59 10.59H89.09c-5.834 0-10.59-4.746-10.59-10.59v-72.62c0-15.571 9.77-29.625 24.375-35.092l.286-.107.036-.303c2.2-18.908 18.127-33.108 37.223-33.108 6.032 0 11.783 1.382 17.081 4.114l.306.158.256-.23a44.683 44.683 0 0 1 12.619-7.94l.378-.158-.079-.4c-.928-4.705-.065-9.127 1.236-12.474.651-1.673 1.407-3.068 2.095-4.086.344-.509.667-.918.946-1.218.289-.31.5-.47.616-.524h.001c.162-.078.508-.153 1.058-.173.533-.02 1.206.014 1.986.116 1.559.203 3.513.674 5.563 1.508 3.629 1.482 8.538 4.512 11.416 10.562l.002.002a17.739 17.739 0 0 1 1.371 4.085l.065.315.314.07c7.713 1.741 14.735 5.499 20.433 10.702l.222.203.284-.101c1.17-.42 2.405-.74 3.726-.915l10.66 30.194ZM221.92 95.49l.437-.056a20.996 20.996 0 0 1 2.623-.174c5.374 0 9.789 2.184 12.873 4.503 1.543 1.16 2.76 2.36 3.606 3.35.423.495.757.943.994 1.312.118.184.216.354.288.504.069.141.132.299.154.45l.002.013c.019.162-.006.345-.041.514-.037.18-.096.391-.175.624a13.604 13.604 0 0 1-.729 1.707c-.658 1.316-1.674 2.958-3.073 4.606-2.798 3.298-7.152 6.652-13.264 7.453-6.071.792-11.433-1.839-14.067-3.46l.262-.426-.262.426c-1.959-1.206-3.518-2.502-4.61-3.64a11.57 11.57 0 0 1-1.292-1.572c-.301-.455-.521-.899-.572-1.278l-.001-.011a1.595 1.595 0 0 1-.007-.21c.002-.065.004-.098.004-.145v-.404l.395-.085c5.798-1.246 12.316-2.026 18.539-1.348l.011.001a.18.18 0 0 0 .198-.166.188.188 0 0 0-.165-.211h-.001c-5.981-.642-12.255.039-17.926 1.213l-.936.194.375-.88c.668-1.564 2.034-3.713 4.098-5.879m12.262-6.926-11.9 7.271m11.9-7.27v.027m0-.028.5.461m-12.762 6.465.362.345m-.362-.345v.001l.362.344m-.362-.345c2.076-2.185 6.412-5.98 12.262-6.898m-11.9 7.243c2.1-2.21 6.5-6.04 12.4-6.81m-.5-.433v.433h.5m-.5-.433c.144-.023.289-.044.435-.063l.062.476.003.02m-16.4 12.54-.101-.49.361-.074c-.097.196-.183.384-.26.564Zm0 0 .46.196c.044-.103.091-.209.142-.318l-.602.122Zm-13.8-5.47c-.96.45-4.46.05-8.54-1.9-2.75-1.31-7.75-4.32-10.31-9.69l18.85 11.59Zm0 0c.08-.04.16-.1.25-.17m-.25.17.25-.17m0 0c-2.09-5.52-4.96-11.36-8.86-16.16m8.86 16.16-8.86-16.16m0 0c-.24-.29-.2-.73.1-.97l-.1.97Zm33.573 9.827.71-.316-.581-.515c-5.41-4.793-11.994-8.293-19.196-10.012l-.712-.17.101.725a23.25 23.25 0 0 1 .146 4.758l-.028.412.4.105a38.765 38.765 0 0 1 14.503 7.335l.296.24.309-.223a23.172 23.172 0 0 1 4.052-2.34Zm-41.14-27.497-.679.291.152.152c-.102.109-.21.236-.323.378a13.69 13.69 0 0 0-1.035 1.54c-.746 1.269-1.57 3.013-2.193 5.084-1.246 4.14-1.695 9.617.954 15.18 2.634 5.525 7.759 8.599 10.546 9.926 2.076.993 4.012 1.594 5.561 1.89.774.148 1.46.221 2.024.226.546.005 1.037-.053 1.382-.214l.012-.006c.13-.065.247-.156.333-.222l.291-.227-.13-.345c-2.101-5.548-4.994-11.442-8.94-16.298l-.003-.004a.186.186 0 0 1 .027-.26l.007-.006a.187.187 0 0 1 .261.027l.002.003c3.796 4.676 6.633 10.304 8.732 15.706l.346.891.535-.793c.949-1.407 2.01-3.725 2.711-6.632.719-3.008 1.569-8.927-1.065-14.452-2.34-4.906-6.146-7.9-9.756-9.664-3.601-1.76-7.036-2.311-8.695-2.311-.431 0-.814.036-1.057.14Zm80.107 163.65v-.36l-.03-.01v-72.26c0-15.525-9.345-29.12-23.797-34.635-.081-.034-.119-.094-.124-.162l-.001-.003a43.294 43.294 0 0 0-.819-5.554l-.124-.585-.554.226a20.437 20.437 0 0 1-4.119 1.191l-.508.091.107.504c.543 2.569.849 5.234.849 7.967 0 .087-.002.176-.005.273-.002.096-.005.2-.005.307v.39l.378.095c13.977 3.524 23.702 16.004 23.702 30.455 0 17.324-14.096 31.42-31.42 31.42H115.33c-17.324 0-31.42-14.096-31.42-31.42 0-14.537 10.22-27.355 24.342-30.613l.388-.089V129.08c0-17.324 14.096-31.42 31.42-31.42 6.596 0 12.894 2.018 18.239 5.837l.368.263.299-.34a38.745 38.745 0 0 1 13.822-10.02l.505-.218-.265-.482a16.341 16.341 0 0 1-.475-.912l-.002-.004a20.315 20.315 0 0 1-1.278-3.485l-.15-.553-.528.224a44.457 44.457 0 0 0-12.652 8.1.182.182 0 0 1-.216.03l-.002-.002c-5.364-2.849-11.204-4.288-17.335-4.288-19.035 0-34.899 14.272-36.887 33.186-.01.086-.058.141-.122.164h-.002c-14.657 5.322-24.499 19.339-24.499 34.89v72.62c0 5.636 4.584 10.21 10.21 10.21h156.85c5.626 0 10.21-4.584 10.21-10.21Zm-.5 0c0 5.35-4.36 9.71-9.71 9.71H89.09c-5.35 0-9.71-4.35-9.71-9.71v-72.62c0-15.34 9.71-29.17 24.17-34.42.25-.09.42-.31.45-.58 1.96-18.66 17.61-32.74 36.39-32.74l115.26 140.36Z"
      />
      <Path
        fill="#000"
        d="M161.452 155.66c-5.055.453-9.248.68-12.58.68-2.222 0-3.854-.521-4.896-1.564-1.043-1.043-1.564-2.675-1.564-4.896V139c0-2.38.532-4.103 1.598-5.168 1.088-1.088 2.822-1.632 5.202-1.632h12.24v4.76h-10.88c-1.36 0-2.04.68-2.04 2.04v10.88c0 .521.147.941.442 1.258.317.295.714.442 1.19.442h1.564c.566-.023 1.156-.045 1.768-.068l1.836-.068a74.83 74.83 0 0 0 2.414-.136c.997-.068 2.232-.147 3.706-.238v4.59Zm18.024-17c0-1.36-.68-2.04-2.04-2.04h-5.78c-1.36 0-2.04.68-2.04 2.04v10.88c0 1.36.68 2.04 2.04 2.04h5.78c1.36 0 2.04-.68 2.04-2.04v-10.88Zm6.12 10.88c0 2.38-.544 4.114-1.632 5.202-1.066 1.065-2.788 1.598-5.168 1.598h-8.5c-2.38 0-4.114-.533-5.202-1.598-1.066-1.088-1.598-2.822-1.598-5.202v-10.88c0-2.38.532-4.103 1.598-5.168 1.088-1.088 2.822-1.632 5.202-1.632h8.5c2.38 0 4.102.544 5.168 1.632 1.088 1.065 1.632 2.788 1.632 5.168v10.88Zm13.696-4.1c0 1.247-.528 2.325-1.584 3.234-.323.279-.675.557-1.056.836l-4.73 3.41h7.37V156h-11.88v-4.18l7.92-5.72V145c0-.88-.44-1.32-1.32-1.32h-6.16v-3.08h7.04c1.54 0 2.654.352 3.344 1.056.704.689 1.056 1.804 1.056 3.344v.44ZM119.356 222.85c-2.23.2-4.08.3-5.55.3-.98 0-1.7-.23-2.16-.69-.46-.46-.69-1.18-.69-2.16v-4.8c0-1.05.235-1.81.705-2.28.48-.48 1.245-.72 2.295-.72h5.4v2.1h-4.8c-.6 0-.9.3-.9.9v4.8c0 .23.065.415.195.555.14.13.315.195.525.195h.69a264.128 264.128 0 0 1 1.59-.06c.28-.01.635-.03 1.065-.06.44-.03.985-.065 1.635-.105v2.025Zm4.202-1.8c.53 0 1.13-.1 1.8-.3v-.9h-2.175a.509.509 0 0 0-.525.525v.15a.509.509 0 0 0 .525.525h.375Zm-2.775-5.85c1.83-.2 3.48-.3 4.95-.3.68 0 1.225.205 1.635.615.41.41.615.955.615 1.635V223h-2.325l-.15-.75c-.47.31-.955.54-1.455.69-.49.14-.905.21-1.245.21h-.525c-.68 0-1.225-.205-1.635-.615-.41-.41-.615-.955-.615-1.635v-.675c0-.68.205-1.225.615-1.635.41-.41.955-.615 1.635-.615h3.075v-.6a.509.509 0 0 0-.525-.525c-.65 0-1.37.03-2.16.09-.78.06-1.41.105-1.89.135V215.2Zm13.121 2.025c-.63 0-1.28.15-1.95.45V223h-2.625v-7.95h2.325l.15.975c.86-.75 1.76-1.125 2.7-1.125h.675v2.325h-1.275Zm7.65.225a.509.509 0 0 0-.525-.525h-.375c-.42 0-.785.02-1.095.06-.3.04-.535.07-.705.09v3.9h2.1c.4 0 .6-.2.6-.6v-2.925Zm-2.7-2.25c.97-.2 1.82-.3 2.55-.3h.525c.68 0 1.225.205 1.635.615.41.41.615.955.615 1.635v3.45c0 .75-.215 1.34-.645 1.77-.42.42-1.005.63-1.755.63h-5.55v-10.5h2.625v2.7Zm14.776 5.55c0 .75-.215 1.34-.645 1.77-.42.42-1.005.63-1.755.63h-3.45c-.75 0-1.34-.21-1.77-.63-.42-.43-.63-1.02-.63-1.77v-3.45c0-.75.21-1.335.63-1.755.43-.43 1.02-.645 1.77-.645h3.45c.75 0 1.335.215 1.755.645.43.42.645 1.005.645 1.755v3.45Zm-2.625-3.225c0-.4-.2-.6-.6-.6h-1.8c-.4 0-.6.2-.6.6v3c0 .4.2.6.6.6h1.8c.4 0 .6-.2.6-.6v-3Zm8.399-.45c-.53 0-1.13.1-1.8.3V223h-2.625v-7.95h2.325l.15.75c.47-.31.95-.535 1.44-.675.5-.15.92-.225 1.26-.225h.675c.68 0 1.225.205 1.635.615.41.41.615.955.615 1.635V223h-2.625v-5.4a.509.509 0 0 0-.525-.525h-.525Zm18.82 5.925h-2.85l-3.6-6.3v6.3h-2.7v-10.5h2.85l3.6 6.3v-6.3h2.7V223Zm4.732-6.225c-.4 0-.6.2-.6.6v.825h2.55v-.825c0-.4-.2-.6-.6-.6h-1.35Zm4.275 6.075c-1.93.2-3.68.3-5.25.3-.68 0-1.225-.205-1.635-.615-.41-.41-.615-.955-.615-1.635v-3.6c0-.75.21-1.335.63-1.755.43-.43 1.02-.645 1.77-.645h3c.75 0 1.335.215 1.755.645.43.42.645 1.005.645 1.755v2.775h-5.175v.6a.509.509 0 0 0 .525.525c.99 0 2.44-.075 4.35-.225v1.875Zm5.319-1.875c.53 0 1.13-.1 1.8-.3v-5.625h2.625V223h-2.325l-.15-.75c-.47.31-.955.54-1.455.69-.49.14-.905.21-1.245.21h-.675c-.68 0-1.225-.205-1.635-.615-.41-.41-.615-.955-.615-1.635v-5.85h2.625v5.4a.509.509 0 0 0 .525.525h.525ZM204.02 223c-.97.1-1.92.15-2.85.15-.68 0-1.225-.205-1.635-.615-.41-.41-.615-.955-.615-1.635v-3.825h-.9v-2.025h.9l.3-1.8h2.325v1.8h1.875v2.025h-1.875v3.45a.509.509 0 0 0 .525.525h1.95V223Zm5.631-5.775c-.63 0-1.28.15-1.95.45V223h-2.625v-7.95h2.325l.15.975c.86-.75 1.76-1.125 2.7-1.125h.675v2.325h-1.275Zm4.874 3.825c.53 0 1.13-.1 1.8-.3v-.9h-2.175a.509.509 0 0 0-.525.525v.15a.509.509 0 0 0 .525.525h.375Zm-2.775-5.85c1.83-.2 3.48-.3 4.95-.3.68 0 1.225.205 1.635.615.41.41.615.955.615 1.635V223h-2.325l-.15-.75c-.47.31-.955.54-1.455.69-.49.14-.905.21-1.245.21h-.525c-.68 0-1.225-.205-1.635-.615-.41-.41-.615-.955-.615-1.635v-.675c0-.68.205-1.225.615-1.635.41-.41.955-.615 1.635-.615h3.075v-.6a.509.509 0 0 0-.525-.525c-.65 0-1.37.03-2.16.09-.78.06-1.41.105-1.89.135V215.2Zm12.596 7.8c-.67.1-1.31.15-1.92.15-.6 0-1.105-.205-1.515-.615-.41-.41-.615-.955-.615-1.635v-8.4h2.625v8.025a.509.509 0 0 0 .525.525h.9V223Z"
      />
    </G>
    <G clipPath="url(#c)">
      <Path
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M171.012 287.758h-33.007s.941-15.718 6.812-22.51c5.871-6.792 14.798-7.497 22.085-3.512 7.287 3.986 7.754 21.787 7.754 21.787h56.388s5.171-20.143 16.914-21.554c11.75-1.404 14.565 18.971 14.565 18.971l-2.029 6.818h-89.499.017Z"
      />
      <Path
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M250.885 282.851c0-3.692-.942-7.075-2.504-9.761v-5.957h-6.709c-6.398 0-11.578 7.033-11.578 15.718 0 8.686 5.189 15.719 11.578 15.719h6.709v-5.957c1.571-2.686 2.504-6.069 2.504-9.762Z"
      />
      <Path
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M248.856 298.57c5.13 0 9.29-7.026 9.29-15.693 0-8.666-4.16-15.692-9.29-15.692-5.131 0-9.291 7.026-9.291 15.692 0 8.667 4.16 15.693 9.291 15.693Z"
      />
      <Path
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M248.856 294.937c3.943 0 7.14-5.399 7.14-12.06 0-6.66-3.197-12.059-7.14-12.059-3.944 0-7.141 5.399-7.141 12.059 0 6.661 3.197 12.06 7.141 12.06Z"
      />
      <Path
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M159.279 282.55c0-3.762-.959-7.213-2.556-9.951v-6.068h-9.247c-6.518 0-11.802 7.17-11.802 16.019 0 8.849 5.284 16.02 11.802 16.02h9.247v-6.069c1.597-2.729 2.556-6.189 2.556-9.951Z"
      />
      <Path
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M156.723 298.57c6.518 0 11.803-7.173 11.803-16.02s-5.285-16.019-11.803-16.019c-6.518 0-11.802 7.172-11.802 16.019 0 8.847 5.284 16.02 11.802 16.02Z"
      />
      <Path
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M156.723 294.86c5.012 0 9.074-5.512 9.074-12.31 0-6.798-4.062-12.309-9.074-12.309s-9.074 5.511-9.074 12.309c0 6.798 4.062 12.31 9.074 12.31Z"
      />
      <Path
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M210.659 267.185c-.164 0-.319 0-.483.017v-.077h-6.709c-6.398 0-11.578 7.032-11.578 15.718 0 8.685 5.189 15.718 11.578 15.718h6.709v-.017c.155.017.319.017.483.017 5.129 0 9.29-7.024 9.29-15.692 0-8.669-4.161-15.693-9.29-15.693v.009ZM104.048 266.531h-9.247c-6.519 0-11.803 7.17-11.803 16.019 0 8.849 5.284 16.02 11.803 16.02h9.247c6.518 0 11.802-7.171 11.802-16.02s-5.284-16.019-11.802-16.019Z"
      />
      <Path
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M269.508 270.895c-.44-2.178-.216-2.393-2.184-4.795-1.969-2.393-2.401-3.925-2.401-3.925s1.097-5.01 1.097-6.542-2.4-1.093-2.4-1.093-.657-2.393-2.401-3.271c-1.752-.87-3.281-1.309-7.433-3.702-4.153-2.393-13.633-8.711-16.474-10.019-2.841-1.309-6.544-6.052-25.712-7.197-13.685-.817-33.879-.895-33.879-.895s-7.434-.215-14.428.439c-3.781.353-7.166.104-16.542 2.445-5.431 1.351-35.779 14.547-35.779 14.547s-27.577 7.679-30.555 9.908c-2.98 2.23-3.48 6.439-3.48 6.439s-3.73 2.72-3.48 4.209c.251 1.489.251 2.479.251 2.479v19.635h3.082l2.107-1.205h35.278l2.711 1.205h26.204c-.086-.99-.129-3.805-.129-4.829 0-12.335 6.311-22.338 14.099-22.338s14.099 10.003 14.099 22.338a34.5 34.5 0 0 1-.13 3.021h65.92c-.017-.499-.034-.99-.034-1.497 0-11.492 5.292-20.814 11.828-20.814s11.829 9.313 11.829 20.814c0 .507-.017.998-.035 1.497h6.942c2.098-1.222.527-4.002.527-4.002s1.968-10.683 1.528-12.861l-.026.009Z"
      />
      <Path
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M180.328 240.363s-13.555 8.952-13.331 9.606c.216.654 7.866 1.747 9.834 1.747h61.206s7.434-1.523 8.522-2.832c1.088-1.308-15.299-11.551-21.205-13.514-5.906-1.963-17.406-1.825-29.07-.895-8.712.697-15.956 5.888-15.956 5.888Z"
      />
      <Path
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M211.911 258.689h-6.121a1.197 1.197 0 1 1 0-2.393h6.121a1.196 1.196 0 1 1 0 2.393ZM239.125 258.689h-6.121a1.196 1.196 0 1 1 0-2.393h6.121a1.196 1.196 0 1 1 0 2.393Z"
      />
      <Path
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m212.455 252.371 2.625 3.925-.216 23.534 1.312 2.617-1.312 3.047 1.744 1.963"
      />
      <Path
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m242.19 251.277 1.753 1.963-3.281 14.823-6.994 16.562s-4.368.439-5.024.439c-.657 0-50.492.439-50.492.439s-.656-1.094-1.312-2.393c-.656-1.3-2.84-19.394-2.84-23.534 0-4.141-1.969-7.627-1.969-7.627"
      />
      <Path
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M111.3 247.361h41.702s6.121.439 11.146-2.832 8.09-4.382 12.675-7.214c4.593-2.832 6.337-3.701 6.337-3.701s-15.515-1.309-24.477-1.309-12.899 1.094-12.899 1.094l-34.493 13.97.009-.008Z"
      />
      <Path
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M144.333 255.685s5.181-.706 6.053-1.137c.872-.439 5.249-5.448 5.249-5.448"
      />
      <Path
        fill="#666"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m123.621 258.525 20.712-2.832s-14.755 8.91-16.922 8.91-18.278.542-18.278.542l4.058-3.512 4.74-2.428 5.69-.671v-.009Z"
      />
      <Path
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m141.51 257.363-8.349 1.042-6.035 4.011-16.05 1.042-1.952 1.678s16.111-.542 18.278-.542c1.563 0 9.713-4.657 14.108-7.239v.008Z"
      />
      <Path
        fill="#666"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m80.434 261.22-1.08 3.512-2.426-1.498s-.043-2.453 1.753-4.175l1.761 2.161h-.008Z"
      />
      <Path
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m79.63 263.828-2.598-1.593c-.112.594-.104 1.007-.104 1.007l2.427 1.498.276-.904v-.008Z"
      />
      <Path
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M78.672 259.059s1.762 2.565 6.908 3.917l1.079 4.45h3.79l3.523-3.917s25.858-2.832 26.532-3.107c.673-.267 3.117-1.894 3.117-1.894s-28.561 2.023-29.382 2.023c-.82 0-8.124-.405-8.124-.405l-6.63-2.298-.813 1.214v.017ZM128.266 282.507c0 1.119-1.183 2.023-2.642 2.023-1.459 0-2.642-.904-2.642-2.023 0-1.119 1.183-2.023 2.642-2.023 1.459 0 2.642.904 2.642 2.023ZM266.011 255.642c0-1.524-1.416-1.016-2.4-1.094l-4.369 1.094-.872 3.047 6.553 3.486s1.097-5.01 1.097-6.542l-.009.009Z"
      />
      <Path
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M251.359 252.879c3.428-.095 6.424-.13 8.859-.087M185.016 257.019c19.107-1.498 44.482-3.331 61.914-3.994M163.285 258.792c4.066-.344 10.456-.878 18.105-1.48M158.493 259.205s1.019-.086 2.866-.249"
      />
      <Path
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M78.534 267.839h24.236l5.681 3.099 7.58 12.284-7.442 2.16H75.556l-1.485-3.779.811-11.612 3.652-2.152Z"
      />
      <Path fill="#fff" d="M97.08 270.8H78.673v7.696H97.08V270.8Z" />
      <Path
        stroke="#737373"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M107.803 272.057h-8.22M109.97 275.078h-9.946M112.129 278.1h-12.105M114.296 281.113H88.342M114.296 283.824H75.711"
      />
      <Path
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M190.784 243.522h-10.076c-2.512 1.325-4.515 2.694-4.421 3.761.242 2.712 1.209 3.762 2.409 3.762h10.05s4.421-2.505 4.024-5.01c-.156-.947-.993-1.808-1.986-2.505v-.008Z"
      />
      <Path
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M176.288 247.275h12.968"
      />
      <Path
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m178.696 251.036.605 3.254.88.87 2.746-.569s-1.209.302-.907-3.606l-3.315.051h-.009Z"
      />
      <Path
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M112.362 271.592h29.459"
      />
      <Path
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M116.437 285.52h11.786l1.968-1.395-3.35-13.032-9.584-4.476 9.083 5.724 2.824 10.338-2.634 2.032-10.093.809Z"
      />
    </G>
    <Path
      stroke="#D9D9D9"
      strokeDasharray="10 10"
      d="M169 346.5a153.503 153.503 0 0 1-108.54-44.959A153.507 153.507 0 0 1 15.5 193 153.502 153.502 0 0 1 227.742 51.185a153.507 153.507 0 0 1 83.074 83.073 153.503 153.503 0 0 1-83.074 200.558A153.503 153.503 0 0 1 169 346.5Z"
    />
    <Path
      fill="#E0E6E2"
      d="M165.51 360.329c-.078 0-.157-.001-.233.001a485.56 485.56 0 0 1-11.65.015c-.089 0-.177-.003-.264-.005-4.278-.056-7.435-.197-8.464-.445-1.7-.404-2.984-1.312-3.913-2.735-1.337-2.039-1.947-5.136-2.023-9.329-.076-4.194.421-7.309 1.685-9.397.877-1.455 2.129-2.407 3.812-2.874 1.022-.283 4.169-.536 8.442-.75.089-.004.175-.011.264-.014 3.368-.163 7.407-.302 11.643-.405.076-.002.153-.003.233-.008a731.53 731.53 0 0 1 14.65-.203l.359-.001c.609 0 1.211 0 1.802-.003 5.813.006 10.63.109 12.871.339 7.729.79 7.934 12.161 7.934 12.161s.206 11.37-7.491 12.44c-2.23.31-7.042.588-12.851.8l-1.801.066c-.119.004-.239.01-.359.012-4.649.153-9.772.267-14.648.326l.002.009Z"
    />
    <Path
      fill="#9FE0BB"
      d="m165.077 336.345-.233.004-.035-1.955c.076-.001.153-.002.233-.008l.035 1.959ZM165.51 360.329c-.078 0-.157-.001-.233.001l-.036-1.955.234-.004.035 1.958ZM154.403 337.418l-.501-.873-.998-1.737c.089-.004.175-.011.264-.014l1 1.746.439.763-.204.115ZM153.625 360.347a22.396 22.396 0 0 1-.264-.005l.935-1.771.469-.891.208.107-.411.779-.937 1.781Z"
    />
    <Path
      fill="#D3D3D3"
      d="M140.985 357.162c-1.338-2.039-1.95-5.137-2.024-9.329-.074-4.192.423-7.311 1.687-9.399 2.859-.965 5.648-.647 5.648-.647l-.55 9.921.908 9.895s-2.774.421-5.668-.443l-.001.002Z"
    />
    <Path
      fill="#2B3545"
      d="M200.591 346.71s-.091-4.736-1.927-4.456l.081 4.489.081 4.489c1.845.213 1.765-4.522 1.765-4.522Z"
    />
    <Path
      fill="#828282"
      d="m195.91 336.491-1.756-.261a2.99 2.99 0 0 0-2.879 1.229l-.023.031.084 4.686 7.173-.129a1.087 1.087 0 0 0 1.016-1.414l-.462-1.456a3.91 3.91 0 0 0-3.155-2.688l.002.002ZM196.28 356.892l-1.745.323a2.984 2.984 0 0 1-2.922-1.123l-.025-.031-.084-4.686 7.173-.129a1.086 1.086 0 0 1 1.066 1.376l-.409 1.472a3.912 3.912 0 0 1-3.056 2.8l.002-.002Z"
    />
    <Path
      fill="#D7D7D7"
      d="M198.27 339.609a4.041 4.041 0 0 0-3.881-2.686l-10.258.185.179 9.908.179 9.908 10.258-.185a4.041 4.041 0 0 0 3.781-2.824 22.488 22.488 0 0 0-.258-14.306Z"
    />
    <Path
      fill="#D3D3D3"
      d="M198.008 350.888a2.137 2.137 0 0 0 1.821-1.821c.081-.57.131-1.328.113-2.335-.019-1.006-.096-1.762-.197-2.329a2.14 2.14 0 0 0-1.885-1.753l-13.656-1.419.104 5.783.105 5.784 13.595-1.91Z"
    />
    <Path
      fill="#2B3545"
      d="m184.487 356.923-2.066-.277-5.319-.708-5.816-.773-.154-2.56a121.794 121.794 0 0 1-.212-5.701c-.028-1.665-.022-3.332.019-4.998l.062-2.564 5.639-.957 5.286-.9 2.207-.375a28.1 28.1 0 0 1 1.981 10.536 28.16 28.16 0 0 1-1.623 9.28l-.004-.003ZM150.307 338.262c-.847-.43-1.645-.97-2.368-1.61l34.043-.614-6.483 1.301-4.889.982c-.99.198-1.991.329-2.997.395l-6.012.389-5.461.354a11.254 11.254 0 0 1-5.833-1.197ZM182.381 358.066l-11.446-1.871c-.997-.163-2-.259-3.01-.287l-11.495-.331a11.275 11.275 0 0 0-8.093 3.101l34.046-.614-.002.002ZM146.652 357.605c-3.382-1.371-4.3-5.706-4.544-8.135-.102-1.012-.087-1.693-.087-1.693s-.441-7.875 4.274-9.988l.889.589 1.437.949 2.183 1.443s-1.177 1.893-1.329 5.687c-.015.376-.021.772-.013 1.188.083 4.588 1.588 6.82 1.588 6.82l-2.114 1.509-.804.572-1.483 1.059h.003Z"
    />
    <Path
      fill="#fff"
      d="M169.406 339.398s-.627 9.411.273 15.131c0 0-12.506-.041-16.641-.632 0 0 5.254-11.168 16.366-14.5l.002.001Z"
      opacity={0.2}
    />
    <Path
      fill="#fff"
      d="M183.606 347.093c-4.177-.596-8.512-.883-12.684-.191-.028-1.665-.022-3.332.019-4.998l.062-2.564 13.128-2.232a28.1 28.1 0 0 1 1.981 10.536c-.926-.202-1.817-.452-2.508-.549l.002-.002Z"
      opacity={0.1}
    />
    <Path
      fill="#080808"
      d="m184.487 356.923-2.066-.277a32.656 32.656 0 0 0 1.084-6.153 33.136 33.136 0 0 0-.332-7.945c-.268-1.628-.992-3.369-1.249-5.068l2.207-.376a28.1 28.1 0 0 1 1.981 10.536 28.16 28.16 0 0 1-1.623 9.281l-.002.002Z"
      opacity={0.1}
    />
    <Path
      fill="#fff"
      d="m184.487 356.923-2.066-.277-5.319-.708a36.955 36.955 0 0 0-.464-17.558l5.286-.9 2.207-.376a28.1 28.1 0 0 1 1.981 10.536 28.16 28.16 0 0 1-1.623 9.281l-.002.002Z"
      opacity={0.05}
    />
    <Path
      fill="#fff"
      d="M142.108 349.47c-.102-1.012-.087-1.693-.087-1.693s-.441-7.875 4.274-9.988l4.511 2.979s-1.177 1.893-1.329 5.688a6.804 6.804 0 0 0-.711.116 20.049 20.049 0 0 0-6.662 2.898h.004Z"
      opacity={0.1}
    />
    <Path
      fill="#080808"
      d="M146.652 357.605c-3.382-1.371-4.3-5.706-4.544-8.135-.102-1.012-.087-1.693-.087-1.693s-.441-7.875 4.274-9.988l.889.589c-2.839 1.974-4.011 6.11-3.869 9.376.147 3.348 1.096 7.231 4.218 9.224l-.881.627Z"
      opacity={0.1}
    />
    <Path
      fill="#fff"
      d="M146.652 357.605c-3.382-1.371-4.3-5.706-4.544-8.135-.102-1.012-.087-1.693-.087-1.693s-.441-7.875 4.274-9.988l.889.589 1.437.949a14.683 14.683 0 0 0-2.459 8.482 14.662 14.662 0 0 0 2.777 8.164l-.803.573-1.484 1.059Z"
      opacity={0.05}
    />
    <Path
      fill="#080808"
      d="M150.307 338.262c-.847-.43-1.645-.97-2.368-1.61l34.043-.614-6.483 1.301-25.192.923Z"
      opacity={0.1}
    />
    <Path
      fill="#fff"
      d="m147.938 336.654 11.873-.214 1.787 2.669-5.462.354a11.27 11.27 0 0 1-8.2-2.807l.002-.002Z"
      opacity={0.05}
    />
    <Path
      fill="#080808"
      d="M150.643 356.986a11.272 11.272 0 0 0-2.308 1.694l34.042-.614-6.525-1.066-25.209-.014Z"
      opacity={0.1}
    />
    <Path
      fill="#fff"
      d="m148.335 358.68 11.874-.214 1.689-2.732-5.471-.156a11.265 11.265 0 0 0-8.094 3.1l.002.002Z"
      opacity={0.05}
    />
    <Path
      fill="#D3D3D3"
      d="M182.321 359.588c.037.838-.189 2.28-2.169 2.308l.728-3.805s.139-.002.339.054c.641.182 1.072.776 1.1 1.441l.002.002Z"
    />
    <Path
      fill="#959595"
      d="m180.154 361.898.728-3.805-.335.006-.758 3.705.365.094Z"
    />
    <Path
      fill="#D3D3D3"
      d="M181.868 334.521c.007-.84-.27-2.272-2.25-2.229l.865 3.777s.138-.003.336-.067c.635-.204 1.043-.814 1.048-1.48l.001-.001Z"
    />
    <Path
      fill="#959595"
      d="m179.619 332.29.866 3.777-.336.006-.891-3.676.361-.107Z"
    />
    <Path
      fill="#fff"
      d="M185.269 337.5s9.701-.655 10.846.256c1.148.91 1.644 2.632 1.644 2.632s-1.236-2.174-4.429-2.114c-3.19.057-7.773.539-7.773.539l-.29-1.311.002-.002ZM185.61 356.401s9.718.304 10.83-.648c1.114-.95 1.548-2.689 1.548-2.689s-1.159 2.215-4.35 2.273c-3.191.057-7.787-.259-7.787-.259l-.243 1.321.002.002Z"
      opacity={0.1}
    />
    <Defs>
      <ClipPath id="b">
        <Path fill="#fff" d="M78 68h179.03v175.76H78z" />
      </ClipPath>
      <ClipPath id="c">
        <Path fill="#fff" d="M73 229h197v70H73z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export { ReduceCarbonImg };