import { HTMLMotionProps, motion } from 'framer-motion'

export default function MeIllustrateHair({ ...props }: HTMLMotionProps<'div'>) {
  return (
    <motion.div {...props}>
      <svg width="185" height="82" viewBox="0 0 185 82" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <path
          d="M129.009 81.4272H27.502C27.602 77.7432 28.3847 72.5427 29.0021 69C31.5969 69.66 34.3424 71.5912 36.9946 71.7219C45.5725 72.1219 54.3651 70.1299 62.7977 67.8366C74.7025 64.6526 86.8793 60.7952 99.0561 62.3592C112.508 62.3592 124.508 70.5739 129.009 81.4272Z"
          fill="#F9AD2E"
        />
        <path
          d="M185 81.3931H128.548C122.024 71.3717 111.671 63.8437 99.7424 62.3251C87.5682 60.7611 75.3941 64.6184 63.4933 67.8024C55.0621 70.0957 46.2735 72.0877 37.6982 71.6877C35.0461 71.557 32.3926 71.1997 29.7977 70.5397C29.4244 70.4397 29.0523 70.3397 28.679 70.2384C29.4243 65.2357 30.7004 60.4317 32.3925 55.8304C43.1466 26.9531 71.0071 6.33575 103.599 6.33575C104.847 6.33575 106.08 6.36375 107.312 6.43575C108.546 6.36375 109.779 6.33575 111.027 6.33575C151.863 6.33575 185 39.9571 185 81.3931Z"
          fill="#151A20"
        />
        <path
          d="M39.849 70.3211C26.7948 72.5717 12.6779 66.4305 5.42407 55.3465C-1.82975 44.2638 -1.80574 28.8691 5.48275 17.8078C12.7699 6.7478 26.9068 0.650433 39.953 2.93977C52.4192 5.12777 64.8267 14.1425 76.5821 9.45181C81.3211 7.56114 85.004 3.65311 89.6523 1.54777C98.4062 -2.41756 109.926 1.53043 114.405 10.0344"
          fill="#151A20"
        />
      </svg>
    </motion.div>
  )
}
