// Must be a react file so button can be used in other react files
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary";
  to?: string;
  target?: "_blank" | undefined;
  className?: string;
}
const Button = ({
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
      (className ? className : "") +
      //@ts-ignore
      (color === "primary"
        ? " bg-primary text-dark"
        : " border border-primary text-primary") +
      " font-semibold inline-block px-10 py-5 text-lg leading-none cursor-pointer"
    }
  >
    {children}
  </a>
);

export default Button;
