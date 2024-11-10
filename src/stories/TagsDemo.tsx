import * as React from 'react';
import { Tags, Tag } from '../lib/index';

export interface TagsProps {
  children?: React.ReactNode;
}

const existingTags: Tag[] = [
  {
    id: 1,
    name: 'Food',
  },
  {
    id: 2,
    name: 'Drink',
  },
  {
    id: 3,
    name: 'Beer',
  },
  {
    id: 4,
    name: 'Wine',
  },
  {
    id: 5,
    name: 'Gluten free',
  },
  {
    id: 6,
    name: 'Fruit',
  },
];

export function TagsDemo(props: TagsProps) {
  const [tags, setTags] = React.useState<Tag[]>([]);
  return (
    <Tags
      title="Tags suggestions"
      label="Choose or create tags"
      fetchExistingTags={(startsWith, tags) => {
        return new Promise<Tag[]>((resolve) =>
          setTimeout(
            () =>
              resolve(
                existingTags
                  .filter((e) => e.name.includes(startsWith))
                  .filter((e) => !tags.find((t) => t.id === e.id))
              ),
            1000
          )
        );
      }}
      suggestionsEmptyComponent={'Not found'}
      tags={tags}
      onTagsChanged={setTags}
      filterExistingTags={(t, tags) => tags}
      allowNew={true}
    />
  );
}
