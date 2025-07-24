import React from 'react'
import { Eye, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useClientQuotations from 'src/hooks/clientQuotations';
import { IMotorInsurance } from 'src/interfaces/quotation';
import Card from 'src/components/quotation/Card';
import { spawn } from 'child_process';

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
                        <span key={quotation.id}>
                            <Card quotation={quotation} />
                        </span>
                    );
                })
                }
            </div>
        </div>
    )
}

export default QuotationList