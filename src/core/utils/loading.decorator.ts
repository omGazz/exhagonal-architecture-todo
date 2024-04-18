import { WritableSignal } from "@angular/core";

export function Loading(propertyName: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const isPending: WritableSignal<boolean> = (this as any)[propertyName];

      isPending.set(true);

      try {
        const result = originalMethod.apply(this, args);
        
        //Simulation of a 2 seconds delay
        setTimeout(() => {
          isPending.set(false);
        }, 2000);

        return result;
      } catch (error) {
        console.log(`${propertyKey} failed with error: ${error}`);
        isPending.set(false);
        throw error;
      }
    };

    return descriptor;
  };
}
