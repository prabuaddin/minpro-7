'use client';
import { IoTicket } from 'react-icons/io5';
import Link from 'next/link';
import { Formik, Form, Field } from 'formik';
import { useLoginEoUser } from '../../../hooks/LoginUser/useLoginUser';

export default function EoLoginPage() {
  const { mutationLoginEoUser } = useLoginEoUser();
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          mutationLoginEoUser({
            email: values.email,
            password: values.password,
          });
        }}
      >
        <Form>
          <div className="flex flex-col justify-center items-center pt-28 h-screen">
            <div>
              <Link className="btn btn-ghost text-2xl text-blue-900" href="/">
                <IoTicket size={30} /> GetTicket.Id
              </Link>
            </div>
            <div className="flex flex-col text-center gap-2">
              <span className="text-xl font-bold">
                Masuk untuk membuat event
              </span>
              <div className=" text-sm">
                <span>Belum punya akun?</span>
                <Link href={'/event-organizer/register'}>
                  <span className=" pl-1  font-semibold text-blue-900">
                    Daftar
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-2/4">
              <div className="sm:w-full md:w-2/4">
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
              <div className="sm:w-full md:w-2/4">
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
              <span className="sm:w-full md:w-2/4 pt-6">
                <button
                  className="btn bg-blue-900 text-white w-full"
                  type="submit"
                >
                  Login
                </button>
              </span>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}
