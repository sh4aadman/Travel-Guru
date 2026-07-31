import { Link } from "react-router";
import Social from "../Social/Social";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="h-[calc(100dvh-120px)] flex flex-col justify-center items-center">
      <section className="px-14 py-9 w-2/5 border border-base-content rounded-sm">
        <h2 className="font-secondary font-bold text-2xl text-accent">
          Create an account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col font-secondary">
          <input
            className="mt-11 border-b border-accent-content text-accent font-medium placeholder:text-accent placeholder:font-medium placeholder:font-secondary placeholder:py-3 focus:outline-0"
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
          />
          <input
            className="mt-11 border-b border-accent-content text-accent font-medium placeholder:text-accent placeholder:font-medium placeholder:font-secondary placeholder:py-3 focus:outline-0"
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
          />
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
          <input
            className="mt-11 border-b border-accent-content text-accent font-medium placeholder:text-accent placeholder:font-medium placeholder:font-secondary placeholder:py-3 focus:outline-0"
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
          />
          <button
            className="mt-11 py-3.5 bg-secondary rounded-sm font-medium text-accent cursor-pointer hover:bg-accent hover:text-primary"
            type="submit"
          >
            Create an account
          </button>
          <p className="mt-4 text-center text-accent font-medium">
            Already have an account?{" "}
            <Link className="underline text-secondary" to={"/auth/login"}>
              Login
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

export default Register;
