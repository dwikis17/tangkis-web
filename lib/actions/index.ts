"use server";

import createSupabaseClient from "../supabase/server";

export default async function readUserSession() {
  const supabase = await createSupabaseClient();

  const { data } = await supabase.auth.getSession();
  return data.session;
}
