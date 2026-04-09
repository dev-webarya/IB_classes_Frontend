const API_BASE = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || 'http://93.127.194.118:9014';

async function getMediaSignature() {
  const token = localStorage.getItem('icfy_token');
  const response = await fetch(`${API_BASE}/api/media/signature`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!response.ok) throw new Error(`Failed to get upload signature: ${response.status}`);
  return response.json();
}

/**
 * Uploads a file directly to Cloudinary using a backend-generated signature.
 * @param {File} file - The file to upload.
 * @returns {Promise<string>} - The URL of the uploaded resource.
 */
export const uploadToCloudinary = async (file) => {
  try {
    // 1. Get signature from backend
    const signatureData = await getMediaSignature();
    const { signature, timestamp, cloud_name, api_key, folder } = signatureData;

    // 2. Prepare FormData for Cloudinary
    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', api_key);
    formData.append('timestamp', timestamp);
    formData.append('signature', signature);
    if (folder) formData.append('folder', folder);

    // 3. Post to Cloudinary
    const uploadUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`;
    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err?.error?.message || `Upload failed: ${response.status}`);
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Failed to upload media. Please try again.');
  }
};

export async function uploadMultipleToCloudinary(files) {
  return Promise.all(files.map((f) => uploadToCloudinary(f)));
}

