export function useNewDate(date) {
  const newDate = new Date(date).toLocaleDateString('uk', {});
  return newDate;
}
export function useNewDateLocal(date) {
  const newDate = new Date(date).toLocaleDateString('uk', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return newDate;
}

export function useNewDateYear(date) {
  const newDate = new Date(date).getFullYear();
  return newDate;
}
export function useRunTime(runtime) {
  const h = Math.floor(runtime / 60);
  const m = runtime - h * 60;

  return `${h}h${m}m`;
}
