"use client"
import { createContext, useContext, useState } from "react";

export const ReportContext = createContext(null);

const getInitialState = () => {
    const reports = typeof window !== "undefined" ? window.localStorage.getItem("reports") : null;
    return reports ? JSON.parse(reports) : [];
}

export const ReportProvider = ({ children }) => {
    const [data, setData] = useState(getInitialState);
    const [selectedType, setSelectedType] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("unreviewed");
    return (
        <ReportContext.Provider value={{ data, setData, selectedType, setSelectedType, selectedStatus, setSelectedStatus }}>
            {children}
        </ReportContext.Provider>
    );
}

export const useReports = () => useContext(ReportContext);