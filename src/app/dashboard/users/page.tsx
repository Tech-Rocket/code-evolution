import Link from "next/link";

const Users = () => {
  return (
    <div className="m-2">
        <h1>Dashboard Users</h1>
        <ul className="mt-4">
        <li><Link href="/dashboard/users/1">User 1</Link></li>
        <li><Link href="/dashboard/users/2">User 2</Link></li>
        <li><Link href="/dashboard/users/3">User 3</Link></li>
        <li><Link href="/dashboard/users/4">User 4</Link></li>
        <li><Link href="/dashboard/users/5c">User 5</Link></li>
        </ul>
    </div>
  )
}

export default Users;