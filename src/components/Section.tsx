import type { ReactElement, ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export default function Section({ children, className }: Props): ReactElement {
  return <section className={`py-20 lg:py-28 ${className ?? ""}`}>{children}</section>;
}


