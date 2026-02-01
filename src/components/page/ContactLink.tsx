import type { ReactNode } from "react";
import type { Contact } from "../../contexts/pageContext";

export default function ContactLink({
  data,
  className,
  children,
}: {
  data: Contact;
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href={data.href}
      target={data.target}
      rel={data.rel}
      download={data.download}
      className={className}
    >
      {children}
    </a>
  );
}
