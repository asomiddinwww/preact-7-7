import type { RootStore, DispatchType } from "../../redux";

import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

export const useReduxSelector: TypedUseSelectorHook<RootStore> = useSelector;
export const useReduxDispatch = () => useDispatch<DispatchType>();