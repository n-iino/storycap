export type StorybookVersion = 'v4' | 'v5';

export type V4Story = {
  id: string;
  kind: string;
  story: string;
  version: 'v4';
};

export type V5Story = {
  id: string;
  kind: string;
  story: string;
  version: 'v5';
};

/**
 *
 * Represents a story object
 *
 **/
export type Story = V4Story | V5Story;

export interface StoryKind {
  kind: string;
  stories: string[];
}
