import supabaseClient from "@/utils/supabase";

// Fetch Jobs
export async function getJobs(token, { location, company_id, searchQuery }) {
  const supabase = await supabaseClient(token);
  let query = supabase
    .from("jobs")
    .select("*, saved: saved_jobs(id), company: companies(name,logo_url)");

  if (location) {
    query = query.eq("location", location);
  }

  if (company_id) {
    query = query.eq("company_id", company_id);
  }

  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching Jobs:", error);
    return null;
  }

  return data;
}


// Read single job
export async function getSingleJob(token, { job_id }) {
  const supabase = await supabaseClient(token);
  let query = supabase
  .from("jobs")
  .select(
    "*, company: companies(name,logo_url), applications: applications(*)"
  )
  .eq("id", job_id)
  .single();
  
  const { data, error } = await query;
  
  if (error) {
    console.error("Error fetching Job:", error);
    return null;
  }
  
  return data;
}

// - Add / Remove Saved Job
export async function saveJob(token, params) {
  const supabase = await supabaseClient(token);

  const { alreadySaved, user_id, job_id } = params;

  if (!user_id || !job_id) {
    console.error("Missing user_id or job_id:", { user_id, job_id });
    return [];
  }

  if (alreadySaved) {
    const { data, error } = await supabase
      .from("saved_jobs")
      .delete()
      .eq("user_id", user_id)
      .eq("job_id", job_id);

    if (error) {
      console.error("Error removing saved job:", error);
      return [];
    }

    return data;
  } else {
    const { data, error } = await supabase
      .from("saved_jobs")
      .insert([{ user_id, job_id }])
      .select();

    if (error) {
      console.error("Error saving job:", error);
      return [];
    }

    return data;
  }
}


// - job isOpen toggle - (recruiter_id = auth.uid())
export async function updateHiringStatus(token, { job_id }, isOpen) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
  .from("jobs")
  .update({ isOpen })
  .eq("id", job_id)
  .select();
  
  if (error) {
    console.error("Error Updating Hiring Status:", error);
    return null;
  }
  
  return data;
}

export async function addNewJob(token, _ ,jobData) {
  const supabase = await supabaseClient(token);
  
  const {data,error} = await supabase
  .from("jobs")
  .insert([jobData])
  .select();
  
  if(error){
    console.error("Error creating new Job",error);
    return null;
  }
  return data;
}

export async function getSavedJobs(token){
  const supabase = await supabaseClient(token);
  const {data,error} = await supabase
    .from("saved_jobs")
    .select("*, job: jobs(*, company: companies(name,logo_url))");

  if(error){
    console.error("Error fetching saved jobs", error);
    return null;
  }

  return data;
}

export async function getMyJobs(token,{recruiter_id}){
  const supabase = await supabaseClient(token);
  const {data,error} = await supabase
    .from("jobs")
    .select("*, company: companies(name,logo_url)")
    .eq("recruiter_id", recruiter_id);

  if(error){
    console.error("Error fetching My jobs", error);
    return null;
  }

  return data;
}
export async function deleteJob(token,{job_id}){
  const supabase = await supabaseClient(token);
  const {data,error} = await supabase
    .from("jobs")
    .delete()
    .eq("id", job_id)
    .select();

  if(error){
    console.error("Error Deleting jobs", error);
    return null;
  }

  return data;
}
