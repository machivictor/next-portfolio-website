import { Moon, Sun } from "lucide-react";

import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme == "dark" ? "light" : "dark");

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="absolute h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
