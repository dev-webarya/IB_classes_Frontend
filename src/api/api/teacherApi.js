const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://93.127.194.118:9014';

function getAuthHeaders() {
    const token = localStorage.getItem('icfy_token');
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    return headers;
}

export async function getPublicTeachers() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    try {
        const response = await fetch(`${API_BASE_URL}/api/teachers`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal,
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data?.content || (Array.isArray(data) ? data : []);
    } catch (error) {
        console.error('Error fetching public teachers:', error);
        return [];
    } finally {
        clearTimeout(timeoutId);
    }
}

export async function getAllTeachersAdmin() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    try {
        const response = await fetch(`${API_BASE_URL}/api/admin/teachers`, {
            method: 'GET',
            headers: getAuthHeaders(),
            signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Failed to fetch teachers: ${response.status}`);
        const data = await response.json();
        return data?.content || (Array.isArray(data) ? data : []);
    } finally {
        clearTimeout(timeoutId);
    }
}

export async function createTeacherAdmin(teacherData) {
    const response = await fetch(`${API_BASE_URL}/api/admin/teachers`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(teacherData),
    });
    if (!response.ok) {
        const err = await response.text();
        throw new Error(`Failed to create teacher (${response.status}): ${err}`);
    }
    return response.json();
}

export async function updateTeacherAdmin(id, teacherData) {
    const response = await fetch(`${API_BASE_URL}/api/admin/teachers/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(teacherData),
    });
    if (!response.ok) {
        const err = await response.text();
        throw new Error(`Failed to update teacher (${response.status}): ${err}`);
    }
    return response.json();
}

export async function deleteTeacherAdmin(id) {
    const response = await fetch(`${API_BASE_URL}/api/admin/teachers/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
    });
    if (!response.ok) {
        const err = await response.text();
        throw new Error(`Failed to delete teacher (${response.status}): ${err}`);
    }
    return true;
}
