import React, { FC } from "react";
import DashboardSidebar from "../partials/dashboard/sidebar/DashboardSidebar";
import { Container, Row } from "react-bootstrap";

interface Children{
  children: any;
}

const DashboardLayout: FC<Children> = ({children}) => {
  return (<>
    <div
      className="position-relative bg-gradient"
      style={{ height: "480px" }}
    >
      <div className="shape shape-bottom shape-slant bg-secondary d-none d-lg-block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 260">
          <polygon
            fill="currentColor"
            points="0,257 0,260 3000,260 3000,0"
          ></polygon>
        </svg>
      </div>
    </div>
    <Container
      className="position-relative zindex-5 pb-4 mb-md-3"
      style={{ marginTop: "-350px" }}
    >
      <Row>
        <div className="col-lg-4 mb-4 mb-lg-0">
          <DashboardSidebar />
        </div>
        {/*<!-- Content-->*/}
        <div className="col-lg-8">
          <div className="d-flex flex-column h-100 bg-light rounded-3 shadow-lg p-4">
            <div className="py-2 p-md-3">
              {children}
            </div>
          </div>
        </div>
      </Row>
    </Container>
  </>);
};

export { DashboardLayout };