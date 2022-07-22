import { motion } from 'framer-motion';

const Wave1 = ({ className = '', ...restProps }) => {
  return (
    <motion.svg
      className={className}
      {...restProps}
      width="4653"
      height="970"
      viewBox="0 0 4653 970"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5"
        d="M1 449.25C359.318 212.876 1055 667.749 1486.5 398.749C1654.5 284.999 1896.6 400.399 2061 471.999C2088.5 484.333 2192 504.5 2286 449.5"
        stroke="white"
      />
      <path
        opacity="0.5"
        d="M2286 449.5C2403.5 383 2493.5 548 2746.5 398.748C2914.5 284.999 3156.6 400.399 3321 471.999C3348.5 484.332 3438 483.5 3498 449.5"
        stroke="white"
      />
      <path
        opacity="0.5"
        d="M3498 449.5C3615.5 383 3705.5 548 3958.5 398.748C4126.5 284.999 4368.6 400.399 4533 471.999C4560.5 484.332 4622.8 511.099 4652 519.499"
        stroke="white"
      />
      <path
        d="M1132 486.448C1132 483.52 1128.5 479.544 1124.02 480.043C1121.53 480.043 1118.54 484.16 1118.04 487.821C1117.54 491.481 1121.53 492.396 1125.02 493.769C1128.51 495.141 1132 490.108 1132 486.448Z"
        fill="white"
      />
      <path
        d="M2076 472.448C2076 469.52 2072.5 465.544 2068.02 466.043C2065.53 466.043 2062.54 470.16 2062.04 473.821C2061.54 477.481 2065.53 478.396 2069.02 479.769C2072.51 481.141 2076 476.108 2076 472.448Z"
        fill="white"
      />
      <path
        d="M2708 422.448C2708 419.52 2704.5 415.544 2700.02 416.043C2697.53 416.043 2694.54 420.16 2694.04 423.821C2693.54 427.481 2697.53 428.396 2701.02 429.769C2704.51 431.141 2708 426.108 2708 422.448Z"
        fill="white"
      />
      <path
        d="M3135 393.448C3135 390.52 3131.5 386.544 3127.02 387.043C3124.53 387.043 3121.54 391.16 3121.04 394.821C3120.54 398.481 3124.53 399.396 3128.02 400.769C3131.51 402.141 3135 397.108 3135 393.448Z"
        fill="white"
      />
      <path
        d="M3604 436.448C3604 433.52 3600.5 429.544 3596.02 430.043C3593.53 430.043 3590.54 434.16 3590.04 437.821C3589.54 441.481 3593.53 442.396 3597.02 443.769C3600.51 445.141 3604 440.108 3604 436.448Z"
        fill="white"
      />
      <path
        d="M1659 349.448C1659 346.52 1655.5 342.544 1651.02 343.043C1648.53 343.043 1645.54 347.16 1645.04 350.821C1644.54 354.481 1648.53 355.396 1652.02 356.769C1655.51 358.141 1659 353.108 1659 349.448Z"
        fill="white"
      />
    </motion.svg>

    // <motion.path
    //   initial={{ pathLength: 0 }}
    //   animate={{ pathLength: 1 }}
    //   transition={{ duration: 1 }}
    //   opacity="0.5"
    //   d="M1 449.25C359.318 212.876 1055 667.749 1486.5 398.749C1654.5 284.999 1896.6 400.399 2061 471.999C2088.5 484.333 2192 504.5 2286 449.5"
    //   stroke="white"
    // />
    // <motion.path
    //   initial={{ pathLength: 0 }}
    //   animate={{ pathLength: 1 }}
    //   transition={{ duration: 1 }}
    //   opacity="0.5"
    //   d="M2286 449.5C2403.5 383 2493.5 548 2746.5 398.748C2914.5 284.999 3156.6 400.399 3321 471.999C3348.5 484.332 3438 483.5 3498 449.5"
    //   stroke="white"
    // />
    // <motion.path
    //   initial={{ pathLength: 0 }}
    //   animate={{ pathLength: 1 }}
    //   transition={{ duration: 1 }}
    //   opacity="0.5"
    //   d="M3498 449.5C3615.5 383 3705.5 548 3958.5 398.748C4126.5 284.999 4368.6 400.399 4533 471.999C4560.5 484.332 4622.8 511.099 4652 519.499"
    //   stroke="white"
    // />
  );
};

export default Wave1;