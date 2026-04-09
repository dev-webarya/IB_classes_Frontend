/// <reference types="vite/client" />

type Testimonial = {
    _id: string;
    name: string;
    role: string;
    message: string;
    text?: string; // Optional for backward compatibility
    rating: number;
    status: 'pending' | 'approved' | 'rejected';
    category?: string; // Optional field used by admin panel
    type?: string; // Optional field for media type
    mediaUrl?: string; // Optional field for media URL
    subject?: string; // Optional alias for role
};

const API_BASE = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || 'http://93.127.194.118:9014';

function adminHeaders(): HeadersInit {
    const token = localStorage.getItem('icfy_token');
    return {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
}

export async function getAllTestimonials() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    try {
        const response = await fetch(`${API_BASE}/api/admin/testimonials`, {
            method: 'GET',
            headers: adminHeaders(),
            signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Failed to fetch testimonials: ${response.status}`);
        const data = await response.json();
        return data;
    } finally {
        clearTimeout(timeoutId);
    }
}

export async function approveTestimonial(id: string) {
    const response = await fetch(`${API_BASE}/api/admin/testimonials/${id}/approve`, {
        method: 'POST',
        headers: adminHeaders(),
    });
    if (!response.ok) throw new Error(`Failed to approve: ${response.status}`);
    return response.json().catch(() => ({}));
}

export async function rejectTestimonial(id: string) {
    const response = await fetch(`${API_BASE}/api/admin/testimonials/${id}/reject`, {
        method: 'POST',
        headers: adminHeaders(),
    });
    if (!response.ok) throw new Error(`Failed to reject: ${response.status}`);
    return response.json().catch(() => ({}));
}

export async function setPrimaryTestimonial(id: string) {
    const response = await fetch(`${API_BASE}/api/admin/testimonials/${id}/primary`, {
        method: 'POST',
        headers: adminHeaders(),
    });
    if (!response.ok) throw new Error(`Failed to set primary: ${response.status}`);
    return response.json().catch(() => ({}));
}

export async function deleteTestimonial(id: string) {
    const response = await fetch(`${API_BASE}/api/admin/testimonials/${id}`, {
        method: 'DELETE',
        headers: adminHeaders(),
    });
    if (!response.ok) throw new Error(`Failed to delete: ${response.status}`);
    return response.json().catch(() => ({}));
}

export async function submitTestimonial(data: Omit<Testimonial, '_id' | 'status'>) {
    const response = await fetch(`${API_BASE}/api/testimonials/submit`, {
        method: 'POST',
        headers: adminHeaders(),
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`Failed to submit testimonial: ${response.status}`);
    return response.json();
}

export async function getApprovedTestimonials() {
    const response = await fetch(`${API_BASE}/api/testimonials`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    console.log('getApprovedTestimonials API response:', data);

    // Handle paginated response { content: [...] } or plain array
    const list: Testimonial[] = Array.isArray(data)
        ? data
        : Array.isArray(data?.content)
        ? data.content
        : [];

    return list;
}

export async function updateTestimonial(id: string, data: Partial<Testimonial>) {
    const response = await fetch(`${API_BASE}/api/admin/testimonials/${id}`, {
        method: 'PUT',
        headers: adminHeaders(),
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`Failed to update testimonial: ${response.status}`);
    return response.json();
}

export async function createTestimonialAdmin(data: Omit<Testimonial, '_id' | 'status'>) {
    const response = await fetch(`${API_BASE}/api/admin/testimonials`, {
        method: 'POST',
        headers: adminHeaders(),
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`Failed to create testimonial: ${response.status}`);
    return response.json();
}
