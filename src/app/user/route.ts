import { fetchUser } from "@/model/users";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log("🚀 ~ GET ~ searchParams:", searchParams)
  const name = searchParams.get('name');
  console.log('🚀 ~ GET ~ name:', name);

  await new Promise((r) => {
    setTimeout(r, 5000);
  });

  const user = await fetchUser(name);

  return Response.json({ user });
}
