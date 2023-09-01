import Sidebar from "./Sidebar";

const BaseLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout__main-content h-full overflow-scroll">{children}</main>
    </div>
  );
};

export default BaseLayout;
