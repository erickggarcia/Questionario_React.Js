import React from 'react'

const Exam = ({ active, question, options, onChange, value, id}) => {
  
  return (
    <div>
      {active && <fieldset>
        <legend question={question}>{question}</legend>
        {options.map((option)=>
          <React.Fragment key={option}>
            <label>
                <input type='radio' value={option} checked={value === option} id={id} onChange={onChange}/>
                {option}
            </label>
            <br/>
          </React.Fragment>
        )}
      </fieldset>}
    </div>
  )
}

export default Exam