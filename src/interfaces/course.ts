export interface Course {
    id: number
    name: string
    timeStart: number
    timeEnd: number
    schedule: string
    description: string
    credits: number
    preReq: string[]
}
