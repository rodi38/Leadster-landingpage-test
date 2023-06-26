export async function fetchData() {
  const res = await fetch(`https://json-server-dbtestevercel.vercel.app/videos`);
  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  return res.json();
}

export async function updateData() {
    const data = await fetchData();
    return await Promise.all(data);
}

