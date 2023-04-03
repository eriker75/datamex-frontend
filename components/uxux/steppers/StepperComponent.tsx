import StepperHeader from "./StepperHeader";
import { useState } from 'react';
import classNames from "classnames/bind";
import styles from "./StepperStyles.module.scss";
import { RegisterCompanyNautral, CheckoutForm } from "@/components";
import TotalsResume from "@/components/partials/resumes/TotalsResume";

const StepperComponent = () => {
  const [step, setStep] = useState(1);
  let cx = classNames.bind(styles);
  return (
    <>
      <StepperHeader step={step} setStep={setStep} />
      <hr
        className="bg-primary"
        style={{ height: "1px", width: "80%", margin: "0 auto" }}
      />
      <div className={cx({ "d-none": step !== 1 })}>
        <TotalsResume setStep={setStep}/>
      </div>
      <div className={cx({ "d-none": step !== 2 })}>
        <RegisterCompanyNautral setStep={setStep}/>
      </div>
      <div className={cx("flex-grow-1 ", { "d-none": step !== 3 })}>
        <CheckoutForm setStep={setStep}/>
      </div>
    </>
  );
};

export { StepperComponent };
