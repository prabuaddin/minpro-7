'use client';
import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SideBar from '../../../components/profile/sidebar/index';
import PointsAndDiscount from '../../../components/profile/pointAndVoucher/index';
import { useUpdateUser } from '../../../hooks/UpdateUser/useUpdateUser';
import { RxAvatar } from 'react-icons/rx';

export default function profile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [refcode, setRefcode] = useState('');

  const { mutationUpdateUser } = useUpdateUser();

  const stateUser = useSelector((state) => state.user);

  const getData = localStorage.getItem('persist:main-root');
  const Data = JSON.parse(getData);
  const user = Data.user;
  const userData = JSON.parse(user);

  useEffect(() => {
    if (stateUser?.username) {
      setUsername(stateUser.username);
      setEmail(stateUser.email);
      setRefcode(stateUser.refcode);
    }
  }, [stateUser]);

  useEffect(() => {
    if (stateUser?.username) {
      setUsername(stateUser.username);
      setEmail(stateUser.email);
      setRefcode(stateUser.refcode);
    }
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          email: userData.email || 'email',
          username: userData.username || 'user',
        }}
        onSubmit={(values) => {
          mutationUpdateUser({
            username: values.username,
            email: values.email,
          });
        }}
      >
        <Form>
          <div className="flex gap-7 h-auto">
            <SideBar />

            <div className="flex flex-col gap-3 items-start pt-10 sm:w-full md:w-3/5">
              <div className="flex flex-col w-full gap-3 text-2xl">
                <div className="font-bold flex">Informasi Dasar</div>

                <div className="divider"></div>

                <RxAvatar className="object-cover w-24 h-24 mx-2 rounded-full text-black sm:block: md:hidden" />

                <Field
                  name="email"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <Field
                  name="username"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <span className="sm:w-full lg:w-2/4 pt-6">
                  <button
                    className="btn bg-blue-900 text-white w-full max-w-xs"
                    type="submit"
                  >
                    Update
                  </button>
                </span>
                <span className="pt-5 text-lg">
                  Code: <span className="text-lg font-bold">{refcode}</span>
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
                        <p className=" font-light">
                          Undang orang lain dengan kode ini, dan dapatkan poin!
                        </p>
                      </div>
                    </div>
                  </div>
                </span>
                <PointsAndDiscount />
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}
