import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-10">
      <h1 className="text-5xl text-center">
        Welcome to your Profile {user.given_name}!
      </h1>

      <div className="flex flex-col items-center gap-6">
        <Image
          src={user.picture}
          width={100}
          height={100}
          alt="user image"
          className="rounded-full"
        ></Image>
      </div>
    </div>
  );
};

export default Profile;
