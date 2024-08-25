import ActionButtons from "./actionbtns";
import Logo from "./logo";
import { NavigationMenuBar } from "./navbar";

const Nav = () => {
  return (
    <div className="flex justify-between items-center px-10 border-b h-40">
      <Logo />
      <NavigationMenuBar />
      <ActionButtons />
    </div>
  );
};

export default Nav;
