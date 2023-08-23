import css from "./Contact.module.css";
import { routesComponents } from "../../components/exportRoutesComponents";
const { Form } = routesComponents;
export const Contact = () => {
  return (
    <div className={css.contact}>
      <h1>Estou Ansioso para Receber Seu E-mail.</h1>
      <div className={css.content}>
        <Form />
      </div>
    </div>
  );
};

//TODO: ao voltar de uma pagina externa a pagina contact da erro. tratar