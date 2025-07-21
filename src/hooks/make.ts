import { useState, useEffect } from "react";
import axios from "axios";

const useMakeData = () => {
  const [makes, setMakes] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [makeYears, setMakeYears] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMakeDetails = async () => {
      const token = localStorage.getItem('access_token');
      try {
        const response = await axios.get(
          `http://localhost:8000/make/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        setMakes(response.data);
      } catch (err) {
        console.log(err)
        setError("Failed to fetch vehicle makes.");
      } finally {
        setLoading(false);
      }

      try {
          const response = await axios.get(
            `http://localhost:8000/make-year/`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
              },
            }
          );
          setMakeYears(response.data);
        } catch (err) {
          setError("Failed to fetch vehicle make years.");
        } finally {
          setLoading(false);
        }

      try {
        const response = await axios.get(
          `http://localhost:8000/make-model/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        setModels(response.data);
      } catch (err) {
        setError("Failed to fetch vehicle models.");
      } finally {
        setLoading(false);
      }
    };

    fetchMakeDetails();
  }, []);

  return { makes, models, makeYears, loading, error };
};

export default useMakeData;
