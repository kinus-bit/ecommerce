import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Button } from './ui/button';

export default function Navigation() {
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-blue-600">MyStore</h1>
           
        <div className="flex space-x-3">
          <Button onClick={logout}>Logout</Button>
        </div>
      </div>
    </nav>
  );
}
