import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HeadingTextProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const HeadingText = ({ children, level = 1, className }: HeadingTextProps) => {
  const sizeMap: Record<number, "xs" | "sm" | "md" | "lg" | "xl"> = {
    1: "xl",
    2: "lg",
    3: "md",
    4: "sm",
    5: "xs",
    6: "xs",
  };

  return (
    <Heading as={`h${level}`} size={sizeMap[level]} className={className}>
      {children}
    </Heading>
  );
};

export default HeadingText;
