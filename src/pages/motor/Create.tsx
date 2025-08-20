import React, { useEffect, useState } from 'react';
import OpenAI from 'openai';
import { IClaim } from 'src/interfaces/claim';
import useMakeData from 'src/hooks/make';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IMotorInsurance } from 'src/interfaces/quotation';
import { motion } from 'framer-motion';


function MotorInsuranceForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<Omit<IMotorInsurance, 'id' | 'created_at' | 'file' | 'model_info'>>({
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

    const { makes, makeYears, models } = useMakeData();

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

        const fileResponse = await fetch('/sample/quotation.pdf');
        const blob = await fileResponse.blob();

        form.append("registration_number", data.registration_number);
        form.append("model", data.model);
        form.append("engine_capacity", data.engine_capacity);
        form.append("engine_number", data.engine_number);
        form.append("chassis_number", data.chassis_number);
        form.append("color", data.color);
        form.append("vehicle_use", data.vehicle_use);
        form.append("cover_end", data.cover_end);
        form.append("quotation", blob, "quotation.pdf")
        console.log(data)

        try {
            await axios.post(
                "http://localhost:8000/quotation/",
                form,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        // "Content-Type": "application/json",
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
        <div className="flex justify-center py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full  bg-white rounded-2xl shadow-lg p-8"
            >
                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-black">
                    Quotation Creation Form
                </h2>

                <form onSubmit={handleSubmit} className="grid gap-4 text-[11pt]">
                    {/* Registration Number */}
                    <input
                        name="registration_number"
                        placeholder="Vehicle registration number"
                        type="text"
                        className="border border-gray-300 rounded-lg p-2 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none text-[11pt]"
                        onChange={handleRegistrationMarkChange}
                        required
                        maxLength={10}
                    />

                    {/* Year & Make */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid">
                            <label htmlFor="make_year" className="mb-1 font-medium text-gray-700 text-[11pt]">Year <span className="text-red-500">*</span></label>
                            <select
                                name="make_year"
                                id="make_year"
                                className="border border-gray-300 p-2 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none text-[11pt]"
                                required
                                onChange={handleMakeYearChange}
                                value={data.make_year}
                            >
                                <option value=""></option>
                                {makeYears.map((year: any) => (
                                    <option key={year.id} value={year.id}>{year.year}</option>
                                ))}
                            </select>
                        </div>
                        <div className="grid">
                            <label htmlFor="make" className="mb-1 font-medium text-gray-700 text-[11pt]">Make <span className="text-red-500">*</span></label>
                            <select
                                name="make"
                                id="make"
                                className="border border-gray-300 p-2 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none text-[11pt]"
                                required
                                onChange={handleMakeChange}
                                value={data.make}
                            >
                                <option value=""></option>
                                {makes.map((make: any) => (
                                    <option key={make.id} value={make.id}>{make.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Color & Vehicle Use */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid">
                            <label htmlFor="color" className="mb-1 font-medium text-gray-700 text-[11pt]">Vehicle color <span className="text-red-500">*</span></label>
                            <input
                                name="color"
                                id="color"
                                placeholder="Color"
                                type="text"
                                className="border border-gray-300 p-2 py-1 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-[11pt]"
                                onChange={handleColorChange}
                                required
                                maxLength={10}
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="vehicle_use" className="mb-1 font-medium text-gray-700 text-[11pt]">Vehicle use <span className="text-red-500">*</span></label>
                            <select
                                name="vehicle_use"
                                id="vehicle_use"
                                className="border border-gray-300 p-2 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none text-[11pt]"
                                required
                                onChange={handleVehicleUseChange}
                                value={data.vehicle_use}
                            >
                                <option value=""></option>
                                <option value="private">Private</option>
                                <option value="commercial">Commercial</option>
                            </select>
                        </div>
                    </div>

                    {/* Model & Engine Capacity */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid">
                            <label htmlFor="model" className="mb-1 font-medium text-gray-700 text-[11pt]">Model <span className="text-red-500">*</span></label>
                            <select
                                name="model"
                                id="model"
                                className="border border-gray-300 p-2 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none text-[11pt]"
                                required
                                onChange={handleModelChange}
                                value={data.model}
                            >
                                <option value=""></option>
                                {models.map((model: any) => (
                                    <option key={model.id} value={model.id}>{model.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="grid">
                            <label htmlFor="engine_capacity" className="mb-1 font-medium text-gray-700 text-[11pt]">Engine Capacity <span className="text-red-500">*</span></label>
                            <select
                                name="engine_capacity"
                                id="engine_capacity"
                                className="border border-gray-300 p-2 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none text-[11pt]"
                                required
                                onChange={handleEngineCapacityChange}
                                value={data.engine_capacity}
                            >
                                <option value=""></option>
                                <option value="40000">40000</option>
                                <option value="30000">30000</option>
                            </select>
                        </div>
                    </div>

                    {/* Engine & Chassis Numbers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid">
                            <label htmlFor="engine_number" className="mb-1 font-medium text-gray-700 text-[11pt]">Engine Number <span className="text-red-500">*</span></label>
                            <input
                                name="engine_number"
                                placeholder="Engine number"
                                type="text"
                                className="border border-gray-300 p-2 py-1 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-[11pt]"
                                onChange={handleEngineNumberChange}
                                required
                                maxLength={10}
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="chassis_number" className="mb-1 font-medium text-gray-700 text-[11pt]">Chassis Number <span className="text-red-500">*</span></label>
                            <input
                                name="chassis_number"
                                placeholder="Chassis number"
                                type="text"
                                className="border border-gray-300 p-2 py-1 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-[11pt]"
                                onChange={handleEngineChassisChange}
                                required
                                maxLength={10}
                            />
                        </div>
                    </div>

                    {/* Cover End */}
                    <div className="grid">
                        <label htmlFor="cover_end" className="mb-1 font-medium text-gray-700 text-[11pt]">Cover End <span className="text-red-500">*</span></label>
                        <input
                            name="cover_end"
                            placeholder="Cover end"
                            type="date"
                            className="border border-gray-300 p-2 py-1 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-[11pt]"
                            onChange={handleCoverEndChange}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`text-white rounded-lg p-1 w-full font-semibold transition ${isLoading ? "bg-gray-400 cursor-progress" : "bg-blue-600 hover:bg-blue-700"
                            } text-[11pt]`}
                    >
                        {isLoading ? "Adding..." : "Add Quotation"}
                    </button>
                </form>
            </motion.div>
        </div>
    );
}

export default MotorInsuranceForm;

