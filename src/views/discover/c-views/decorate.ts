// decorators.ts
import { debounce } from 'lodash';
interface DebounceOptions {
  wait?: number; //延迟时间
  leading?: boolean; //是否立即执行
  trailing?: boolean; //是否在结束后执行
}
export function Debounced({ wait = 1000, leading = false, trailing = true }: DebounceOptions = {}) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    //将原来方法包装为防抖后的函数
    descriptor.value = debounce(originalMethod, wait, {
      leading,
      trailing
    });
    return descriptor;
  };
}
export function requireRole(requiredRole: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const userRole = args[1]; // 假设第二个参数为用户角色

      if (userRole !== requiredRole) {
        throw new Error(`Access denied. ${requiredRole} role required.`);
      }
      return originalMethod.apply(this, args);
    };
  };
}
