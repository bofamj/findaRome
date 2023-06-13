"use client";
import axios from "axios";
import { useState } from "react";

export default function usePayment() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const creatNewPayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/checkout_sessions",
        {
          items: "my aitem",
          amount: 100,
        }
      );
      setLoading(false);
      setError(false);
      setSuccess(true);
      return response.data;
    } catch (error) {
      setLoading(false);

      setError(error.message);
    }
  };

  return { loading, error, creatNewPayment };
}
