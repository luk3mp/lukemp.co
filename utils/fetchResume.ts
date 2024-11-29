export const fetchResume = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getResume`);

  if (!res.ok) {
    console.error("Failed to fetch resume");
    return null;
  }

  const data = await res.json();
  return data.resumeUrl;
};
