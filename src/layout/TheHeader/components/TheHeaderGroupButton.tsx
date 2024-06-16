import { cn } from '@/libs';
import { useEffect, useState } from 'react';
import { PiBellSimple, PiCalendarDots, PiMoon, PiSun } from 'react-icons/pi';
import { TheHeaderButton } from './TheHeaderButton';

interface TheHeaderGroupButtonProps {
  className?: string;
}

export const TheHeaderGroupButton: React.FC<TheHeaderGroupButtonProps> = ({
  className,
}) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || 'light',
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={cn('flex gap-x-2', className)}>
      <TheHeaderButton
        iconName={PiBellSimple}
        size={18}
      />
      <TheHeaderButton
        iconName={PiCalendarDots}
        size={18}
      />
      <TheHeaderButton
        iconName={theme === 'light' ? PiSun : PiMoon}
        size={18}
        onClick={toggleTheme}
      />
    </div>
  );
};
