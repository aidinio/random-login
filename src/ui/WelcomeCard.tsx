"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectIsLoggedIn, selectName } from "@/store/selectors";
import { loadData } from "@/store/slices/user";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function WelcomeCard() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectName);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadData());
  });
  return (
    <div className="card">
      <h1>
        {isLoggedIn ? `Welcome, ${userName}!` : "You are not authenticated!"}
      </h1>
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
