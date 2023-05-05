import React from 'react'

const Test = ({perguntas, value, setValue}) => {

  const [index, setIndex] = React.useState(0)
  const [answer, setAnswer] = React.useState([])
  const [result, setResult] = React.useState(0)

  function pages(event) {
    event.preventDefault()
    setIndex(index +1)
    correctAnswers()
  }

  function savingResults({target}) {
    setValue(target.value)
    setAnswer([...answer, target.value])
  }

  function correctAnswers() {
    try {
          if(answer[index] === perguntas[index].resposta) {
            setResult(result+1)
          } else {
            setResult(result+0)
          }
    } catch(error) {
      console.log(error)
    }
  }

  function showQuestion() {
    try{
      while(index < perguntas.length) {
        return (
          <fieldset>
            <legend>{perguntas[index].pergunta}</legend>
              {perguntas[index].options.map((option, optionIndex) => (
                <React.Fragment key={option}>
                  <br/>
                  <label>
                    <input type='radio' value={option} checked={value === option} onChange={savingResults}/>
                      {option}
                  </label>
                </React.Fragment>
              ))}
          </fieldset>
        )
      } 
      if(index >= perguntas.length) {
        return (
        <div>Você acertou: {result} de {perguntas.length}</div>
        )
      }
    } catch(error) {
      console.log(error)
    } 
 }

  return (
    <>
      {showQuestion()}
      <button onClick={pages}>Próxima</button>
    </>
  )
}

export default Test