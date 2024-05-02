import {useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, notification } from "antd";
import {
  FaCalendarAlt,
  FaPowerOff,
  FaThLarge,
  FaUserCircle,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthStore } from "../store/authStore";
const { Sider, Content } = Layout;

const DashboardLayout = ({children}) => {
  const { user, logOut } = useAuthStore();
  const [collapsed, setCollapsed] = useState(false);
  const [sideNavVisible, setSideNavVisible] = useState(false);

  const handleResize = () => {
    setCollapsed(window.innerWidth < 768);
    if (window.innerWidth < 768) {
      setSideNavVisible(false);
    } else {
      setSideNavVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleSideNav = () => {
    setSideNavVisible(!sideNavVisible);
  };

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
    
      router.push("/");
      notification.success({
        message: "Successfully Logout Done!",
        duration: 3,
      });
    } catch (error) {
      console.error("Logout failed", error);
      notification.error({
        message: "Logout Failed",
        description: error.message || "Something went wrong!",
        duration: 3,
      });
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      logOut();
      router("/");
    }
  }, [logOut, router]);


  return (
    <Layout >
      <style>{`
        .ant-menu-item-selected {
          background: linear-gradient(135deg, #2b59ff 0%, #bb2bff 100%);
        }
      `}</style>

      {sideNavVisible && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="text-white"
          style={{ position: "sticky", top: 0, height: "100vh" }}
        >
          <Menu
            theme="dark"
            mode="vertical"
            defaultSelectedKeys={["1"]}
            className="text-white "
          >
            <Menu.Item key="1" icon={<FaThLarge />}>
              <Link href="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FaUserCircle />}>
              <Link href="/dashboard/users">Users</Link>
            </Menu.Item>

            <Menu.Item key="3" icon={<FaCalendarAlt />}>
              <Link href="/dashboard/task">Todo</Link>
            </Menu.Item>

            <Menu.Item key="4" icon={<FaUserCircle />}>
              <Link href="/dashboard/team">Team</Link>
            </Menu.Item>

            <Menu.Item key="5" icon={<FaPowerOff />}>
              <Link onClick={() => handleLogout()} href="/">
                Logout
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      )}

      <Layout className="bg-transparent">
        <div
          style={{
            padding: 0,
            position: "sticky",
            top: 0,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => {
              toggleCollapsed();
              toggleSideNav();
            }}
            style={{
              fontSize: "16px",
              color: "black",
              width: 64,
              height: 64,
            }}
          />
        </div>

        <Content className={`${collapsed ? "" : "md:ml-10"}`}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
