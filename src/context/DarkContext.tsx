import { createContext, useState, ReactNode } from "react";

// 1. Interfeysni aniqlash
interface ThemeContextProps {
  dark: boolean;
  handleClick: () => void;
}

// 2. Kontekstni yaratishda boshlang'ich qiymat null emas, balki interfeys turi bo‘lishi kerak
export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

interface DarkThemeProps {
  children: ReactNode;
}

export const DarkTheme = ({ children }: DarkThemeProps) => {
  const [dark, setDark] = useState<boolean>(false);

  const handleClick = () => {
    setDark(!dark);
  };

  return (
    // 3. Context.Provider ga interfeysdagi qiymatlarni uzatamiz
    <ThemeContext.Provider value={{ dark, handleClick }}>
      {children}
    </ThemeContext.Provider>
  );
};
