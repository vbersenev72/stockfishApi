import { ServerError, TransparentErrorWithCode } from "../errors/customErrors";

export function defaultUnexpectedError(message?: string) {
  return function actualDecorator(
    originalMethod: any,
    context: ClassMethodDecoratorContext
  ) {
    const methodName = String(context.name);

    async function replacementMethod(this: any, ...args: any[]) {
      try {
        return await originalMethod(...args);
      } catch (error) {
        console.error(error);
        if (error instanceof TransparentErrorWithCode) throw error;
        else
          throw new ServerError(
            message
              ? `Unexpected server error: ${message}`
              : `Unexpected server error in ${methodName}`
          );
      }
    }

    return replacementMethod;
  };
}
