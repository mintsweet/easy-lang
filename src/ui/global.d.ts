declare module '*.svg' {
  const content: any;
  export default content;
}

interface ITranslator {
  type: string;
  config: any;
}
