import { Navbar } from "../navbar";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);
interface LayoutProps {
  children?: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className={cx("layout-container")}>{children}</div>
    </>
  );
}
