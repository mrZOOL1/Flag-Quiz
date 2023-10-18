import React from 'react'
import Rules from './Rules';

const Settings = (props) => {

  const [LabelText1, SetLabelText1] = React.useState(3);
  const [LabelText2, SetLabelText2] = React.useState(25);
  const [LabelText3, SetLabelText3] = React.useState(30);
  const [IsCustom, SetIsCustom] = React.useState(false);
  const [Mode, SetMode] = React.useState('Chill');

  const Tens = React.useRef(10);
  const Ones = React.useRef(3);
  const One = React.useRef(25);
  const Two = React.useRef(30);

  const editlabel1 = function (e) {
    SetLabelText1(e.target.value);
  };

  const editlabel2 = function (e) {
    SetLabelText2(e.target.value);
  };

  const editlabel3 = function (e) {
    SetLabelText3(e.target.value);
  };

  const UpdateTens = function (e) {
    SetMode(e.target.value);
    Tens.current = 10 * (e.target.selectedIndex + 1);
    props.submitHandler(Tens.current + Ones.current, One.current, Two.current);
    e.target.selectedIndex === 3 ? SetIsCustom(true) : SetIsCustom(false);
  };

  const UpdateOnes = function (e) {
    Ones.current = parseInt(e.target.value);
    props.submitHandler(Tens.current + Ones.current, One.current, Two.current);
  };

  const Update1 = function (e) {
    One.current = parseInt(e.target.value);
    props.submitHandler(Tens.current + Ones.current, One.current, Two.current);
  };

  const Update2 = function (e) {
    Two.current = parseInt(e.target.value);
    props.submitHandler(Tens.current + Ones.current, One.current, Two.current);
  };

  return (
    <form className='settings'>

      <div className="generalsettings">
        <h1 className='settingstitle'>Game Mode</h1>
        <select className='modes' onChange={(e) => UpdateTens(e)}>
          <option value="Chill">Chill</option>
          <option value="Expert">Expert</option>
          <option value="Psycho">Psycho</option>
          <option value="Custom">Custom</option>
        </select>
      </div>

      <Rules mode={Mode} />

      <ul className="custom" style={{ display: IsCustom ? '' : 'none' }}>

        <li className="setting">
          <label htmlFor="Choices" className="label">Choices: {LabelText1}</label>
          <input className='red-slider' id='Choices' name='Choices' min={2} max={5} defaultValue={3} type="range" onChange={(e) => { editlabel1(e); UpdateOnes(e) }} />
        </li>

        <li className="setting">
          <label htmlFor="Time" className="label">Time: {LabelText2}</label>
          <input className='red-slider' id='Time' name='Time' type="range" min={1} max={60} defaultValue={25} onChange={(e) => { editlabel2(e); Update1(e) }} />
        </li>

        <li className="setting">
          <label htmlFor="Mistakes" className="label">Mistakes: {LabelText3}</label>
          <input className='red-slider' id='Mistakes' name='Mistakes' type="range" min={1} max={99} defaultValue={30} onChange={(e) => { editlabel3(e); Update2(e) }} />
        </li>

      </ul>

    </form>
  )
}

export default Settings