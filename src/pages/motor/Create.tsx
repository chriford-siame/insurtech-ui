import React, { useEffect, useState } from 'react';
import OpenAI from 'openai';
import { IClaim } from 'src/interfaces/claim';
import useMakeData from 'src/hooks/make';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IMotorInsurance } from 'src/interfaces/quotation';


function MotorInsuranceForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<Omit<IMotorInsurance, 'id' | 'created_at' | 'file'>>({
        registration_number: '',
        make_year: '',
        make: '',
        model: '',
        engine_capacity: '',
        engine_number: '',
        chassis_number: '',
        color: '',
        vehicle_use: '',
        cover_end: ''
    })

    const {makes, makeYears, models} = useMakeData();

    const handleRegistrationMarkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, registration_number: e.target.value || '' })
    };
    const handleEngineNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, engine_number: e.target.value || '' })
    };
    const handleEngineChassisChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, chassis_number: e.target.value || '' })
    };
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, color: e.target.value || '' })
    };
    const handleCoverEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, cover_end: e.target.value || '' })
    };
    
    const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setData({ ...data, make: e.target.value || '' })
    };
    const handleVehicleUseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setData({ ...data, vehicle_use: e.target.value || '' })
    };
    const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setData({ ...data, model: e.target.value || '' })
    };
    const handleMakeYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setData({ ...data, make_year: e.target.value || '' })
    };
    const handleEngineCapacityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setData({ ...data, engine_capacity: e.target.value || '' })
    };

    const navigate = useNavigate();
    const gotoQuotations = () => {
        let path = `/`;
        navigate(path);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)

        const token = localStorage.getItem('access_token');

        const form = new FormData();
        
        const fileResponse = await fetch('../../../public/sample/quotation.pdf');
        const blob = await fileResponse.blob();

        form.append("registration_number", data.registration_number);
        form.append("model", data.model);
        form.append("engine_capacity", data.engine_capacity);
        form.append("engine_number", data.engine_number);
        form.append("chassis_number", data.chassis_number);
        form.append("color", data.color);
        form.append("vehicle_use", data.vehicle_use);
        form.append("cover_end", data.cover_end);
        form.append("file", blob, "quotation.pdf")

        try {
            await axios.post(
                "http://localhost:8000/quotation/",
                form,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            window.location.href = "/";
        } catch (err) {
            setIsLoading(false)
            console.error(err);
        }
        gotoQuotations()

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
                        name='registration_number'
                        placeholder='Vehicle registration number'
                        type="text"
                        className='border border-gray-300 p-1 py-1'
                        onChange={handleRegistrationMarkChange}
                        required={true}
                        maxLength={10} 
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                        <div className='grid'>
                            <label htmlFor="make_year" className='flex gap-1'>Year <Required /></label>
                            <select name="make_year" id="make_year" className='border border-gray-300 p-2 bg-gray-100' required={true} onChange={handleMakeYearChange} value={data.make_year}>
                                <option defaultValue=""></option>
                                {makeYears.map((year: any) => {
                                    return (
                                        <option key={year.id} value={year.id}>{year.year}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='grid'>
                            <label htmlFor="make" className='flex gap-1'>Make <Required /></label>
                            <select name="make" id="make" className='border border-gray-300 bg-gray-100 p-2 ' required={true} onChange={handleMakeChange} value={data.make}>
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
                            <label htmlFor="color" className='flex gap-2'>Vehicle color <Required /></label>
                            <input
                                name='color'
                                id='color'
                                placeholder='Color'
                                type="text"
                                className='border border-gray-300 p-2 py-1'
                                onChange={handleColorChange}
                                required={true}
                                maxLength={10} 
                            />
                        </div>
                        <div className='grid'>
                            <label htmlFor="vehicle_use" className='flex gap-1'>Vehicle use <Required /></label>
                            <select name="vehicle_use" id="vehicle_use" className='border border-gray-300 p-2 bg-gray-100' required={true} onChange={handleVehicleUseChange} value={data.vehicle_use}>
                                <option defaultValue=""></option>
                                <option  value="private">Private</option>
                                <option  value="commercial">Commercial</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                        <div className='grid'>
                            <label htmlFor="model" className='flex gap-1'>Model <Required /></label>
                            <select name="model" id="model" className='border border-gray-300 p-2 bg-gray-100' required={true} onChange={handleModelChange} value={data.model}>
                                <option defaultValue=""></option>
                                {models.map((model: any) => {
                                    return (
                                        <option key={model.id} value={model.id}>{model.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='grid'>
                            <label htmlFor="engine_capacity" className='flex gap-1'>Engine Capacity <Required /></label>
                            <select name="engine_capacity" id="engine_capacity" className='border border-gray-300 p-2 bg-gray-100' required={true} onChange={handleEngineCapacityChange} value={data.engine_capacity}>
                                <option defaultValue=""></option>
                                <option defaultValue="40000">40000</option>
                                <option defaultValue="30000">30000</option>
                            </select>
                        </div>
                        <div className='grid'>
                            <label htmlFor="engine_number" className='flex gap-1'>Engine Number <Required /></label>
                            <input
                                name='engine_number'
                                placeholder='Engine number'
                                type="text"
                                className='border border-gray-300 p-2 py-1'
                                onChange={handleEngineNumberChange}
                                required={true}
                                maxLength={10} 
                            />
                        </div>
                        <div className='grid'>
                            <label htmlFor="chassis_number" className='flex gap-1'>Chassis Number <Required /></label>
                            <input
                                name='chassis_number'
                                placeholder='Chassis number'
                                type="text"
                                className='border border-gray-300 p-2'
                                onChange={handleEngineChassisChange}
                                required={true}
                                maxLength={10} 
                            />
                        </div>
                    </div>
                    <div className='grid'>
                        <label htmlFor="cover_end" className='flex gap-1'>Cover end <Required /></label>
                        <input
                            name='cover_end'
                            placeholder='Cover end'
                            type="date"
                            className='border border-gray-300 p-2 py-1'
                            onChange={handleCoverEndChange}
                            required={true}
                            maxLength={10} 
                        />
                    </div>
                    <button type="submit" disabled={isLoading} className={`text-white rounded-sm ${isLoading ? 'bg-gray-600 cursor-progress' : 'bg-blue-600'} p-2 w-full`}>Add Quotation</button>
                </form>
            </div>
        </div>
    );
}

export default MotorInsuranceForm;
