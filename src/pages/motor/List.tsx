import React from 'react'
import { Eye, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useClientQuotations from 'src/hooks/clientQuotations';
import { IMotorInsurance } from 'src/interfaces/quotation';

function QuotationList() {
    const navigate = useNavigate();
    const gotoQuotationForm = () => {
        let path = `/quotation/create/`;
        navigate(path);
    }

    const gotoQuotation = (id: string | number) => {
        let path = `/quotations/${id}/detail`;
        navigate(path);
    }

    const { clientQuotations } = useClientQuotations();

    return (
        <div className='pb-16'>
            <div className='border-b pb-5'>
                <div className="flex justify-between my-2 w-full">
                    <div>
                        <p className="text-black-500 font-bold">Quotations</p>
                    </div>
                    <div>
                        <button onClick={() => gotoQuotationForm()} className="text-white text-[12pt] bg-green-500 rounded-md  px-2 flex justify-center"><span><Plus size={15} className='mt-2' /></span><p>Create</p></button>
                    </div>
                </div>
            </div>
            <div className='mt-4 w-auto grid lg:grid-cols-2 md:grid-cols-2 gap-2'>
                {clientQuotations.map((quotation: IMotorInsurance) => {
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
                                <p className='text-gray-700'>{quotation.registration_number}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-gray-700'>Year:</p>
                                <p className='text-gray-700'>{quotation.insured_price}</p>
                                <p className='text-gray-700'>{quotation.insured_price}</p>
                            </div>
                            {/* <div className='flex justify-between'>
                            </div> */}
                            <div className='flex justify-between'>
                                <p className='text-gray-700'>{quotation.registration_number}</p>
                                <p className='text-gray-700'>{quotation.insured_price}</p>
                            </div>
                            <hr />
                            <div className="flex justify-center pb-0">
                                <a onClick={() => gotoQuotation(quotation.id)} className="text-blue-400 text-[12pt] rounded-md  px-2 flex justify-center gap-1 cursor-pointer"><span><Eye size={15} className='mt-2' /> </span> <p>view {quotation.has_paid ? "policy" : "quotation"}</p></a>
                            </div>
                        </div>
                    );
                })
                }
            </div>
        </div>
    )
}

export default QuotationList