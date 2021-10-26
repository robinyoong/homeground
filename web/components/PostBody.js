import ProseableText from './ProseableText';

export default function PostBody({ content }) {
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <ProseableText blocks={content} />
      </div>
    </div>
  );
}
