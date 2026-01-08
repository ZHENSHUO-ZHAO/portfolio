import { createContext } from "react";
import type { LayoutData } from "./carouselTypes";

export const LayoutContext = createContext<LayoutData<unknown> | null>(null);
