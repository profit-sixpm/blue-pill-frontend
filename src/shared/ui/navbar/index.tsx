import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { Link, useLocation, useNavigate } from "react-router";
const cx = classNames.bind(styles);
import Logo from "@/assets/logo.svg?react";
import Home from "@/assets/home.svg?react";
import MyReport from "@/assets/myReport.svg?react";
import Notification from "@/assets/notification.svg?react";
import Point from "@/assets/point.svg?react";
import Profile from "@/assets/profile.svg?react";
import { useAuthStore } from "@/entities/auth";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
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
            style={{ color: isActive("/blue-detail") ? "#5978FF" : "#D7DBDD" }}
          >
            <MyReport />
          </Link>
          <Notification />
        </div>
      </div>

      <div className={cx("navbar__bottom")}>
        {isAuthenticated && (
          <button className={cx("navbar__bottom__point-button")}>
            <Point />
            <span>8</span>
          </button>
        )}

        <Profile onClick={() => navigate("/login")} />
      </div>
    </div>
  );
}
