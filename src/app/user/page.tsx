import User from "@/app/components/User/UserInfo";

async function fetchUser() {
  const res = await fetch('https://dummyjson.com/users/1')

  if (!res.ok) {
    throw new Error('Failed to fetch API')
  }

  return res.json()
}

/**
 * ユーザーに関するページ
 */
export default async function UserPage() {
  const user = await fetchUser()

  return <User name={user.firstName} />;
}
