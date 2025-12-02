import { useState } from 'react';
import { supabase } from '../lib/supabase';
import bytebaseLogo from '../images/logo.svg';

const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const MicrosoftIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 21 21">
        <rect x="1" y="1" width="9" height="9" fill="#f25022" />
        <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
        <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
        <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
    </svg>
);

const GithubIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

export default function LoginPage() {
    const [loading, setLoading] = useState(false);

    const handleGithubLogin = async () => {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
                options: { redirectTo: window.location.href },
            });
            if (error) throw error;
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFakeLogin = () => { };

    return (
        // 【移动端优化】使用 min-h-[100dvh] 代替 min-h-screen
        // dVH (Dynamic Viewport Height) 专门解决手机浏览器地址栏遮挡底部内容的问题
        <div className="flex min-h-[100dvh] w-full bg-white">

            {/* 
         【响应式布局】
         hidden lg:block: 手机上隐藏，只有在大屏幕(lg)上才显示
      */}
            <div className="hidden lg:block lg:w-1/2 bg-white"></div>

            {/* 
         【移动端优化】
         w-full: 手机占满 100% 宽度
         overflow-y-auto: 防止小屏幕手机横屏时内容被截断，允许滚动
         py-8: 给上下留出足够呼吸空间
      */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 py-8 overflow-y-auto">
                <div className="w-full max-w-[400px] flex flex-col items-center">

                    <div className="mb-6">
                        {/* Logo 高度设为 h-10 (40px) 适合手机端显示 */}
                        <img src={bytebaseLogo} alt="Bytebase Logo" className="h-10 w-auto" />
                    </div>

                    <h1 className="text-2xl font-medium text-gray-900 mb-2">欢迎</h1>
                    <p className="text-sm text-gray-600 mb-8 text-center px-2">
                        登录 Bytebase 以继续使用 Bytebase Hub。
                    </p>

                    <div className="w-full space-y-3">
                        {/* Google */}
                        <button
                            onClick={handleFakeLogin}
                            className="w-full flex items-center justify-start px-4 py-2.5 bg-white border border-gray-300 rounded transition-all duration-200 hover:shadow-lg hover:bg-gray-100 hover:border-gray-400 group"
                        >
                            <div className="w-6 flex justify-center mr-3"><GoogleIcon /></div>
                            <span className="text-gray-700 text-sm font-medium">继续使用 Google</span>
                        </button>

                        {/* GitHub */}
                        <button
                            onClick={handleGithubLogin}
                            disabled={loading}
                            className="w-full flex items-center justify-start px-4 py-2.5 bg-white border border-gray-300 rounded transition-all duration-200 hover:shadow-lg hover:bg-gray-100 hover:border-gray-400 group"
                        >
                            <div className="w-6 flex justify-center mr-3"><GithubIcon /></div>
                            <span className="text-gray-700 text-sm font-medium">
                                {loading ? '正在连接...' : '继续使用 GitHub'}
                            </span>
                        </button>

                        {/* Microsoft */}
                        <button
                            onClick={handleFakeLogin}
                            className="w-full flex items-center justify-start px-4 py-2.5 bg-white border border-gray-300 rounded transition-all duration-200 hover:shadow-lg hover:bg-gray-100 hover:border-gray-400 group"
                        >
                            <div className="w-6 flex justify-center mr-3"><MicrosoftIcon /></div>
                            <span className="text-gray-700 text-sm font-medium">继续使用 Microsoft Account</span>
                        </button>
                    </div>

                    <div className="w-full relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                            <span className="bg-white px-4 text-gray-500 font-bold">或</span>
                        </div>
                    </div>

                    {/* 输入框部分 */}
                    <div className="w-full space-y-4">
                        <div className="relative">
                            <input
                                type="text"
                                id="email"
                                className="
                  peer w-full h-11 px-3 border border-gray-300 rounded text-base outline-none 
                  text-gray-900 placeholder-transparent bg-transparent
                  focus:border-[#5C5CFF] focus:ring-1 focus:ring-[#5C5CFF] transition-all
                "
                                placeholder=" "
                            />
                            <label
                                htmlFor="email"
                                className="
                  absolute left-3 -top-2.5 bg-white px-1 text-sm text-[#5C5CFF] transition-all 
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2.5 
                  peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#5C5CFF]
                  pointer-events-none
                "
                            >
                                电子邮件地址*
                            </label>
                        </div>

                        {/* 
               【移动端】触屏
               h-11 (44px) 是 iOS/Android 推荐的最小点击区域高度，防止点歪
            */}
                        <button className="w-full h-11 bg-[#5C5CFF] hover:bg-[#4d4dff] text-white font-medium rounded transition-colors shadow-sm">
                            继续
                        </button>
                    </div>

                    <div className="mt-6 text-sm text-gray-600">
                        没有帐户？ <a href="#" className="text-[#5C5CFF] hover:underline">注册</a>
                    </div>

                </div>
            </div>
        </div>
    );
}