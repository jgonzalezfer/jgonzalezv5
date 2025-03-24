import { useTheme } from "../hooks/useTheme";

const GoogleLogo = () => {
  const { darkMode } = useTheme();

  return (
    <div className="flex justify-center py-4">
      <h1 className="text-8xl font-normal" aria-label="joel">
        <span className={`${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>J</span>
        <span className={`${darkMode ? 'text-red-400' : 'text-red-500'}`}>a</span>
        <span className={`${darkMode ? 'text-yellow-300' : 'text-yellow-500'}`}>v</span>
        <span className={`${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>i</span>
        <span className={`${darkMode ? 'text-green-400' : 'text-green-500'}`}>e</span>
        <span className={`${darkMode ? 'text-red-400' : 'text-red-500'}`}>r</span>
      </h1>
    </div>
  );
};

export default GoogleLogo;
