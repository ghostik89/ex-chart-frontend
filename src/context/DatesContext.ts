import {createContext, useContext} from "react";

type DatesContextType = {
    dateRange: string,
    fromDate: Date,
    toDate: Date,
    changeRangeType: Function,
    changeStartDate: Function
}

export const DateContext = createContext<DatesContextType>({} as DatesContextType)
export const DateProvider = DateContext.Provider
export const useDateRange = ():DatesContextType => useContext(DateContext)