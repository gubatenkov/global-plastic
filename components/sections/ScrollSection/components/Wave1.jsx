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
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        opacity="0.5"
        d="M1 449.25C359.318 212.876 1055 667.749 1486.5 398.749C1654.5 284.999 1896.6 400.399 2061 471.999C2088.5 484.333 2192 504.5 2286 449.5"
        stroke="white"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        opacity="0.5"
        d="M2286 449.5C2403.5 383 2493.5 548 2746.5 398.748C2914.5 284.999 3156.6 400.399 3321 471.999C3348.5 484.332 3438 483.5 3498 449.5"
        stroke="white"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        opacity="0.5"
        d="M3498 449.5C3615.5 383 3705.5 548 3958.5 398.748C4126.5 284.999 4368.6 400.399 4533 471.999C4560.5 484.332 4622.8 511.099 4652 519.499"
        stroke="white"
      />
    </motion.svg>
  );
};

export default Wave1;
