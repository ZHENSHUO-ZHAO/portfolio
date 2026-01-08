import { createContext } from "react";

export type DeviceWidth = { pixel: number; rem: number };
export type SettingContext = { deviceWidth: DeviceWidth };

export const SettingContext = createContext<SettingContext>({
  deviceWidth: { pixel: 0, rem: 0 },
});
