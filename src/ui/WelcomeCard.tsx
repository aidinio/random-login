"use client"

import { selectIsLoggedIn } from "@/store/selectors";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function WelcomeCard() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="card">
      <h1>Welcome!</h1>
      {isLoggedIn ? (
        <Link className="button" href="/dashboard">
          Dashboard
        </Link>
      ) : (
        <Link className="button" href="/auth">
          Login
        </Link>
      )}
    </div>
  );
}
