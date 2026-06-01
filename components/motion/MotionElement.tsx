"use client";
import type { ComponentType } from "react";
import { motion, type MotionProps } from "framer-motion";

type MotionElementProps<T extends React.ElementType = "div"> = {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof MotionProps> &
  MotionProps;

const MotionElement = <T extends React.ElementType = "div">({
  as = "div" as T,
  ...props
}: MotionElementProps<T>) => {
  const motionElements = motion as unknown as Record<string, ComponentType<unknown>>;
  const Component = motionElements[as as string] ?? motion.div;
  return <Component {...props} />;
};

export default MotionElement;
