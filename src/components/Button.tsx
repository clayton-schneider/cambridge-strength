// Must be a react file so button can be used in other react files
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary";
  to?: string;
  target?: "_blank" | undefined;
  className?: string;
}
const PrimaryBtn = ({
  children,
  to,
  target,
  color = "primary",
  className = "",
}: Props) => (
  <a
    target={target}
    href={to}
    className={
      className +
      (color === "primary" ? "bg-primary text-darker" : "bg-red-50") +
      " inline-block px-10 py-3 rounded-full text-lg  cursor-pointer"
    }
  >
    {children}
  </a>
);

export default PrimaryBtn;
