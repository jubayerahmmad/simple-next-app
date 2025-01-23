import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isUserAuthenticated = await isAuthenticated();
  console.log(isUserAuthenticated);
  console.log(user);
  return (
    <div className="bg-slate-950 p-4">
      <nav>
        <ul className="flex items-center justify-center gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>

          {isUserAuthenticated ? (
            <>
              {" "}
              <li>
                <LogoutLink>Sign Out</LogoutLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <LoginLink postLoginRedirectURL="/profile">Sign In</LoginLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
