import DashboardLayout from "@/components/layouts/DashboardLayout";
import Image from "next/image";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { SyntheticEvent } from "react";

export default function profilePage({
  pageComponentProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <DashboardLayout>
        {/*<!-- Title + Delete link-->*/}
        <div className="d-sm-flex align-items-center justify-content-between pb-4 text-center text-sm-start">
          <h1 className="h3 mb-2 text-nowrap">Profile info</h1>
          <a
            className="btn btn-link text-danger fw-medium btn-sm mb-2"
            href="#"
          >
            <i className="ai-trash-2 fs-base me-2"></i>Delete account{" "}
          </a>
        </div>
        {/*<!-- Content-->*/}
        <div className="bg-secondary rounded-3 p-4 mb-4">
          <div className="d-block d-sm-flex align-items-center">
            <Image
              className="d-block rounded-circle mx-sm-0 mx-auto mb-3 mb-sm-0"
              src="/img/dashboard/avatar/main.jpg"
              alt="Amanda Wilson"
              width={110}
              height={110}
            />
            <div className="ps-sm-3 text-center text-sm-start">
              <button
                className="btn btn-light shadow btn-sm mb-2"
                type="button"
              >
                <i className="ai-refresh-cw me-2"></i>Change avatar
              </button>
              <div className="p mb-0 fs-ms text-muted">
                Upload JPG, GIF or PNG image. 300 x 300 required.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3 pb-1">
              <label className="form-label px-0" htmlFor="account-fn">
                First Name
              </label>
              <input
                className="form-control"
                type="text"
                id="account-fn"
                onChange={(value) => console.log(value)}
                value="Amanda"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3 pb-1">
              <label className="form-label px-0" htmlFor="account-ln">
                Last Name
              </label>
              <input
                className="form-control"
                type="text"
                id="account-ln"
                onChange={(value) => console.log(value)}
                value="Wilson"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3 pb-1">
              <label className="form-label px-0" htmlFor="account-email">
                Email address
              </label>
              <input
                className="form-control"
                type="text"
                id="account-email"
                onChange={(value) => console.log(value)}
                value="a.wilson@example.com"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3 pb-1">
              <label className="form-label px-0" htmlFor="account-username">
                Username
              </label>
              <div className="input-group">
                <span className="input-group-text">@</span>
                <input
                  className="form-control"
                  type="text"
                  id="account-username"
                  onChange={(value) => console.log(value)}
                  value="amanda_w"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3 pb-1">
              <label className="form-label px-0" htmlFor="account-country">
                Country
              </label>
              <select
                className="form-select"
                id="account-country"
                defaultValue={"USA"}
                onChange={(e: SyntheticEvent) => console.log(e.target)}
              >
                <option value="">Select country</option>
                <option value="Argentina">Argentina</option>
                <option value="Belgium">Belgium</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Spain">Spain</option>
                <option value="UK">United Kingdom</option>
                <option value="USA">
                  USA
                </option>
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3 pb-1">
              <label className="form-label px-0" htmlFor="account-city">
                City
              </label>
              <input
                className="form-control"
                type="text"
                id="account-city"
                onChange={(value) => console.log(value)}
                value="New York"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3 pb-1">
              <label className="form-label px-0" htmlFor="account-address">
                Address Line
              </label>
              <input
                className="form-control"
                type="text"
                id="account-address"
                onChange={(value) => console.log(value)}
                value="Some Cool Street, 22/1"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3 pb-1">
              <label className="form-label px-0" htmlFor="account-zip">
                ZIP Code
              </label>
              <input className="form-control" type="text" id="account-zip" />
            </div>
          </div>
          <div className="col-12">
            <hr className="mt-2 mb-4" />
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="form-check d-block">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="show-email"
                  defaultChecked={true}
                />
                <label className="form-check-label" htmlFor="show-email">
                  Show my email to registered users
                </label>
              </div>
              <button className="btn btn-primary mt-3 mt-sm-0" type="button">
                <i className="ai-save fs-lg me-2"></i>Save changes
              </button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const pageComponentProps = {};

  return {
    props: {
      pageComponentProps,
    },
  };
}
