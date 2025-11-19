import Flex from "./Flex";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// CVA for Stack component
const stackStyles = cva("", {
  variants: {
    // alignment (cross-axis)
    align: {
      stretch: "items-stretch",
      center: "items-center",
      start: "items-start",
      end: "items-end",
    },
    // justification (main-axis)
    justify: {
      center: "justify-center",
      start: "justify-start",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    },
  },
  defaultVariants: {
    align: "stretch",
    justify: "center",
  },
});

export default function Stack({
  align = "stretch",
  justify = "center",
  className = "",
  children,
  ...props
}) {
  return (
    <Flex
      direction="column"
      wrap="nowrap"
      className={cn(stackStyles({ align, justify }), className)}
      {...props}
    >
      {children}
    </Flex>
  );
}