import React from "react";
import Heading from "./Heading";
import Section from "./Section";
import Button from "./Button";

const SignUp = () => {
  return (
    <Section className="overflow-hidden" id="sign-up">
      <div className="container md:pb-10">
        <Heading tag="Join Us!" title="Create a New Account" />
        <div className="flex flex-col items-center mt-12 md:mt-15 xl:mt-20">
          <form className="w-full max-w-sm">
            <div className="mb-4">
              <label
                className="block text-n-8 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-n-8 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-n-8 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-n-8 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-n-8 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-n-8 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-n-8 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-n-8 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="********"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <Button className="px-4 py-2" href="#">
                Create Account
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-n-8">Or sign up using:</p>
              <Button className="mx-2" href="#">
                Google
              </Button>
              <Button className="mx-2" href="#">
                Facebook
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default SignUp;
