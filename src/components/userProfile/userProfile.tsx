import { useUser } from "./context";






export default function UserProfile() {
  const { user } = useUser();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">پروفایل کاربری</h1>
      {user ? (
        <div>
          <p>نام کاربری: {user.name}</p>
        </div>
      ) : (
        <p>لطفاً وارد شوید.</p>
      )}
    </div>
  );
}
