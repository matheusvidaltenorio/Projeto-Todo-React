import { useState } from "react";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(e) {
    e.preventDefault(); // <-- isso impede o reload

    const texto = tarefa.trim();
    if (texto === "") return;

    setTarefas((prev) => [...prev, texto]);
    setTarefa("");
  }

  function removerTarefa(indiceParaRemover) {
    setTarefas((prev) => prev.filter((_, index) => index !== indiceParaRemover));
  }

  return (
    <div style={{ padding: 16 }}>
      <h1>Minha To-Do List</h1>

      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((item, index) => (
          <li key={index}>{item}{" "}<button type="button" onClick={() => removerTarefa(index)}>Remover</button></li>
        ))}
      </ul>
    </div>
  );
}