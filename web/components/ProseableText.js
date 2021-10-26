import { useMemo } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import serializers from '../lib/serializers';

export default function ProseableText({ blocks = [] }) {
  // Group together standard `_type === "block"`  blocks
  // eg <p>, <li>, etc – and separate out everyone else
  const blockGroups = useMemo(
    () =>
      blocks.reduce(
        (acc, item) => {
          const lastIdx = acc.length - 1;

          if (
            // We don't have items in this group yet
            acc[lastIdx].length === 0 ||
            // The last group has the same `type`
            acc[lastIdx][0]._type === item._type
          ) {
            acc[lastIdx].push(item);
          } else {
            // Time to create a new group, because the `type` is different compared to last group
            acc.push([item]);
          }

          return acc;
        },
        [[]]
      ),
    [blocks]
  );

  if (!blockGroups?.length) return null;

  return blockGroups.map((group) =>
    group[0]._type === 'block' ? (
      <div
        key={group[0]._key}
        className="prose prose-lightType dark:prose-darkType py-4 text-gray-800 dark:text-white rounded-lg"
      >
        <BlockContent
          blocks={group}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          serializers={serializers}
        />
      </div>
    ) : (
      <BlockContent
        key={group[0]._key}
        blocks={group}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        serializers={serializers}
      />
    )
  );
}
