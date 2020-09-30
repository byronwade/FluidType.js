//import printMsg from 'fluidtype.js';
import React from 'react';
import Container from 'react-bootstrap/Container';
//printMsg()

function App() {
  return (
    <Container className="pt-5 pb-5">
      <h1>h1. fluidtype heading</h1>
      <h2>h2. fluidtype heading</h2>
      <h3>h3. fluidtype heading</h3>
      <h4>h4. fluidtype heading</h4>
      <h5>h5. fluidtype heading</h5>
      <h6>h6. fluidtype heading</h6>
      <hr />
      <p>You can use the mark tag to <mark>highlight</mark> text.</p>
      <p><del>This line of text is meant to be treated as deleted text.</del></p>
      <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
      <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
      <p><u>This line of text will render as underlined</u></p>
      <p><small>This line of text is meant to be treated as fine print.</small></p>
      <p><strong>This line rendered as bold text.</strong></p>
      <p><em>This line rendered as italicized text.</em></p>
      <hr />
      <blockquote className="blockquote">
        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </blockquote>
      <hr />
      <blockquote className="blockquote">
        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
      </blockquote>
      <hr />
      <ul className="list-unstyled">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Integer molestie lorem at massa</li>
        <li>Facilisis in pretium nisl aliquet</li>
        <li>Nulla volutpat aliquam velit
          <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
          </ul>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
        <li>Aenean sit amet erat nunc</li>
        <li>Eget porttitor lorem</li>
      </ul>
      <hr />
      <ul className="list-inline">
        <li className="list-inline-item">Lorem ipsum</li>
        <li className="list-inline-item">Phasellus iaculis</li>
        <li className="list-inline-item">Nulla volutpat</li>
      </ul>
      <hr />
      <dl className="row">
        <dt className="col-sm-3">Description lists</dt>
        <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

        <dt className="col-sm-3">Euismod</dt>
        <dd className="col-sm-9">
          <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
          <p>Donec id elit non mi porta gravida at eget metus.</p>
        </dd>

        <dt className="col-sm-3">Malesuada porta</dt>
        <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

        <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
        <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

        <dt className="col-sm-3">Nesting</dt>
        <dd className="col-sm-9">
          <dl className="row">
            <dt className="col-sm-4">Nested definition list</dt>
            <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
          </dl>
        </dd>
      </dl>
    </Container>
  );
}

export default App;
