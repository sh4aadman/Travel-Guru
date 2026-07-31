import { Link } from "react-router";
import Social from "../Social/Social";

function Login() {
  const handleSubmit = (e) => {
    e.repventDefault();
  };

  return (
    <section className="h-[calc(100dvh-120px)] flex flex-col justify-center items-center">
      <section className="px-14 py-9 w-2/5 border border-base-content rounded-sm">
        <h2 className="font-secondary font-bold text-2xl text-accent">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col font-secondary">
          <input
            className="mt-11 border-b border-accent-content text-accent font-medium placeholder:text-accent placeholder:font-medium placeholder:font-secondary placeholder:py-3 focus:outline-0"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="mt-11 border-b border-accent-content text-accent font-medium placeholder:text-accent placeholder:font-medium placeholder:font-secondary placeholder:py-3 focus:outline-0"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <section className="mt-9 flex items-center justify-between">
            <section className="flex items-center gap-2">
              <input
                className="appearance-none w-1.5 h-1.5 outline-1 outline-accent rounded-sm checked:bg-secondary cursor-pointer"
                type="checkbox"
                name="remember"
                id="remember"
                value={"accepted"}
              />
              <label htmlFor="accepted" className="text-accent font-medium">
                Remember Me
              </label>
            </section>
            <Link
              className="text-secondary font-medium underline"
              to={"/forget-password"}
            >
              Forget Password
            </Link>
          </section>
          <button
            className="mt-11 py-3.5 bg-secondary rounded-sm font-medium text-accent cursor-pointer hover:bg-accent hover:text-primary"
            type="submit"
          >
            Login
          </button>
          <p className="mt-4 text-center text-accent font-medium">
            Don't have an account?{" "}
            <Link className="underline text-secondary" to={"/auth/register"}>
              Create an account
            </Link>
          </p>
        </form>
      </section>
      <section className="my-4 flex justify-center items-center gap-2">
        <section className="w-36 border border-base-100"></section>
        <p className="font-secondary font-medium text-accent">Or</p>
        <section className="w-36 border border-base-100"></section>
          </section>
          <Social />
    </section>
  );
}

export default Login;
