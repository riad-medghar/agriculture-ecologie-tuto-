import React from "react";
import Heading from "./Heading";
import Section from "./Section";
import Button from "./Button";

const SignIn = () => {
  return (
    <Section className="overflow-hidden" id="sign-in">
      <div className="container md:pb-10">
        <Heading tag="Welcome Back!" title="Sign in to Your Account" />
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
            <div className="flex items-center justify-between">
              <Button className="px-4 py-2" href="#">
                Sign In
              </Button>
              <a
                className="inline-block align-baseline font-bold text-sm text-n-6 hover:text-n-8"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default SignIn;
