import { useState, useEffect } from "react";

export default function useFetchTransaction() {
  const [isLoadingTransaction, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  const _getTransactons = async () => {
    const response = await fetch("/api/payment", {
      cache: "no-store",
    });
    const data = await response.json();
    setTransactions(data);
    setLoading(false);
  };

  useEffect(() => {
    _getTransactons();
  }, []);

  return [isLoadingTransaction, transactions];
}
