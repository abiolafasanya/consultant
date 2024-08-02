import React from "react";
import Header from "../layouts/Header";
import ConsultationForm from "./Form";
import Donate from "../donate/Donate";

export default function Consultation() {
  return (
    <>
      <section className="w-full min-h-screen">
        <div className="max-w-6xl mx-auto py-5">
          <Header />
        </div>

        <div className="max-w-6xl mx-auto py-5">
          <ConsultationForm />
        </div>
      </section>
      <Donate />
    </>
  );
}

