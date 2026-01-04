import { createContext } from "react";

export type SettingContext = { deviceWidth: number };

export const SettingContext = createContext<SettingContext>({ deviceWidth: 0 });
