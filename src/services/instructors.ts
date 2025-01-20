import { Instructor } from '@/models/instructors'

export class InstructorService {
  async get() {
    const instructors = await fetch('/api/instructors').then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch instructors')
      }
      return response.json()
    })

    return instructors
  }

  async create(instructor: Instructor) {
    const response = await fetch('/api/instructors', {
      method: 'POST',
      body: JSON.stringify(instructor),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to create instructor')
    }
  }

  async findByID(id: string) {
    const instructor = await fetch(`/api/instructors/${id}`).then(
      (response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch instructor')
        }
        return response.json()
      },
    )

    return instructor
  }

  async update(instructor: Instructor) {
    const response = await fetch(`/api/instructors/${instructor.id}`, {
      method: 'PUT',
      body: JSON.stringify(instructor),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to update instructor')
    }
  }

  async delete(id: string) {
    const response = await fetch(`/api/instructors/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to delete instructor')
    }
  }
}
