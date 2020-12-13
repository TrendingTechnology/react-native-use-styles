type StyleObject = {
  [key: string]: unknown;
};

type Computed = (dependencies: Array<any>) => StyleObject;

export function setSeparator(newSeparator: string): void;

export function GlobalUse(rawStyle: string, namespace: string): Computed;

type tagStyles = (strings: string[], expressions: string[]) => StyleObject;

export function useGlobalStyles(
  nameSpace: string,
  dependencies: Array<any>,
): tagStyles;

export function GlobalStyles(definition: StyleObject, namespace: string): void;

type useStyles = {
  (): (dependencies: Array<any>) => tagStyles;
  namespace: string;
};

export function Styles(
  definition: StyleObject,
  namespace: string,
): useStyles;

export function getConstant(name: string, namespace: useStyles | string): any;
