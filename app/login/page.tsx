"use client";

import readUserSession from "@/lib/actions";
import useSupabase from "@/lib/supabase/client";
import { read } from "fs";
import { useEffect } from "react";

const LoginPage = () => {
  const supabase = useSupabase();

  async function handleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center">Login</h1>
        <button
          className="w-full px-4 py-2 mb-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={handleLogin}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
