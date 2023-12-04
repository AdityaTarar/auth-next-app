import React, { Fragment, useRef, useState } from 'react'
import { HeartIcon, PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import axios from 'axios';
import { Transition, Dialog } from '@headlessui/react';

const Login = () => {
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)
  const handleLogin = async (e: any) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    try {
      const response = await axios.post('https://auth-node-app-ziy4.onrender.com/api/auth/signin', {
        email: email,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response?.status === 200) {
        setOpen(true)
      }
      console.log(response);
    } catch (error: any) {
      alert(error?.response?.data?.message)
      console.error('Error making POST request:', error);
    }
  }
  const SuccessModal = () => {
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <HeartIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Welcome
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Congratulations you have successfully Logged In on IMPACTHUB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Sign In
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
  }
  return (
    <div className='flex justify-center items-center bg-[#FEF6F8] p-12'>
      <div className="flex justify-center items-center flex-col bg-[#fff] p-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center items-center flex-col">
          <UserCircleIcon className="h-32 w-32 text-[#E8486F]" aria-hidden="true" />
          <h2 className="mt-1 text-center text-sm leading-9 tracking-tight text-gray-900">
            Dont't have account? <Link href={'/auth/signup'} className='text-[#E8486F]'>Sign up</Link>
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleLogin}>
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='Email Address'
                  required
                  className="block w-full md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E8486F] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder='Password'
                  required
                  className="block w-full md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E8486F] sm:text-sm sm:leading-6"
                />
              </div>
              <div className="text-sm text-right m-4">
                <a href="#" className=" text-[#E8486F]">
                  Forgot password?
                </a>
              </div>
            </div>

            <p className='text-xs text-center text-gray-400'>By continuing you agree to the imapctHub terms of service and privacy policy</p>
            <div className='flex w-full justify-center gap-20'>
              <button
                type="submit"
                className="flex w-full justify-center md bg-[#E8486F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#E8486F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              <button
                className="flex w-full justify-center md bg-[#fffff] px-3 py-1.5 text-sm font-semibold leading-6 text-[#E8486F] shadow-sm border-solid border-2 border-[#E8486F]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <SuccessModal />
    </div>
  )
}

export default Login