import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function OTPVerification() {
  const navigate = useNavigate()
  const location = useLocation()
  const [otp, setOtp] = useState(['', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [canResend, setCanResend] = useState(false)
  const [resendTimer, setResendTimer] = useState(30)
  const inputRefs = useRef([])

  // Get phone number from location state
  const phoneNumber = location.state?.phoneNumber || '+91 XXXXXXX123'

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return // Prevent multiple characters

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    setError('')

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4)
    const newOtp = [...otp]
    
    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i]
    }
    
    setOtp(newOtp)
    
    // Focus the last filled input or the next empty one
    const lastIndex = Math.min(pastedData.length - 1, 3)
    inputRefs.current[lastIndex]?.focus()
  }

  // Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const otpString = otp.join('')
      
      if (otpString.length !== 4) {
        throw new Error('Please enter the complete 4-digit OTP')
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // For demo purposes, accept any 4-digit OTP
      console.log('OTP verification successful:', otpString)
      
      // Store user data and redirect to referral page
      localStorage.setItem('user', JSON.stringify({
        phoneNumber: phoneNumber,
        loginMethod: 'phone',
        verified: true
      }))
      
      navigate('/referral')
      
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  // Resend OTP
  const handleResendOtp = async () => {
    if (!canResend) return
    
    setIsLoading(true)
    setError('')

    try {
      // Simulate resend API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setOtp(['', '', '', ''])
      setCanResend(false)
      setResendTimer(30)
      
      // Start countdown
      const interval = setInterval(() => {
        setResendTimer(prev => {
          if (prev <= 1) {
            clearInterval(interval)
            setCanResend(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
      
      console.log('OTP resent successfully')
      
    } catch (err) {
      setError('Failed to resend OTP. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Start resend timer on component mount
  useEffect(() => {
    const interval = setInterval(() => {
      setResendTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          setCanResend(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Side - Background Image Section */}
      <div className="hidden lg:flex relative ml-6 mt-3 w-1/2 h-132">
        <img
          src="/src/assets/bg.png"
          alt="Login Background"
          className="w-full h-full object-contain rounded-l-3xl"
        />
      </div>

      {/* Right Side - OTP Verification Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src="/src/assets/logo.png" 
              alt="OnEasy Logo" 
              className="h-12 mx-auto"
            />
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-2">Verify Your Mobile</h2>
            <p className="text-gray-600">
              We've sent a 4-digit OTP to {phoneNumber} via SMS
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* OTP Form */}
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            {/* OTP Input Fields */}
            <div className="flex justify-center space-x-3 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={el => inputRefs.current[index] = el}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  disabled={isLoading}
                />
              ))}
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              disabled={isLoading || otp.join('').length !== 4}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </>
              ) : (
                'Verify & Continue'
              )}
            </button>

            {/* Resend Option */}
            <div className="text-center">
              <p className="text-gray-600">
                Didn't receive code?{' '}
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={!canResend || isLoading}
                  className={`font-medium ${
                    canResend 
                      ? 'text-blue-600 hover:text-blue-700 cursor-pointer' 
                      : 'text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {canResend ? 'Resend' : `Resend in ${resendTimer}s`}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OTPVerification
