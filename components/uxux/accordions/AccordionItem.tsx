import { FC, ReactDOM } from "react";

interface Props{
  ind: string;
  title: string;
  children: JSX.Element | JSX.Element[] | string | string[]
}

const AccordionItem : FC<Props> = ({children, ind, title}) => {
  
  return (
    <>
      {/*<!-- Item -->*/}
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${ind}`}>
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${ind}`} aria-expanded="false" aria-controls={`collapse${ind}`}>{title}</button>
        </h2>
        <div className="accordion-collapse collapse collapsed" id={`collapse${ind}`} aria-labelledby={`heading${ind}`} data-bs-parent="#accordionExample">
          <div className="accordion-body"> { children } </div>
        </div>
      </div>
    </>
  )
}

export default AccordionItem