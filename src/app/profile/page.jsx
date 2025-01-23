import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-5xl text-center">Welcome to your Profile!</h1>
      <LogoutLink>
        <button className="px-3 py-1 rounded-md border">Log Out</button>
      </LogoutLink>
    </div>
  );
};

export default Profile;
