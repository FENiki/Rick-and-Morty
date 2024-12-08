import { createContext, useState } from "react";

export default function ToggleTheme({ children }) {
  const [theme, setTheme] = useState("light");
  const ThemeContext = createContext();
  return (
    <div>
      <label>
        {children}
        <input
          checked={theme == "dark"}
          onChange={() =>
            setTheme((event) => (event.target.checked ? "dark" : "light"))
          }
        />
      </label>
    </div>
  );
}
