export const formatElapsedTime = (date) => {
    const elapsed = Date.now() - date.getTime();
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;
  
    if (elapsed < minute) {
      return 'Agora mesmo';
    } else if (elapsed < hour) {
      const minutes = Math.floor(elapsed / minute);
      return `${minutes} minuto${minutes > 1 ? 's' : ''} atrás`;
    } else if (elapsed < day) {
      const hours = Math.floor(elapsed / hour);
      return `${hours} hora${hours > 1 ? 's' : ''} atrás`;
    } else if (elapsed < week) {
      const days = Math.floor(elapsed / day);
      return `${days} dia${days > 1 ? 's' : ''} atrás`;
    } else if (elapsed < month) {
      const weeks = Math.floor(elapsed / week);
      return `${weeks} semana${weeks > 1 ? 's' : ''} atrás`;
    } else if (elapsed < year) {
      const months = Math.floor(elapsed / month);
      return `${months} mês${months > 1 ? 'es' : ''} atrás`;
    } else {
      const years = Math.floor(elapsed / year);
      return `${years} ano${years > 1 ? 's' : ''} atrás`;
    }
  }
  