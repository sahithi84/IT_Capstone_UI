import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ObservationIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={128}
    height={128}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M57.028 21.164c3.62 0 5.968-2.725 5.968-6.166 0-3.441-2.348-5.967-5.968-5.967h-3.8c-.914 0-1.63-.716-1.63-1.452-.716-2.726-3.083-4.337-5.968-4.337-2.725 0-5.25 1.631-5.967 4.337 0 .716-.716 1.452-1.452 1.452h-3.8c-3.798 0-5.967 2.526-5.967 5.967s2.169 6.166 5.968 6.166h22.616Zm45.81 55.954c13.943 0 25.162 11.398 25.162 25.163a25.103 25.103 0 0 1-25.162 25.162c-5.61 0-10.861-1.81-15.038-4.893-1.631 1.273-3.8 2.168-6.166 2.168H9.588c-5.252 0-9.588-4.336-9.588-9.588V19.175c0-4.893 4.535-9.587 9.588-9.587h17.206c1.63-2.348 4.157-3.8 7.598-3.8h2.526C38.37 2.168 41.811 0 45.611 0c3.799 0 7.419 2.168 8.692 5.788h2.725c3.262 0 5.968 1.452 7.42 3.8h17.206c5.25 0 9.587 4.336 9.587 9.587v60.847a24.74 24.74 0 0 1 11.597-2.904Zm-17.564 43.264c-1.273-1.273-2.347-2.725-3.442-4.158-.178 0-.358.179-.537.179H26.236c-.537 0-.915-.358-1.273-.537L9.031 100.471c-.358-.358-.537-.736-.537-1.273V19.532c0-.915.716-1.452 1.63-1.452H25.52c-.179-.915-.358-1.989-.358-3.083 0-.716 0-1.452.18-2.168H9.587c-3.442 0-6.346 2.904-6.346 6.345v95.975c0 3.62 2.904 6.346 6.346 6.346h72.066c1.432-.02 2.705-.378 3.62-1.114Zm-5.63-8.335c-2.526-6.166-2.526-13.227 0-19.374V21.164H64.07c-1.631 1.99-4.158 3.262-7.062 3.262H34.392c-3.083 0-5.43-1.273-7.062-3.262H11.757v76.601h14.48c.915 0 1.632.716 1.632 1.631v13.765h51.776v-1.114Zm3.263-24.983c1.452-1.81 3.262-3.62 5.25-5.072V19.175c0-3.441-2.903-6.345-6.523-6.345H65.88c.179.716.179 1.452.179 2.168 0 1.094 0 2.168-.358 3.083h15.575c.915 0 1.63.716 1.63 1.452v67.53Zm-58.302 23.909v-9.965H14.103l10.502 9.965Zm19.553-100.67h2.905c2.168 0 2.168-3.262 0-3.262h-2.905c-1.989 0-1.989 3.263 0 3.263Zm15.396 82.191c-2.168 0-2.168-3.083 0-3.083h13.03c2.167 0 2.167 3.083 0 3.083h-13.03ZM37.097 95.22c-1.452-1.452.716-3.799 2.168-2.168l3.083 2.904 2.904-2.904c1.453-1.631 3.62.716 2.169 2.168l-2.904 2.904 2.904 2.905c1.452 1.631-.716 3.799-2.169 2.347l-2.904-2.904-3.083 2.904c-1.452 1.452-3.62-.716-2.168-2.347l2.904-2.905-2.904-2.904ZM21.164 37.634c-1.452-1.452.716-3.799 2.347-2.347l2.905 3.083 2.904-3.083c1.452-1.452 3.62.915 2.168 2.347l-2.904 2.904 2.904 2.904c1.63 1.453-.716 3.8-2.168 2.348l-2.904-3.084-2.905 3.084c-1.63 1.452-3.799-.915-2.347-2.348l2.904-2.904-2.904-2.904Zm-3.799 21.184h17.922c.915 0 1.631.716 1.631 1.631v17.922c0 .915-.716 1.632-1.631 1.632H17.365a1.613 1.613 0 0 1-1.631-1.632V60.45c0-.895.716-1.63 1.631-1.63Zm16.47 3.263H18.996v14.66h14.839V62.08Zm9.786 1.81c-2.168 0-2.168-3.263 0-3.263h30.792c1.99 0 1.99 3.263 0 3.263H43.621Zm0 14.301c-2.168 0-2.168-3.262 0-3.262h15.396c1.99 0 1.99 3.262 0 3.262H43.621Zm0-7.24c-2.168 0-2.168-3.083 0-3.083H67.71c1.989 0 1.989 3.083 0 3.083H43.62Zm-23.173-1.273c-1.452-1.631 1.094-3.62 2.347-2.168l2.347 2.725 4.715-5.072c1.452-1.452 3.799.716 2.347 2.168l-5.788 6.166c-.716.716-1.81.915-2.527 0l-3.44-3.82Zm-3.083-39.822h17.922c.915 0 1.631.716 1.631 1.63V49.59c0 .915-.716 1.63-1.631 1.63H17.365a1.613 1.613 0 0 1-1.631-1.63V31.488c0-.915.716-1.631 1.631-1.631Zm16.47 3.262H18.996v14.839h14.839v-14.84Zm9.786 1.81c-2.168 0-2.168-3.262 0-3.262h30.792c1.99 0 1.99 3.262 0 3.262H43.621Zm0 14.48c-2.168 0-2.168-3.261 0-3.261h15.396c1.99 0 1.99 3.262 0 3.262H43.621Zm0-7.24c-2.168 0-2.168-3.262 0-3.262H67.71c1.989 0 1.989 3.262 0 3.262H43.62ZM33.298 87.621H51.22c.915 0 1.631.716 1.631 1.452v18.101c0 .915-.716 1.631-1.631 1.631H33.298a1.613 1.613 0 0 1-1.631-1.631V89.073c0-.736.736-1.452 1.63-1.452Zm16.29 3.063H34.93v14.839h14.66V90.684Zm9.966 16.311c-2.168 0-2.168-3.262 0-3.262h13.03c2.167 0 2.167 3.262 0 3.262h-13.03Zm0-7.26c-2.168 0-2.168-3.263 0-3.263h13.03c2.167 0 2.167 3.263 0 3.263h-13.03ZM109.9 9.03c-1.452 0-3.262 1.094-3.262 2.725v4.714h6.524v-4.734c-.02-1.611-1.83-2.705-3.262-2.705Zm-3.262 13.943h6.524v-3.44h-6.524v3.44Zm6.504 3.084h-6.524v36.938h6.524V26.058Zm-.716 40h-4.893l2.347 4.536 2.546-4.535Zm-2.526-60.11c3.262 0 6.345 2.347 6.345 5.788v53.408s-.179.537-.179.716l-4.714 8.692c-.716 1.094-2.168 1.094-2.725 0l-4.714-8.692c-.179-.18-.179-.537-.179-.716V11.736c0-3.441 3.083-5.789 6.166-5.789Zm3.242 94.881c2.168 0 2.168 3.083 0 3.083h-10.323a1.613 1.613 0 0 1-1.631-1.631v-8.156c0-1.989 3.262-1.989 3.262 0v6.704h8.692Zm-10.303-15.754c9.587 0 17.385 7.598 17.385 17.206 0 9.607-7.778 17.385-17.385 17.385-9.588 0-17.385-7.778-17.385-17.385 0-9.409 7.777-17.206 17.385-17.206Zm0 3.083c-7.778 0-14.123 6.345-14.123 14.123 0 7.976 6.345 14.301 14.123 14.301 7.777 0 14.301-6.345 14.301-14.301 0-7.778-6.524-14.123-14.301-14.123Zm0-7.797c-12.134 0-21.9 9.786-21.9 21.9 0 12.114 9.766 22.119 21.9 22.119 12.133 0 22.099-9.966 22.099-22.099 0-12.134-9.986-21.92-22.099-21.92Z"
    />
  </Svg>
);
export { ObservationIcon };