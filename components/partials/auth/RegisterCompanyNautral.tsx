import { useState, FC } from "react";
import { UserTypes } from "@/contants";
import classNames from "classnames/bind";
import PersonTypeButton from "@/components/uxux/buttons/PersonTypeButton";
import { RegisterFormNatural } from "./RegisterFormNatural";
import { RegisterFormCompany } from "./RegisterFormCompany";

export interface Props{
  setStep: (state: number)=>void;
}

const RegisterCompanyNautral: FC<Props> = () => {
  const [userType, setUserType] = useState<UserTypes>(UserTypes.NATURAL);
  let cx = classNames.bind({});
  return (
    <>
      <div
        className="btn-group py-3 d-flex w-50 text-center  mx-auto justify-content-center align-items-center"
        role="group"
        aria-label="Solid button group"
      >
        <PersonTypeButton
          text="Persona natural"
          type={userType}
          baseType={UserTypes.NATURAL}
          setUserType={setUserType}
        />
        <PersonTypeButton
          text="Empresa"
          type={userType}
          baseType={UserTypes.COMPANY}
          setUserType={setUserType}
        />
      </div>
      <div className={cx({ "d-none": userType !== UserTypes.NATURAL })}>
        <RegisterFormNatural />
      </div>
      <div className={cx({ "d-none": userType !== UserTypes.COMPANY })}>
        <RegisterFormCompany />
      </div>
    </>
  );
};

export { RegisterCompanyNautral };
