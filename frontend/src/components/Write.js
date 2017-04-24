import React from 'react';

export default class Write extends React.Component {
  constructor() {
    super();
    this.clearText = this.clearText.bind(this);
  }

  clearText(event) {
    let write = this.refs.write;
    write.value = "";
  }

  render() {
    return(
      <div className="write">
        <form>
          <fieldset>
            <textarea ref="write"></textarea>
            <div>
              <input type="button" className="button" defaultValue="Clear" onClick={this.clearText}/>
            </div>
          </fieldset>
        </form>
      </div>
      );
  }
}
