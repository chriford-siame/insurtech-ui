import React from 'react'
import { useParams } from 'react-router-dom';
import useQuotation from 'src/hooks/quotation';

function QuotationView() {
    const { id } = useParams();
    const { quotation } = useQuotation(id);

    return (
        <div className='pt-5 text-black'>
            <div className='border rounded-md p-3 my-3 px-4 grid md:grid-cols-3 lg:grid-cols-3'>
                <div className='flex justify-start '>
                    <div className='text-center'>
                        <p className='text-gray-500 font-semibold text-[12pt]'>Insurance</p>
                        <p className='text-gray-400 font-semibold text-[10pt] -mt-2'>{"motor"}</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-center'>
                        <p className='text-gray-500 font-semibold text-[12pt]'>Date Issued</p>
                        <p className='text-gray-400 font-semibold text-[10pt] -mt-2'>{quotation?.created_at}</p>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div className='text-center'>
                        <p className='text-gray-500 font-semibold text-[12pt]'>Attachments</p>
                        <p className='text-gray-400 font-semibold text-[10pt] -mt-2'>1</p>
                    </div>
                </div>
            </div>

            <div className='my-3 grid md:grid-cols-2 lg:grid-cols-2 gap-2'>
                <div className='border rounded-md p-3'>
                    <div className='flex justify-between'>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>username</div>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>{quotation?.user.username}</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>fullnames</div>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>{quotation?.user.first_name} {quotation?.user.middle_name} {quotation?.user.last_name}</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>contact</div>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>{'fill'}</div>
                    </div>
                </div>
                <div className='border rounded-md p-3'>
                    <div className='flex justify-between'>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>ID</div>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>{quotation?.id}</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>status</div>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>{quotation?.status == 'reviewed' ? 'Under review' : quotation?.status}</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>NRC</div>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>{'NRC'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuotationView;