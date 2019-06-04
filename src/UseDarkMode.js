import { useEffect, useState } from "react";

export default () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const localTheme = localStorage.getItem("mode");
    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.setAttribute("data-theme", localTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("mode", "light");
      return document.documentElement.setAttribute("data-theme", "light");
    }
    setTheme("dark");
    localStorage.setItem("mode", "dark");
    return document.documentElement.setAttribute("data-theme", "dark");
  };

  return {
    theme,
    toggleTheme
  };
};
