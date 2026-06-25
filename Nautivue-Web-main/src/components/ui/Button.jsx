import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-teal-500 hover:bg-teal-400 text-ocean-900 font-semibold',
  secondary: 'bg-ocean-700 hover:bg-ocean-600 text-white border border-ocean-600',
  outline: 'bg-transparent hover:bg-ocean-800 text-teal-400 border border-teal-400/50 hover:border-teal-400',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  onClick,
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl transition-colors duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button {...motionProps} onClick={onClick} className={classes} {...props}>
      {children}
    </motion.button>
  );
}
