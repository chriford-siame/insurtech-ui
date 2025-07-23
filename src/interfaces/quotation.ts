export interface IMotorInsurance {
    id: number
    user?: any
    registration_number: string
    make_year: string
    make: string
    model: any
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
