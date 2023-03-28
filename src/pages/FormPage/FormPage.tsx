// import React, { useRef, useState } from 'react';

// function FormPage() {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const [name, setName] = useState('');
//   function handleSumbit(event: React.FormEvent) {
//     event.preventDefault();
//     setName(nameRef.current!.value);
//     console.log('done');
//   }
//   return (
//     <div>
//       <form>
//         <input type="text" placeholder="Enter Name" ref={nameRef} />
//         <button type="submit" onClick={handleSumbit}>
//           Submit
//         </button>
//       </form>
//       {name && <p>{name}</p>}
//     </div>
//   );
// }

// export default FormPage;

import React, { Component, createRef } from 'react';

interface IProps {
  smth?: string;
}
interface Tes {
  name: string | undefined;
  date: string | undefined;
  select: string | undefined;
}
interface ISubmitInfo {
  arr: Array<Tes>;
}
const items = ['One', 'Two', 'Three'];
export default class FormPage extends Component<IProps, ISubmitInfo> {
  private nameRef;
  private dateRef;
  private selectRef;
  private checkboxRef;

  constructor(props: IProps) {
    super(props);
    this.state = {
      arr: [
        {
          name: 'вв',
          date: 'dd',
          select: 'm',
        },
      ],
    };
    this.nameRef = createRef<HTMLInputElement>();
    this.dateRef = createRef<HTMLInputElement>();
    this.selectRef = createRef<HTMLSelectElement>();
    this.checkboxRef = createRef<HTMLInputElement>();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    const theLocations = this.state.arr.map((l) => Object.assign({}, l));
    console.log(this.checkboxRef);
    theLocations.push({
      name: this.nameRef.current?.value,
      date: this.dateRef.current?.value,
      select: this.selectRef.current?.value,
    });
    this.setState({ arr: theLocations });
    if (this.nameRef.current != undefined) {
      this.nameRef.current.value = '';
    }
  }
  render() {
    return (
      <>
        <h2>Let&apos;s make the list of your favorite movies</h2>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label htmlFor="name">Enter movie name:</label>
            <input type="text" placeholder="Enter name" ref={this.nameRef} id="name" />
          </div>
          <div>
            <label htmlFor="date">Enter movie date: </label>
            <input type="date" ref={this.dateRef} id="date" />
          </div>
          <select name="selectedFruit" ref={this.selectRef}>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
          </select>
          {items.map((item, index) => (
            <label htmlFor={item} key={index}>
              <input type="checkbox" id={item} ref={this.checkboxRef} />
              <span>{item}</span>
            </label>
          ))}
          <fieldset>
            <legend>Choose your favorite monster</legend>

            <input type="radio" id="kraken" name="monster" value="K" />
            <label htmlFor="kraken">Kraken</label>
            <br />

            <input type="radio" id="sasquatch" name="monster" value="S" />
            <label htmlFor="sasquatch">Sasquatch</label>
            <br />

            <input type="radio" id="mothman" name="monster" value="M" />
            <label htmlFor="mothman">Mothman</label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
        {this.state.arr.length > 1
          ? this.state.arr.map((item, index) => (
              <div key={index}>
                <li>{item.name}</li>
                <li>{item.date}</li>
                <li>{item.select}</li>
              </div>
            ))
          : ''}
      </>
    );
  }
}
