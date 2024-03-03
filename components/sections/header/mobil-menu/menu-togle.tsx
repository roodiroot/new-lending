import { CustomValueType, MotionValue, motion } from 'framer-motion';

const Path = (
  props:
    | CustomValueType
    | MotionValue<number>
    | MotionValue<string>
    | MotionValue<any>
    | React.ClipboardEventHandler<SVGPathElement>
    | undefined
    | any
) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button className="relative z-[51]" onClick={toggle}>
    <svg width="18" height="18" viewBox="0 0 18 18">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);
