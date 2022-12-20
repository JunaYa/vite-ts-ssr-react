import { Button, Space } from "antd";
import { Footer } from "~/components/Footer";
// import { useAppContext } from "~/context/Context";
import { useAuthContext } from "~/context/auth";

const Main = () => {
  // const { name, setName } = useAppContext();
  const { user, setUser } = useAuthContext();
  if (import.meta.env.SSR) {
    console.log("ssr"); // eslint-disable-line no-console
    setUser({ id: "1", name: "test SSR" });
    // setName("SSR");
  } else {
    // setName("CSR");
    setUser({ id: "1", name: "test CSR" });
  }

  return (
    <div className="flex bg-white-100 font-sans items-center flex-col justify-between h-screen">
      <div className="flex items-center flex-col pt-10">
        <p>Render mode {user.name}</p>
        <Space wrap>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
