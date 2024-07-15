export const scaleUp = () => {
  return {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
