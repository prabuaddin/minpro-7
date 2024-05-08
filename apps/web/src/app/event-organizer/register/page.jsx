'use client';
import Image from 'next/image';
import { Formik, Form, Field } from 'formik';
import { useRegisterEoUser } from '../../../hooks/RegisterUser/useRegisterEoUser';
import { RegisterHeader } from '@/components/RegisterHeader';

export default function registerEoUserPage() {
  const { mutationRegisterEoUser } = useRegisterEoUser();
  return (
    <>
      <RegisterHeader />
      <div className="bg-black h-80 relative">
        <Image
          src="/Register/1000_F_310942037_aekjJ5SNvOixyf1zP8U0NsLq6f0Tbex1.jpeg"
          fill={true}
          quality={100}
          objectFit="cover"
          alt="picture"
          className="opacity-40"
        />
        <div className="flex flex-col gap-4 justify-center items-center h-full">
          <span className=" text-4xl font-extrabold text-gray-100 text-center">
            Organizer Signup
          </span>
          <div className="flex gap-2 text-md font-extrabold text-white text-center">
            <span className="z-0 hover:text-blue-500 transition duration-300 cursor-pointer">
              Beranda
            </span>
            <span className="z-0">/ Organizer Signup</span>
          </div>
        </div>
      </div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          username: '',
        }}
        onSubmit={(values) => {
          mutationRegisterEoUser({
            email: values.email,
            password: values.password,
            username: values.username,
          });
        }}
      >
        {({ dirty }) => {
          return (
            <Form>
              <div className="sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center md:gap-5 sm:py-20">
                <div className="flex flex-col text-center gap-2">
                  <span className="text-xl font-bold">
                    Ramaikan GetTicket.Id Dengan Event Mu!
                  </span>
                  <div className=" text-sm">
                    <span>Sudah punya akun?</span>
                    <span className=" pl-1  font-semibold text-blue-900">
                      Masuk
                    </span>
                  </div>
                </div>
                <span className="sm:w-2/4 md:flex md:gap-6">
                  <div className="sm:w-full md:w-1/2">
                    <div className="label">
                      <span className="label-text font-semibold">Email</span>
                    </div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Type your username here"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="sm:w-full md:w-1/2">
                    <div className="label">
                      <span className="label-text font-semibold">Password</span>
                    </div>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Type your password here"
                      className="input input-bordered w-full"
                    />
                  </div>
                </span>
                <span className="w-2/4">
                  <div className="label">
                    <span className="label-text font-semibold">Username</span>
                  </div>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Type your email here"
                    className="input input-bordered w-full"
                  />
                </span>
                <span className="w-2/4">
                  <button
                    disabled={!dirty}
                    className="btn bg-blue-900 text-white w-full"
                    type="submit"
                  >
                    Signup
                  </button>
                </span>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
