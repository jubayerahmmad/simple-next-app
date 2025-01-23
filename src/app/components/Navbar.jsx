import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <div className="bg-slate-100 p-4">
      <nav>
        <ul className="flex items-center justify-center gap-6 text-xl font-semibold">
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
