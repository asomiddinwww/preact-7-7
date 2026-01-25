import { useState, type ChangeEvent } from "react";
import { Eye, EyeOff, Loader } from "lucide-react";
import { message } from "antd";
import { GoogleLogin } from "@react-oauth/google"; // Google import
import { useRegisterMutation } from "../../../../../hooks/useQuery/useQuerRegis";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate, isPending } = useRegisterMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e?: React.FormEvent): void => {
    if (e) e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      message.warning("Barcha maydonlarni to'ldiring!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      message.error("Parollar mos kelmadi!");
      return;
    }

    // Username ni name va surname ga ajratish (agar bo'shliq bo'lsa)
    const nameParts = formData.username.trim().split(" ");
    const name = nameParts[0];
    const surname =
      nameParts.length > 1 ? nameParts.slice(1).join(" ") : nameParts[0];

    mutate({
      name: name,
      surname: surname,
      email: formData.email,
      password: formData.password,
    });
  };

  // Google Register muvaffaqiyatli bo'lganda
  const handleGoogleSuccess = (response: any) => {
    message.loading("Google ma'lumotlari tekshirilmoqda...");

    // Login bilan bir xil endpoint yoki Google Register endpointiga yuboring
    // Odatda backend credential (JWT) orqali user ma'lumotlarini o'zi oladi
    mutate({
      email: "google-auth", // Backend talabiga qarab
      password: "google-auth-password",
      access_token: response.credential,
    } as any);
  };

  const handleFacebookSignIn = (): void => {
    console.log("Continue with Facebook");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="p-8">
        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm">
            Ro'yxatdan o'tish uchun ma'lumotlarni kiriting.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Full Name (e.g. John Doe)"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="button"
            onClick={(e) => handleSubmit()}
            disabled={isPending}
            className="w-full bg-[#46A358] hover:bg-green-700 text-white font-medium py-3 rounded-md transition duration-200 mt-6 flex justify-center items-center disabled:opacity-50"
          >
            {isPending ? (
              <Loader className="animate-spin w-6 h-6" />
            ) : (
              "Register"
            )}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">Or register with</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="space-y-3">
          {/* ISHLAYDIGAN GOOGLE TUGMASI */}
          <div className="flex justify-center w-full">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => message.error("Google xatoligi!")}
              useOneTap
              theme="outline"
              width="384px" // max-w-md kengligiga mos
            />
          </div>

          <button
            onClick={handleFacebookSignIn}
            className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
          >
            <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="text-gray-700 text-sm font-medium">
              Continue with Facebook
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
