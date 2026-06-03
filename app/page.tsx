import { supabase } from "@/lib/supabaseClient";

export default async function Home() {
  const { data, error } = await supabase.from("test").select("*");

  return (
    <main>
      <h1>Jobshub PH 🚀</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>

      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </main>
  );
}