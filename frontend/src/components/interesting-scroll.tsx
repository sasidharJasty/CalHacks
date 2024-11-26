"use client";
import { useTransform, MotionValue, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import logo from "../Files/CalHacksLogo.png";

import Image from "next/image";

const InterestingScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    ["60deg", "75deg", "90deg"]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.65, 0.8, 0.9, 1],
    [1, 1, 0.95, 1.25, 1.75]
  );
  const logoScale = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 1]);

  return (
    <div ref={targetRef} className="relative z-0 h-[450vh] bg-#0a0a0a">
      <div className="sticky top-0 h-screen bg-orange">
        <Trippy rotate={rotate} scale={scale} />
        <OverlayLogo scale={logoScale} />
      </div>
    </div>
  );
};

const NUM_SECTIONS = 25;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;

const generateSections = (
  count: number,
  color: string,
  rotate: MotionValue,
  scale: MotionValue
) => {
  if (count >= NUM_SECTIONS) {
    return null; // Return null instead of an empty fragment
  }

  const nextColor = color === "#0a0a0a" ? "orange" : "#0a0a0a";

  return (
    <Section rotate={rotate} scale={scale} background={color} key={count}>
      {generateSections(
        count + 1,
        nextColor,
        (rotate = rotate),
        (scale = scale)
      )}
    </Section>
  );
};

const Trippy = ({
  rotate,
  scale,
}: {
  rotate: MotionValue;
  scale: MotionValue;
}) => {
  return (
    <motion.div className="absolute inset-0 overflow-hidden bg-#0a0a0a">
      {generateSections(0, "#0a0a0a", rotate, scale)}
    </motion.div>
  );
};

const Section = ({
  background,
  children,
  rotate,
  scale,
}: {
  background: string;
  rotate: MotionValue;
  scale: MotionValue;
  children?: React.ReactNode; // Use React.ReactNode for better compatibility
}) => {
  return (
    <motion.div
      className="relative h-full w-full origin-center"
      style={{
        background,
        rotate,
        scale,
        padding: PADDING,
      }}
    >
      {children}
    </motion.div>
  );
};

const OverlayLogo = ({ scale }: { scale: MotionValue }) => {
  return (
    <motion.div
      style={{ scale }}
      className="pointer-events-none absolute inset-0 z-[5] grid place-content-center"
    >
      <Image alt={"Logo"} src={logo} className="mix-blend-difference"></Image>
    </motion.div>
  );
};

export default InterestingScroll;
