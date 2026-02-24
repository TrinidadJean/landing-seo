// lib/autoTheme.ts
export const autoThemeScript = `
  (function() {
    const hour = new Date().getHours();
    const isNightHour = hour >= 18 || hour < 6;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Noche por hora → dark siempre
    // Día por hora → respeta preferencia del sistema
    if (isNightHour || prefersDark) {
      document.documentElement.classList.add('dark');
    }
  })();
`;