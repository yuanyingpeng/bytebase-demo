import { twMerge } from 'tailwind-merge';

export function Button({ children, className, variant = 'primary', icon, ...props }) {
    const baseStyles = "w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500",
        outline: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-200",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-600"
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {icon && <span className="w-5 h-5 flex items-center">{icon}</span>}
            {children}
        </button>
    );
}