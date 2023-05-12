"use client";

import { useState, useEffect } from "react";

export default function useFetchStudent() {
  const [isLoadingStudent, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  const _getStudents = async () => {
    const response = await fetch("/api/student");
    const data = await response.json();
    setStudents(data);
    setLoading(false);
  };

  useEffect(() => {
    _getStudents();
  }, []);

  return [isLoadingStudent, students];
}
