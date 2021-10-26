import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const serializers = {
  types: {
    code: ({ node = {} }) => {
      const { code, language } = node;
      if (!code) {
        return null;
      }
      return (
        <div>
          <SyntaxHighlighter
            language={language || 'text'}
            style={darcula}
            wrapLines={true}
            customStyle={{
              borderRadius: '.35rem',
              padding: '.8rem 1rem',
              fontSize: '.85rem',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
};

export default serializers;
