import { Eye } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IMotorInsurance } from 'src/interfaces/quotation';

interface IProps {
    quotation: IMotorInsurance
}
function Card({ quotation }: IProps) {
    
    const navigate = useNavigate();
    const gotoQuotation = (id: any) => {
        let path = `/quotation/${id}/detail`;
        navigate(path);
    }

  return (
     <div key={quotation.id} className='border shadow-md p-2 text-[12pt]'>
        <div className='flex justify-between'>
            <p className='text-gray-700'>{quotation.created_at}</p>
            <p className='text-gray-700'>{quotation.status}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p className='text-gray-700'>Sum insured:</p>
            <p className='text-gray-700'>K{quotation.insured_price ? quotation.insured_price : "0"}</p>
        </div>
        <div className='flex justify-between'>
            <p className='text-gray-700'>Make:</p>
            <p className='text-gray-700'>{quotation.model.make.name}</p>
        </div>
        <div className='flex justify-between'>
            <p className='text-gray-700'>Color:</p>
            <p className='text-gray-700'>{quotation.color}</p>
        </div>
        <div className='flex justify-between'>
            <p className='text-gray-700'>Plate Number:</p>
            <p className='text-gray-700'>{quotation.registration_number}</p>
        </div>
        <hr />
        <div className="flex justify-center pb-0">
            <a onClick={() => gotoQuotation(quotation.id)} className="text-blue-400 text-[12pt] rounded-md  px-2 flex justify-center gap-1 cursor-pointer"><span><Eye size={15} className='mt-2' /> </span> <p>view {quotation.has_paid ? "policy" : "quotation"}</p></a>
        </div>
    </div>
  )
}

export default Card