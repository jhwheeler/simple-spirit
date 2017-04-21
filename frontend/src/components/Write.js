import React from 'react';

export default class Write extends React.Component {
  render() {
    return(
      <div className="write">
        <form>
          <fieldset>
            <textarea className="large-textarea"></textarea>
            <div>
              <input className="button" defaultValue="Clear"/>
            </div>
          </fieldset>
        </form>
      </div>
      );
  }
}
