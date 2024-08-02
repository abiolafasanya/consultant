import { useState } from "react";
import { useForm } from "./hook/useForm";

export default function ConsultationForm() {
  const { error, handleSubmit, success, ...props } = useForm();
  return (
    <section className=" py-16 px-5 w-full">
      <div className="bg-white rounded shadow-sm px-5 py-4 md:w-1/2 mx-auto">
        <h2 className="text-2xl font-semibold">Consultation Form</h2>
      {success && (
        <article className="my-4 py-3 px-2 border-2 rounded-md border-purple-400 bg-purple-100 text-purple-700">
          {success}
        </article>
      )}
        <form className="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname" className={styles.label}>
              FullName
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className={styles.input}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="backstory" className={styles.label}>
              BackStory
            </label>
            <textarea
              name="backstory"
              id="backstory"
              className={styles.textarea}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="consult" className={styles.label}>
              Want to speak with?(Therapist, Counselor, Psycholist)
            </label>
            <Select
              options={["Therapist", "Counselor", "Psycholist"]}
              {...props}
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <label htmlFor="preferred-date">Preferred Date</label>
              <input
                type="date"
                name="preferred-date"
                id="preferred-date"
                className={styles.input}
                required
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="preferred-time">Preferred Time</label>
              <input
                type="time"
                name="preferred-time"
                id="preferred-time"
                className={styles.input}
                required
              />
            </div>
          </div>
          <div className="flex w-full">
            <button className="w-full md:w-auto py-3 px-7 bg-purple-500 rounded text-purple-100 my-5 md:ml-auto">
              Schedule Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Select({ options = [], ...props }) {
  const { selection, setSelection } = props;
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen((open) => !open);
  }
  function handleSelection(value = "") {
    if (!value || value === "") {
      setSelection("Select Option");
      return;
    }
    setSelection(value);
    setOpen(false);
  }
  return (
    <ul className={styles.select}>
      <div onClick={toggleOpen}>{selection}</div>
      {open && (
        <div className={styles.option}>
          {Array.isArray(options) &&
            options.map((option, i) => (
              <>
                <li
                  className="px-3 py-1 cursor-pointer hover:bg-purple-100"
                  onClick={() => handleSelection(option)}
                  key={i}
                >
                  {option}
                </li>
              </>
            ))}
        </div>
      )}
    </ul>
  );
}

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
};

/**
 * Consultation fields
First Name:
Last Name:
Backstory:
Want to speak with?(Therapist, Counselor, Psycholist):
Preferred Date:
Preferred Time:
 */
