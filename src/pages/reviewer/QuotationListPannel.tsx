import React from 'react'
import { useNavigate } from 'react-router-dom';
import useClientQuotations from 'src/hooks/clientQuotations';
import { IMotorInsurance } from 'src/interfaces/quotation';

function QuotationDetail() {
  const navigate = useNavigate();

  const gotoQuotationDetail = (id: any) => {
    let path = `/quotation/${id}/detail`;
    navigate(path);
  }

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
            <div key={quotation.id} className='border shadow-md p-2 text-[12pt]'>
              <div className='flex justify-between'>
                <p className='text-gray-700'>{quotation.created_at}</p>
                <p className='text-gray-700'>{quotation.id}</p>
              </div>ss
              <div className="flex justify-center">
                <a onClick={() => gotoQuotationDetail(quotation.id)} className="text-blue-400 text-[12pt] rounded-md  px-2 flex justify-center gap-1 cursor-pointer"><span> </span> <p>view claim</p></a>
              </div>
            </div>
          );
        })
        }
      </div>
    </div>
  )
}

export default QuotationDetail