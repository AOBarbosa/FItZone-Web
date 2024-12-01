export enum StudentStatus {
  ACTIVE = 'Ativo',
  INACTIVE = 'Inativo',
}

export enum PaymentStatus {
  SUCCESS = 'Pago',
  PENDING = 'Pendente',
  FAILED = 'Em atraso',
}

export interface Student {
  id: string
  cpf: string
  name: string
  dateOfBirth: Date
  phone: string
  status: StudentStatus
  paymentStatus: PaymentStatus
}
