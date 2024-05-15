'use client';
import { Formik, Form, Field } from 'formik';
import Image from 'next/image';
import { useRegisterParticipantsUser } from '../../../hooks/RegisterUser/useRegisterParticipantsUser';
import Link from 'next/link';

export default function registerUserPage() {
  const { mutationRegisterParticipantsUser } = useRegisterParticipantsUser();

  return (
    <>
      <div className="flex justify-between h-screen">
        <div className="sm:hidden md:bg-black md:w-full md:relative md:flex md:items-center md:text-center md:justify-center">
          <Image
            src="/Register/photo-1533174072545-7a4b6ad7a6c3.avif"
            fill={true}
            quality={100}
            objectFit="cover"
            alt="picture"
            className=" opacity-40"
          />
          <div className="flex flex-col gap-2">
            <span className=" text-5xl font-bold text-gray-100">
              Tidak lagi ketinggalan event dan film favoritmu
            </span>
            <span className="text-md font-bold text-gray-100 text-center">
              Gabung dan rasakan kemudahan bertransaksi dan mengelola event di
              GetTicket.
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3">
          <Formik
            initialValues={{
              email: '',
              username: '',
              password: '',
              inputRef: '',
            }}
            onSubmit={(values) => {
              mutationRegisterParticipantsUser({
                email: values.email,
                username: values.username,
                password: values.password,
                inputRef: values.inputRef,
              });
            }}
          >
            {({ dirty }) => {
              return (
                <Form>
                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex flex-col text-center">
                      <span className="text-xl font-bold">
                        Buat Akun GetTicket.Id Kamu
                      </span>
                      <div className=" text-sm">
                        <span>Sudah punya akun?</span>
                        <Link href={'/participants/login'}>
                          <span className=" pl-1  font-semibold text-blue-900">
                            Masuk
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center w-full">
                      <div className="w-full">
                        <div className="label">
                          <span className="label-text font-semibold">
                            Email
                          </span>
                        </div>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Type your email here"
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div className="w-full">
                        <div className="label">
                          <span className="label-text font-semibold">
                            Username
                          </span>
                        </div>
                        <Field
                          type="text"
                          name="username"
                          placeholder="Type your username here"
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div className="w-full">
                        <div className="label">
                          <span className="label-text font-semibold">
                            Password
                          </span>
                        </div>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Type your password here"
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div className="w-full">
                        <div className="label">
                          <span className="label-text font-semibold">
                            Referral Code
                            <div className="dropdown dropdown-end">
                              <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-circle btn-ghost btn-xs text-info"
                              >
                                <svg
                                  tabIndex={0}
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  className="w-4 h-4 stroke-current"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  ></path>
                                </svg>
                              </div>
                              <div
                                tabIndex={0}
                                className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64"
                              >
                                <div tabIndex={0} className="card-body">
                                  <h2 className="card-title">
                                    Dapet Kupon Gratis?!
                                  </h2>
                                  <p className=" font-light">
                                    Gunakan Kode referral orang lain untuk
                                    mendapat kupon!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                        <Field
                          type="text"
                          name="inputRef"
                          placeholder="Input referral code here"
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div className="w-full">
                        <button
                          disabled={!dirty}
                          className="btn bg-blue-900 text-white w-full"
                          type="submit"
                        >
                          Signup
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}
