import { useState, useEffect } from "react";

export default function useFetchStudent() {
  const [isLoadingBank, setLoading] = useState(true);
  const [banks, setBanks] = useState([]);

  const _getBank = async () => {
    const response = await fetch("/api/bank");
    const data = await response.json();
    setBanks(data);
    setLoading(false);
  };

  useEffect(() => {
    _getBank();
  }, []);

  return [isLoadingBank, banks];
}
