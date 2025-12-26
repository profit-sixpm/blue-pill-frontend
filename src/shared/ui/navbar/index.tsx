import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { Link, useLocation, useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";
import Logo from "@/assets/logo.svg?react";
import Home from "@/assets/home.svg?react";
import MyReport from "@/assets/myReport.svg?react";
import Notification from "@/assets/notification.svg?react";
import Point from "@/assets/point.svg?react";
import Profile from "@/assets/profile.svg?react";
import { useAuthStore } from "@/entities/auth";
import { usePointStore } from "@/shared/store";
import { Alarm } from "./alarm";

const cx = classNames.bind(styles);

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const point = usePointStore((state) => state.point);

  const [isAlarmOpen, setIsAlarmOpen] = useState(false);
  const alarmRef = useRef<HTMLDivElement | null>(null);

  const isActive = (path: string) => location.pathname === path;

  /** 바깥 클릭 시 알림 닫기 */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (alarmRef.current && !alarmRef.current.contains(e.target as Node)) {
        setIsAlarmOpen(false);
      }
    };

    if (isAlarmOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAlarmOpen]);

  return (
    <div className={cx("navbar")}>
      <div className={cx("navbar__top")}>
        <Logo />

        <div className={cx("navbar__top__menu")}>
          <Link to="/" style={{ color: isActive("/") ? "#5978FF" : "#D7DBDD" }}>
            <Home />
          </Link>

          <Link
            to="/blue-detail"
            style={{
              color: isActive("/blue-detail") ? "#5978FF" : "#D7DBDD",
            }}
          >
            <MyReport />
          </Link>

          {/* 🔔 Notification */}
          <button
            type="button"
            onClick={() => setIsAlarmOpen((prev) => !prev)}
            className={cx("navbar__notification")}
          >
            <Notification color={isAlarmOpen ? "#5978FF" : "#D7DBDD"} />
          </button>

          {isAlarmOpen && (
            <div ref={alarmRef} className={cx("navbar__alarm")}>
              <Alarm />
            </div>
          )}
        </div>
      </div>

      <div className={cx("navbar__bottom")}>
        {isAuthenticated && (
          <button className={cx("navbar__bottom__point-button")}>
            <Point />
            <span>{point}</span>
          </button>
        )}

        <Profile onClick={() => navigate("/login")} />
      </div>
    </div>
  );
}
