import { Content, Sidebar } from "./index";

const MainView = () => {
  return (
    <div className="grid grid-cols-5 gap-x-6 container mx-auto w-screen h-screen py-6">
      <Sidebar />
      <Content />
    </div>
  );
};

export default MainView;
