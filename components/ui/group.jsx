import Flex from "./Flex";
import { cva } from "class-variance-authority";
import { cn } from '@/lib/utils';

// CVA for Group component
const groupStyles = cva("", {
  variants: {
    grow: {
      true: "flex-grow",
      false: "",
    },
  },
  defaultVariants: {
    grow: false,
  },
});

export default function Group({
  justify = "start",
  grow = false,
  className = "",
  children,
  ...props
}) {
  return (
    <Flex
      justify={justify}
      align="center"
      direction="row"
      wrap="nowrap"
      className={cn(groupStyles({ grow }), className)}
      {...props}
    >
      {children}
    </Flex>
  );
}
