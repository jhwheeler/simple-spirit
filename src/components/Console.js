import React from 'react';

class Console extends React.Component {
  render() {
    return (
      <div className="console">
        <div className="row">
          <div className="col-12">
            <h2>Welcome to the Admin Console</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form id="console-form">
              <fieldset>
                <label htmlFor="post-maxim" className="console-label">Post a New Maxim</label>
                <textarea name="post-maxim" className="console-textarea"></textarea>
                <label htmlFor="post-challenge" className="console-label">Post a New Challenge</label>
                <textarea name="post-challenge" className="console-textarea"></textarea>
              </fieldset>
              <button type="submit" className="console-submit">Post</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Console;
