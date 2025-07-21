import { useState, useEffect } from "react";
import axios from "axios";
import { ICustomClaim } from "src/interfaces/user";

const useClientQuotations = () => {
  const [quotations, setQuotations] = useState<any[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuotations = async () => {
      const token = localStorage.getItem('access_token');
      try {
        const response = await axios.get<ICustomClaim[]>(
          `http://localhost:8000/quotation/list/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        setQuotations(response.data);
      } catch (err) {
        setError("Failed to fetch user quotations.");
      } finally {
        setLoading(false);
      }
    }
    fetchQuotations();
  }, []);

  return { quotations, loading, error };
};

export default useClientQuotations;
