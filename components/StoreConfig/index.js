import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const StoreConfigContext = createContext([{}, () => {}]);

/**
 * @param { string } value
 * @returns { boolean }
 */
export const isJson = (value) => {
  if (typeof value !== "string") {
    return false;
  }

  return /^\[.*\]$/.test(value) || /^\{.*\}$/.test(value);
};

/**
 * @typedef { import('lib/types').Config } Config
 * @typedef { import('lib/types').StoreConfig } StoreConfig
 */

/**
 * @param {{
 *  children: any
 * }} props
 */
export const StoreConfigProvider = ({ children }) => {
  const [state, setState] = useState({});

  const setup = useCallback(
    /** @param { Config[] } config */ (config) => {
      const storeConfig = config.reduce((storeConfig, { name, value }) => {
        /** @type { string | Record<string, any> } */
        let parsedValue = value;

        if (isJson(value)) {
          // This is to supress errors if the JSON is invalid
          try {
            parsedValue = JSON.parse(value);
          } catch (e) {
            console.error(
              "[store-config:setup] invalid JSON for",
              name,
              ", error:",
              e
            );
          }
        }

        return {
          ...storeConfig,
          [name]: parsedValue,
        };
      }, {});

      setState(storeConfig);
    },
    []
  );

  const context = useMemo(() => [state, setup], [state, setup]);

  return (
    <StoreConfigContext.Provider value={context}>
      {children}
    </StoreConfigContext.Provider>
  );
};

export const useStoreConfig = () => {
  /**
   * @type {[
   *    StoreConfig,
   *    any
   * ]} context
   */
  // @ts-ignore
  const context = useContext(StoreConfigContext);

  return context[0];
};

export const useSetupStoreConfig = () => {
  /**
   * @type {[
   *    any,
   *    (config: Config[]) => void
   * ]} context
   */
  // @ts-ignore
  const context = useContext(StoreConfigContext);

  return context[1];
};
