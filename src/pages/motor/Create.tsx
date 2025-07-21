import React, { useEffect, useState } from 'react';
import OpenAI from 'openai';
import { IClaim } from 'src/interfaces/claim';
import axios from 'axios';
import useMakeData from 'src/hooks/make';
import { useNavigate } from 'react-router-dom';

function MotorInsuranceForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<Omit<IClaim, 'id' | 'date_issued' | 'status'> | any>({
        registration_mark: '',
        make_year: '',
        make: '',
        make_model: '',
        engine_capacity: '',
        engine_number: '',
        engine_chassis: '',

    })

    const {makes, makeYears, models} = useMakeData();

    const handleRegistrationMarkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, registration_mark: e.target.value || '' })
    };
    const handleEngineNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, engine_number: e.target.value || '' })
    };
    const handleEngineChassisChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, engine_chassis: e.target.value || '' })
    };
    
    const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setData({ ...data, make: e.target.value || '' })
    };
    const handleMakeModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setData({ ...data, make_model: e.target.value || '' })
    };
    const handleMakeYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setData({ ...data, make_year: e.target.value || '' })
    };
    const handleEngineCapacityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setData({ ...data, engine_capacity: e.target.value || '' })
    };

    const navigate = useNavigate();
    const gotoClaims = () => {
        let path = `/claims/`;
        navigate(path);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)

        const token = localStorage.getItem('access_token');

        const form = new FormData();

        form.append("registration_mark", data.registration_mark);
        form.append("make_year", data.make_year);
        form.append("make", data.make);
        form.append("make_model", data.make_model);
        form.append("engine_capacity", data.engine_capacity);
        form.append("engine_number", data.engine_number);
        form.append("engine_chassis", data.engine_chassis);
        console.log(data)
        gotoClaims()

    };

    function Required() {
        return (
            <p className='text-red-500 text-[12px]'>*</p>
        )
    }

    return (
        <div className="flex justify-center">
            <div className="mt-3 md:w-[75%] lg:md:w-[75%] xl:md:w-[75%] text-2xl">
                <div className="flex justify-center my-2 w-full">
                    <p className="text-black-500 font-bold">Quotation Creation Form</p>
                </div>
                <form onSubmit={handleSubmit} className='grid container gap-2 text-[12pt]'>
                    <input
                        name='registration_mark'
                        placeholder='Vehicle registration number'
                        type="text"
                        className='border border-gray-300 p-2'
                        onChange={handleRegistrationMarkChange}
                        required={true}
                        maxLength={10} 
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                        <div className='grid'>
                            <label htmlFor="make_year" className='flex gap-1'>Year <Required /></label>
                            <select name="make_year" id="make_year" className='border border-gray-300 p-2 bg-gray-100' required={true} onChange={handleMakeYearChange} value={data.make_year}>
                                {makeYears.map((year: any) => {
                                    return (
                                        <option key={year.id} value={year.id}>{year.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='grid'>
                            <label htmlFor="make" className='flex gap-1'>Make <Required /></label>
                            <select name="make" id="make" className='border border-gray-300 bg-gray-100 p-2 ' required={true} onChange={handleMakeChange} value={data.claim_type}>
                                <option defaultValue=""></option>
                                {makes.map((make: any) => {
                                    return (
                                        <option key={make.id} value={make.id}>{make.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                        <div className='grid'>
                            <label htmlFor="make_model" className='flex gap-1'>Model <Required /></label>
                            <select name="make_year" id="make_model" className='border border-gray-300 p-2 bg-gray-100' required={true} onChange={handleMakeModelChange} value={data.model}>
                                {models.map((model: any) => {
                                    return (
                                        <option key={model.id} value={model.id}>{model.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='grid'>
                            <label htmlFor="make_model" className='flex gap-1'>Engine Capacity <Required /></label>
                            <select name="make_year" id="make_model" className='border border-gray-300 p-2 bg-gray-100' required={true} onChange={handleEngineCapacityChange} value={data.model}>
                                <option defaultValue="motor">40000</option>
                                <option value="other">B4</option>
                            </select>
                        </div>
                        <div className='grid'>
                            <label htmlFor="engine_number" className='flex gap-1'>Engine Number <Required /></label>
                            <input
                                name='engine_number'
                                placeholder='Engine number'
                                type="text"
                                className='border border-gray-300 p-2'
                                onChange={handleEngineNumberChange}
                                required={true}
                                maxLength={10} 
                            />
                        </div>
                        <div className='grid'>
                            <label htmlFor="engine_chassin" className='flex gap-1'>Engine Chassis <Required /></label>
                            <input
                                name='engine_chassis'
                                placeholder='Engine chassis'
                                type="text"
                                className='border border-gray-300 p-2'
                                onChange={handleEngineChassisChange}
                                required={true}
                                maxLength={10} 
                            />
                        </div>
                    </div>
                    <button type="submit" disabled={isLoading} className={`text-white rounded-sm ${isLoading ? 'bg-gray-600 cursor-progress' : 'bg-blue-600'} p-2 w-full`}>Add Quotation</button>
                </form>
            </div>
        </div>
    );
}

export default MotorInsuranceForm;
