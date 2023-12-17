const buttonToCalculate = document.querySelector(".button-to-calculate")
const buttonToClear = document.querySelector(".button-to-clear")

//Função para calcular as unidades elétricas
function calculateValues() {
    const inputVoltageValue = document.getElementById("voltage-value").value
    const inputCurrentValue = document.getElementById("current-value").value
    const inputResistanceValue = document.getElementById("resistance-value").value
    const inputPowerValue = document.getElementById("power-value").value

    //Verifica se tem algum valor e da mensage de alerta na pagina
    if ((inputVoltageValue == "") && (inputCurrentValue == "") && (inputResistanceValue == "") && (inputPowerValue == "")) {
        alert("Forneça pelo menos duas unidades para calcular!")
        console.log("Forneça pelo menos duas unidades para calcular!")
    }
    //Se valor da resistência e potência está vazio, faz o calculo com valor da tensão e corrente
    else if ((inputResistanceValue == "") && (inputPowerValue == "")) {
        document.getElementById("resistance-value").value = Math.round((inputVoltageValue / inputCurrentValue) * 100) / 100
        document.getElementById("power-value").value = inputVoltageValue * inputCurrentValue

        console.log(document.getElementById("resistance-value").value)
        console.log(document.getElementById("power-value").value)
    }
    //Se valor da tensão e potência está vazio, faz o calculo com valor da resistência e corrente
    else if ((inputVoltageValue == "") && (inputPowerValue == "")) {
        document.getElementById("voltage-value").value = inputResistanceValue * inputCurrentValue
        document.getElementById("power-value").value = inputResistanceValue * (Math.pow(inputCurrentValue, 2))

        console.log(document.getElementById("voltage-value").value)
        console.log(document.getElementById("power-value").value)
    }
    //Se valor da corrente e resistência está vazio, faz o calculo com valor da potência e tensão
    else if ((inputCurrentValue == "") && (inputResistanceValue == "")) {
        document.getElementById("current-value").value = Math.round((inputPowerValue / inputVoltageValue) * 100) / 100
        document.getElementById("resistance-value").value = Math.round(((Math.pow(inputVoltageValue, 2)) / inputPowerValue) * 100) / 100

        console.log(document.getElementById("current-value").value)
        console.log(document.getElementById("resistance-value").value)
    }
    //Se valor da tensão e corrente está vazio, faz o calculo com valor da potência e resistência
    else if ((inputVoltageValue == "") && (inputCurrentValue == "")) {
        document.getElementById("voltage-value").value = Math.round((Math.sqrt(inputPowerValue * inputResistanceValue)) * 100) / 100
        document.getElementById("current-value").value = Math.round((Math.sqrt(inputPowerValue / inputResistanceValue)) * 100) / 100

        console.log(document.getElementById("voltage-value").value)
        console.log(document.getElementById("current-value").value)
    }
    //Se valor da corrente e potência está vazio, faz o calculo com valor da tensão e resistência
    else if ((inputCurrentValue == "") && (inputPowerValue == "")) {
        document.getElementById("current-value").value = Math.round((inputVoltageValue / inputResistanceValue) * 100) / 100
        document.getElementById("power-value").value = Math.round(((Math.pow(inputVoltageValue, 2)) / inputResistanceValue) * 100) / 100

        console.log(document.getElementById("current-value").value)
        console.log(document.getElementById("power-value").value)
    }
    //Se valor da tensão e resistência está vazio, faz o calculo com valor da potência e corrente
    else if ((inputVoltageValue == "") && (inputResistanceValue == "")) {
        document.getElementById("voltage-value").value = Math.round((inputPowerValue / inputCurrentValue) * 100) / 100
        document.getElementById("resistance-value").value = Math.round(inputPowerValue / (Math.pow(inputCurrentValue, 2)) * 100) / 100

        console.log(document.getElementById("voltage-value").value)
        console.log(document.getElementById("resistance-value").value)
    }
}

//Função para limpar os valores
function clearValues() {
    document.getElementById("voltage-value").value = ""
    document.getElementById("current-value").value = ""
    document.getElementById("resistance-value").value = ""
    document.getElementById("power-value").value = ""
    console.log("Apagar")
}

buttonToCalculate.addEventListener("click", calculateValues)
buttonToClear.addEventListener("click", clearValues)