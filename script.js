const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
//colocando uma constante no botão do header

button.addEventListener("click", add)// essa função diz add um "ouvidor" fica aguardando um eventoele aguarda 2 eventos.
form.addEventListener("change", save)// essa função vai salvar as alterações/inserções dos dias

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) // essa é a maneira de inserir a data atual no formato exigido (DD/MM).
  const dayExists = nlwSetup.dayExists(today) // confirma se o dia existe no formulario

  if (dayExists) {
    alert("Dia já incluso 🔴")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
  // essa função constroi essa estrutura de arrais que são as datas do app
  //const data = {
  //   run: ["01-01", "01-02", "01-04", "01-05", "01-06", "01-07"],
  //   water: ["01-02"],
  //   food: ["01-01", "01-02", "01-05"],
  //   sleep: ["01-02"],
  //   academy: ["01-03", "01-05", "01-06", "01-07"],
  // }
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
