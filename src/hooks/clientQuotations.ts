import { useState, useEffect } from "react";
import axios from "axios";
import { IMotorInsurance } from "src/interfaces/quotation";

const useClientQuotations = () => {
  const [quotations, setQuotations] = useState<IMotorInsurance[] | []>([]);
  const [clientQuotations, setClientQuotations] = useState<IMotorInsurance[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuotations = async () => {
      const token = localStorage.getItem('access_token');
      try {
        const response = await axios.get<IMotorInsurance[]>(
          `http://localhost:8000/quotation/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        setQuotations(response.data);
      } catch (err) {
        setError("Failed to fetch client quotations.");
      } finally {
        setLoading(false);
      }
    }
    const fetchAllQuotations = async () => {
      const token = localStorage.getItem('access_token');
      try {
        const response = await axios.get<IMotorInsurance[]>(
          `http://localhost:8000/quotation/list/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        setClientQuotations(response.data);
      } catch (err) {
        console.log(err)
        setError("Failed to fetch all client quotations.");
      } finally {
        setLoading(false);
      }
    }
    fetchAllQuotations();
    fetchQuotations();
  }, []);

  return { quotations, clientQuotations, loading, error };
};

export default useClientQuotations;
