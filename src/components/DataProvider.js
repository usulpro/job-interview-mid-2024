import React from 'react';

export const userContext = React.createContext({});

const DataProvider = ({ data, children }) => {
  return <userContext.Provider value={data}>{children}</userContext.Provider>;
};

export default DataProvider;
