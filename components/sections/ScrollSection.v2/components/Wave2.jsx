import { motion } from 'framer-motion';

const Wave2 = ({ className = '', ...restProps }) => {
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
        opacity="0.15"
        d="M1.00075 481.893C423.768 199.366 1133.5 631.987 1484.16 384.388C1578.83 331.093 1778.73 323.693 2058.33 512.093C2082.83 529.093 2163 556.5 2286 482"
        stroke="white"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        opacity="0.15"
        d="M2286 482C2478.5 375 2393.5 631.987 2744.16 384.387C2838.83 331.093 3038.73 323.693 3318.33 512.093C3342.83 529.093 3401 535.5 3498 482"
        stroke="white"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        opacity="0.15"
        d="M3498 482C3690.5 375 3605.5 631.987 3956.16 384.387C4050.83 331.093 4250.73 323.693 4530.33 512.093C4554.83 529.093 4613.53 567.493 4652.33 585.093"
        stroke="white"
      />
    </motion.svg>
  );
};

export default Wave2;
