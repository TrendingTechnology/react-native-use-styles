type StyleObject = {
  [key: string]: unknown;
};

type uniqueSpace = symbol | string;

type Computed = (dependencies: Array<any>) => StyleObject;

type tagStyles = (strings: string[], expressions: string[]) => StyleObject;

type useStyles = {
  (): (dependencies: Array<any>) => tagStyles;
  namespace: uniqueSpace;
};

export function useGlobalStyles(
  namespace: uniqueSpace,
  dependencies: Array<any>,
): tagStyles;

export function GlobalUse(rawStyle: string, namespace: uniqueSpace): Computed;

export function GlobalStyles(definition: StyleObject, namespace: uniqueSpace): void;

export function Styles(
  definition: StyleObject,
  namespace: uniqueSpace,
): useStyles;

export function getConstant(name: string, namespace: useStyles | uniqueSpace): any;

export function setSeparator(newSeparator: string): void;
