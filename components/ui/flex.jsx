import { cva } from "class-variance-authority";
import { cn } from '@/lib/utils';
import Box from "./box";

const flexStyles = cva("flex", {
  variants: {
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
    direction: {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    },
    wrap: {
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
      "wrap-reverse": "flex-wrap-reverse",
    },
  },
  defaultVariants: {
    justify: "start",
    align: "start",
    direction: "row",
    wrap: "nowrap",
  },
});

export default function Flex({
  justify,
  align,
  direction,
  wrap,
  className = "",
  children,
  ...props
}) {
  return (
    <Box className={cn(flexStyles({ justify, align, direction, wrap }), className)} {...props}>
      {children}
    </Box>
  );
}
