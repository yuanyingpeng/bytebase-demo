import { Button } from "../components/ui/Button";
import { supabase } from "../lib/supabase";

export default function Dashboard({ session }) {
    const { user } = session;

    const handleLogout = async () => {
        await supabase.auth.signOut();
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center justify-center">
            <div className="bg-white max-w-md w-full rounded-xl shadow-lg p-8 text-center animate-in zoom-in duration-300">
                <div className="mx-auto w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-100 mb-4">
                    <img
                        src={user.user_metadata.avatar_url || 'https://via.placeholder.com/150'}
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Login Successful!</h1>
                <p className="text-gray-500 mb-6">Welcome back,</p>
                <div className="bg-gray-50 rounded-lg p-4 text-left space-y-3 mb-6 border border-gray-100">
                    <div>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</span>
                        <p className="text-gray-900 font-medium">{user.user_metadata.full_name || user.user_metadata.user_name}</p>
                    </div>
                    <div>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</span>
                        <p className="text-gray-900 font-medium">{user.email}</p>
                    </div>
                </div>
                <Button onClick={handleLogout} variant="outline" className="w-full">
                    Sign out
                </Button>
            </div>
        </div>
    );
}