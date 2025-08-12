"use client";

import { ReactNode, useEffect } from "react";
import styles from "./input.module.scss";
import { useRef } from "react";

export default function Input({
  children,
  name,
  error,
  ...props
}: {
  children: ReactNode;
  name: string;
  error: string | undefined;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log(inputRef);
  }, [inputRef]);
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.field} ${error && "warning-border warning"}`} onClick={() => inputRef.current?.focus()}>
        {children}
        <div className={`separator ${error && "warning-separator"}`}></div>
        <input ref={inputRef} type="text" name={name} {...props} />
      </div>
      {error && <span className="warning">{error}</span>}
    </div>
  );
}
