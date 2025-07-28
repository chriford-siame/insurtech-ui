export interface IYear {
    id: number
    year: string
}
export interface IMake {
    id: number
    year: IYear
    name: string

} 
export interface IModelInfo {
    id: number
    make: IMake
    name: string
}

export interface IMotorInsurance {
    id: number
    user?: any
    registration_number: string
    make_year: string
    make: string
    model: any
    model_info: IModelInfo
    engine_capacity: string
    engine_number: string
    chassis_number: string
    color: string
    vehicle_use: string
    cover_end: string
    status?: string
    created_at: string
    insured_price?: string
    has_paid?: boolean
    file: File | null
}
