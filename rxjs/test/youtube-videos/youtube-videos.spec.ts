// youtube-videos.spec.ts

import { videos } from './youtube-videos.reducer';
import { YoutubeVideosActions } from './youtube-videos.actions';
import { YoutubeMediaItemsMock } from '../../../../../tests/mocks/youtube.media.items';

describe('The Youtube Videos reducer', () => {
const mockedState = [];
const youtubeVideosActions = new YoutubeVideosActions();

it('should return current state when no valid actions have been made', () => {
const state = [...mockedState];
const actual = videos(state, { type: 'INVALID_ACTION', payload: {} });
const expected = state;
expect(actual).toBe(expected);
});

}