import React, { createContext, useContext, useState, useCallback } from "react";
import Alert from "../home/Components/Alert";

const AlertContext = createContext();

// Custom hook to use alerts
export const useAlerts = () => useContext(AlertContext);

const AlertsProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  // Add a new alert with a unique id
  const addAlert = useCallback(({ title, message }) => {
    const id = Date.now();
    setAlerts((prev) => [...prev, { id, title, message }]);
  }, []);

  // Remove an alert by its id
  const removeAlert = useCallback((id) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  }, []);

  return (
    <AlertContext.Provider value={{ addAlert, removeAlert, alerts }}>
      {children}
      {/* Container for alerts, stacked from bottom-right */}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            onClose={() => removeAlert(alert.id)}
            title={alert.title}
            message={alert.message}
          />
        ))}
      </div>
    </AlertContext.Provider>
  );
};

export default AlertsProvider;
