// dependencies
import React from "react";

// main component
function MessyLines({ className }) {
  return (
    <svg
      viewBox="0 0 505 418"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className} max-w-[240px]`}
    >
      <path
        d="M428.524 272.109C403.428 275.371 367.224 358.838 341.921 358.433C303.972 170.933 315.257 401.224 301.33 392.933C281.688 381.365 141.645 381.159 143.167 358.433C144.688 335.707 196.411 430.725 211.664 413.793C226.917 396.86 245.584 383.4 264.153 370.154C317.5 332.075 364.293 285.803 414.578 243.764C420.553 238.841 426.123 233.446 431.235 227.631C436.608 221.885 440.022 214.585 440.988 206.778C441.651 198.974 438.589 190.645 432.152 186.236C427.354 182.959 421.346 182.1 415.553 181.691C394.797 180.35 373.984 183.209 354.358 190.097C334.732 196.985 316.697 207.76 301.33 221.779C296.356 226.344 291.577 231.533 289.315 237.795C287.052 244.057 287.988 252.074 293.216 256.444C296.674 259.143 301.044 260.395 305.407 259.936C309.729 259.455 313.948 258.296 317.91 256.502C334.549 249.711 349.841 239.999 363.064 227.826C365.487 225.79 367.545 223.356 369.15 220.628C369.939 219.255 370.413 217.723 370.538 216.144C370.663 214.565 370.435 212.979 369.872 211.498C367.531 206.231 360.626 205.061 354.872 205.373C347.07 205.802 339.17 207.733 333.065 212.571C326.96 217.409 323.117 225.544 324.912 233.113C326.381 238.311 329.732 242.776 334.313 245.637C338.871 248.443 343.86 250.479 349.079 251.665C373.527 258.075 399.288 257.446 423.394 249.85C441.202 244.213 454.817 231.513 469.797 220.316C479.308 213.119 487.175 203.976 492.872 193.497C498.57 183.019 501.968 171.446 502.839 159.55C503.281 154.623 502.811 149.656 501.454 144.899C500.128 140.822 497.553 138.189 495.31 134.697C493.584 131.624 491.318 128.888 488.62 126.621C482.456 121.685 474.79 118.954 467.339 116.652C454.754 112.435 441.733 109.654 428.524 108.362C401.271 106.423 374.24 114.443 352.453 130.932C348.033 133.907 344.415 137.928 341.921 142.636C339.736 147.494 339.97 153.756 343.617 157.579C347.636 161.715 354.228 161.793 359.943 160.896C376.503 158.321 391.874 150.186 404.688 139.437C417.503 128.688 427.939 115.326 437.106 101.378C442.665 92.892 444.694 81.48 440.89 72.1164C437.952 65.7067 432.604 60.7154 426.008 58.2269C419.467 55.7933 412.608 54.3214 405.644 53.8572C386.841 51.9065 367.648 50.7945 349.079 54.6961C330.51 58.5976 312.624 67.9417 301.525 83.2747C298.931 86.8446 296.649 91.3119 298.034 95.506C299.653 100.441 305.446 102.49 310.556 103.309C324.294 105.768 338.457 103.829 351.029 97.7689C357.252 94.7227 362.809 90.4709 367.376 85.2603C371.943 80.0497 375.43 73.984 377.635 67.415C381.711 54.423 379.761 35.1884 369.072 25.5907C357.135 14.9395 341.862 8.59953 326.336 5.36127C308.781 1.71334 290.856 1.77186 273.008 2.20103C231.501 3.17641 182.972 35.5396 164.949 73.1113C160.19 83.0211 156.679 94.3161 159.527 104.928C163.155 118.584 176.789 127.694 190.735 129.547C204.681 131.4 218.686 127.186 231.501 121.412C240.548 117.656 248.846 112.304 256 105.611C262.924 98.7053 267.976 89.5757 268.483 79.8024C268.99 70.0291 264.348 59.8071 255.824 55.0277C250.109 51.8284 243.36 51.2432 236.846 50.7555C213.849 48.9803 190.599 47.2246 167.777 50.619C154.973 52.3541 142.539 56.1762 130.971 61.9334C114.41 70.9089 99.6081 82.8048 87.2791 97.0471C82.6532 102.408 78.594 108.233 75.1663 114.428C71.0793 121.297 68.5616 128.984 67.7933 136.94C67.4508 140.913 67.9591 144.913 69.2843 148.674C70.6095 152.435 72.7211 155.87 75.4784 158.75C84.6849 167.665 98.241 167.08 109.964 165.285C113.123 164.992 116.185 164.042 118.956 162.495C124.417 158.984 124.437 151.922 118.585 148.84C113.709 146.265 107.565 146.206 102.181 145.797C94.8679 145.065 87.5031 145.007 80.1792 145.621C69.7828 146.753 61.7077 151.61 52.5987 156.389C43.21 161.118 34.3559 166.84 26.1885 173.459C14.3488 183.446 4.73273 196.868 2.48962 212.24C-0.572705 233.015 11.0329 254.474 28.8218 265.613C46.6106 276.751 69.4708 278.214 89.5612 272.109C109.652 266.003 127.109 252.913 141.016 237.19C144.917 232.781 148.818 226.909 146.536 221.486C145.768 219.869 144.61 218.468 143.167 217.409C141.723 216.35 140.039 215.666 138.266 215.419C134.71 214.977 131.099 215.358 127.714 216.531C112.797 221.002 100.253 231.191 92.8186 244.876C90.3609 249.46 88.5859 255.313 91.4922 259.624C94.3985 263.935 99.782 264.501 104.658 264.364C113.312 264.191 121.832 262.197 129.664 258.512C148.916 249.148 166.412 235.415 174.799 215.205C176.407 211.3 177.635 207.25 178.466 203.11"
        stroke="#DFDFDF"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M255.002 198.156C256.557 193.012 258.641 188.044 261.22 183.331C273.365 161.572 298.705 152.08 322.292 150.127C338.062 148.759 354.436 150.322 368.607 157.354C382.779 164.385 394.494 177.452 397.32 193.058C400.244 209.133 393.422 225.813 382.857 238.196C363.636 260.541 332.682 276.479 306.21 288.452C278.296 301.07 248.238 308.785 217.517 309C204.398 309 190.89 307.887 179.175 302.008C167.459 296.128 157.732 284.722 157.03 271.596C156.754 262.555 160.006 253.762 166.095 247.084C172.183 240.487 179.873 235.581 188.414 232.845C192.234 231.336 196.351 230.734 200.441 231.087C202.479 231.294 204.43 232.02 206.109 233.196C207.787 234.372 209.138 235.959 210.032 237.806C212.644 244.212 207.654 251.029 202.722 255.873C190.665 267.786 177.028 277.98 162.196 286.167C155.077 290.373 147.247 293.233 139.097 294.605C130.278 296.031 121.288 296.031 112.47 294.605L110.364 294.234C105.147 293.419 100.133 291.616 95.5887 288.921C87.7915 283.979 82.9182 275.424 80.0918 266.616C72.2946 242.22 79.8968 216.711 95.5887 197.257C111.28 177.804 128.922 158.486 151.495 147.49C175.798 135.616 203.033 131.108 229.856 134.521C239.213 135.751 249.349 138.642 254.437 146.63C269.213 169.932 236.172 186.319 218.726 189.874C214.136 191.034 209.381 191.384 204.671 190.91C202.315 190.653 200.044 189.878 198.022 188.639C196 187.399 194.276 185.727 192.976 183.741C191.935 181.725 191.337 179.508 191.223 177.241C191.109 174.973 191.48 172.708 192.313 170.596C194.007 166.393 196.421 162.52 199.447 159.15C219.837 134.54 252.585 111.16 285.216 108.25C298.316 107.078 312.097 109.969 322.428 118.114C332.76 126.259 338.939 140.107 336.073 152.978C334.494 160.283 330.225 166.651 325.742 172.647C315.82 185.538 303.852 196.671 291.941 207.805C279.173 219.68 263.969 235.247 246.542 239.759C237.79 242.044 227.361 240.228 221.884 233.02C217.03 226.653 217.205 217.395 220.753 210.207C224.301 203.019 230.655 197.589 237.459 193.351C250.17 185.441 264.71 180.966 279.661 180.362C286.113 180.108 292.955 180.714 298.16 184.503C303.91 188.722 306.581 196.222 306.249 203.39C305.608 210.524 303.218 217.388 299.29 223.372C292.742 234.206 283.866 243.441 273.306 250.404C268.901 253.295 263.267 255.834 258.55 253.471C254.651 251.517 252.838 246.83 251.961 242.494C249.369 229.075 250.616 212.492 255.002 198.156Z"
        stroke="#DFDFDF"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

export default MessyLines;
