const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://93.127.194.118:9014';

async function postJSON(path, body) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw data;
    }
    return data;
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * User Journey (OTP Login)
 */

export const requestUserOTP = async (email) => {
  return postJSON('/api/auth/start', { email });
};

export const verifyUserOTP = async (data) => {
  const result = await postJSON('/api/auth/verify', data);
  if (result.token) {
    localStorage.setItem('icfy_token', result.token);
    localStorage.setItem('icfy_user', JSON.stringify(result.user));
  }
  return result;
};

/**
 * Admin Journey (Email/Password)
 */

export const adminLogin = async (email, password) => {
  const result = await postJSON('/api/admin/auth/login', { email, password });
  if (result.token) {
    localStorage.setItem('icfy_token', result.token);
    localStorage.setItem('icfy_role', 'admin');
  }
  return result;
};

export const adminForgotPassword = async (email) => {
  return postJSON('/api/admin/auth/forgot-password', { email });
};

export const adminResetPassword = async (data) => {
  return postJSON('/api/admin/auth/reset-password', data);
};

export const logout = () => {
  localStorage.removeItem('icfy_token');
  localStorage.removeItem('icfy_user');
  localStorage.removeItem('icfy_role');
  localStorage.removeItem('adminAuth');
};
