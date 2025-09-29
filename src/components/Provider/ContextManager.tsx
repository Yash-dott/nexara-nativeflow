let _contextValue: any = null

export const setGlobalContext = (ctx: any) => {
  _contextValue = ctx;
};

export const getGlobalContext = () => {
  return _contextValue;
};