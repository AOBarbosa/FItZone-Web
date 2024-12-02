export enum InstructorStatus {
    ACTIVE = 'Ativo',
    INACTIVE = 'Inativo',
}

export enum InstructorType {
    TREINEER = 'Aprendiz',
    INTERN = 'Estagiário',
    PERSONAL = 'Personal',
    TEACHER = 'Professor',
}

export interface Instructor {
    id: string
    cpf: string
    cref: string
    name: string
    dateOfBirth: Date
    phone: string
    status: InstructorStatus
    type: InstructorType
}
