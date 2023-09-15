import { useState } from "react";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import styles from "../project/ProjectForm.module.css";

function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState({});

  function Submit(elemento) {
    elemento.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function HandleChange(evento) {
    setService({ ...service, [evento.target.name]: evento.target.value });
  }

  return (
    <form onSubmit={Submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={HandleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={HandleChange}
      />
      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={HandleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ServiceForm;
