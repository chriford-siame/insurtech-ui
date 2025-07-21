import React from 'react'
import { Eye, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useClaims from 'src/hooks/Claims';
import { textShortener } from 'src/lib/utils';
import { IClaim } from 'src/interfaces/claim';
import useUserClaims from 'src/hooks/UserClaims';
import { ICustomClaim } from 'src/interfaces/user';
import ClaimCreation from './Create';
import MotorInsurance from '../motor/MotorInsurance';
import MotorInsuranceForm from '../motor/Create';

function InsuranceList() {
    const navigate = useNavigate();
    const gotoQuotationForm = () => {
        let path = `/quotation/create/`;
        navigate(path);
    }

    const gotoQuotation = (id: string | number) => {
        let path = `/quotations/${id}/`;
        navigate(path);
    }

    const { userClaims } = useUserClaims();

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
                {userClaims.map((claim: ICustomClaim) => {
                    return (
                        <div key={claim.id} className='border shadow-md p-2 text-[12pt]'>
                            <div className='flex justify-between'>
                                <p className='text-gray-700'>{claim.date_issued}</p>
                                <p className='text-gray-700 font-semibold'>{claim.claim_type} insurance</p>
                                <p className='text-gray-700'>{claim.status}</p>
                            </div>
                            <p className='text-gray-700'>{textShortener(claim.incident, 200)}</p>
                            <div className="flex justify-center pb-0">
                                <a onClick={() => gotoQuotation(claim.id)} className="text-blue-400 text-[12pt] rounded-md  px-2 flex justify-center gap-1 cursor-pointer"><span><Eye size={15} className='mt-2' /> </span> <p>view claim</p></a>
                            </div>
                        </div>
                    );
                })
                }
            </div>
        </div>
    )
}

export default InsuranceList