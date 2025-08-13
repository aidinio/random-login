"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectName } from "@/store/selectors";
import { redirect } from "next/navigation";
import styles from "./dashboard.module.scss";
import { loadData, logout } from "@/store/slices/user";
import { MouseEventHandler, useEffect, useState } from "react";

function useUserData() {
  const [initialized, setInitialized] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadData());
    setInitialized(true);
  }, []);
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn && initialized) {
      redirect("/auth");
    }
  }, [isLoggedIn, initialized]);
  const data = useAppSelector((state) => state.user.userData);
  const name = useAppSelector(selectName);
  const picture = useAppSelector(
    (state) => state.user.userData?.picture?.large
  );
  const handleLogout: MouseEventHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return { handleLogout, picture, name };
}

export default function Dashboard() {
  const { handleLogout, picture, name } = useUserData();
  const rawData = useAppSelector((state) => state.user);
  return (
    <div className={styles["dashboard-card"]}>
      <div className="card">
        <div className={`${styles["profile-picture"]}`}>
          <img
            src={picture}
            alt=""
            className={styles["profile-picture-image"]}
          />
        </div>
        <h1>Hi, {name}!</h1>
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div>
        <h3>Your raw data:</h3>
        <pre className={styles["data"]}>{JSON.stringify(rawData)}</pre>
      </div>
    </div>
  );
}
