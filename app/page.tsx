import Image from "next/image";

import InitialCard from "@/components/InitialCard";

import { BsFillPersonPlusFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { PiNotepadFill } from "react-icons/pi";
import { FaCarBattery, FaHandPaper, FaRegFilePdf } from "react-icons/fa";

export default function Home() {
  return (
    <section className="text-gray-600 body-font bg-white h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Bem vindo Ronaldo
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Escolha uma opção para prosseguirmos
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <InitialCard
            icon={<BsFillPersonPlusFill size={25} />}
            title="Cadastro de clientes"
            desc="Cadastrar um novo cliente para a oficina"
          />
          <InitialCard
            icon={<AiFillCar size={25} />}
            title="Cadastro de veículos"
            desc="Cadastrar um novo veículo para a oficina"
          />
          <InitialCard
            icon={<PiNotepadFill size={25} />}
            title="Cadastro de orçamentos"
            desc="Cadastrar um novo orçamento para a oficina"
            href="/cadastrar-orcamento"
          />
          <InitialCard
            icon={<FaCarBattery size={25} />}
            title="Cadastro de peças"
            desc="Cadastrar um nova peça para a oficina"
          />
          <InitialCard
            icon={<FaHandPaper size={25} />}
            title="Cadastro de mão de obra"
            desc="Cadastrar um nova mão de obra para a oficina"
          />
          <InitialCard
            icon={<FaRegFilePdf size={25} />}
            title="Gerar PDF"
            desc="Gerar um orçamento em PDF feito anteriormente"
          />
        </div>
      </div>
    </section>
  );
}
