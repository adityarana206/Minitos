import api from "./interceptor";
export const handleOtp = async (phoneNumber: string, url: string) => {
    try {
        const response = await api.post(url, {
            phoneNumber
        });
        return response.data;
    } catch (error) {
        console.error('Error sending OTP:', error);
        throw error;
    }
};


export const verifyOtp = async (phoneNumber: string, otp: string) => {
    try {
        const response = await api.post('/auth/verify-otp', {
            phoneNumber,
            otp,
        });
        return response.data;
    }
    catch (error) {
        console.error('Error sending OTP:', error);
        throw error;
    }
};