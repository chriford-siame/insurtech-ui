import { useState, useEffect } from "react";
import axios from "axios";
import { IClaim } from "src/interfaces/claim";

const useUserClaims = () => {
  const [userClaims, setUserClaims] = useState<IClaim[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserClaims = async () => {
      const token = localStorage.getItem('access_token');
      try {
        const claimResponse = await axios.get<IClaim[]>(
          `http://localhost:8000/claims/list/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        setUserClaims(claimResponse.data);
      } catch (err) {
        setError("Failed to fetch user claims.");
      } finally {
        setLoading(false);
      }
    }
    fetchUserClaims();
  }, []);

  return { userClaims, loading, error };
};

export default useUserClaims;
