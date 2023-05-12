import { useState, useEffect } from "react";

export default function useFetchTransaction() {
  const [isLoadingTransaction, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  const _getTransactons = async () => {
    const response = await fetch("/api/payment", {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
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
