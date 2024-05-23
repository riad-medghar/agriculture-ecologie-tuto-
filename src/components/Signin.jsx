import React from "react";
import Heading from "./Heading";
import Section from "./Section";
import Button from "./Button";

const SignIn = () => {
  return (
    <Section className="overflow-hidden" id="sign-in">
      <div className="container md:pb-10">
        <Heading tag="Bienvenue !" title="Connectez-vous à votre compte" />
        <div className="flex flex-col items-center mt-12 md:mt-15 xl:mt-20">
          <form className="w-full max-w-sm">
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
                Mot de passe
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-n-8 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <Button className="px-4 py-2" href="#">
                Se connecter
              </Button>
              <a
                className="inline-block align-baseline font-bold text-sm text-n-6 hover:text-n-8"
                href="#"
              >
                Mot de passe oublié ?
              </a>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-n-8">Ou connectez-vous avec :</p>
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

export default SignIn;
