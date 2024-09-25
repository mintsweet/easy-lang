import { createContext, useContext } from 'react';

export interface ITranslator {
  type: string;
  config: any;
}

export const Context = createContext<{
  translator: ITranslator | null;
  setTranslator: (val: ITranslator | null) => void;
}>({
  translator: null,
  setTranslator: () => {},
});

export const useTranslator = (): [ITranslator, (val: ITranslator) => void] => {
  const { translator, setTranslator } = useContext(Context);
  return [translator, setTranslator];
};
