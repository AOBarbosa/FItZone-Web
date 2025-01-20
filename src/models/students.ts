export enum StudentStatus {
  ACTIVE = 'Ativo',
  INACTIVE = 'Inativo',
}

export enum FeeStatus {
  SUCCESS = 'Pago',
  PENDING = 'Pendente',
  FAILED = 'Em atraso',
}

export interface Student {
  id?: string
  name: string
  email: string
  cpf: string
  phone: string
  birthdate: string
}
