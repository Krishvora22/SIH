import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HeartPulse, Phone, Hash, User, Stethoscope, Shield } from "lucide-react";

import { login, signup, setAuthToken } from "@/lib/api";

const Onboarding = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userRole, setUserRole] = useState<'patient' | 'doctor' | 'healthcare'>('patient');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    otp: '',
    degree: '',
    experience: '',
    description: '',
    profileImage: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };


  // New validation for email/password
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      if (!formData.mobileNumber) {
        newErrors.mobileNumber = 'Mobile number is required';
      } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
        newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
      }
      if (userRole === 'doctor') {
        if (!formData.degree) newErrors.degree = 'Degree is required';
        if (!formData.experience || isNaN(Number(formData.experience))) newErrors.experience = 'Experience is required';
        if (!formData.description) newErrors.description = 'Description is required';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const valid = validateForm();
    console.log('Submitting signup/login:', { formData, userRole, valid });
    if (!valid) {
      console.log('Validation errors:', errors);
      return;
    }
    try {
      if (isLogin) {
        // Login
        const resp = await login(formData.email, formData.password);
        setAuthToken(resp.token);
        // Redirect based on role
        if (resp.user?.role === 'DOCTOR') {
          navigate('/doctor-panel');
        } else {
          navigate('/home');
        }
      } else {
        // Signup
        let role: 'PATIENT' | 'DOCTOR' | 'PROVIDER' = 'PATIENT';
        if (userRole === 'doctor') role = 'DOCTOR';
        else if (userRole === 'healthcare') role = 'PROVIDER';
        else role = 'PATIENT';
        const signupData: any = {
          email: formData.email,
          password: formData.password,
          role,
        };
        if (role === 'PATIENT') {
          signupData.fullName = formData.name;
          signupData.phone = formData.mobileNumber;
        } else if (role === 'DOCTOR') {
          signupData.fullName = formData.name;
          signupData.phone = formData.mobileNumber;
          signupData.degree = formData.degree;
          signupData.experience = Number(formData.experience);
          signupData.description = formData.description;
          if (formData.profileImage && /^https?:\/\/.+\..+/.test(formData.profileImage)) {
            signupData.profileImage = formData.profileImage;
          }
        } else if (role === 'PROVIDER') {
          signupData.name = formData.name;
          signupData.phone = formData.mobileNumber;
          signupData.address = '';
          signupData.description = '';
        }
        console.log('Calling signup API with:', signupData);
        await signup(signupData);
        // After signup, auto-login
        const resp = await login(formData.email, formData.password);
        setAuthToken(resp.token);
        if (resp.user?.role === 'DOCTOR') {
          navigate('/doctor-panel');
        } else {
          navigate('/home');
        }
      }
    } catch (err: any) {
      setErrors({ general: err.message || 'Authentication failed' });
      console.error('Signup/Login error:', err);
    }
  };


  // Remove OTP logic (not used with backend)
  const handleSendOtp = () => {};
  const handleResendOtp = () => {};

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', mobileNumber: '', otp: '', degree: '', experience: '', description: '', profileImage: '' });
    setErrors({});
    setIsOtpSent(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md space-y-8">
        
        {/* Logo and Brand */}
        <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-4 bg-orange-100 border-2 border-orange-200 rounded-full">
                <HeartPulse className="w-10 h-10 text-orange-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
                NabhaCare
            </h1>
            <p className="text-gray-600 mt-2">
                Connecting Rural Communities to Quality Healthcare
            </p>
        </div>

        {/* Authentication Form */}
        <Card className="bg-white border-gray-200 rounded-2xl shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </CardTitle>
            <p className="text-gray-600">
              {isLogin ? 'Sign in to continue to NabhaCare' : 'Join NabhaCare to access healthcare services'}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Selection */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-700">Login as:</h3>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setUserRole('patient')}
                    className={`p-3 rounded-xl border-2 transition-colors duration-200 flex flex-col items-center justify-center space-y-1 ${
                      userRole === 'patient'
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <User className="h-5 w-5 text-gray-600" />
                    <span className="text-xs font-semibold text-gray-700">Patient</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setUserRole('doctor')}
                    className={`p-3 rounded-xl border-2 transition-colors duration-200 flex flex-col items-center justify-center space-y-1 ${
                      userRole === 'doctor'
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <Stethoscope className="h-5 w-5 text-gray-600" />
                    <span className="text-xs font-semibold text-gray-700">Doctor</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setUserRole('healthcare')}
                    className={`p-3 rounded-xl border-2 transition-colors duration-200 flex flex-col items-center justify-center space-y-1 ${
                      userRole === 'healthcare'
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <Shield className="h-5 w-5 text-gray-600" />
                    <span className="text-xs font-semibold text-gray-700">Healthcare Provider</span>
                  </button>
                </div>
              </div>


              {/* Email field (always shown) */}
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-10 h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Password field (always shown) */}
              <div className="space-y-2">
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-10 h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl"
                  />
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>


              {/* Name and Mobile for signup only */}
              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="pl-10 h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="tel"
                        placeholder="Mobile Number"
                        value={formData.mobileNumber}
                        onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                        maxLength={10}
                        className="pl-10 h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl"
                      />
                    </div>
                    {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
                  </div>

                  {/* Doctor-specific fields */}
                  {userRole === 'doctor' && (
                    <>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Degree <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Stethoscope className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            type="text"
                            placeholder="Degree (e.g. MBBS, MD)"
                            value={formData.degree}
                            onChange={(e) => handleInputChange('degree', e.target.value)}
                            className="pl-10 h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl"
                          />
                        </div>
                        {errors.degree && <p className="text-red-500 text-sm">{errors.degree}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Experience (years) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            type="number"
                            placeholder="Experience in years"
                            value={formData.experience}
                            onChange={(e) => handleInputChange('experience', e.target.value)}
                            min={0}
                            className="pl-4 h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl"
                          />
                        </div>
                        {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Description <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            type="text"
                            placeholder="Short description about you"
                            value={formData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            className="pl-4 h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl"
                          />
                        </div>
                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Profile Image URL <span className="text-gray-400">(optional)</span>
                        </label>
                        <div className="relative">
                          <Input
                            type="text"
                            placeholder="Profile Image URL"
                            value={formData.profileImage}
                            onChange={(e) => handleInputChange('profileImage', e.target.value)}
                            className="pl-4 h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}


              {/* General error */}
              {errors.general && <p className="text-red-500 text-center text-sm">{errors.general}</p>}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 text-lg font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-colors"
              >
                {isLogin ? 'Sign In' : 'Sign Up'}
              </Button>
            </form>


            {/* No OTP resend, removed */}

            {/* Toggle between Login and Signup */}
            <div className="text-center">
              <p className="text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={toggleAuthMode}
                  className="ml-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default Onboarding;

