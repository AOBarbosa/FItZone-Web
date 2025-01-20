export enum InstructorStatus {
  ACTIVE = 'Ativo',
  INACTIVE = 'Inativo',
}

export enum InstructorType {
  INTERN = 'Estagiário',
  PERSONAL = 'Personal',
  TEACHER = 'Professor',
}

export interface Instructor {
  id?: string
  cpf: string
  cref: string
  name: string
  birthdate: string
  phone: string
  email: string
  role: string
}
