import { Container, Col, Row } from "react-bootstrap";
import jwt_decode from "jwt-decode";

const RegisterFormCompany = () => {
  return (
    <Container className="w-75">
      <form action="">
        <Row>
          <div className="mt-3">
            <label htmlFor="text-input" className="form-label">
              Razón social / Nombre comercial
            </label>
            <input
              className="form-control"
              type="text"
              id="text-input"
              placeholder="Ingrese su nombre razón social o nombre comercial"
              required
            />
          </div>
        </Row>
        <Row className="py-3">
          <Col>
            <div className="mb-3">
              <label htmlFor="email-input" className="form-label">
                Correo electrónico
              </label>
              <input
                className="form-control"
                type="email"
                id="email-input"
                placeholder="Ingrese su correo electrónico"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tel-input" className="form-label">
                Numero de teléfono
              </label>
              <input
                className="form-control"
                type="text"
                id="tel-input"
                placeholder="Ingrese su numero de telefono"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pass-input-1" className="form-label">
                Contraseña
              </label>
              <input
                className="form-control"
                type="password"
                id="pass-input-1"
                placeholder="Ingrese su contraseña"
                required
              />
            </div>
          </Col>
          <Col>
            <div className="mb-3">
              <label htmlFor="email-input" className="form-label">
                Confirme su correo electrónico
              </label>
              <input
                className="form-control"
                type="email"
                id="email-input"
                placeholder="Ingrese su correo electrónico"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="text-input" className="form-label">
                Dirección
              </label>
              <input
                className="form-control"
                type="text"
                id="text-input"
                placeholder="Ingrese su dirección"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pass-input-2" className="form-label">
                Confirme su contraseña
              </label>
              <input
                className="form-control"
                type="password"
                id="pass-input-2"
                placeholder="Ingrese su contraseña"
                required
              />
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Container>
  );
};

export { RegisterFormCompany };
