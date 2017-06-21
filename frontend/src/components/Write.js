import React from 'react';

export default class Write extends React.Component {
  constructor() {
    super();
  }

  clearText = event => {
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
              <input type="button" className="button" defaultValue="Clear & Enjoy" onClick={this.clearText}/>
            </div>
          </fieldset>
        </form>
      </div>
      );
  }
}
