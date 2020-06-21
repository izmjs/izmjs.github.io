import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import PropTypes from 'prop-types';
import theme from 'prism-react-renderer/themes/dracula';
import { LiveProvider, LiveEditor } from 'react-live';
import { mdx } from '@mdx-js/react';

import { copyToClipboard } from '../../util/copy-to-clipboard';
import {
  CopyCode,
  LineNo,
  Pre,
  PreHeader,
  LiveWrapper,
  LivePreview,
  LiveError,
  StyledEditor,
} from './styles';

let highlightStart = false
const highlightClassName = "highlight-line"

const highlightLine = (lineArray, lineProps) => {
  let shouldExclude = false

  lineArray.forEach((line, i) => {
    const content = line.content

    // Highlight lines with "// highlight-line"
    if (content.replace(/\s/g, "").includes("//highlight-line")) {
      lineProps.className = `${lineProps.className} ${highlightClassName}`
      line.content = content
        .replace("// highlight-line", "")
        .replace("//highlight-line", "")
    }

    // Stop highlighting
    if (
      !!highlightStart &&
      content.replace(/\s/g, "") === "//highlight-end"
    ) {
      highlightStart = false
      shouldExclude = true
    }

    // Start highlighting after "//highlight-start"
    if (
      content.replace(/\s/g, "") === "//highlight-start"
    ) {
      highlightStart = true
      shouldExclude = true
    }
  })

  // Highlight lines between //highlight-start & //highlight-end
  if (!!highlightStart) {
    lineProps.className = `${lineProps.className} ${highlightClassName}`
  }

  return shouldExclude
}

export default function CodeHighlight({
  children,
  className,
  live,
  title,
  lineNumbers,
}) {
  const [copied, setCopied] = useState(false);
  const codeString = children.trim();
  const language = className.replace(/language-/, '');

  if (live) {
    return (
      <LiveProvider
        code={codeString}
        noInline
        theme={theme}
        transformCode={code => `/** @jsx mdx */${code}`}
        scope={{ mdx }}
      >
        <LiveWrapper>
          <StyledEditor>
            <LiveEditor />
          </StyledEditor>
          <LivePreview />
        </LiveWrapper>

        <LiveError />
      </LiveProvider>
    );
  }

  const handleClick = () => {
    setCopied(true);
    copyToClipboard(codeString);
  };

  return (
    <>
      {title && <PreHeader>{title}</PreHeader>}
      <div className="gatsby-highlight">
        <Highlight
          {...defaultProps}
          code={codeString}
          language={language}
          theme={theme}
        >
          {({
            className: blockClassName,
            style,
            tokens,
            getLineProps,
            getTokenProps,
          }) => (
            <Pre className={blockClassName} style={style} hasTitle={title}>
              <CopyCode onClick={handleClick}>
                {copied ? 'Copied!' : 'Copy'}
              </CopyCode>
              <code>
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i })
                  const shouldExclude = highlightLine(line, lineProps)
                  return !shouldExclude ? (
                  <div {...lineProps}>
                    {lineNumbers && <LineNo>{i + 1}</LineNo>}
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ) : null})}
              </code>
            </Pre>
          )}
        </Highlight>
      </div>
    </>
  );
}

CodeHighlight.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  live: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.string,
  lineNumbers: PropTypes.string,
};

CodeHighlight.defaultProps = {
  live: false,
  title: null,
  lineNumbers: null,
};
