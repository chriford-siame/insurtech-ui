import { Eye } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from 'src/components/quotation/Card';
import useClientQuotations from 'src/hooks/clientQuotations';
import { IMotorInsurance } from 'src/interfaces/quotation';

function QuotationDetail() {

  const { quotations } = useClientQuotations();

  return (
    <div className='pb-16'>
      <div className='border-b pb-1'>
        
        <div className="flex justify-between my-2 w-full">
          <div>
            <p className="text-gray-600 font-bold">Quotations</p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
      <div className='mt-4 w-auto grid lg:grid-cols-2 md:grid-cols-2 gap-2'>
        {quotations.map((quotation: IMotorInsurance) => {
          return (
           <Card quotation={quotation} />
          );
        })
        }
      </div>
    </div>
  )
}

export default QuotationDetail