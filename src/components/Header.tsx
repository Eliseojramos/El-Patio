import { FaDumbbell } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
export function Header() {
  return (
    <header className="w-100% h-11 bg-green-500">
      <NavigationMenu className="h-100% m-0 w-100%">
        <NavigationMenuList className="h-11 m-0 w-100% gap-0">
          <NavigationMenuLink
            href="#"
            className="w-40 h-11  hover:bg-green-600 flex justify-center "
          >
            <div className="w-100% h-11 flex m-0 flex-row gap-1 align-center items-center">
              <FaDumbbell
                style={{ color: "black", height: "30px", width: "50px" }}
              />
              <p className="">El Patio GYM</p>
            </div>
          </NavigationMenuLink>
          <NavigationMenuLink
            href="#"
            className="w-40 h-11 hover:bg-green-600 centered flex justify-center items-center"
          >
            Sobre nosotros
          </NavigationMenuLink>
          <NavigationMenuLink
            href="#"
            className="w-40 h-11 hover:bg-green-600 centered flex justify-center items-center"
          >
            quiero sumarme!
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
