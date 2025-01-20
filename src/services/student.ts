import { Student } from '@/models/students'

export class StudentService {
  async get() {
    const students = await fetch('/api/students').then((response) => {
      return response.json()
    })

    return students
  }

  async create(student: Student) {
    await fetch('/api/students', {
      method: 'POST',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  async findByID(id: string) {
    const student = await fetch(`/api/students/${id}`).then((response) => {
      return response.json()
    })

    return student
  }

  async update(student: Student) {
    await fetch(`/api/students/${student.id}`, {
      method: 'PUT',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
