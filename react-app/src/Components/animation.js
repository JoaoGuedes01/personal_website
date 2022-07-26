export const anim = {
  appearScroll: {
    initial: { opacity: 0, y: "50%" },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    viewport_details: { once: true, amount: 0.2 },
  },
  pageTransition: {
    initial: { y: "20%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-20%", opacity: 0 },
    transition: { type: "spring", duration: 0.5 },
  },
};
