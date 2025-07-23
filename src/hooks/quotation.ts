import { useState, useEffect } from "react";
import axios from "axios";
import { IMotorInsurance } from "src/interfaces/quotation";

const useQuotation = (id: string | number | undefined) => {
  const [quotation, setQuotation] = useState<IMotorInsurance>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuotation = async () => {
      const token = localStorage.getItem('access_token');
      try {
        setLoading(true);
        const response = await axios.get<IMotorInsurance>(
          `http://localhost:8000/quotation/${id}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        setQuotation(response.data);
      } catch (err) {
        console.log(err)
        setError("Failed to fetch quotation");
      } finally {
        setLoading(false);
      }
    };

    fetchQuotation();
  }, [id]);

  return { quotation, loading, error };
};

export default useQuotation;
