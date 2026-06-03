import { supabase } from "@/lib/supabaseClient";

export default async function Home() {
  const { data, error } = await supabase.from("jobs").select("*");

  if (error) {
    console.log(error);
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Jobshub PH 🚀</h1>

      {data?.map((job) => (
        <div key={job.id} style={{ marginBottom: 10 }}>
          <h3>{job.title}</h3>
          <p>{job.company} - {job.location}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </main>
  );
}