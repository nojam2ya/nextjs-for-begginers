import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieVideo({ id }: { id: string }) {
  const video = await getVideos(id);
  return <div>{JSON.stringify(video)}</div>;
}
