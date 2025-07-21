import { useState, useEffect } from "react";
import axios from "axios";
import { IClaim } from "src/interfaces/claim";
import useUser from "./User";

const useCreateQuotation = (
  formData: Omit<IClaim, 'id' | 'date_issued'> | any,
  formIsValid: boolean
) => {
  const [quotation, setQuotation] = useState<IClaim | any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { user } = useUser();

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    const submitQuotation = async () => {
      setLoading(true);
      const form = new FormData();
      console.log(formData)

      
      form.append("user", user);
      form.append("registration_mark", formData.registration_mark);
      form.append("make_year", formData.make_year);
      form.append("make", formData.make);
      form.append("make_model", formData.make_model);
      form.append("engine_capacity", formData.engine_capacity);
      form.append("engine_number", formData.engine_number);
      form.append("engine_chassis", formData.engine_chassis);

      try {
        const response = await axios.post(
          "http://localhost:8000/quotation/",
          {
            ...formData
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        
        setQuotation(response.data);
        window.location.href = "/";
      } catch (err) {
        setError("Failed to create quotation");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    submitQuotation();
  }, [formIsValid]);

  return { quotation, loading, error };
};
export default useCreateQuotation;