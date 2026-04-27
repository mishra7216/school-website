import React, { useEffect, useState } from 'react';
import { 
  FileText, Phone, CheckCircle2, User, Users, PhoneCall, 
  GraduationCap, School, BookOpen, Star, Shield, Award,
  ChevronRight, ArrowRight, Sparkles, Mail, MapPin
} from 'lucide-react';

const AdmissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    targetClass: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent name is required';
    if (!formData.phone.match(/^[0-9]{10}$/)) newErrors.phone = 'Enter a valid 10-digit number';
    if (!formData.targetClass) newErrors.targetClass = 'Please select a class';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitError('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '1db7caf1-cbcf-40a5-a4a5-1308ac0ff342',
          subject: `New Admission Enquiry — ${formData.studentName} (${formData.targetClass})`,
          from_name: 'LKPS Admission Portal',
          'Student Name': formData.studentName,
          'Parent Name': formData.parentName,
          'Phone Number': formData.phone,
          'Applying for Class': formData.targetClass,
          'Message / Remarks': formData.message || 'No additional remarks',
        })
      });
      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        setFormData({ studentName: '', parentName: '', phone: '', targetClass: '', message: '' });
      } else {
        setSubmitError('Something went wrong. Please try again or call us directly.');
      }
    } catch (err) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    {
      num: "01",
      title: "Submit Application",
      icon: <FileText className="w-6 h-6" />,
      desc: "Fill out the online enquiry form with your child's details and your contact information."
    },
    {
      num: "02",
      title: "Document Verification",
      icon: <Shield className="w-6 h-6" />,
      desc: "Our admissions team will review your application and call for document verification."
    },
    {
      num: "03",
      title: "Student Interaction",
      icon: <Users className="w-6 h-6" />,
      desc: "A brief, warm interaction session with the student and parents at our campus."
    },
    {
      num: "04",
      title: "Seat Confirmation",
      icon: <Award className="w-6 h-6" />,
      desc: "Welcome to the Little Kingdom family! Complete the fee submission to confirm your seat."
    }
  ];

  const highlights = [
    { icon: <Star className="w-5 h-5 text-[#D4AF37]" />, text: "District Toppers 2023–24 & 2025–26" },
    { icon: <Shield className="w-5 h-5 text-[#D4AF37]" />, text: "Safe & Secure Campus Environment" },
    { icon: <BookOpen className="w-5 h-5 text-[#D4AF37]" />, text: "State-of-the-art Labs & Library" },
    { icon: <Award className="w-5 h-5 text-[#D4AF37]" />, text: "Holistic Education Since 2009" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3FF] font-sans">

      {/* ═══════════════════════════════════════════
          ROYAL HERO BANNER
      ═══════════════════════════════════════════ */}
      <div className="relative overflow-hidden">
        {/* Deep royal gradient background */}
        <div className="bg-gradient-to-br from-deepblue via-[#311B92] to-primary py-24 sm:py-32 px-4">
          {/* Decorative background orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[60px] pointer-events-none"></div>

          {/* Decorative grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            {/* Left: Hero Copy */}
            <div className="text-center lg:text-left lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-white/20 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <Sparkles size={14} />
                <span>Admissions Open — Session 2026–27</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 drop-shadow-lg">
                Shape Your Child's<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37]">
                  Brilliant Future
                </span>
              </h1>
              <p className="text-white/75 text-lg font-medium leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Join Baihar's largest and most trusted school since 2009. A place where academic excellence meets inspiring values.
              </p>

              {/* Credential Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0">
                {highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 text-white text-sm font-semibold shadow-sm">
                    {h.icon}
                    <span className="text-white/90">{h.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Decorative Royal Emblem Visual */}
            <div className="hidden lg:flex lg:w-2/5 justify-center items-center">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="w-72 h-72 rounded-full border-4 border-[#D4AF37]/30 absolute inset-0 scale-110 animate-pulse pointer-events-none"></div>
                {/* Main badge circle */}
                <div className="w-72 h-72 rounded-full bg-white/10 backdrop-blur-md border-4 border-[#D4AF37]/60 flex items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.2)]">
                  <img src="/logo.png" alt="LKPS Logo" className="w-48 h-48 object-contain drop-shadow-lg" onError={(e) => { e.target.style.display='none'; }} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Elegant curved bottom divider */}
        <div className="bg-[#F5F3FF]">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="-mt-1 block">
            <path d="M0 0 C360 60 1080 60 1440 0 L1440 60 L0 60 Z" fill="#F5F3FF"/>
          </svg>
        </div>
      </div>


      {/* ═══════════════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">

        {/* ─── Four Step Process ─── */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-3">Simple & Transparent</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deepblue tracking-tight">
              Four Steps to Join Us
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-[#D4AF37] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="group relative bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(69,39,160,0.08)] border border-purple-100 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(69,39,160,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Accent line on top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#7B1FA2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-3xl"></div>

                {/* Step Number Watermark */}
                <div className="absolute top-4 right-4 text-6xl font-extrabold text-primary/5 leading-none select-none">{step.num}</div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-lightblue flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  {step.icon}
                </div>

                <h3 className="text-lg font-extrabold text-deepblue mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>

                {/* Arrow connector for non-last items */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md border border-purple-100 items-center justify-center">
                    <ChevronRight size={14} className="text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* ─── Main Two-Column: Info + Form ─── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* Info sidebar */}
          <div className="lg:w-2/5 space-y-6">

            {/* Royal info card */}
            <div className="relative bg-gradient-to-br from-deepblue via-[#311B92] to-primary rounded-3xl p-8 text-white overflow-hidden shadow-[0_20px_50px_rgba(40,23,92,0.25)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-20 translate-x-20 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full translate-y-20 -translate-x-10 pointer-events-none blur-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
                    <School className="text-[#D4AF37] w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">Why Choose LKPS?</h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Largest institution in Baihar",
                    "Consistent board exam toppers",
                    "Expert, experienced faculty",
                    "Advanced computer & science labs",
                    "Premier sports infrastructure",
                    "District's biggest annual cultural fest"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/85 font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={12} className="text-[#D4AF37]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-white/60 text-xs uppercase tracking-widest mb-2 font-bold">Established</div>
                  <div className="text-[#D4AF37] font-extrabold text-3xl font-cinzel">2009</div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-[0_4px_20px_rgba(69,39,160,0.08)]">
              <h3 className="text-lg font-extrabold text-deepblue mb-5">Reach Our Admission Desk</h3>
              <div className="space-y-4">
                <a href="tel:+917566173757" className="flex items-center gap-4 p-4 rounded-2xl bg-lightblue hover:bg-primary/10 border border-purple-100 hover:border-primary/30 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-sm shadow-primary/30">
                    <PhoneCall size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Call Us</div>
                    <div className="text-deepblue font-extrabold text-base">+91 75661 73757</div>
                  </div>
                  <ChevronRight size={16} className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="mailto:baiharlkps@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-lightblue hover:bg-primary/10 border border-purple-100 hover:border-primary/30 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-sm shadow-primary/30">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Email Us</div>
                    <div className="text-deepblue font-extrabold text-base">baiharlkps@gmail.com</div>
                  </div>
                  <ChevronRight size={16} className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-lightblue border border-purple-100">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-sm shadow-primary/30">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Address</div>
                    <div className="text-deepblue font-extrabold text-sm">Balaghat Road, Baihar, Dist. Balaghat, M.P.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* The Royal Admission Form Card */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(69,39,160,0.12)] border border-purple-100 overflow-hidden">

              {/* Form Header Band */}
              <div className="bg-gradient-to-r from-primary to-[#311B92] px-8 sm:px-12 py-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FileText className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Admission Enquiry</h2>
                    <p className="text-white/70 text-sm mt-0.5">We'll contact you within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="px-8 sm:px-12 py-10">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-[0_0_0_8px_rgba(134,239,172,0.2)]">
                      <CheckCircle2 size={44} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-deepblue mb-3">Enquiry Submitted!</h3>
                    <p className="text-gray-500 font-medium max-w-sm">Thank you for reaching out. Our admissions team will contact you shortly on your registered number.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>

                    {/* Row 1: Student & Parent Names */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Student's Full Name <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          <input
                            type="text"
                            value={formData.studentName}
                            onChange={(e) => { setFormData({...formData, studentName: e.target.value}); setErrors({...errors, studentName: ''}); }}
                            placeholder="Child's full name"
                            className={`w-full pl-11 pr-4 py-3.5 bg-[#F5F3FF] border ${errors.studentName ? 'border-red-400 bg-red-50' : 'border-purple-100'} rounded-2xl text-deepblue font-semibold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm`}
                          />
                        </div>
                        {errors.studentName && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.studentName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Parent / Guardian Name <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          <input
                            type="text"
                            value={formData.parentName}
                            onChange={(e) => { setFormData({...formData, parentName: e.target.value}); setErrors({...errors, parentName: ''}); }}
                            placeholder="Your full name"
                            className={`w-full pl-11 pr-4 py-3.5 bg-[#F5F3FF] border ${errors.parentName ? 'border-red-400 bg-red-50' : 'border-purple-100'} rounded-2xl text-deepblue font-semibold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm`}
                          />
                        </div>
                        {errors.parentName && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.parentName}</p>}
                      </div>
                    </div>

                    {/* Row 2: Phone & Class */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Mobile Number <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => { setFormData({...formData, phone: e.target.value}); setErrors({...errors, phone: ''}); }}
                            placeholder="10-digit number"
                            className={`w-full pl-11 pr-4 py-3.5 bg-[#F5F3FF] border ${errors.phone ? 'border-red-400 bg-red-50' : 'border-purple-100'} rounded-2xl text-deepblue font-semibold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm`}
                          />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Applying for Class <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <GraduationCap size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          <select
                            value={formData.targetClass}
                            onChange={(e) => { setFormData({...formData, targetClass: e.target.value}); setErrors({...errors, targetClass: ''}); }}
                            className={`w-full pl-11 pr-4 py-3.5 bg-[#F5F3FF] border ${errors.targetClass ? 'border-red-400 bg-red-50' : 'border-purple-100'} rounded-2xl text-deepblue font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm appearance-none cursor-pointer`}
                          >
                            <option value="" disabled className="text-gray-400">Select class</option>
                            <option value="Pre-Nursery">Pre-Nursery</option>
                            <option value="LKG">LKG</option>
                            <option value="UKG">UKG</option>
                            <option value="Class 1–5">Class 1 to 5</option>
                            <option value="Class 6–8">Class 6 to 8</option>
                            <option value="Class 9–10">Class 9 to 10</option>
                            <option value="Class 11–12">Class 11 to 12</option>
                          </select>
                        </div>
                        {errors.targetClass && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.targetClass}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Questions / Remarks <span className="text-gray-400 font-normal normal-case">(optional)</span></label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Any specific queries or information you'd like to know..."
                        className="w-full p-4 bg-[#F5F3FF] border border-purple-100 rounded-2xl text-deepblue font-semibold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-sm"
                      ></textarea>
                    </div>

                    {/* Submit Error Message */}
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-semibold px-4 py-3 rounded-xl">
                        {submitError}
                      </div>
                    )}

                    {/* Royal Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full relative overflow-hidden bg-gradient-to-r from-primary to-[#311B92] hover:from-[#311B92] hover:to-primary disabled:opacity-70 disabled:cursor-not-allowed text-white py-5 rounded-2xl font-extrabold text-base tracking-wide shadow-[0_8px_30px_rgba(69,39,160,0.35)] hover:shadow-[0_12px_40px_rgba(69,39,160,0.45)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Admission Enquiry</span>
                          <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                          {/* Shimmer on button */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none"></div>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-400 font-medium">
                      Your information is kept private and will only be used for admission correspondence.
                    </p>

                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
