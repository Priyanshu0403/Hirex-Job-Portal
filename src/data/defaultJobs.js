import jobPostings from "./jobPosting.json";

export const defaultCompanies = [
  { id: "1", name: "Amazon", logo_url: "/companies/amazon.svg", isDemo: true },
  { id: "2", name: "Atlassian", logo_url: "/companies/atlassian.svg", isDemo: true },
  { id: "3", name: "Google", logo_url: "/companies/google.webp", isDemo: true },
];

const companiesById = Object.fromEntries(
  defaultCompanies.map((company) => [company.id, company])
);

export const defaultJobs = jobPostings.map((job, index) => ({
  ...job,
  id: `local-job-${index + 1}`,
  company: companiesById[job.company_id],
  saved: [],
  applications: [],
  isOpen: true,
  isDemo: true,
}));

export const getDefaultJobs = ({
  location,
  company_id: companyId,
  searchQuery,
  page = 1,
  limit = defaultJobs.length,
} = {}) => {
  const normalizedSearch = searchQuery?.trim().toLowerCase();
  const filteredJobs = defaultJobs.filter((job) => {
    const matchesLocation = !location || job.location === location;
    const matchesCompany = !companyId || job.company_id === companyId;
    const matchesSearch =
      !normalizedSearch || job.title.toLowerCase().includes(normalizedSearch);

    return matchesLocation && matchesCompany && matchesSearch;
  });

  const start = (page - 1) * limit;
  return filteredJobs.slice(start, start + limit);
};

export const getDefaultJob = (jobId) =>
  defaultJobs.find((job) => job.id === jobId) ?? null;
