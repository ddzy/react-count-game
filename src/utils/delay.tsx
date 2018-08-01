
export default function delay(time: number): Promise<(resolve?: () => {}, reject?: () => {}) => {}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}