import React from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader/";
import Input from "../../components/Input/";
import Textarea from "../../components/Textarea/";
import Select from "../../components/Select/";

import warningIcon from "../../assets/images/icons/warning.svg";

export default function Cadastro() {
  return (
    <div className="container" id="page-teacher-form">
      <PageHeader
        title="Que incrÃ­vel que vocÃª quer dar aulas"
        description="O primeiro passo Ã© preencher esse formulario de inscriÃ§Ã£o."
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Input name="sexo" label="Sexo" />
          <Input name="idade" label="Idade" />
          <Textarea name="bandas" label="Bandas" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            name="subject"
            label="generos"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Geografia", label: "Geografia" },
              { value: "Matematica", label: "Matematica" },
              { value: "Ingles", label: "Ingles" },
              { value: "Historia", label: "Historia" },
              { value: "Fisica", label: "Fisica" },
              { value: "Portugues", label: "Portugues" },
              { value: "Quimica", label: "Quimica" }
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            HorÃ¡rios Disponiveis
            <button type="button">+ Novo Horario</button>
          </legend>

          <div className="schedule-item">
            <Select
              name="week_day"
              label="Dia da Semana"
              options={[
                { value: "0", label: "Domingo" },
                { value: "1", label: "Segunda" },
                { value: "2", label: "TerÃ§a" },
                { value: "3", label: "Quarta" },
                { value: "4", label: "Quinta" },
                { value: "5", label: "Sexta" },
                { value: "6", label: "SÃ¡bado" }
              ]}
            />
            <Input name="from" label="Das" type="time" />
            <Input name="to" label="AtÃ©" type="time" />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Importante <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}
