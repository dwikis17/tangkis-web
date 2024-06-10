"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useSupabase from "@/lib/supabase/client";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useUser } from "@/contexts/UserContext";
import { log } from "console";

const Page = () => {
  const supabase = useSupabase();
  const router = useRouter();
  const user = useUser();

  const logout = async () => {
    await user.signOut();
    router.push("/login");
  };

  useEffect(() => {
    console.log(user);
  });

  return (
    <ProtectedRoute>
      <>
        <h1>Protected Content</h1>
        <p>
          This content is only visible to authenticated users.
          {user.user?.user_metadata.name}
        </p>
        <button onClick={logout}>logout</button>
      </>
    </ProtectedRoute>
  );
};

export default Page;
