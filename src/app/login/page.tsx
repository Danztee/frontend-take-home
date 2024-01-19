"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import image from "public/hands_box.jpg";

type Form = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const [form, setForm] = useState<Form>({
    email: "",
    password: "",
  });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    // Add your login logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <>
      <Head>
        <title>Login Organisation | Voto</title>
      </Head>

      <section className="lg:grid grid-cols-2 h-screen">
        <aside className="hidden lg:flex h-screen">
          {/* <Image src={image} alt="register" priority /> */}
        </aside>

        <aside className="px-4 lg:px-0 h-screen lg:overflow-scroll bg-white">
          <div className="lg:px-12 outlet-container lg:w-[500px] min-h-screen flex flex-col justify-center mx-auto">
            <form onSubmit={submitHandler}>
              <h1 className="font-bold text-center mb-6 text-[1.5em] lg:text-[2em] mt-8">
                Login
              </h1>

              <div className="space-y-10">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="email"
                  required
                  className="border w-full p-[0.6rem] outline-none border-[var(--primary-color)] rounded-md bg-transparent"
                />

                <div>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                    placeholder="password"
                    required
                    className="border w-full p-[0.6rem] outline-none border-[var(--primary-color)] rounded-md bg-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="rounded-md bg-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white p-2 px-6 text-white opacity-95 outline-none border-none w-[100%] h-[2.5rem] mt-8 hover:opacity-80"
              >
                Login
              </button>
            </form>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Login;
