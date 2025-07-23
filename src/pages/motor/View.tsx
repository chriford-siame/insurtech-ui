import React from 'react'
import { useParams } from 'react-router-dom';
import useQuotation from 'src/hooks/quotation';

function QuotationView() {
    const { id } = useParams();
    const { quotation } = useQuotation(id);

    return (
        <div className='pt-5 text-black'>
            <div className='border rounded-md p-3 my-3 px-4 grid md:grid-cols-4 lg:grid-cols-4'>
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
                <div className='flex justify-center'>
                    <div className='text-center'>
                        <p className='text-gray-500 font-semibold text-[12pt]'>Cover End</p>
                        <p className='text-gray-400 font-semibold text-[10pt] -mt-2'>{quotation?.cover_end}</p>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div className='text-center pt-1'>
                        <img className="cursor-pointer" onClick={() => window.open('/sample/quotation.pdf', '_blank')} src="/quotation.jpg" width={40} alt="" />
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
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>0974567890</div>
                    </div>
                </div>
                <div className='border rounded-md p-3'>
                    <div className='flex justify-between'>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>Vehicle Use</div>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>{quotation?.vehicle_use}</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>Payment</div>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>{quotation?.has_paid ? "Pending" : "Successful" }</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>Method</div>
                        <div className='text-gray-400 font-semibold text-[10pt] -mt-2'>Bank</div>
                    </div>
                </div>
            </div>


            <div className='border rounded-md p-3 my-3 px-4 grid md:grid-cols-3 lg:grid-cols-3'>
               
                <div className='flex justify-center'>
                    <div className='text-center'>
                        <p className='text-gray-500 font-semibold text-[12pt]'>Color</p>
                        <p className='text-gray-400 font-semibold text-[10pt] -mt-2'>{quotation?.color}</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-center'>
                        <p className='text-gray-500 font-semibold text-[12pt]'>Make</p>
                        <p className='text-gray-400 font-semibold text-[10pt] -mt-2'>{quotation?.model.make.year.year} {quotation?.model.make.name}</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-center'>
                        <p className='text-gray-500 font-semibold text-[12pt]'>Model</p>
                        <p className='text-gray-400 font-semibold text-[10pt] -mt-2'>{quotation?.model.name}</p>
                    </div>
                </div>
            </div> 
            <div className='border rounded-md p-3 my-3 px-4 grid md:grid-cols-3 lg:grid-cols-3'>
                <div className='flex justify-center'>
                    <div className='text-center'>
                        <p className='text-gray-500 font-semibold text-[12pt]'>Engine Capacity</p>
                        <p className='text-gray-400 font-semibold text-[10pt] -mt-2'>{quotation?.engine_capacity}</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-center'>
                        <p className='text-gray-500 font-semibold text-[12pt]'>Engine Number</p>
                        <p className='text-gray-400 font-semibold text-[10pt] -mt-2'>{quotation?.engine_number}</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-center'>
                        <p className='text-gray-500 font-semibold text-[12pt]'>Chassis Number</p>
                        <p className='text-gray-400 font-semibold text-[10pt] -mt-2'>{quotation?.chassis_number}</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default QuotationView;