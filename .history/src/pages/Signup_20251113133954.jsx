import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'
import { assets } from "../assets/assets.js";
import Input from "../components/Input.jsx";
import { validateEmail } from "../util/vlidation.js";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS } from "../util/apiEndpoints.js";
import { LoaderCircle } from "lucide-react";
import ProfilePhotoSelector from "../components/ProfilePhotoSelector.jsx";
import uploadProfileImage from "../util/uploadProfileImage.js";

const Signup = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [profileImage, setProfileImage] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let profileImageUrl = '';
        setIsLoading(true);

        // simple client-side validation
        if (!fullName.trim()) {
            const msg = 'Please enter a name.';
            setIsLoading(false);
            setError(msg);
            return;
        }

        if (!validateEmail(email)) {
            const msg = 'Please enter a valid email address.';
            setIsLoading(false);
            setError(msg);
            return;
        }

        if (!password.trim()) {
            const msg = 'Please enter a password.';
            setIsLoading(false);
            setError(msg);
            return;
        }

        console.log(fullName, email, password);
        console.log("Profile image file selected:", profileImage);

        setError('');

        // TODO: replace with real signup API call (axios/fetch)
        try {

            //upload image if present
            if (profileImage) {
                console.log("Starting image upload to Cloudinary...");
                profileImageUrl = await uploadProfileImage(profileImage);
                console.log("Image upload result:", profileImageUrl);
                profileImageUrl = profileImageUrl || '';
            } else {
                console.log("No profile image selected");
            }

            console.log("Sending to backend - profilePictureUrl:", profileImageUrl);
            
            setIsLoading(true);
            const response = await axiosConfig.post(API_ENDPOINTS.register, {
                fullName,
                email,
                password,
                profilePictureUrl: profileImageUrl  // Changed to match backend field name
            })
            console.log("Signup response:", response.data);
            console.log("Profile image sent:", profileImageUrl);
            
            if (response.status === 200) {
                toast.success('Profile created successfully');
                // Clear form
                setFullName('');
                setEmail('');
                setPassword('');
                setProfileImage(null);
                // Navigate to login page
                navigate('/login');
            }
        } catch (err) {
            console.error(err);
            const msg = 'Signup failed. Please try again.';
            setError(msg);
            toast.error(msg);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            {/* Background image with blure */}
            <img src={assets.login_bg} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover blur-sm" />

            <div className="relative z-10 w-full max-w-lg px-6">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
                    <h2 className="text-2xl font-semibold text-center">Create an account</h2>
                        <p className="text-center">Start tracking your expenses by joining us</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                       <div className="flex justify-center mb-6">
                            <ProfilePhotoSelector image={profileImage} setImage={setProfileImage} />
                       </div>
                       <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                            <Input
                                label="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Enter your full name"
                            />
                            <Input
                                label="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                            <div className="col-span-2">
                                <Input
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                type="password"
                            />
                            </div>
                       </div>
                       {error && <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{error}</p>}
                       <button disabled={isLoading} type="submit" className={`w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                            {isLoading ? ( 
                                <>
                                    <LoaderCircle className="animate-spin w-5 h-5 inline-block mr-2" />
                                    Signing up...
                                </>
                            ) : (
                                "Sign up"
                            )}
                        </button>
                        <p className="text-sm text-center">
                            Already have an account?
                            <Link to="/login" className="text-blue-500 hover:underline"> Log in</Link>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signup;