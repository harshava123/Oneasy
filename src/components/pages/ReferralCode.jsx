import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function ReferralCode() {
  const navigate = useNavigate()
  const location = useLocation()
  const [referralCode, setReferralCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Handle referral code submission
  const handleSubmitReferral = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Validate referral code
      if (!referralCode.trim()) {
        throw new Error('Please enter a referral code')
      }

      // Simulate API call to verify referral code
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Referral code submitted:', referralCode)
      
      // Store referral information
      const userData = JSON.parse(localStorage.getItem('user') || '{}')
      localStorage.setItem('user', JSON.stringify({
        ...userData,
        referralCode: referralCode,
        hasReferral: true
      }))
      
      // Redirect to client dashboard
      navigate('/client')
      
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  // Handle skip referral
  const handleSkipReferral = () => {
    // Store that user skipped referral
    const userData = JSON.parse(localStorage.getItem('user') || '{}')
    localStorage.setItem('user', JSON.stringify({
      ...userData,
      hasReferral: false,
      skippedReferral: true
    }))
    
    console.log('User skipped referral code')
    navigate('/client')
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Side - Background Image Section */}
      <div className="hidden lg:flex relative ml-6 mt-3 w-1/2 h-132">
        <img
          src="/src/assets/bg.png"
          alt="Login Background"
          className="w-full h-full object-cover rounded-l-3xl"
        />
      </div>

      {/* Right Side - Referral Code Section */}
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
            <h2 className="text-4xl font-semibold text-gray-800 mb-2">Got a referral code?</h2>
            <p className="text-gray-600">
              Got a referral code? Enter it here or skip.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Referral Form */}
          <form onSubmit={handleSubmitReferral} className="space-y-6">
            {/* Referral ID Input */}
            <div>
              <label htmlFor="referralId" className="block text-sm font-medium text-gray-700 mb-2">
                Referral ID
              </label>
              <input
                type="text"
                id="referralId"
                value={referralCode}
                onChange={(e) => {
                  setReferralCode(e.target.value)
                  setError('')
                }}
                placeholder="Enter referral ID / Code"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                disabled={isLoading}
              />
            </div>

            {/* Submit Code Button */}
            <button
              type="submit"
              disabled={isLoading || !referralCode.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit Code'
              )}
            </button>

            {/* Skip Button */}
            <div className="text-center">
              <button
                type="button"
                onClick={handleSkipReferral}
                disabled={isLoading}
                className="text-gray-600 hover:text-gray-800 font-medium transition duration-200 focus:outline-none"
              >
                Skip for Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReferralCode


