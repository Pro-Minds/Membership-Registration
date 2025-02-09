export declare const registerAdmin: (data: {
    name: string;
    email: string;
    phone: string;
    username: string;
    password: string;
  }) => Promise<any>;  
  
  export declare const loginAdmin: (email: string, password: string) => Promise<any>;
  