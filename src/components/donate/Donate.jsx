import React from "react";
import { useApp } from "../../hooks/useApp";
import { LuX } from "react-icons/lu";

const styles = {
  label: "mt-2",
  select:
    "w-full relative border rounded-md px-3 py-2 ring-offset-background active:ring-2 active:ring-purple-500 active:ring-offset-2",
  option:
    "w-full flex flex-col bg-white z-10 left-0 top-12 absolute h-auto max-h-40 overflow-hidden overflow-y-auto  rounded-b border",
  input:
    "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  textarea:
    "flex min-h-[80px] w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  action: "hidden md:flex bg-purple-500 py-2 px-7 text-purple-100 rounded-md",
};

export default function Donate() {
  const { openDonationModal, toggleDonationModal } = useApp();
  const { handleSubmit } = useForm();
  return (
    <>
      {openDonationModal && (
        <div className="top-0 left-0 bg-purple-900/40 absolute w-full h-screen flex items-center justify-center">
          <article className="relative bg-white w-[400px] mx-auto my-auto h-auto px-3 py-4">
            <button
              onClick={toggleDonationModal}
              className="absolute top-0 right-4"
            >
              <LuX className="absolute top-5 right-4 h-5 w-5 font-semibold text-purple-500" />
            </button>

            <h2 className="text-2xl font-semibold">Donation</h2>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={styles.input}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Email</label>
                  <input
                    type="email"
                    name="name"
                    id="name"
                    className={styles.input}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Amount</label>
                  <input
                    type="number"
                    name="name"
                    id="name"
                    placeholder="Enter Donation Amount"
                    className={styles.input}
                  />
                </div>
                <div className="flex w-full">
                  <button className="bg-purple-500 text-purple-100 py-2 px-3 rounded-md my-4 ml-auto">
                    Proceed
                  </button>
                </div>
              </form>
            </div>
          </article>
        </div>
      )}
    </>
  );
}

function useForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return {};
}
