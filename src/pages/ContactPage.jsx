import { useState } from "react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        bio: ''
    });

    const [errors, setErrors] = useState({});

    const validateField = (field, value) => {
        let error = '';
        switch (field) {
            case 'firstName':
            case 'lastName':
                if (!value.trim()) {
                    error = `${field === 'firstName' ? 'First' : 'Last'} name is required`;
                } else if (value.length < 2) {
                    error = `${field === 'firstName' ? 'First' : 'Last'} name must be at least 2 characters`;
                }
                break;
            case 'email':
                if (!value.trim()) {
                    error = 'Email is required';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = 'Please enter a valid email address';
                }
                break;
            case 'phone':
                if (!value.trim()) {
                    error = 'Phone number is required';
                } else if (!/^\+?[\d\s-]{10,}$/.test(value)) {
                    error = 'Please enter a valid phone number';
                }
                break;
            case 'gender':
                if (!value) {
                    error = 'Please select a gender';
                }
                break;
            case 'bio':
                if (!value.trim()) {
                    error = 'Bio is required';
                } else if (value.length < 10) {
                    error = 'Bio must be at least 10 characters';
                } else if (value.length < 10) {
                    error = 'Bio must be at least 10 characters';
                }
                break;
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        Object.keys(formData).forEach((field) => {
            const error = validateField(field, formData[field]);
            if (error) {
                newErrors[field] = error;
            }
        });

        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
            alert('Form submitted successfully!');
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="max-w-[800px] mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-8 text-[#FBBF24]">Contact Us</h2>
            <div className="bg-[#1E293B] rounded-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-[1fr]">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-[#334155] rounded-lg text-[#F8FAFC] placeholder-[#94A3B8] outline-none border border-[#475569] focus:border-[#FBBF24] transition-all duration-300"
                                placeholder="Enter your first name"
                            />
                            {errors.firstName && <p className="mt-2 text-sm text-red-500">{errors.firstName}</p>}
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-[#334155] rounded-lg text-[#F8FAFC] placeholder-[#94A3B8] outline-none border border-[#475569] focus:border-[#FBBF24] transition-all duration-300"
                                placeholder="Enter your last name"
                            />
                            {errors.lastName && <p className="mt-2 text-sm text-red-500">{errors.lastName}</p>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#334155] rounded-lg text-[#F8FAFC] placeholder-[#94A3B8] outline-none border border-[#475569] focus:border-[#FBBF24] transition-all duration-300"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#334155] rounded-lg text-[#F8FAFC] placeholder-[#94A3B8] outline-none border border-[#475569] focus:border-[#FBBF24] transition-all duration-300"
                            placeholder="Enter your phone number"
                        />
                        {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Gender</label>
                        <div className="flex gap-6">
                            {['male', 'female', 'other'].map((gender) => (
                                <label key={gender} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={gender}
                                        checked={formData.gender === gender}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-[#FBBF24] bg-[#334155] border-[#475569] focus:ring-[#FBBF24]"
                                    />
                                    <span>{gender.charAt(0).toUpperCase() + gender.slice(1)}</span>
                                </label>
                            ))}
                        </div>
                        {errors.gender && <p className="mt-2 text-sm text-red-500">{errors.gender}</p>}
                    </div>
                    <div>
                        <label htmlFor="bio" className="block text-sm font-medium mb-2">Bio</label>
                        <textarea
                            id="bio"
                            name="bio"
                            rows="4"
                            value={formData.bio}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#334155] rounded-lg text-[#F8FAFC] placeholder-[#94A3B8] outline-none border border-[#475569] focus:border-[#FBBF24] transition-all duration-300"
                            placeholder="Tell us about yourself"
                        ></textarea>
                        {errors.bio && <p className="mt-2 text-sm text-red-500">{errors.bio}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-[#FBBF24] text-[#1E293B] px-8 py-3 rounded-lg font-medium hover:bg-[#F59E0B] hover:shadow-lg transition-all duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;