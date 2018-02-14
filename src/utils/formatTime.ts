export const minToHHMM = (time: number) => {
  let sign = time < 0 ? '-' : '';
  let hour = Math.floor(Math.abs(time));
  let sec = Math.floor((Math.abs(time) * 60) % 60);
  return `${sign}${hour < 10 ? '0' : ''}${hour}h${sec < 10 ? '0' : ''}${sec}`;
};

export const getTimeFormat = (hours: string, minutes: number) => {
  let dec = minutes / 6 * 10;
  return parseFloat(`${parseInt(hours, 10)}.${dec < 10 ? '0' : ''}${dec}`);
};
