async function getData() {
  try {
      const response = await fetch("http://192.168.14.8:5000/monitoramento");
      const data = await response.json();
      console.log(data);
      renderTable(data);
  } catch (error) {
      console.error("Erro ao obter dados:", error);
  }
}

async function getDataByDispositivo(dispositivo) {
  try {
      const response = await fetch(`http://localhost:8000/monitoramento/${dispositivo}`);
      const data = await response.json();
      console.log(data);
      renderTable(data);
  } catch (error) {
      console.error("Erro ao obter dados:", error);
  }
}

function renderTable(data) {
  const tableBody = document.getElementById("tabelaMonitoramento").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Limpa o corpo da tabela
  data.forEach((item) => {
      const row = tableBody.insertRow();
      row.innerHTML = `
          <td>${item.id}</td>
          <td>${item.temperatura}</td>
          <td>${item.umidade}</td>
          <td>${item.dt_created}</td>
          <td>${item.luminosidade}</td>
          <td>${item.presenca}</td>
          <td>${item.distancia}</td>
          <td>${item.dispositivo}</td>
      `;
  });
}

document.getElementById("inputPesquisa").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
      const pesquisa = e.target.value.trim();
      if (pesquisa) {
          getDataByDispositivo(pesquisa);
      }
  }
});

document.getElementById("inputPesquisa").addEventListener("input", function (e) {
  if (!e.target.value.trim()) {
      getData();
  }
});

getData();
