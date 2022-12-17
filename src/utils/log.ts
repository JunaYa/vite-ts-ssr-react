export const logInfo = (...arg: any): void => {
  let msg = "";
  for (const a of arg) msg += ` ${a}`;

  console.log(msg); // eslint-disable-line no-console
};
