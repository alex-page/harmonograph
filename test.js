// Local dependencies
const test = require('ava');
const generateHarmonograph = require('.');

test('harmongraph: should return an SVG', t => {
	t.is(generateHarmonograph({
		size: 700,
		strokeWidth: 1,
		strokeColor: '#000',
		pendulumTime: 150,
		pendulum: [{
			amplitude: 200, frequency: 2.985, phase: 2.054, damping: 0.001
		},
		{
			amplitude: 200, frequency: 3.006, phase: 1.820, damping: 0.008
		},
		{
			amplitude: 200, frequency: 3.003, phase: 2.283, damping: 0.001
		},
		{
			amplitude: 200, frequency: 1.994, phase: 1.155, damping: 0.001
		}]
	}), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700"><path stroke="#000" stroke-width="1" fill="none" d="M 679.041 647.565 C 646.283 629.698, 416.856 496.543, 249.089 393.36 S -29.918 212.362, 8.549 201.645 229.307 241.827, 402.099 287.777 712.247 363.965, 699.03 351.215 524.122 287.61, 350.014 263.168 15.514 251.408, 3.364 315.775 128.996 491.07, 300.713 560.862 652.279 646.799, 689.379 576.791 615.363 354.49, 449.68 221.957 88.635 -8.647, 27.56 0.661 48.732 126.149, 204.899 267.024 567.659 558.479, 651.242 618.704 682.978 645.7, 539.603 560.425 182.884 350.898, 78.734 280.073 -4.865 196.72, 122.768 226.278 465.873 316.513, 588.215 340.496 721.495 346.922, 612.22 311.297 289.954 232.522, 152.179 244.247 -27.555 327.555, 61.17 418.23 355.872 607.16, 506.005 625.46 727.969 574.977, 661.544 452.444 400.502 165.246, 241.319 75.163 -17.797 -19.984, 25.103 64.883 247.17 315.17, 411.912 444.487 702.309 654.443, 683.667 642.543 505.019 532.11, 338.294 433.368 23.11 248.09, 17.302 226.223 149.068 243.614, 314.176 285.364 647.167 360.143, 677.084 349.376 594.624 287.249, 434.666 256.216 91.184 225.741, 38.017 283.741 69.842 453.955, 221.25 536.763 567.723 659.925, 642.798 609.458 661.83 419.254, 522.155 281.479 180.17 22.651, 85.02 5.826 16.013 78.408, 141.055 209.458 471.212 498.878, 584.204 577.328 701.229 648.981, 593.371 580.373 282.04 393.339, 153.832 317.847 -8.215 216.402, 80.293 236.519 366.243 312.932, 506.76 337.557 709.879 348.839, 642.446 311.964 387.799 224.295, 238.141 226.195 -1.235 289.324, 43.873 380.899 262.029 584.01, 417.487 622.31 687.579 616.773, 665.529 506.056 488.225 227.634, 330.383 119.909 35.757 -23.606, 34.507 37.869 167.555 250.918, 324.322 383.985 636.826 618.161, 661.101 627.736 574.73 559.03, 422.422 467.547 99.016 284.075, 52.499 252.858 90.84 249.57, 235.415 286.812 562.565 359.244, 630.073 350.486 640.062 290.483, 506.279 252.908 182.536 202.981, 95.753 252.498 38.181 412.129, 158.398 505.554 471.709 662.489, 575.667 633.239 678.999 481.198, 574.832 342.731 278.658 64.517, 160 22.717 13.679 41.441, 99.729 158.758 372.506 436.869, 503.098 530.144 688.689 641.865, 622.431 591.073 378.737 430.879, 239.204 353.471 18.873 238.72, 64.131 250.045 273.77 312.773, 419.078 337.748 668.908 353.696, 645.375 316.004 473.957 220.391, 326.132 211.708 52.648 251.646, 54.206 341.229 184.121 552.383, 331.196 609.641 622.032 649.418, 642.207 554.035 556.113 293.33, 413.013 171.797 111.421 -14.382, 70.246 22.393 111.194 192.522, 247.227 324.872 552.802 574.622, 613.802 604.197 618.316 576.923, 492.241 495.031 189.457 318.895, 110.24 280.245 60.975 258.82, 174.442 291.503 467.796 361.061, 563.246 354.478 655.571 297.546, 557.046 253.763 279.455 184.268, 170.105 223.368 37.344 367.043, 118.961 468.276 374.878 654.34, 495.52 647.265 665.233 538.148, 602.083 403.515 373.202 115.27, 244.085 50.462 41.705 16.229, 85.238 116.479 282.407 374.733, 417.015 479.108 647.126 625.198, 623.884 592.706 462.336 462.502, 325.303 385.735 72.968 262.411, 75.693 265.828 198.552 315.486, 334.935 340.678 603.572 361.392, 621.122 323.492 539.123 221.384, 406.398 201.667 127.677 216.004, 90.535 300.687 130.472 513.338, 256.63 587.838 539.087 671.752, 594.695 594.702 597.069 359.984, 480.194 228.859 200.337 7.035, 127.795 18.66 83.795 141.815, 188.937 269.19 459.98 525.766, 547.588 573.249 631.578 585.721, 540.345 515.271 284.025 351.28, 183.55 307.155 62.058 270.417, 137.575 298.692 373.664 365.217, 484.564 361.092 640.236 308.51, 581.886 259.102 370.985 170.625, 252.318 197.625 66.51 320.31, 106.652 426.218 288.039 635.724, 411.689 651.032 622.99 588.154, 601.648 461.679 453.366 172.944, 327.591 87.819 95.967 3.257, 98.334 83.815 210.725 314.662, 335.758 426.229 582.162 600.171, 598.504 585.788 523.933 487.491, 402.45 413.658 147.07 286.285, 112.695 282.818 148.398 320.367, 263.656 345.8 522.106 371.602, 573.423 334.294 576.739 227.631, 470.197 196.781 214.578 183.851, 147.761 260.809 106.18 468.191, 201.738 557.633 448.795 683.017, 529.328 626.659 607.565 425.222, 524.965 288.98 291.921 39.545, 199.738 26.445 87.258 100.28, 155.258 218.772 369.257 473.586, 470.782 536.428 614.344 585.735, 562.227 528.043 371.808 380.168, 263.408 332.485 92.594 283.4, 127.919 307.558 290.847 371.126, 403.53 369.884 597.219 323.153, 579.177 269.028 446.946 162.873, 332.638 176.44 120.918 273.63, 121.576 380.872 220.644 607.27, 333.944 644.42 558.525 629.515, 574.942 515.198 510.679 235.356, 400.971 133.223 168.915 2.579, 136.115 61.571 164.744 258.7, 268.419 373.492 502.492 568.174, 550.609 571.132 557.598 505.431, 462.223 436.514 231.555 309.256, 169.513 300.006 127.752 326.664, 212.785 352.447 434.807 383.827, 509.074 348.069 583.979 239.236, 511.046 197.553 302.623 156.559, 218.081 223.134 112.404 418.532, 171.787 520.082 362.058 682.87, 454.725 648.845 588.135 486.778, 543.402 349.97 375.32 81.719, 276.845 45.111 119.35 69.017, 148.675 175.184 291.11 420.132, 392.993 495.407 570.445 577.609, 556.895 533.434 442.918 404.748, 340.051 355.298 147.177 296.807, 144.944 317.249 228.395 378.147, 329.82 380.264 533.319 341.089, 550.952 283.414 499.361 161.604, 401.711 160.821 192.554 228.749, 160.246 333.874 179.426 569.994, 271.093 627.694 480.897 660.879, 526.822 562.246 539.835 300.21, 456.177 184.86 250.668 13.783, 192.476 50.141 148.243 208.639, 222.093 322.781 418.579 530.809, 487.404 549.801 561.161 516.248, 498.653 453.848 315.634 330.369, 238.017 316.461 137.09 333.556, 187.023 359.881 352.55 397.416, 436.933 364.291 562.066 256.054, 525.624 204.246 381.144 135.306, 292.127 189.139 146.257 366.111, 168.64 476.519 289.106 671.398, 380.539 660.565 543.22 542.575, 535.145 409.658 441.042 131.779, 349.417 73.646 174.141 48.7, 168.041 139.675 234.106 367.382, 323.739 451.924 507.161 562.221, 526.978 531.821 489.919 424.446, 404.377 374.854 217.385 309.756, 184.61 326.931 192.417 385.516, 271.9 391.524"></path></svg>');
});
