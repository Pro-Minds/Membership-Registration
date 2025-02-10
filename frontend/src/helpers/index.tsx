export const registerAdmin = async (data: {
    name: string;
    email: string;
    phone: string;
    username: string;
    password: string;
  }) => {
    const response = await fetch('/admin/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Registration failed');
    }
    return response.json();
  };
  
  export const loginAdmin = async (email: string, password: string) => {
    const response = await fetch('/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    return response.json();
  };
