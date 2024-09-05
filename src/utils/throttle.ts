export function throttle<T extends (...args: any[]) => void>(func: T, limit: number) {
  let lastFunc: NodeJS.Timeout | undefined;
  let lastRan: number | undefined;

  return function (this: any, ...args: Parameters<T>) {
    const context = this;

    if (lastRan === undefined) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        () => {
          if (Date.now() - (lastRan as number) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - (lastRan as number))
      );
    }
  };
}
