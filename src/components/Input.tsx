"use client";

import { ReactNode, RefObject, useEffect } from "react";
import styles from "./input.module.scss";
import { useRef } from "react";

export default function Input({
  children,
  name,
  error,
  ref,
  ...props
}: {
  children: ReactNode;
  name: string;
  ref: (el: HTMLInputElement) => void;
  error: string | undefined;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      <div className={`${styles.field} ${error && "warning-border warning"}`}>
        {children}
        <div className={`separator ${error && "warning-separator"}`}></div>
        <input
          type="text"
          name={name}
          {...props}
          ref={(element) => {
            inputRef.current = element;
            if (element) ref(element);
          }}
        />
      </div>
      {error && <span className="warning">{error}</span>}
    </div>
  );
}
