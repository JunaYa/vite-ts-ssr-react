import { Footer } from "~/components/Footer";
import { useAppContext } from "~/context/Context";

const Main = () => {
  const { name, setName } = useAppContext();
  if (import.meta.env.SSR) setName("SSR");
  else setName("CSR");

  return (
    <div className="flex bg-white-100 font-sans items-center flex-col justify-between h-screen">
      <div className="flex items-center flex-col pt-10">
        <p>Render mode {name}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
