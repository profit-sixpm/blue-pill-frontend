import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);
import Logo from "@/assets/logo.svg?react";
import Home from "@/assets/home.svg?react";
import MyReport from "@/assets/myReport.svg?react";
import Notification from "@/assets/notification.svg?react";
import Point from "@/assets/point.svg?react";
import Profile from "@/assets/profile.svg?react";

export function Navbar() {
  return (
    <div className={cx("navbar")}>
      <div className={cx("navbar__top")}>
        <Logo />
        <div className={cx("navbar__top__menu")}>
          <Home />
          <MyReport />
          <Notification />
        </div>
      </div>
      <div className={cx("navbar__bottom")}>
        <button className={cx("navbar__bottom__point-button")}>
          <Point />
          <span>8</span>
        </button>
        <Profile />
      </div>
    </div>
  );
}
