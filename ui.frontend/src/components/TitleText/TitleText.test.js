/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { ModelManager } from '@adobe/aem-spa-page-model-manager';
import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import TitleText from './TitleText';

describe('TitleText ->', () => {
  const ROOT_NODE_CLASS_NAME = 'route-node';
  const CONTENT_PATH = '/content/test/titletext';

  const TITLE_TEXT = 'Sample Title';
  const DESCRIPTION_TEXT = 'Sample description text';

  let rootNode;
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox
      .stub(ModelManager, 'getData')
      .withArgs({ pagePath: CONTENT_PATH })
      .resolves({ test: true });

    rootNode = document.createElement('div');
    rootNode.className = ROOT_NODE_CLASS_NAME;
    document.body.appendChild(rootNode);

    ModelManager.initialize();

    expect(document.querySelector('.' + ROOT_NODE_CLASS_NAME)).not.toBeNull();
  });

  afterEach(() => {
    window.location.hash = '';

    if (rootNode) {
      document.body.removeChild(rootNode);
    }

    sandbox.restore();
  });

  it('should render the TitleText component with no props', () => {
    expect(rootNode.childElementCount).toEqual(0);

    ReactDOM.render(<TitleText />, rootNode);

    expect(rootNode.childElementCount).toEqual(1);

    // fallback text is rendered when title is missing
    expect(rootNode.innerHTML).toContain('test');
  });

  it('should render title and description when provided', () => {
    expect(rootNode.childElementCount).toEqual(0);

    ReactDOM.render(
      <TitleText
        title={TITLE_TEXT}
        description={DESCRIPTION_TEXT}
      />,
      rootNode
    );

    expect(rootNode.childElementCount).toEqual(1);

    const h1 = rootNode.querySelector('h1');
    const p = rootNode.querySelector('p');

    expect(h1).not.toBeNull();
    expect(p).not.toBeNull();

    expect(h1.innerHTML).toBe(TITLE_TEXT);
    expect(p.innerHTML).toBe(DESCRIPTION_TEXT);
  });

  it('should render only title when description is not provided', () => {
    ReactDOM.render(
      <TitleText title={TITLE_TEXT} />,
      rootNode
    );

    const h1 = rootNode.querySelector('h1');
    const p = rootNode.querySelector('p');

    expect(h1).not.toBeNull();
    expect(h1.innerHTML).toBe(TITLE_TEXT);
    expect(p.innerHTML).toBe('');
  });

  it('should render wrapper with title-text class', () => {
    ReactDOM.render(
      <TitleText
        title={TITLE_TEXT}
        description={DESCRIPTION_TEXT}
      />,
      rootNode
    );

    expect(
      rootNode.querySelector('.title-text')
    ).not.toBeNull();
  });
});
