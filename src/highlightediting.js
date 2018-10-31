/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module highlight/highlightediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import HighlightCommand from './highlightcommand';

/**
 * The highlight editing feature. It introduces the {@link module:highlight/highlightcommand~HighlightCommand command} and the `highlight`
 * attribute in the {@link module:engine/model/model~Model model} which renders in the {@link module:engine/view/view view}
 * as a `<mark>` element with a `class` attribute (`<mark class="marker-green">...</mark>`) depending
 * on the {@link module:highlight/highlight~HighlightConfig configuration}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class HighlightEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	constructor( editor ) {
		super( editor );

		editor.config.define( 'highlight', {
			options: [
			
				{
					model: 'redMarker',
					class: 'marker-red',
					title: 'Red marker',
					color: 'var(--ck-highlight-marker-red)',
					type: 'marker'
				},
				{
					model: 'redPen',
					class: 'pen-red',
					title: 'Red pen',
					color: 'var(--ck-highlight-marker-red)',
					type: 'pen'
				},
			
				{
					model: 'red50Marker',
					class: 'marker-red-50',
					title: 'Red 50 marker',
					color: 'var(--ck-highlight-marker-red-50)',
					type: 'marker'
				},
				{
					model: 'red50Pen',
					class: 'pen-red-50',
					title: 'Red 50 pen',
					color: 'var(--ck-highlight-marker-red-50)',
					type: 'pen'
				},
			
				{
					model: 'red100Marker',
					class: 'marker-red-100',
					title: 'Red 100 marker',
					color: 'var(--ck-highlight-marker-red-100)',
					type: 'marker'
				},
				{
					model: 'red100Pen',
					class: 'pen-red-100',
					title: 'Red 100 pen',
					color: 'var(--ck-highlight-marker-red-100)',
					type: 'pen'
				},
			
				{
					model: 'red200Marker',
					class: 'marker-red-200',
					title: 'Red 200 marker',
					color: 'var(--ck-highlight-marker-red-200)',
					type: 'marker'
				},
				{
					model: 'red200Pen',
					class: 'pen-red-200',
					title: 'Red 200 pen',
					color: 'var(--ck-highlight-marker-red-200)',
					type: 'pen'
				},
			
				{
					model: 'red300Marker',
					class: 'marker-red-300',
					title: 'Red 300 marker',
					color: 'var(--ck-highlight-marker-red-300)',
					type: 'marker'
				},
				{
					model: 'red300Pen',
					class: 'pen-red-300',
					title: 'Red 300 pen',
					color: 'var(--ck-highlight-marker-red-300)',
					type: 'pen'
				},
			
				{
					model: 'red400Marker',
					class: 'marker-red-400',
					title: 'Red 400 marker',
					color: 'var(--ck-highlight-marker-red-400)',
					type: 'marker'
				},
				{
					model: 'red400Pen',
					class: 'pen-red-400',
					title: 'Red 400 pen',
					color: 'var(--ck-highlight-marker-red-400)',
					type: 'pen'
				},
			
				{
					model: 'red500Marker',
					class: 'marker-red-500',
					title: 'Red 500 marker',
					color: 'var(--ck-highlight-marker-red-500)',
					type: 'marker'
				},
				{
					model: 'red500Pen',
					class: 'pen-red-500',
					title: 'Red 500 pen',
					color: 'var(--ck-highlight-marker-red-500)',
					type: 'pen'
				},
			
				{
					model: 'red600Marker',
					class: 'marker-red-600',
					title: 'Red 600 marker',
					color: 'var(--ck-highlight-marker-red-600)',
					type: 'marker'
				},
				{
					model: 'red600Pen',
					class: 'pen-red-600',
					title: 'Red 600 pen',
					color: 'var(--ck-highlight-marker-red-600)',
					type: 'pen'
				},
			
				{
					model: 'red700Marker',
					class: 'marker-red-700',
					title: 'Red 700 marker',
					color: 'var(--ck-highlight-marker-red-700)',
					type: 'marker'
				},
				{
					model: 'red700Pen',
					class: 'pen-red-700',
					title: 'Red 700 pen',
					color: 'var(--ck-highlight-marker-red-700)',
					type: 'pen'
				},
			
				{
					model: 'red800Marker',
					class: 'marker-red-800',
					title: 'Red 800 marker',
					color: 'var(--ck-highlight-marker-red-800)',
					type: 'marker'
				},
				{
					model: 'red800Pen',
					class: 'pen-red-800',
					title: 'Red 800 pen',
					color: 'var(--ck-highlight-marker-red-800)',
					type: 'pen'
				},
			
				{
					model: 'red900Marker',
					class: 'marker-red-900',
					title: 'Red 900 marker',
					color: 'var(--ck-highlight-marker-red-900)',
					type: 'marker'
				},
				{
					model: 'red900Pen',
					class: 'pen-red-900',
					title: 'Red 900 pen',
					color: 'var(--ck-highlight-marker-red-900)',
					type: 'pen'
				},
			
				{
					model: 'redA100Marker',
					class: 'marker-red-a100',
					title: 'Red A100 marker',
					color: 'var(--ck-highlight-marker-red-a100)',
					type: 'marker'
				},
				{
					model: 'redA100Pen',
					class: 'pen-red-a100',
					title: 'Red A100 pen',
					color: 'var(--ck-highlight-marker-red-a100)',
					type: 'pen'
				},
			
				{
					model: 'redA200Marker',
					class: 'marker-red-a200',
					title: 'Red A200 marker',
					color: 'var(--ck-highlight-marker-red-a200)',
					type: 'marker'
				},
				{
					model: 'redA200Pen',
					class: 'pen-red-a200',
					title: 'Red A200 pen',
					color: 'var(--ck-highlight-marker-red-a200)',
					type: 'pen'
				},
			
				{
					model: 'redA400Marker',
					class: 'marker-red-a400',
					title: 'Red A400 marker',
					color: 'var(--ck-highlight-marker-red-a400)',
					type: 'marker'
				},
				{
					model: 'redA400Pen',
					class: 'pen-red-a400',
					title: 'Red A400 pen',
					color: 'var(--ck-highlight-marker-red-a400)',
					type: 'pen'
				},
			
				{
					model: 'redA700Marker',
					class: 'marker-red-a700',
					title: 'Red A700 marker',
					color: 'var(--ck-highlight-marker-red-a700)',
					type: 'marker'
				},
				{
					model: 'redA700Pen',
					class: 'pen-red-a700',
					title: 'Red A700 pen',
					color: 'var(--ck-highlight-marker-red-a700)',
					type: 'pen'
				},
			
				{
					model: 'pinkMarker',
					class: 'marker-pink',
					title: 'Pink marker',
					color: 'var(--ck-highlight-marker-pink)',
					type: 'marker'
				},
				{
					model: 'pinkPen',
					class: 'pen-pink',
					title: 'Pink pen',
					color: 'var(--ck-highlight-marker-pink)',
					type: 'pen'
				},
			
				{
					model: 'pink50Marker',
					class: 'marker-pink-50',
					title: 'Pink 50 marker',
					color: 'var(--ck-highlight-marker-pink-50)',
					type: 'marker'
				},
				{
					model: 'pink50Pen',
					class: 'pen-pink-50',
					title: 'Pink 50 pen',
					color: 'var(--ck-highlight-marker-pink-50)',
					type: 'pen'
				},
			
				{
					model: 'pink100Marker',
					class: 'marker-pink-100',
					title: 'Pink 100 marker',
					color: 'var(--ck-highlight-marker-pink-100)',
					type: 'marker'
				},
				{
					model: 'pink100Pen',
					class: 'pen-pink-100',
					title: 'Pink 100 pen',
					color: 'var(--ck-highlight-marker-pink-100)',
					type: 'pen'
				},
			
				{
					model: 'pink200Marker',
					class: 'marker-pink-200',
					title: 'Pink 200 marker',
					color: 'var(--ck-highlight-marker-pink-200)',
					type: 'marker'
				},
				{
					model: 'pink200Pen',
					class: 'pen-pink-200',
					title: 'Pink 200 pen',
					color: 'var(--ck-highlight-marker-pink-200)',
					type: 'pen'
				},
			
				{
					model: 'pink300Marker',
					class: 'marker-pink-300',
					title: 'Pink 300 marker',
					color: 'var(--ck-highlight-marker-pink-300)',
					type: 'marker'
				},
				{
					model: 'pink300Pen',
					class: 'pen-pink-300',
					title: 'Pink 300 pen',
					color: 'var(--ck-highlight-marker-pink-300)',
					type: 'pen'
				},
			
				{
					model: 'pink400Marker',
					class: 'marker-pink-400',
					title: 'Pink 400 marker',
					color: 'var(--ck-highlight-marker-pink-400)',
					type: 'marker'
				},
				{
					model: 'pink400Pen',
					class: 'pen-pink-400',
					title: 'Pink 400 pen',
					color: 'var(--ck-highlight-marker-pink-400)',
					type: 'pen'
				},
			
				{
					model: 'pink500Marker',
					class: 'marker-pink-500',
					title: 'Pink 500 marker',
					color: 'var(--ck-highlight-marker-pink-500)',
					type: 'marker'
				},
				{
					model: 'pink500Pen',
					class: 'pen-pink-500',
					title: 'Pink 500 pen',
					color: 'var(--ck-highlight-marker-pink-500)',
					type: 'pen'
				},
			
				{
					model: 'pink600Marker',
					class: 'marker-pink-600',
					title: 'Pink 600 marker',
					color: 'var(--ck-highlight-marker-pink-600)',
					type: 'marker'
				},
				{
					model: 'pink600Pen',
					class: 'pen-pink-600',
					title: 'Pink 600 pen',
					color: 'var(--ck-highlight-marker-pink-600)',
					type: 'pen'
				},
			
				{
					model: 'pink700Marker',
					class: 'marker-pink-700',
					title: 'Pink 700 marker',
					color: 'var(--ck-highlight-marker-pink-700)',
					type: 'marker'
				},
				{
					model: 'pink700Pen',
					class: 'pen-pink-700',
					title: 'Pink 700 pen',
					color: 'var(--ck-highlight-marker-pink-700)',
					type: 'pen'
				},
			
				{
					model: 'pink800Marker',
					class: 'marker-pink-800',
					title: 'Pink 800 marker',
					color: 'var(--ck-highlight-marker-pink-800)',
					type: 'marker'
				},
				{
					model: 'pink800Pen',
					class: 'pen-pink-800',
					title: 'Pink 800 pen',
					color: 'var(--ck-highlight-marker-pink-800)',
					type: 'pen'
				},
			
				{
					model: 'pink900Marker',
					class: 'marker-pink-900',
					title: 'Pink 900 marker',
					color: 'var(--ck-highlight-marker-pink-900)',
					type: 'marker'
				},
				{
					model: 'pink900Pen',
					class: 'pen-pink-900',
					title: 'Pink 900 pen',
					color: 'var(--ck-highlight-marker-pink-900)',
					type: 'pen'
				},
			
				{
					model: 'pinkA100Marker',
					class: 'marker-pink-a100',
					title: 'Pink A100 marker',
					color: 'var(--ck-highlight-marker-pink-a100)',
					type: 'marker'
				},
				{
					model: 'pinkA100Pen',
					class: 'pen-pink-a100',
					title: 'Pink A100 pen',
					color: 'var(--ck-highlight-marker-pink-a100)',
					type: 'pen'
				},
			
				{
					model: 'pinkA200Marker',
					class: 'marker-pink-a200',
					title: 'Pink A200 marker',
					color: 'var(--ck-highlight-marker-pink-a200)',
					type: 'marker'
				},
				{
					model: 'pinkA200Pen',
					class: 'pen-pink-a200',
					title: 'Pink A200 pen',
					color: 'var(--ck-highlight-marker-pink-a200)',
					type: 'pen'
				},
			
				{
					model: 'pinkA400Marker',
					class: 'marker-pink-a400',
					title: 'Pink A400 marker',
					color: 'var(--ck-highlight-marker-pink-a400)',
					type: 'marker'
				},
				{
					model: 'pinkA400Pen',
					class: 'pen-pink-a400',
					title: 'Pink A400 pen',
					color: 'var(--ck-highlight-marker-pink-a400)',
					type: 'pen'
				},
			
				{
					model: 'pinkA700Marker',
					class: 'marker-pink-a700',
					title: 'Pink A700 marker',
					color: 'var(--ck-highlight-marker-pink-a700)',
					type: 'marker'
				},
				{
					model: 'pinkA700Pen',
					class: 'pen-pink-a700',
					title: 'Pink A700 pen',
					color: 'var(--ck-highlight-marker-pink-a700)',
					type: 'pen'
				},
			
				{
					model: 'purpleMarker',
					class: 'marker-purple',
					title: 'Purple marker',
					color: 'var(--ck-highlight-marker-purple)',
					type: 'marker'
				},
				{
					model: 'purplePen',
					class: 'pen-purple',
					title: 'Purple pen',
					color: 'var(--ck-highlight-marker-purple)',
					type: 'pen'
				},
			
				{
					model: 'purple50Marker',
					class: 'marker-purple-50',
					title: 'Purple 50 marker',
					color: 'var(--ck-highlight-marker-purple-50)',
					type: 'marker'
				},
				{
					model: 'purple50Pen',
					class: 'pen-purple-50',
					title: 'Purple 50 pen',
					color: 'var(--ck-highlight-marker-purple-50)',
					type: 'pen'
				},
			
				{
					model: 'purple100Marker',
					class: 'marker-purple-100',
					title: 'Purple 100 marker',
					color: 'var(--ck-highlight-marker-purple-100)',
					type: 'marker'
				},
				{
					model: 'purple100Pen',
					class: 'pen-purple-100',
					title: 'Purple 100 pen',
					color: 'var(--ck-highlight-marker-purple-100)',
					type: 'pen'
				},
			
				{
					model: 'purple200Marker',
					class: 'marker-purple-200',
					title: 'Purple 200 marker',
					color: 'var(--ck-highlight-marker-purple-200)',
					type: 'marker'
				},
				{
					model: 'purple200Pen',
					class: 'pen-purple-200',
					title: 'Purple 200 pen',
					color: 'var(--ck-highlight-marker-purple-200)',
					type: 'pen'
				},
			
				{
					model: 'purple300Marker',
					class: 'marker-purple-300',
					title: 'Purple 300 marker',
					color: 'var(--ck-highlight-marker-purple-300)',
					type: 'marker'
				},
				{
					model: 'purple300Pen',
					class: 'pen-purple-300',
					title: 'Purple 300 pen',
					color: 'var(--ck-highlight-marker-purple-300)',
					type: 'pen'
				},
			
				{
					model: 'purple400Marker',
					class: 'marker-purple-400',
					title: 'Purple 400 marker',
					color: 'var(--ck-highlight-marker-purple-400)',
					type: 'marker'
				},
				{
					model: 'purple400Pen',
					class: 'pen-purple-400',
					title: 'Purple 400 pen',
					color: 'var(--ck-highlight-marker-purple-400)',
					type: 'pen'
				},
			
				{
					model: 'purple500Marker',
					class: 'marker-purple-500',
					title: 'Purple 500 marker',
					color: 'var(--ck-highlight-marker-purple-500)',
					type: 'marker'
				},
				{
					model: 'purple500Pen',
					class: 'pen-purple-500',
					title: 'Purple 500 pen',
					color: 'var(--ck-highlight-marker-purple-500)',
					type: 'pen'
				},
			
				{
					model: 'purple600Marker',
					class: 'marker-purple-600',
					title: 'Purple 600 marker',
					color: 'var(--ck-highlight-marker-purple-600)',
					type: 'marker'
				},
				{
					model: 'purple600Pen',
					class: 'pen-purple-600',
					title: 'Purple 600 pen',
					color: 'var(--ck-highlight-marker-purple-600)',
					type: 'pen'
				},
			
				{
					model: 'purple700Marker',
					class: 'marker-purple-700',
					title: 'Purple 700 marker',
					color: 'var(--ck-highlight-marker-purple-700)',
					type: 'marker'
				},
				{
					model: 'purple700Pen',
					class: 'pen-purple-700',
					title: 'Purple 700 pen',
					color: 'var(--ck-highlight-marker-purple-700)',
					type: 'pen'
				},
			
				{
					model: 'purple800Marker',
					class: 'marker-purple-800',
					title: 'Purple 800 marker',
					color: 'var(--ck-highlight-marker-purple-800)',
					type: 'marker'
				},
				{
					model: 'purple800Pen',
					class: 'pen-purple-800',
					title: 'Purple 800 pen',
					color: 'var(--ck-highlight-marker-purple-800)',
					type: 'pen'
				},
			
				{
					model: 'purple900Marker',
					class: 'marker-purple-900',
					title: 'Purple 900 marker',
					color: 'var(--ck-highlight-marker-purple-900)',
					type: 'marker'
				},
				{
					model: 'purple900Pen',
					class: 'pen-purple-900',
					title: 'Purple 900 pen',
					color: 'var(--ck-highlight-marker-purple-900)',
					type: 'pen'
				},
			
				{
					model: 'purpleA100Marker',
					class: 'marker-purple-a100',
					title: 'Purple A100 marker',
					color: 'var(--ck-highlight-marker-purple-a100)',
					type: 'marker'
				},
				{
					model: 'purpleA100Pen',
					class: 'pen-purple-a100',
					title: 'Purple A100 pen',
					color: 'var(--ck-highlight-marker-purple-a100)',
					type: 'pen'
				},
			
				{
					model: 'purpleA200Marker',
					class: 'marker-purple-a200',
					title: 'Purple A200 marker',
					color: 'var(--ck-highlight-marker-purple-a200)',
					type: 'marker'
				},
				{
					model: 'purpleA200Pen',
					class: 'pen-purple-a200',
					title: 'Purple A200 pen',
					color: 'var(--ck-highlight-marker-purple-a200)',
					type: 'pen'
				},
			
				{
					model: 'purpleA400Marker',
					class: 'marker-purple-a400',
					title: 'Purple A400 marker',
					color: 'var(--ck-highlight-marker-purple-a400)',
					type: 'marker'
				},
				{
					model: 'purpleA400Pen',
					class: 'pen-purple-a400',
					title: 'Purple A400 pen',
					color: 'var(--ck-highlight-marker-purple-a400)',
					type: 'pen'
				},
			
				{
					model: 'purpleA700Marker',
					class: 'marker-purple-a700',
					title: 'Purple A700 marker',
					color: 'var(--ck-highlight-marker-purple-a700)',
					type: 'marker'
				},
				{
					model: 'purpleA700Pen',
					class: 'pen-purple-a700',
					title: 'Purple A700 pen',
					color: 'var(--ck-highlight-marker-purple-a700)',
					type: 'pen'
				},
			
				{
					model: 'deepPurpleMarker',
					class: 'marker-deep-purple',
					title: 'Deep Purple marker',
					color: 'var(--ck-highlight-marker-deep-purple)',
					type: 'marker'
				},
				{
					model: 'deepPurplePen',
					class: 'pen-deep-purple',
					title: 'Deep Purple pen',
					color: 'var(--ck-highlight-marker-deep-purple)',
					type: 'pen'
				},
			
				{
					model: 'deepPurple50Marker',
					class: 'marker-deep-purple-50',
					title: 'Deep Purple 50 marker',
					color: 'var(--ck-highlight-marker-deep-purple-50)',
					type: 'marker'
				},
				{
					model: 'deepPurple50Pen',
					class: 'pen-deep-purple-50',
					title: 'Deep Purple 50 pen',
					color: 'var(--ck-highlight-marker-deep-purple-50)',
					type: 'pen'
				},
			
				{
					model: 'deepPurple100Marker',
					class: 'marker-deep-purple-100',
					title: 'Deep Purple 100 marker',
					color: 'var(--ck-highlight-marker-deep-purple-100)',
					type: 'marker'
				},
				{
					model: 'deepPurple100Pen',
					class: 'pen-deep-purple-100',
					title: 'Deep Purple 100 pen',
					color: 'var(--ck-highlight-marker-deep-purple-100)',
					type: 'pen'
				},
			
				{
					model: 'deepPurple200Marker',
					class: 'marker-deep-purple-200',
					title: 'Deep Purple 200 marker',
					color: 'var(--ck-highlight-marker-deep-purple-200)',
					type: 'marker'
				},
				{
					model: 'deepPurple200Pen',
					class: 'pen-deep-purple-200',
					title: 'Deep Purple 200 pen',
					color: 'var(--ck-highlight-marker-deep-purple-200)',
					type: 'pen'
				},
			
				{
					model: 'deepPurple300Marker',
					class: 'marker-deep-purple-300',
					title: 'Deep Purple 300 marker',
					color: 'var(--ck-highlight-marker-deep-purple-300)',
					type: 'marker'
				},
				{
					model: 'deepPurple300Pen',
					class: 'pen-deep-purple-300',
					title: 'Deep Purple 300 pen',
					color: 'var(--ck-highlight-marker-deep-purple-300)',
					type: 'pen'
				},
			
				{
					model: 'deepPurple400Marker',
					class: 'marker-deep-purple-400',
					title: 'Deep Purple 400 marker',
					color: 'var(--ck-highlight-marker-deep-purple-400)',
					type: 'marker'
				},
				{
					model: 'deepPurple400Pen',
					class: 'pen-deep-purple-400',
					title: 'Deep Purple 400 pen',
					color: 'var(--ck-highlight-marker-deep-purple-400)',
					type: 'pen'
				},
			
				{
					model: 'deepPurple500Marker',
					class: 'marker-deep-purple-500',
					title: 'Deep Purple 500 marker',
					color: 'var(--ck-highlight-marker-deep-purple-500)',
					type: 'marker'
				},
				{
					model: 'deepPurple500Pen',
					class: 'pen-deep-purple-500',
					title: 'Deep Purple 500 pen',
					color: 'var(--ck-highlight-marker-deep-purple-500)',
					type: 'pen'
				},
			
				{
					model: 'deepPurple600Marker',
					class: 'marker-deep-purple-600',
					title: 'Deep Purple 600 marker',
					color: 'var(--ck-highlight-marker-deep-purple-600)',
					type: 'marker'
				},
				{
					model: 'deepPurple600Pen',
					class: 'pen-deep-purple-600',
					title: 'Deep Purple 600 pen',
					color: 'var(--ck-highlight-marker-deep-purple-600)',
					type: 'pen'
				},
			
				{
					model: 'deepPurple700Marker',
					class: 'marker-deep-purple-700',
					title: 'Deep Purple 700 marker',
					color: 'var(--ck-highlight-marker-deep-purple-700)',
					type: 'marker'
				},
				{
					model: 'deepPurple700Pen',
					class: 'pen-deep-purple-700',
					title: 'Deep Purple 700 pen',
					color: 'var(--ck-highlight-marker-deep-purple-700)',
					type: 'pen'
				},
			
				{
					model: 'deepPurple800Marker',
					class: 'marker-deep-purple-800',
					title: 'Deep Purple 800 marker',
					color: 'var(--ck-highlight-marker-deep-purple-800)',
					type: 'marker'
				},
				{
					model: 'deepPurple800Pen',
					class: 'pen-deep-purple-800',
					title: 'Deep Purple 800 pen',
					color: 'var(--ck-highlight-marker-deep-purple-800)',
					type: 'pen'
				},
			
				{
					model: 'deepPurple900Marker',
					class: 'marker-deep-purple-900',
					title: 'Deep Purple 900 marker',
					color: 'var(--ck-highlight-marker-deep-purple-900)',
					type: 'marker'
				},
				{
					model: 'deepPurple900Pen',
					class: 'pen-deep-purple-900',
					title: 'Deep Purple 900 pen',
					color: 'var(--ck-highlight-marker-deep-purple-900)',
					type: 'pen'
				},
			
				{
					model: 'deepPurpleA100Marker',
					class: 'marker-deep-purple-a100',
					title: 'Deep Purple A100 marker',
					color: 'var(--ck-highlight-marker-deep-purple-a100)',
					type: 'marker'
				},
				{
					model: 'deepPurpleA100Pen',
					class: 'pen-deep-purple-a100',
					title: 'Deep Purple A100 pen',
					color: 'var(--ck-highlight-marker-deep-purple-a100)',
					type: 'pen'
				},
			
				{
					model: 'deepPurpleA200Marker',
					class: 'marker-deep-purple-a200',
					title: 'Deep Purple A200 marker',
					color: 'var(--ck-highlight-marker-deep-purple-a200)',
					type: 'marker'
				},
				{
					model: 'deepPurpleA200Pen',
					class: 'pen-deep-purple-a200',
					title: 'Deep Purple A200 pen',
					color: 'var(--ck-highlight-marker-deep-purple-a200)',
					type: 'pen'
				},
			
				{
					model: 'deepPurpleA400Marker',
					class: 'marker-deep-purple-a400',
					title: 'Deep Purple A400 marker',
					color: 'var(--ck-highlight-marker-deep-purple-a400)',
					type: 'marker'
				},
				{
					model: 'deepPurpleA400Pen',
					class: 'pen-deep-purple-a400',
					title: 'Deep Purple A400 pen',
					color: 'var(--ck-highlight-marker-deep-purple-a400)',
					type: 'pen'
				},
			
				{
					model: 'deepPurpleA700Marker',
					class: 'marker-deep-purple-a700',
					title: 'Deep Purple A700 marker',
					color: 'var(--ck-highlight-marker-deep-purple-a700)',
					type: 'marker'
				},
				{
					model: 'deepPurpleA700Pen',
					class: 'pen-deep-purple-a700',
					title: 'Deep Purple A700 pen',
					color: 'var(--ck-highlight-marker-deep-purple-a700)',
					type: 'pen'
				},
			
				{
					model: 'indigoMarker',
					class: 'marker-indigo',
					title: 'Indigo marker',
					color: 'var(--ck-highlight-marker-indigo)',
					type: 'marker'
				},
				{
					model: 'indigoPen',
					class: 'pen-indigo',
					title: 'Indigo pen',
					color: 'var(--ck-highlight-marker-indigo)',
					type: 'pen'
				},
			
				{
					model: 'indigo50Marker',
					class: 'marker-indigo-50',
					title: 'Indigo 50 marker',
					color: 'var(--ck-highlight-marker-indigo-50)',
					type: 'marker'
				},
				{
					model: 'indigo50Pen',
					class: 'pen-indigo-50',
					title: 'Indigo 50 pen',
					color: 'var(--ck-highlight-marker-indigo-50)',
					type: 'pen'
				},
			
				{
					model: 'indigo100Marker',
					class: 'marker-indigo-100',
					title: 'Indigo 100 marker',
					color: 'var(--ck-highlight-marker-indigo-100)',
					type: 'marker'
				},
				{
					model: 'indigo100Pen',
					class: 'pen-indigo-100',
					title: 'Indigo 100 pen',
					color: 'var(--ck-highlight-marker-indigo-100)',
					type: 'pen'
				},
			
				{
					model: 'indigo200Marker',
					class: 'marker-indigo-200',
					title: 'Indigo 200 marker',
					color: 'var(--ck-highlight-marker-indigo-200)',
					type: 'marker'
				},
				{
					model: 'indigo200Pen',
					class: 'pen-indigo-200',
					title: 'Indigo 200 pen',
					color: 'var(--ck-highlight-marker-indigo-200)',
					type: 'pen'
				},
			
				{
					model: 'indigo300Marker',
					class: 'marker-indigo-300',
					title: 'Indigo 300 marker',
					color: 'var(--ck-highlight-marker-indigo-300)',
					type: 'marker'
				},
				{
					model: 'indigo300Pen',
					class: 'pen-indigo-300',
					title: 'Indigo 300 pen',
					color: 'var(--ck-highlight-marker-indigo-300)',
					type: 'pen'
				},
			
				{
					model: 'indigo400Marker',
					class: 'marker-indigo-400',
					title: 'Indigo 400 marker',
					color: 'var(--ck-highlight-marker-indigo-400)',
					type: 'marker'
				},
				{
					model: 'indigo400Pen',
					class: 'pen-indigo-400',
					title: 'Indigo 400 pen',
					color: 'var(--ck-highlight-marker-indigo-400)',
					type: 'pen'
				},
			
				{
					model: 'indigo500Marker',
					class: 'marker-indigo-500',
					title: 'Indigo 500 marker',
					color: 'var(--ck-highlight-marker-indigo-500)',
					type: 'marker'
				},
				{
					model: 'indigo500Pen',
					class: 'pen-indigo-500',
					title: 'Indigo 500 pen',
					color: 'var(--ck-highlight-marker-indigo-500)',
					type: 'pen'
				},
			
				{
					model: 'indigo600Marker',
					class: 'marker-indigo-600',
					title: 'Indigo 600 marker',
					color: 'var(--ck-highlight-marker-indigo-600)',
					type: 'marker'
				},
				{
					model: 'indigo600Pen',
					class: 'pen-indigo-600',
					title: 'Indigo 600 pen',
					color: 'var(--ck-highlight-marker-indigo-600)',
					type: 'pen'
				},
			
				{
					model: 'indigo700Marker',
					class: 'marker-indigo-700',
					title: 'Indigo 700 marker',
					color: 'var(--ck-highlight-marker-indigo-700)',
					type: 'marker'
				},
				{
					model: 'indigo700Pen',
					class: 'pen-indigo-700',
					title: 'Indigo 700 pen',
					color: 'var(--ck-highlight-marker-indigo-700)',
					type: 'pen'
				},
			
				{
					model: 'indigo800Marker',
					class: 'marker-indigo-800',
					title: 'Indigo 800 marker',
					color: 'var(--ck-highlight-marker-indigo-800)',
					type: 'marker'
				},
				{
					model: 'indigo800Pen',
					class: 'pen-indigo-800',
					title: 'Indigo 800 pen',
					color: 'var(--ck-highlight-marker-indigo-800)',
					type: 'pen'
				},
			
				{
					model: 'indigo900Marker',
					class: 'marker-indigo-900',
					title: 'Indigo 900 marker',
					color: 'var(--ck-highlight-marker-indigo-900)',
					type: 'marker'
				},
				{
					model: 'indigo900Pen',
					class: 'pen-indigo-900',
					title: 'Indigo 900 pen',
					color: 'var(--ck-highlight-marker-indigo-900)',
					type: 'pen'
				},
			
				{
					model: 'indigoA100Marker',
					class: 'marker-indigo-a100',
					title: 'Indigo A100 marker',
					color: 'var(--ck-highlight-marker-indigo-a100)',
					type: 'marker'
				},
				{
					model: 'indigoA100Pen',
					class: 'pen-indigo-a100',
					title: 'Indigo A100 pen',
					color: 'var(--ck-highlight-marker-indigo-a100)',
					type: 'pen'
				},
			
				{
					model: 'indigoA200Marker',
					class: 'marker-indigo-a200',
					title: 'Indigo A200 marker',
					color: 'var(--ck-highlight-marker-indigo-a200)',
					type: 'marker'
				},
				{
					model: 'indigoA200Pen',
					class: 'pen-indigo-a200',
					title: 'Indigo A200 pen',
					color: 'var(--ck-highlight-marker-indigo-a200)',
					type: 'pen'
				},
			
				{
					model: 'indigoA400Marker',
					class: 'marker-indigo-a400',
					title: 'Indigo A400 marker',
					color: 'var(--ck-highlight-marker-indigo-a400)',
					type: 'marker'
				},
				{
					model: 'indigoA400Pen',
					class: 'pen-indigo-a400',
					title: 'Indigo A400 pen',
					color: 'var(--ck-highlight-marker-indigo-a400)',
					type: 'pen'
				},
			
				{
					model: 'indigoA700Marker',
					class: 'marker-indigo-a700',
					title: 'Indigo A700 marker',
					color: 'var(--ck-highlight-marker-indigo-a700)',
					type: 'marker'
				},
				{
					model: 'indigoA700Pen',
					class: 'pen-indigo-a700',
					title: 'Indigo A700 pen',
					color: 'var(--ck-highlight-marker-indigo-a700)',
					type: 'pen'
				},
			
				{
					model: 'blueMarker',
					class: 'marker-blue',
					title: 'Blue marker',
					color: 'var(--ck-highlight-marker-blue)',
					type: 'marker'
				},
				{
					model: 'bluePen',
					class: 'pen-blue',
					title: 'Blue pen',
					color: 'var(--ck-highlight-marker-blue)',
					type: 'pen'
				},
			
				{
					model: 'blue50Marker',
					class: 'marker-blue-50',
					title: 'Blue 50 marker',
					color: 'var(--ck-highlight-marker-blue-50)',
					type: 'marker'
				},
				{
					model: 'blue50Pen',
					class: 'pen-blue-50',
					title: 'Blue 50 pen',
					color: 'var(--ck-highlight-marker-blue-50)',
					type: 'pen'
				},
			
				{
					model: 'blue100Marker',
					class: 'marker-blue-100',
					title: 'Blue 100 marker',
					color: 'var(--ck-highlight-marker-blue-100)',
					type: 'marker'
				},
				{
					model: 'blue100Pen',
					class: 'pen-blue-100',
					title: 'Blue 100 pen',
					color: 'var(--ck-highlight-marker-blue-100)',
					type: 'pen'
				},
			
				{
					model: 'blue200Marker',
					class: 'marker-blue-200',
					title: 'Blue 200 marker',
					color: 'var(--ck-highlight-marker-blue-200)',
					type: 'marker'
				},
				{
					model: 'blue200Pen',
					class: 'pen-blue-200',
					title: 'Blue 200 pen',
					color: 'var(--ck-highlight-marker-blue-200)',
					type: 'pen'
				},
			
				{
					model: 'blue300Marker',
					class: 'marker-blue-300',
					title: 'Blue 300 marker',
					color: 'var(--ck-highlight-marker-blue-300)',
					type: 'marker'
				},
				{
					model: 'blue300Pen',
					class: 'pen-blue-300',
					title: 'Blue 300 pen',
					color: 'var(--ck-highlight-marker-blue-300)',
					type: 'pen'
				},
			
				{
					model: 'blue400Marker',
					class: 'marker-blue-400',
					title: 'Blue 400 marker',
					color: 'var(--ck-highlight-marker-blue-400)',
					type: 'marker'
				},
				{
					model: 'blue400Pen',
					class: 'pen-blue-400',
					title: 'Blue 400 pen',
					color: 'var(--ck-highlight-marker-blue-400)',
					type: 'pen'
				},
			
				{
					model: 'blue500Marker',
					class: 'marker-blue-500',
					title: 'Blue 500 marker',
					color: 'var(--ck-highlight-marker-blue-500)',
					type: 'marker'
				},
				{
					model: 'blue500Pen',
					class: 'pen-blue-500',
					title: 'Blue 500 pen',
					color: 'var(--ck-highlight-marker-blue-500)',
					type: 'pen'
				},
			
				{
					model: 'blue600Marker',
					class: 'marker-blue-600',
					title: 'Blue 600 marker',
					color: 'var(--ck-highlight-marker-blue-600)',
					type: 'marker'
				},
				{
					model: 'blue600Pen',
					class: 'pen-blue-600',
					title: 'Blue 600 pen',
					color: 'var(--ck-highlight-marker-blue-600)',
					type: 'pen'
				},
			
				{
					model: 'blue700Marker',
					class: 'marker-blue-700',
					title: 'Blue 700 marker',
					color: 'var(--ck-highlight-marker-blue-700)',
					type: 'marker'
				},
				{
					model: 'blue700Pen',
					class: 'pen-blue-700',
					title: 'Blue 700 pen',
					color: 'var(--ck-highlight-marker-blue-700)',
					type: 'pen'
				},
			
				{
					model: 'blue800Marker',
					class: 'marker-blue-800',
					title: 'Blue 800 marker',
					color: 'var(--ck-highlight-marker-blue-800)',
					type: 'marker'
				},
				{
					model: 'blue800Pen',
					class: 'pen-blue-800',
					title: 'Blue 800 pen',
					color: 'var(--ck-highlight-marker-blue-800)',
					type: 'pen'
				},
			
				{
					model: 'blue900Marker',
					class: 'marker-blue-900',
					title: 'Blue 900 marker',
					color: 'var(--ck-highlight-marker-blue-900)',
					type: 'marker'
				},
				{
					model: 'blue900Pen',
					class: 'pen-blue-900',
					title: 'Blue 900 pen',
					color: 'var(--ck-highlight-marker-blue-900)',
					type: 'pen'
				},
			
				{
					model: 'blueA100Marker',
					class: 'marker-blue-a100',
					title: 'Blue A100 marker',
					color: 'var(--ck-highlight-marker-blue-a100)',
					type: 'marker'
				},
				{
					model: 'blueA100Pen',
					class: 'pen-blue-a100',
					title: 'Blue A100 pen',
					color: 'var(--ck-highlight-marker-blue-a100)',
					type: 'pen'
				},
			
				{
					model: 'blueA200Marker',
					class: 'marker-blue-a200',
					title: 'Blue A200 marker',
					color: 'var(--ck-highlight-marker-blue-a200)',
					type: 'marker'
				},
				{
					model: 'blueA200Pen',
					class: 'pen-blue-a200',
					title: 'Blue A200 pen',
					color: 'var(--ck-highlight-marker-blue-a200)',
					type: 'pen'
				},
			
				{
					model: 'blueA400Marker',
					class: 'marker-blue-a400',
					title: 'Blue A400 marker',
					color: 'var(--ck-highlight-marker-blue-a400)',
					type: 'marker'
				},
				{
					model: 'blueA400Pen',
					class: 'pen-blue-a400',
					title: 'Blue A400 pen',
					color: 'var(--ck-highlight-marker-blue-a400)',
					type: 'pen'
				},
			
				{
					model: 'blueA700Marker',
					class: 'marker-blue-a700',
					title: 'Blue A700 marker',
					color: 'var(--ck-highlight-marker-blue-a700)',
					type: 'marker'
				},
				{
					model: 'blueA700Pen',
					class: 'pen-blue-a700',
					title: 'Blue A700 pen',
					color: 'var(--ck-highlight-marker-blue-a700)',
					type: 'pen'
				},
			
				{
					model: 'lightBlueMarker',
					class: 'marker-light-blue',
					title: 'Light Blue marker',
					color: 'var(--ck-highlight-marker-light-blue)',
					type: 'marker'
				},
				{
					model: 'lightBluePen',
					class: 'pen-light-blue',
					title: 'Light Blue pen',
					color: 'var(--ck-highlight-marker-light-blue)',
					type: 'pen'
				},
			
				{
					model: 'lightBlue50Marker',
					class: 'marker-light-blue-50',
					title: 'Light Blue 50 marker',
					color: 'var(--ck-highlight-marker-light-blue-50)',
					type: 'marker'
				},
				{
					model: 'lightBlue50Pen',
					class: 'pen-light-blue-50',
					title: 'Light Blue 50 pen',
					color: 'var(--ck-highlight-marker-light-blue-50)',
					type: 'pen'
				},
			
				{
					model: 'lightBlue100Marker',
					class: 'marker-light-blue-100',
					title: 'Light Blue 100 marker',
					color: 'var(--ck-highlight-marker-light-blue-100)',
					type: 'marker'
				},
				{
					model: 'lightBlue100Pen',
					class: 'pen-light-blue-100',
					title: 'Light Blue 100 pen',
					color: 'var(--ck-highlight-marker-light-blue-100)',
					type: 'pen'
				},
			
				{
					model: 'lightBlue200Marker',
					class: 'marker-light-blue-200',
					title: 'Light Blue 200 marker',
					color: 'var(--ck-highlight-marker-light-blue-200)',
					type: 'marker'
				},
				{
					model: 'lightBlue200Pen',
					class: 'pen-light-blue-200',
					title: 'Light Blue 200 pen',
					color: 'var(--ck-highlight-marker-light-blue-200)',
					type: 'pen'
				},
			
				{
					model: 'lightBlue300Marker',
					class: 'marker-light-blue-300',
					title: 'Light Blue 300 marker',
					color: 'var(--ck-highlight-marker-light-blue-300)',
					type: 'marker'
				},
				{
					model: 'lightBlue300Pen',
					class: 'pen-light-blue-300',
					title: 'Light Blue 300 pen',
					color: 'var(--ck-highlight-marker-light-blue-300)',
					type: 'pen'
				},
			
				{
					model: 'lightBlue400Marker',
					class: 'marker-light-blue-400',
					title: 'Light Blue 400 marker',
					color: 'var(--ck-highlight-marker-light-blue-400)',
					type: 'marker'
				},
				{
					model: 'lightBlue400Pen',
					class: 'pen-light-blue-400',
					title: 'Light Blue 400 pen',
					color: 'var(--ck-highlight-marker-light-blue-400)',
					type: 'pen'
				},
			
				{
					model: 'lightBlue500Marker',
					class: 'marker-light-blue-500',
					title: 'Light Blue 500 marker',
					color: 'var(--ck-highlight-marker-light-blue-500)',
					type: 'marker'
				},
				{
					model: 'lightBlue500Pen',
					class: 'pen-light-blue-500',
					title: 'Light Blue 500 pen',
					color: 'var(--ck-highlight-marker-light-blue-500)',
					type: 'pen'
				},
			
				{
					model: 'lightBlue600Marker',
					class: 'marker-light-blue-600',
					title: 'Light Blue 600 marker',
					color: 'var(--ck-highlight-marker-light-blue-600)',
					type: 'marker'
				},
				{
					model: 'lightBlue600Pen',
					class: 'pen-light-blue-600',
					title: 'Light Blue 600 pen',
					color: 'var(--ck-highlight-marker-light-blue-600)',
					type: 'pen'
				},
			
				{
					model: 'lightBlue700Marker',
					class: 'marker-light-blue-700',
					title: 'Light Blue 700 marker',
					color: 'var(--ck-highlight-marker-light-blue-700)',
					type: 'marker'
				},
				{
					model: 'lightBlue700Pen',
					class: 'pen-light-blue-700',
					title: 'Light Blue 700 pen',
					color: 'var(--ck-highlight-marker-light-blue-700)',
					type: 'pen'
				},
			
				{
					model: 'lightBlue800Marker',
					class: 'marker-light-blue-800',
					title: 'Light Blue 800 marker',
					color: 'var(--ck-highlight-marker-light-blue-800)',
					type: 'marker'
				},
				{
					model: 'lightBlue800Pen',
					class: 'pen-light-blue-800',
					title: 'Light Blue 800 pen',
					color: 'var(--ck-highlight-marker-light-blue-800)',
					type: 'pen'
				},
			
				{
					model: 'lightBlue900Marker',
					class: 'marker-light-blue-900',
					title: 'Light Blue 900 marker',
					color: 'var(--ck-highlight-marker-light-blue-900)',
					type: 'marker'
				},
				{
					model: 'lightBlue900Pen',
					class: 'pen-light-blue-900',
					title: 'Light Blue 900 pen',
					color: 'var(--ck-highlight-marker-light-blue-900)',
					type: 'pen'
				},
			
				{
					model: 'lightBlueA100Marker',
					class: 'marker-light-blue-a100',
					title: 'Light Blue A100 marker',
					color: 'var(--ck-highlight-marker-light-blue-a100)',
					type: 'marker'
				},
				{
					model: 'lightBlueA100Pen',
					class: 'pen-light-blue-a100',
					title: 'Light Blue A100 pen',
					color: 'var(--ck-highlight-marker-light-blue-a100)',
					type: 'pen'
				},
			
				{
					model: 'lightBlueA200Marker',
					class: 'marker-light-blue-a200',
					title: 'Light Blue A200 marker',
					color: 'var(--ck-highlight-marker-light-blue-a200)',
					type: 'marker'
				},
				{
					model: 'lightBlueA200Pen',
					class: 'pen-light-blue-a200',
					title: 'Light Blue A200 pen',
					color: 'var(--ck-highlight-marker-light-blue-a200)',
					type: 'pen'
				},
			
				{
					model: 'lightBlueA400Marker',
					class: 'marker-light-blue-a400',
					title: 'Light Blue A400 marker',
					color: 'var(--ck-highlight-marker-light-blue-a400)',
					type: 'marker'
				},
				{
					model: 'lightBlueA400Pen',
					class: 'pen-light-blue-a400',
					title: 'Light Blue A400 pen',
					color: 'var(--ck-highlight-marker-light-blue-a400)',
					type: 'pen'
				},
			
				{
					model: 'lightBlueA700Marker',
					class: 'marker-light-blue-a700',
					title: 'Light Blue A700 marker',
					color: 'var(--ck-highlight-marker-light-blue-a700)',
					type: 'marker'
				},
				{
					model: 'lightBlueA700Pen',
					class: 'pen-light-blue-a700',
					title: 'Light Blue A700 pen',
					color: 'var(--ck-highlight-marker-light-blue-a700)',
					type: 'pen'
				},
			
				{
					model: 'cyanMarker',
					class: 'marker-cyan',
					title: 'Cyan marker',
					color: 'var(--ck-highlight-marker-cyan)',
					type: 'marker'
				},
				{
					model: 'cyanPen',
					class: 'pen-cyan',
					title: 'Cyan pen',
					color: 'var(--ck-highlight-marker-cyan)',
					type: 'pen'
				},
			
				{
					model: 'cyan50Marker',
					class: 'marker-cyan-50',
					title: 'Cyan 50 marker',
					color: 'var(--ck-highlight-marker-cyan-50)',
					type: 'marker'
				},
				{
					model: 'cyan50Pen',
					class: 'pen-cyan-50',
					title: 'Cyan 50 pen',
					color: 'var(--ck-highlight-marker-cyan-50)',
					type: 'pen'
				},
			
				{
					model: 'cyan100Marker',
					class: 'marker-cyan-100',
					title: 'Cyan 100 marker',
					color: 'var(--ck-highlight-marker-cyan-100)',
					type: 'marker'
				},
				{
					model: 'cyan100Pen',
					class: 'pen-cyan-100',
					title: 'Cyan 100 pen',
					color: 'var(--ck-highlight-marker-cyan-100)',
					type: 'pen'
				},
			
				{
					model: 'cyan200Marker',
					class: 'marker-cyan-200',
					title: 'Cyan 200 marker',
					color: 'var(--ck-highlight-marker-cyan-200)',
					type: 'marker'
				},
				{
					model: 'cyan200Pen',
					class: 'pen-cyan-200',
					title: 'Cyan 200 pen',
					color: 'var(--ck-highlight-marker-cyan-200)',
					type: 'pen'
				},
			
				{
					model: 'cyan300Marker',
					class: 'marker-cyan-300',
					title: 'Cyan 300 marker',
					color: 'var(--ck-highlight-marker-cyan-300)',
					type: 'marker'
				},
				{
					model: 'cyan300Pen',
					class: 'pen-cyan-300',
					title: 'Cyan 300 pen',
					color: 'var(--ck-highlight-marker-cyan-300)',
					type: 'pen'
				},
			
				{
					model: 'cyan400Marker',
					class: 'marker-cyan-400',
					title: 'Cyan 400 marker',
					color: 'var(--ck-highlight-marker-cyan-400)',
					type: 'marker'
				},
				{
					model: 'cyan400Pen',
					class: 'pen-cyan-400',
					title: 'Cyan 400 pen',
					color: 'var(--ck-highlight-marker-cyan-400)',
					type: 'pen'
				},
			
				{
					model: 'cyan500Marker',
					class: 'marker-cyan-500',
					title: 'Cyan 500 marker',
					color: 'var(--ck-highlight-marker-cyan-500)',
					type: 'marker'
				},
				{
					model: 'cyan500Pen',
					class: 'pen-cyan-500',
					title: 'Cyan 500 pen',
					color: 'var(--ck-highlight-marker-cyan-500)',
					type: 'pen'
				},
			
				{
					model: 'cyan600Marker',
					class: 'marker-cyan-600',
					title: 'Cyan 600 marker',
					color: 'var(--ck-highlight-marker-cyan-600)',
					type: 'marker'
				},
				{
					model: 'cyan600Pen',
					class: 'pen-cyan-600',
					title: 'Cyan 600 pen',
					color: 'var(--ck-highlight-marker-cyan-600)',
					type: 'pen'
				},
			
				{
					model: 'cyan700Marker',
					class: 'marker-cyan-700',
					title: 'Cyan 700 marker',
					color: 'var(--ck-highlight-marker-cyan-700)',
					type: 'marker'
				},
				{
					model: 'cyan700Pen',
					class: 'pen-cyan-700',
					title: 'Cyan 700 pen',
					color: 'var(--ck-highlight-marker-cyan-700)',
					type: 'pen'
				},
			
				{
					model: 'cyan800Marker',
					class: 'marker-cyan-800',
					title: 'Cyan 800 marker',
					color: 'var(--ck-highlight-marker-cyan-800)',
					type: 'marker'
				},
				{
					model: 'cyan800Pen',
					class: 'pen-cyan-800',
					title: 'Cyan 800 pen',
					color: 'var(--ck-highlight-marker-cyan-800)',
					type: 'pen'
				},
			
				{
					model: 'cyan900Marker',
					class: 'marker-cyan-900',
					title: 'Cyan 900 marker',
					color: 'var(--ck-highlight-marker-cyan-900)',
					type: 'marker'
				},
				{
					model: 'cyan900Pen',
					class: 'pen-cyan-900',
					title: 'Cyan 900 pen',
					color: 'var(--ck-highlight-marker-cyan-900)',
					type: 'pen'
				},
			
				{
					model: 'cyanA100Marker',
					class: 'marker-cyan-a100',
					title: 'Cyan A100 marker',
					color: 'var(--ck-highlight-marker-cyan-a100)',
					type: 'marker'
				},
				{
					model: 'cyanA100Pen',
					class: 'pen-cyan-a100',
					title: 'Cyan A100 pen',
					color: 'var(--ck-highlight-marker-cyan-a100)',
					type: 'pen'
				},
			
				{
					model: 'cyanA200Marker',
					class: 'marker-cyan-a200',
					title: 'Cyan A200 marker',
					color: 'var(--ck-highlight-marker-cyan-a200)',
					type: 'marker'
				},
				{
					model: 'cyanA200Pen',
					class: 'pen-cyan-a200',
					title: 'Cyan A200 pen',
					color: 'var(--ck-highlight-marker-cyan-a200)',
					type: 'pen'
				},
			
				{
					model: 'cyanA400Marker',
					class: 'marker-cyan-a400',
					title: 'Cyan A400 marker',
					color: 'var(--ck-highlight-marker-cyan-a400)',
					type: 'marker'
				},
				{
					model: 'cyanA400Pen',
					class: 'pen-cyan-a400',
					title: 'Cyan A400 pen',
					color: 'var(--ck-highlight-marker-cyan-a400)',
					type: 'pen'
				},
			
				{
					model: 'cyanA700Marker',
					class: 'marker-cyan-a700',
					title: 'Cyan A700 marker',
					color: 'var(--ck-highlight-marker-cyan-a700)',
					type: 'marker'
				},
				{
					model: 'cyanA700Pen',
					class: 'pen-cyan-a700',
					title: 'Cyan A700 pen',
					color: 'var(--ck-highlight-marker-cyan-a700)',
					type: 'pen'
				},
			
				{
					model: 'tealMarker',
					class: 'marker-teal',
					title: 'Teal marker',
					color: 'var(--ck-highlight-marker-teal)',
					type: 'marker'
				},
				{
					model: 'tealPen',
					class: 'pen-teal',
					title: 'Teal pen',
					color: 'var(--ck-highlight-marker-teal)',
					type: 'pen'
				},
			
				{
					model: 'teal50Marker',
					class: 'marker-teal-50',
					title: 'Teal 50 marker',
					color: 'var(--ck-highlight-marker-teal-50)',
					type: 'marker'
				},
				{
					model: 'teal50Pen',
					class: 'pen-teal-50',
					title: 'Teal 50 pen',
					color: 'var(--ck-highlight-marker-teal-50)',
					type: 'pen'
				},
			
				{
					model: 'teal100Marker',
					class: 'marker-teal-100',
					title: 'Teal 100 marker',
					color: 'var(--ck-highlight-marker-teal-100)',
					type: 'marker'
				},
				{
					model: 'teal100Pen',
					class: 'pen-teal-100',
					title: 'Teal 100 pen',
					color: 'var(--ck-highlight-marker-teal-100)',
					type: 'pen'
				},
			
				{
					model: 'teal200Marker',
					class: 'marker-teal-200',
					title: 'Teal 200 marker',
					color: 'var(--ck-highlight-marker-teal-200)',
					type: 'marker'
				},
				{
					model: 'teal200Pen',
					class: 'pen-teal-200',
					title: 'Teal 200 pen',
					color: 'var(--ck-highlight-marker-teal-200)',
					type: 'pen'
				},
			
				{
					model: 'teal300Marker',
					class: 'marker-teal-300',
					title: 'Teal 300 marker',
					color: 'var(--ck-highlight-marker-teal-300)',
					type: 'marker'
				},
				{
					model: 'teal300Pen',
					class: 'pen-teal-300',
					title: 'Teal 300 pen',
					color: 'var(--ck-highlight-marker-teal-300)',
					type: 'pen'
				},
			
				{
					model: 'teal400Marker',
					class: 'marker-teal-400',
					title: 'Teal 400 marker',
					color: 'var(--ck-highlight-marker-teal-400)',
					type: 'marker'
				},
				{
					model: 'teal400Pen',
					class: 'pen-teal-400',
					title: 'Teal 400 pen',
					color: 'var(--ck-highlight-marker-teal-400)',
					type: 'pen'
				},
			
				{
					model: 'teal500Marker',
					class: 'marker-teal-500',
					title: 'Teal 500 marker',
					color: 'var(--ck-highlight-marker-teal-500)',
					type: 'marker'
				},
				{
					model: 'teal500Pen',
					class: 'pen-teal-500',
					title: 'Teal 500 pen',
					color: 'var(--ck-highlight-marker-teal-500)',
					type: 'pen'
				},
			
				{
					model: 'teal600Marker',
					class: 'marker-teal-600',
					title: 'Teal 600 marker',
					color: 'var(--ck-highlight-marker-teal-600)',
					type: 'marker'
				},
				{
					model: 'teal600Pen',
					class: 'pen-teal-600',
					title: 'Teal 600 pen',
					color: 'var(--ck-highlight-marker-teal-600)',
					type: 'pen'
				},
			
				{
					model: 'teal700Marker',
					class: 'marker-teal-700',
					title: 'Teal 700 marker',
					color: 'var(--ck-highlight-marker-teal-700)',
					type: 'marker'
				},
				{
					model: 'teal700Pen',
					class: 'pen-teal-700',
					title: 'Teal 700 pen',
					color: 'var(--ck-highlight-marker-teal-700)',
					type: 'pen'
				},
			
				{
					model: 'teal800Marker',
					class: 'marker-teal-800',
					title: 'Teal 800 marker',
					color: 'var(--ck-highlight-marker-teal-800)',
					type: 'marker'
				},
				{
					model: 'teal800Pen',
					class: 'pen-teal-800',
					title: 'Teal 800 pen',
					color: 'var(--ck-highlight-marker-teal-800)',
					type: 'pen'
				},
			
				{
					model: 'teal900Marker',
					class: 'marker-teal-900',
					title: 'Teal 900 marker',
					color: 'var(--ck-highlight-marker-teal-900)',
					type: 'marker'
				},
				{
					model: 'teal900Pen',
					class: 'pen-teal-900',
					title: 'Teal 900 pen',
					color: 'var(--ck-highlight-marker-teal-900)',
					type: 'pen'
				},
			
				{
					model: 'tealA100Marker',
					class: 'marker-teal-a100',
					title: 'Teal A100 marker',
					color: 'var(--ck-highlight-marker-teal-a100)',
					type: 'marker'
				},
				{
					model: 'tealA100Pen',
					class: 'pen-teal-a100',
					title: 'Teal A100 pen',
					color: 'var(--ck-highlight-marker-teal-a100)',
					type: 'pen'
				},
			
				{
					model: 'tealA200Marker',
					class: 'marker-teal-a200',
					title: 'Teal A200 marker',
					color: 'var(--ck-highlight-marker-teal-a200)',
					type: 'marker'
				},
				{
					model: 'tealA200Pen',
					class: 'pen-teal-a200',
					title: 'Teal A200 pen',
					color: 'var(--ck-highlight-marker-teal-a200)',
					type: 'pen'
				},
			
				{
					model: 'tealA400Marker',
					class: 'marker-teal-a400',
					title: 'Teal A400 marker',
					color: 'var(--ck-highlight-marker-teal-a400)',
					type: 'marker'
				},
				{
					model: 'tealA400Pen',
					class: 'pen-teal-a400',
					title: 'Teal A400 pen',
					color: 'var(--ck-highlight-marker-teal-a400)',
					type: 'pen'
				},
			
				{
					model: 'tealA700Marker',
					class: 'marker-teal-a700',
					title: 'Teal A700 marker',
					color: 'var(--ck-highlight-marker-teal-a700)',
					type: 'marker'
				},
				{
					model: 'tealA700Pen',
					class: 'pen-teal-a700',
					title: 'Teal A700 pen',
					color: 'var(--ck-highlight-marker-teal-a700)',
					type: 'pen'
				},
			
				{
					model: 'greenMarker',
					class: 'marker-green',
					title: 'Green marker',
					color: 'var(--ck-highlight-marker-green)',
					type: 'marker'
				},
				{
					model: 'greenPen',
					class: 'pen-green',
					title: 'Green pen',
					color: 'var(--ck-highlight-marker-green)',
					type: 'pen'
				},
			
				{
					model: 'green50Marker',
					class: 'marker-green-50',
					title: 'Green 50 marker',
					color: 'var(--ck-highlight-marker-green-50)',
					type: 'marker'
				},
				{
					model: 'green50Pen',
					class: 'pen-green-50',
					title: 'Green 50 pen',
					color: 'var(--ck-highlight-marker-green-50)',
					type: 'pen'
				},
			
				{
					model: 'green100Marker',
					class: 'marker-green-100',
					title: 'Green 100 marker',
					color: 'var(--ck-highlight-marker-green-100)',
					type: 'marker'
				},
				{
					model: 'green100Pen',
					class: 'pen-green-100',
					title: 'Green 100 pen',
					color: 'var(--ck-highlight-marker-green-100)',
					type: 'pen'
				},
			
				{
					model: 'green200Marker',
					class: 'marker-green-200',
					title: 'Green 200 marker',
					color: 'var(--ck-highlight-marker-green-200)',
					type: 'marker'
				},
				{
					model: 'green200Pen',
					class: 'pen-green-200',
					title: 'Green 200 pen',
					color: 'var(--ck-highlight-marker-green-200)',
					type: 'pen'
				},
			
				{
					model: 'green300Marker',
					class: 'marker-green-300',
					title: 'Green 300 marker',
					color: 'var(--ck-highlight-marker-green-300)',
					type: 'marker'
				},
				{
					model: 'green300Pen',
					class: 'pen-green-300',
					title: 'Green 300 pen',
					color: 'var(--ck-highlight-marker-green-300)',
					type: 'pen'
				},
			
				{
					model: 'green400Marker',
					class: 'marker-green-400',
					title: 'Green 400 marker',
					color: 'var(--ck-highlight-marker-green-400)',
					type: 'marker'
				},
				{
					model: 'green400Pen',
					class: 'pen-green-400',
					title: 'Green 400 pen',
					color: 'var(--ck-highlight-marker-green-400)',
					type: 'pen'
				},
			
				{
					model: 'green500Marker',
					class: 'marker-green-500',
					title: 'Green 500 marker',
					color: 'var(--ck-highlight-marker-green-500)',
					type: 'marker'
				},
				{
					model: 'green500Pen',
					class: 'pen-green-500',
					title: 'Green 500 pen',
					color: 'var(--ck-highlight-marker-green-500)',
					type: 'pen'
				},
			
				{
					model: 'green600Marker',
					class: 'marker-green-600',
					title: 'Green 600 marker',
					color: 'var(--ck-highlight-marker-green-600)',
					type: 'marker'
				},
				{
					model: 'green600Pen',
					class: 'pen-green-600',
					title: 'Green 600 pen',
					color: 'var(--ck-highlight-marker-green-600)',
					type: 'pen'
				},
			
				{
					model: 'green700Marker',
					class: 'marker-green-700',
					title: 'Green 700 marker',
					color: 'var(--ck-highlight-marker-green-700)',
					type: 'marker'
				},
				{
					model: 'green700Pen',
					class: 'pen-green-700',
					title: 'Green 700 pen',
					color: 'var(--ck-highlight-marker-green-700)',
					type: 'pen'
				},
			
				{
					model: 'green800Marker',
					class: 'marker-green-800',
					title: 'Green 800 marker',
					color: 'var(--ck-highlight-marker-green-800)',
					type: 'marker'
				},
				{
					model: 'green800Pen',
					class: 'pen-green-800',
					title: 'Green 800 pen',
					color: 'var(--ck-highlight-marker-green-800)',
					type: 'pen'
				},
			
				{
					model: 'green900Marker',
					class: 'marker-green-900',
					title: 'Green 900 marker',
					color: 'var(--ck-highlight-marker-green-900)',
					type: 'marker'
				},
				{
					model: 'green900Pen',
					class: 'pen-green-900',
					title: 'Green 900 pen',
					color: 'var(--ck-highlight-marker-green-900)',
					type: 'pen'
				},
			
				{
					model: 'greenA100Marker',
					class: 'marker-green-a100',
					title: 'Green A100 marker',
					color: 'var(--ck-highlight-marker-green-a100)',
					type: 'marker'
				},
				{
					model: 'greenA100Pen',
					class: 'pen-green-a100',
					title: 'Green A100 pen',
					color: 'var(--ck-highlight-marker-green-a100)',
					type: 'pen'
				},
			
				{
					model: 'greenA200Marker',
					class: 'marker-green-a200',
					title: 'Green A200 marker',
					color: 'var(--ck-highlight-marker-green-a200)',
					type: 'marker'
				},
				{
					model: 'greenA200Pen',
					class: 'pen-green-a200',
					title: 'Green A200 pen',
					color: 'var(--ck-highlight-marker-green-a200)',
					type: 'pen'
				},
			
				{
					model: 'greenA400Marker',
					class: 'marker-green-a400',
					title: 'Green A400 marker',
					color: 'var(--ck-highlight-marker-green-a400)',
					type: 'marker'
				},
				{
					model: 'greenA400Pen',
					class: 'pen-green-a400',
					title: 'Green A400 pen',
					color: 'var(--ck-highlight-marker-green-a400)',
					type: 'pen'
				},
			
				{
					model: 'greenA700Marker',
					class: 'marker-green-a700',
					title: 'Green A700 marker',
					color: 'var(--ck-highlight-marker-green-a700)',
					type: 'marker'
				},
				{
					model: 'greenA700Pen',
					class: 'pen-green-a700',
					title: 'Green A700 pen',
					color: 'var(--ck-highlight-marker-green-a700)',
					type: 'pen'
				},
			
				{
					model: 'lightGreenMarker',
					class: 'marker-light-green',
					title: 'Light Green marker',
					color: 'var(--ck-highlight-marker-light-green)',
					type: 'marker'
				},
				{
					model: 'lightGreenPen',
					class: 'pen-light-green',
					title: 'Light Green pen',
					color: 'var(--ck-highlight-marker-light-green)',
					type: 'pen'
				},
			
				{
					model: 'lightGreen50Marker',
					class: 'marker-light-green-50',
					title: 'Light Green 50 marker',
					color: 'var(--ck-highlight-marker-light-green-50)',
					type: 'marker'
				},
				{
					model: 'lightGreen50Pen',
					class: 'pen-light-green-50',
					title: 'Light Green 50 pen',
					color: 'var(--ck-highlight-marker-light-green-50)',
					type: 'pen'
				},
			
				{
					model: 'lightGreen100Marker',
					class: 'marker-light-green-100',
					title: 'Light Green 100 marker',
					color: 'var(--ck-highlight-marker-light-green-100)',
					type: 'marker'
				},
				{
					model: 'lightGreen100Pen',
					class: 'pen-light-green-100',
					title: 'Light Green 100 pen',
					color: 'var(--ck-highlight-marker-light-green-100)',
					type: 'pen'
				},
			
				{
					model: 'lightGreen200Marker',
					class: 'marker-light-green-200',
					title: 'Light Green 200 marker',
					color: 'var(--ck-highlight-marker-light-green-200)',
					type: 'marker'
				},
				{
					model: 'lightGreen200Pen',
					class: 'pen-light-green-200',
					title: 'Light Green 200 pen',
					color: 'var(--ck-highlight-marker-light-green-200)',
					type: 'pen'
				},
			
				{
					model: 'lightGreen300Marker',
					class: 'marker-light-green-300',
					title: 'Light Green 300 marker',
					color: 'var(--ck-highlight-marker-light-green-300)',
					type: 'marker'
				},
				{
					model: 'lightGreen300Pen',
					class: 'pen-light-green-300',
					title: 'Light Green 300 pen',
					color: 'var(--ck-highlight-marker-light-green-300)',
					type: 'pen'
				},
			
				{
					model: 'lightGreen400Marker',
					class: 'marker-light-green-400',
					title: 'Light Green 400 marker',
					color: 'var(--ck-highlight-marker-light-green-400)',
					type: 'marker'
				},
				{
					model: 'lightGreen400Pen',
					class: 'pen-light-green-400',
					title: 'Light Green 400 pen',
					color: 'var(--ck-highlight-marker-light-green-400)',
					type: 'pen'
				},
			
				{
					model: 'lightGreen500Marker',
					class: 'marker-light-green-500',
					title: 'Light Green 500 marker',
					color: 'var(--ck-highlight-marker-light-green-500)',
					type: 'marker'
				},
				{
					model: 'lightGreen500Pen',
					class: 'pen-light-green-500',
					title: 'Light Green 500 pen',
					color: 'var(--ck-highlight-marker-light-green-500)',
					type: 'pen'
				},
			
				{
					model: 'lightGreen600Marker',
					class: 'marker-light-green-600',
					title: 'Light Green 600 marker',
					color: 'var(--ck-highlight-marker-light-green-600)',
					type: 'marker'
				},
				{
					model: 'lightGreen600Pen',
					class: 'pen-light-green-600',
					title: 'Light Green 600 pen',
					color: 'var(--ck-highlight-marker-light-green-600)',
					type: 'pen'
				},
			
				{
					model: 'lightGreen700Marker',
					class: 'marker-light-green-700',
					title: 'Light Green 700 marker',
					color: 'var(--ck-highlight-marker-light-green-700)',
					type: 'marker'
				},
				{
					model: 'lightGreen700Pen',
					class: 'pen-light-green-700',
					title: 'Light Green 700 pen',
					color: 'var(--ck-highlight-marker-light-green-700)',
					type: 'pen'
				},
			
				{
					model: 'lightGreen800Marker',
					class: 'marker-light-green-800',
					title: 'Light Green 800 marker',
					color: 'var(--ck-highlight-marker-light-green-800)',
					type: 'marker'
				},
				{
					model: 'lightGreen800Pen',
					class: 'pen-light-green-800',
					title: 'Light Green 800 pen',
					color: 'var(--ck-highlight-marker-light-green-800)',
					type: 'pen'
				},
			
				{
					model: 'lightGreen900Marker',
					class: 'marker-light-green-900',
					title: 'Light Green 900 marker',
					color: 'var(--ck-highlight-marker-light-green-900)',
					type: 'marker'
				},
				{
					model: 'lightGreen900Pen',
					class: 'pen-light-green-900',
					title: 'Light Green 900 pen',
					color: 'var(--ck-highlight-marker-light-green-900)',
					type: 'pen'
				},
			
				{
					model: 'lightGreenA100Marker',
					class: 'marker-light-green-a100',
					title: 'Light Green A100 marker',
					color: 'var(--ck-highlight-marker-light-green-a100)',
					type: 'marker'
				},
				{
					model: 'lightGreenA100Pen',
					class: 'pen-light-green-a100',
					title: 'Light Green A100 pen',
					color: 'var(--ck-highlight-marker-light-green-a100)',
					type: 'pen'
				},
			
				{
					model: 'lightGreenA200Marker',
					class: 'marker-light-green-a200',
					title: 'Light Green A200 marker',
					color: 'var(--ck-highlight-marker-light-green-a200)',
					type: 'marker'
				},
				{
					model: 'lightGreenA200Pen',
					class: 'pen-light-green-a200',
					title: 'Light Green A200 pen',
					color: 'var(--ck-highlight-marker-light-green-a200)',
					type: 'pen'
				},
			
				{
					model: 'lightGreenA400Marker',
					class: 'marker-light-green-a400',
					title: 'Light Green A400 marker',
					color: 'var(--ck-highlight-marker-light-green-a400)',
					type: 'marker'
				},
				{
					model: 'lightGreenA400Pen',
					class: 'pen-light-green-a400',
					title: 'Light Green A400 pen',
					color: 'var(--ck-highlight-marker-light-green-a400)',
					type: 'pen'
				},
			
				{
					model: 'lightGreenA700Marker',
					class: 'marker-light-green-a700',
					title: 'Light Green A700 marker',
					color: 'var(--ck-highlight-marker-light-green-a700)',
					type: 'marker'
				},
				{
					model: 'lightGreenA700Pen',
					class: 'pen-light-green-a700',
					title: 'Light Green A700 pen',
					color: 'var(--ck-highlight-marker-light-green-a700)',
					type: 'pen'
				},
			
				{
					model: 'limeMarker',
					class: 'marker-lime',
					title: 'Lime marker',
					color: 'var(--ck-highlight-marker-lime)',
					type: 'marker'
				},
				{
					model: 'limePen',
					class: 'pen-lime',
					title: 'Lime pen',
					color: 'var(--ck-highlight-marker-lime)',
					type: 'pen'
				},
			
				{
					model: 'lime50Marker',
					class: 'marker-lime-50',
					title: 'Lime 50 marker',
					color: 'var(--ck-highlight-marker-lime-50)',
					type: 'marker'
				},
				{
					model: 'lime50Pen',
					class: 'pen-lime-50',
					title: 'Lime 50 pen',
					color: 'var(--ck-highlight-marker-lime-50)',
					type: 'pen'
				},
			
				{
					model: 'lime100Marker',
					class: 'marker-lime-100',
					title: 'Lime 100 marker',
					color: 'var(--ck-highlight-marker-lime-100)',
					type: 'marker'
				},
				{
					model: 'lime100Pen',
					class: 'pen-lime-100',
					title: 'Lime 100 pen',
					color: 'var(--ck-highlight-marker-lime-100)',
					type: 'pen'
				},
			
				{
					model: 'lime200Marker',
					class: 'marker-lime-200',
					title: 'Lime 200 marker',
					color: 'var(--ck-highlight-marker-lime-200)',
					type: 'marker'
				},
				{
					model: 'lime200Pen',
					class: 'pen-lime-200',
					title: 'Lime 200 pen',
					color: 'var(--ck-highlight-marker-lime-200)',
					type: 'pen'
				},
			
				{
					model: 'lime300Marker',
					class: 'marker-lime-300',
					title: 'Lime 300 marker',
					color: 'var(--ck-highlight-marker-lime-300)',
					type: 'marker'
				},
				{
					model: 'lime300Pen',
					class: 'pen-lime-300',
					title: 'Lime 300 pen',
					color: 'var(--ck-highlight-marker-lime-300)',
					type: 'pen'
				},
			
				{
					model: 'lime400Marker',
					class: 'marker-lime-400',
					title: 'Lime 400 marker',
					color: 'var(--ck-highlight-marker-lime-400)',
					type: 'marker'
				},
				{
					model: 'lime400Pen',
					class: 'pen-lime-400',
					title: 'Lime 400 pen',
					color: 'var(--ck-highlight-marker-lime-400)',
					type: 'pen'
				},
			
				{
					model: 'lime500Marker',
					class: 'marker-lime-500',
					title: 'Lime 500 marker',
					color: 'var(--ck-highlight-marker-lime-500)',
					type: 'marker'
				},
				{
					model: 'lime500Pen',
					class: 'pen-lime-500',
					title: 'Lime 500 pen',
					color: 'var(--ck-highlight-marker-lime-500)',
					type: 'pen'
				},
			
				{
					model: 'lime600Marker',
					class: 'marker-lime-600',
					title: 'Lime 600 marker',
					color: 'var(--ck-highlight-marker-lime-600)',
					type: 'marker'
				},
				{
					model: 'lime600Pen',
					class: 'pen-lime-600',
					title: 'Lime 600 pen',
					color: 'var(--ck-highlight-marker-lime-600)',
					type: 'pen'
				},
			
				{
					model: 'lime700Marker',
					class: 'marker-lime-700',
					title: 'Lime 700 marker',
					color: 'var(--ck-highlight-marker-lime-700)',
					type: 'marker'
				},
				{
					model: 'lime700Pen',
					class: 'pen-lime-700',
					title: 'Lime 700 pen',
					color: 'var(--ck-highlight-marker-lime-700)',
					type: 'pen'
				},
			
				{
					model: 'lime800Marker',
					class: 'marker-lime-800',
					title: 'Lime 800 marker',
					color: 'var(--ck-highlight-marker-lime-800)',
					type: 'marker'
				},
				{
					model: 'lime800Pen',
					class: 'pen-lime-800',
					title: 'Lime 800 pen',
					color: 'var(--ck-highlight-marker-lime-800)',
					type: 'pen'
				},
			
				{
					model: 'lime900Marker',
					class: 'marker-lime-900',
					title: 'Lime 900 marker',
					color: 'var(--ck-highlight-marker-lime-900)',
					type: 'marker'
				},
				{
					model: 'lime900Pen',
					class: 'pen-lime-900',
					title: 'Lime 900 pen',
					color: 'var(--ck-highlight-marker-lime-900)',
					type: 'pen'
				},
			
				{
					model: 'limeA100Marker',
					class: 'marker-lime-a100',
					title: 'Lime A100 marker',
					color: 'var(--ck-highlight-marker-lime-a100)',
					type: 'marker'
				},
				{
					model: 'limeA100Pen',
					class: 'pen-lime-a100',
					title: 'Lime A100 pen',
					color: 'var(--ck-highlight-marker-lime-a100)',
					type: 'pen'
				},
			
				{
					model: 'limeA200Marker',
					class: 'marker-lime-a200',
					title: 'Lime A200 marker',
					color: 'var(--ck-highlight-marker-lime-a200)',
					type: 'marker'
				},
				{
					model: 'limeA200Pen',
					class: 'pen-lime-a200',
					title: 'Lime A200 pen',
					color: 'var(--ck-highlight-marker-lime-a200)',
					type: 'pen'
				},
			
				{
					model: 'limeA400Marker',
					class: 'marker-lime-a400',
					title: 'Lime A400 marker',
					color: 'var(--ck-highlight-marker-lime-a400)',
					type: 'marker'
				},
				{
					model: 'limeA400Pen',
					class: 'pen-lime-a400',
					title: 'Lime A400 pen',
					color: 'var(--ck-highlight-marker-lime-a400)',
					type: 'pen'
				},
			
				{
					model: 'limeA700Marker',
					class: 'marker-lime-a700',
					title: 'Lime A700 marker',
					color: 'var(--ck-highlight-marker-lime-a700)',
					type: 'marker'
				},
				{
					model: 'limeA700Pen',
					class: 'pen-lime-a700',
					title: 'Lime A700 pen',
					color: 'var(--ck-highlight-marker-lime-a700)',
					type: 'pen'
				},
			
				{
					model: 'yellowMarker',
					class: 'marker-yellow',
					title: 'Yellow marker',
					color: 'var(--ck-highlight-marker-yellow)',
					type: 'marker'
				},
				{
					model: 'yellowPen',
					class: 'pen-yellow',
					title: 'Yellow pen',
					color: 'var(--ck-highlight-marker-yellow)',
					type: 'pen'
				},
			
				{
					model: 'yellow50Marker',
					class: 'marker-yellow-50',
					title: 'Yellow 50 marker',
					color: 'var(--ck-highlight-marker-yellow-50)',
					type: 'marker'
				},
				{
					model: 'yellow50Pen',
					class: 'pen-yellow-50',
					title: 'Yellow 50 pen',
					color: 'var(--ck-highlight-marker-yellow-50)',
					type: 'pen'
				},
			
				{
					model: 'yellow100Marker',
					class: 'marker-yellow-100',
					title: 'Yellow 100 marker',
					color: 'var(--ck-highlight-marker-yellow-100)',
					type: 'marker'
				},
				{
					model: 'yellow100Pen',
					class: 'pen-yellow-100',
					title: 'Yellow 100 pen',
					color: 'var(--ck-highlight-marker-yellow-100)',
					type: 'pen'
				},
			
				{
					model: 'yellow200Marker',
					class: 'marker-yellow-200',
					title: 'Yellow 200 marker',
					color: 'var(--ck-highlight-marker-yellow-200)',
					type: 'marker'
				},
				{
					model: 'yellow200Pen',
					class: 'pen-yellow-200',
					title: 'Yellow 200 pen',
					color: 'var(--ck-highlight-marker-yellow-200)',
					type: 'pen'
				},
			
				{
					model: 'yellow300Marker',
					class: 'marker-yellow-300',
					title: 'Yellow 300 marker',
					color: 'var(--ck-highlight-marker-yellow-300)',
					type: 'marker'
				},
				{
					model: 'yellow300Pen',
					class: 'pen-yellow-300',
					title: 'Yellow 300 pen',
					color: 'var(--ck-highlight-marker-yellow-300)',
					type: 'pen'
				},
			
				{
					model: 'yellow400Marker',
					class: 'marker-yellow-400',
					title: 'Yellow 400 marker',
					color: 'var(--ck-highlight-marker-yellow-400)',
					type: 'marker'
				},
				{
					model: 'yellow400Pen',
					class: 'pen-yellow-400',
					title: 'Yellow 400 pen',
					color: 'var(--ck-highlight-marker-yellow-400)',
					type: 'pen'
				},
			
				{
					model: 'yellow500Marker',
					class: 'marker-yellow-500',
					title: 'Yellow 500 marker',
					color: 'var(--ck-highlight-marker-yellow-500)',
					type: 'marker'
				},
				{
					model: 'yellow500Pen',
					class: 'pen-yellow-500',
					title: 'Yellow 500 pen',
					color: 'var(--ck-highlight-marker-yellow-500)',
					type: 'pen'
				},
			
				{
					model: 'yellow600Marker',
					class: 'marker-yellow-600',
					title: 'Yellow 600 marker',
					color: 'var(--ck-highlight-marker-yellow-600)',
					type: 'marker'
				},
				{
					model: 'yellow600Pen',
					class: 'pen-yellow-600',
					title: 'Yellow 600 pen',
					color: 'var(--ck-highlight-marker-yellow-600)',
					type: 'pen'
				},
			
				{
					model: 'yellow700Marker',
					class: 'marker-yellow-700',
					title: 'Yellow 700 marker',
					color: 'var(--ck-highlight-marker-yellow-700)',
					type: 'marker'
				},
				{
					model: 'yellow700Pen',
					class: 'pen-yellow-700',
					title: 'Yellow 700 pen',
					color: 'var(--ck-highlight-marker-yellow-700)',
					type: 'pen'
				},
			
				{
					model: 'yellow800Marker',
					class: 'marker-yellow-800',
					title: 'Yellow 800 marker',
					color: 'var(--ck-highlight-marker-yellow-800)',
					type: 'marker'
				},
				{
					model: 'yellow800Pen',
					class: 'pen-yellow-800',
					title: 'Yellow 800 pen',
					color: 'var(--ck-highlight-marker-yellow-800)',
					type: 'pen'
				},
			
				{
					model: 'yellow900Marker',
					class: 'marker-yellow-900',
					title: 'Yellow 900 marker',
					color: 'var(--ck-highlight-marker-yellow-900)',
					type: 'marker'
				},
				{
					model: 'yellow900Pen',
					class: 'pen-yellow-900',
					title: 'Yellow 900 pen',
					color: 'var(--ck-highlight-marker-yellow-900)',
					type: 'pen'
				},
			
				{
					model: 'yellowA100Marker',
					class: 'marker-yellow-a100',
					title: 'Yellow A100 marker',
					color: 'var(--ck-highlight-marker-yellow-a100)',
					type: 'marker'
				},
				{
					model: 'yellowA100Pen',
					class: 'pen-yellow-a100',
					title: 'Yellow A100 pen',
					color: 'var(--ck-highlight-marker-yellow-a100)',
					type: 'pen'
				},
			
				{
					model: 'yellowA200Marker',
					class: 'marker-yellow-a200',
					title: 'Yellow A200 marker',
					color: 'var(--ck-highlight-marker-yellow-a200)',
					type: 'marker'
				},
				{
					model: 'yellowA200Pen',
					class: 'pen-yellow-a200',
					title: 'Yellow A200 pen',
					color: 'var(--ck-highlight-marker-yellow-a200)',
					type: 'pen'
				},
			
				{
					model: 'yellowA400Marker',
					class: 'marker-yellow-a400',
					title: 'Yellow A400 marker',
					color: 'var(--ck-highlight-marker-yellow-a400)',
					type: 'marker'
				},
				{
					model: 'yellowA400Pen',
					class: 'pen-yellow-a400',
					title: 'Yellow A400 pen',
					color: 'var(--ck-highlight-marker-yellow-a400)',
					type: 'pen'
				},
			
				{
					model: 'yellowA700Marker',
					class: 'marker-yellow-a700',
					title: 'Yellow A700 marker',
					color: 'var(--ck-highlight-marker-yellow-a700)',
					type: 'marker'
				},
				{
					model: 'yellowA700Pen',
					class: 'pen-yellow-a700',
					title: 'Yellow A700 pen',
					color: 'var(--ck-highlight-marker-yellow-a700)',
					type: 'pen'
				},
			
				{
					model: 'amberMarker',
					class: 'marker-amber',
					title: 'Amber marker',
					color: 'var(--ck-highlight-marker-amber)',
					type: 'marker'
				},
				{
					model: 'amberPen',
					class: 'pen-amber',
					title: 'Amber pen',
					color: 'var(--ck-highlight-marker-amber)',
					type: 'pen'
				},
			
				{
					model: 'amber50Marker',
					class: 'marker-amber-50',
					title: 'Amber 50 marker',
					color: 'var(--ck-highlight-marker-amber-50)',
					type: 'marker'
				},
				{
					model: 'amber50Pen',
					class: 'pen-amber-50',
					title: 'Amber 50 pen',
					color: 'var(--ck-highlight-marker-amber-50)',
					type: 'pen'
				},
			
				{
					model: 'amber100Marker',
					class: 'marker-amber-100',
					title: 'Amber 100 marker',
					color: 'var(--ck-highlight-marker-amber-100)',
					type: 'marker'
				},
				{
					model: 'amber100Pen',
					class: 'pen-amber-100',
					title: 'Amber 100 pen',
					color: 'var(--ck-highlight-marker-amber-100)',
					type: 'pen'
				},
			
				{
					model: 'amber200Marker',
					class: 'marker-amber-200',
					title: 'Amber 200 marker',
					color: 'var(--ck-highlight-marker-amber-200)',
					type: 'marker'
				},
				{
					model: 'amber200Pen',
					class: 'pen-amber-200',
					title: 'Amber 200 pen',
					color: 'var(--ck-highlight-marker-amber-200)',
					type: 'pen'
				},
			
				{
					model: 'amber300Marker',
					class: 'marker-amber-300',
					title: 'Amber 300 marker',
					color: 'var(--ck-highlight-marker-amber-300)',
					type: 'marker'
				},
				{
					model: 'amber300Pen',
					class: 'pen-amber-300',
					title: 'Amber 300 pen',
					color: 'var(--ck-highlight-marker-amber-300)',
					type: 'pen'
				},
			
				{
					model: 'amber400Marker',
					class: 'marker-amber-400',
					title: 'Amber 400 marker',
					color: 'var(--ck-highlight-marker-amber-400)',
					type: 'marker'
				},
				{
					model: 'amber400Pen',
					class: 'pen-amber-400',
					title: 'Amber 400 pen',
					color: 'var(--ck-highlight-marker-amber-400)',
					type: 'pen'
				},
			
				{
					model: 'amber500Marker',
					class: 'marker-amber-500',
					title: 'Amber 500 marker',
					color: 'var(--ck-highlight-marker-amber-500)',
					type: 'marker'
				},
				{
					model: 'amber500Pen',
					class: 'pen-amber-500',
					title: 'Amber 500 pen',
					color: 'var(--ck-highlight-marker-amber-500)',
					type: 'pen'
				},
			
				{
					model: 'amber600Marker',
					class: 'marker-amber-600',
					title: 'Amber 600 marker',
					color: 'var(--ck-highlight-marker-amber-600)',
					type: 'marker'
				},
				{
					model: 'amber600Pen',
					class: 'pen-amber-600',
					title: 'Amber 600 pen',
					color: 'var(--ck-highlight-marker-amber-600)',
					type: 'pen'
				},
			
				{
					model: 'amber700Marker',
					class: 'marker-amber-700',
					title: 'Amber 700 marker',
					color: 'var(--ck-highlight-marker-amber-700)',
					type: 'marker'
				},
				{
					model: 'amber700Pen',
					class: 'pen-amber-700',
					title: 'Amber 700 pen',
					color: 'var(--ck-highlight-marker-amber-700)',
					type: 'pen'
				},
			
				{
					model: 'amber800Marker',
					class: 'marker-amber-800',
					title: 'Amber 800 marker',
					color: 'var(--ck-highlight-marker-amber-800)',
					type: 'marker'
				},
				{
					model: 'amber800Pen',
					class: 'pen-amber-800',
					title: 'Amber 800 pen',
					color: 'var(--ck-highlight-marker-amber-800)',
					type: 'pen'
				},
			
				{
					model: 'amber900Marker',
					class: 'marker-amber-900',
					title: 'Amber 900 marker',
					color: 'var(--ck-highlight-marker-amber-900)',
					type: 'marker'
				},
				{
					model: 'amber900Pen',
					class: 'pen-amber-900',
					title: 'Amber 900 pen',
					color: 'var(--ck-highlight-marker-amber-900)',
					type: 'pen'
				},
			
				{
					model: 'amberA100Marker',
					class: 'marker-amber-a100',
					title: 'Amber A100 marker',
					color: 'var(--ck-highlight-marker-amber-a100)',
					type: 'marker'
				},
				{
					model: 'amberA100Pen',
					class: 'pen-amber-a100',
					title: 'Amber A100 pen',
					color: 'var(--ck-highlight-marker-amber-a100)',
					type: 'pen'
				},
			
				{
					model: 'amberA200Marker',
					class: 'marker-amber-a200',
					title: 'Amber A200 marker',
					color: 'var(--ck-highlight-marker-amber-a200)',
					type: 'marker'
				},
				{
					model: 'amberA200Pen',
					class: 'pen-amber-a200',
					title: 'Amber A200 pen',
					color: 'var(--ck-highlight-marker-amber-a200)',
					type: 'pen'
				},
			
				{
					model: 'amberA400Marker',
					class: 'marker-amber-a400',
					title: 'Amber A400 marker',
					color: 'var(--ck-highlight-marker-amber-a400)',
					type: 'marker'
				},
				{
					model: 'amberA400Pen',
					class: 'pen-amber-a400',
					title: 'Amber A400 pen',
					color: 'var(--ck-highlight-marker-amber-a400)',
					type: 'pen'
				},
			
				{
					model: 'amberA700Marker',
					class: 'marker-amber-a700',
					title: 'Amber A700 marker',
					color: 'var(--ck-highlight-marker-amber-a700)',
					type: 'marker'
				},
				{
					model: 'amberA700Pen',
					class: 'pen-amber-a700',
					title: 'Amber A700 pen',
					color: 'var(--ck-highlight-marker-amber-a700)',
					type: 'pen'
				},
			
				{
					model: 'orangeMarker',
					class: 'marker-orange',
					title: 'Orange marker',
					color: 'var(--ck-highlight-marker-orange)',
					type: 'marker'
				},
				{
					model: 'orangePen',
					class: 'pen-orange',
					title: 'Orange pen',
					color: 'var(--ck-highlight-marker-orange)',
					type: 'pen'
				},
			
				{
					model: 'orange50Marker',
					class: 'marker-orange-50',
					title: 'Orange 50 marker',
					color: 'var(--ck-highlight-marker-orange-50)',
					type: 'marker'
				},
				{
					model: 'orange50Pen',
					class: 'pen-orange-50',
					title: 'Orange 50 pen',
					color: 'var(--ck-highlight-marker-orange-50)',
					type: 'pen'
				},
			
				{
					model: 'orange100Marker',
					class: 'marker-orange-100',
					title: 'Orange 100 marker',
					color: 'var(--ck-highlight-marker-orange-100)',
					type: 'marker'
				},
				{
					model: 'orange100Pen',
					class: 'pen-orange-100',
					title: 'Orange 100 pen',
					color: 'var(--ck-highlight-marker-orange-100)',
					type: 'pen'
				},
			
				{
					model: 'orange200Marker',
					class: 'marker-orange-200',
					title: 'Orange 200 marker',
					color: 'var(--ck-highlight-marker-orange-200)',
					type: 'marker'
				},
				{
					model: 'orange200Pen',
					class: 'pen-orange-200',
					title: 'Orange 200 pen',
					color: 'var(--ck-highlight-marker-orange-200)',
					type: 'pen'
				},
			
				{
					model: 'orange300Marker',
					class: 'marker-orange-300',
					title: 'Orange 300 marker',
					color: 'var(--ck-highlight-marker-orange-300)',
					type: 'marker'
				},
				{
					model: 'orange300Pen',
					class: 'pen-orange-300',
					title: 'Orange 300 pen',
					color: 'var(--ck-highlight-marker-orange-300)',
					type: 'pen'
				},
			
				{
					model: 'orange400Marker',
					class: 'marker-orange-400',
					title: 'Orange 400 marker',
					color: 'var(--ck-highlight-marker-orange-400)',
					type: 'marker'
				},
				{
					model: 'orange400Pen',
					class: 'pen-orange-400',
					title: 'Orange 400 pen',
					color: 'var(--ck-highlight-marker-orange-400)',
					type: 'pen'
				},
			
				{
					model: 'orange500Marker',
					class: 'marker-orange-500',
					title: 'Orange 500 marker',
					color: 'var(--ck-highlight-marker-orange-500)',
					type: 'marker'
				},
				{
					model: 'orange500Pen',
					class: 'pen-orange-500',
					title: 'Orange 500 pen',
					color: 'var(--ck-highlight-marker-orange-500)',
					type: 'pen'
				},
			
				{
					model: 'orange600Marker',
					class: 'marker-orange-600',
					title: 'Orange 600 marker',
					color: 'var(--ck-highlight-marker-orange-600)',
					type: 'marker'
				},
				{
					model: 'orange600Pen',
					class: 'pen-orange-600',
					title: 'Orange 600 pen',
					color: 'var(--ck-highlight-marker-orange-600)',
					type: 'pen'
				},
			
				{
					model: 'orange700Marker',
					class: 'marker-orange-700',
					title: 'Orange 700 marker',
					color: 'var(--ck-highlight-marker-orange-700)',
					type: 'marker'
				},
				{
					model: 'orange700Pen',
					class: 'pen-orange-700',
					title: 'Orange 700 pen',
					color: 'var(--ck-highlight-marker-orange-700)',
					type: 'pen'
				},
			
				{
					model: 'orange800Marker',
					class: 'marker-orange-800',
					title: 'Orange 800 marker',
					color: 'var(--ck-highlight-marker-orange-800)',
					type: 'marker'
				},
				{
					model: 'orange800Pen',
					class: 'pen-orange-800',
					title: 'Orange 800 pen',
					color: 'var(--ck-highlight-marker-orange-800)',
					type: 'pen'
				},
			
				{
					model: 'orange900Marker',
					class: 'marker-orange-900',
					title: 'Orange 900 marker',
					color: 'var(--ck-highlight-marker-orange-900)',
					type: 'marker'
				},
				{
					model: 'orange900Pen',
					class: 'pen-orange-900',
					title: 'Orange 900 pen',
					color: 'var(--ck-highlight-marker-orange-900)',
					type: 'pen'
				},
			
				{
					model: 'orangeA100Marker',
					class: 'marker-orange-a100',
					title: 'Orange A100 marker',
					color: 'var(--ck-highlight-marker-orange-a100)',
					type: 'marker'
				},
				{
					model: 'orangeA100Pen',
					class: 'pen-orange-a100',
					title: 'Orange A100 pen',
					color: 'var(--ck-highlight-marker-orange-a100)',
					type: 'pen'
				},
			
				{
					model: 'orangeA200Marker',
					class: 'marker-orange-a200',
					title: 'Orange A200 marker',
					color: 'var(--ck-highlight-marker-orange-a200)',
					type: 'marker'
				},
				{
					model: 'orangeA200Pen',
					class: 'pen-orange-a200',
					title: 'Orange A200 pen',
					color: 'var(--ck-highlight-marker-orange-a200)',
					type: 'pen'
				},
			
				{
					model: 'orangeA400Marker',
					class: 'marker-orange-a400',
					title: 'Orange A400 marker',
					color: 'var(--ck-highlight-marker-orange-a400)',
					type: 'marker'
				},
				{
					model: 'orangeA400Pen',
					class: 'pen-orange-a400',
					title: 'Orange A400 pen',
					color: 'var(--ck-highlight-marker-orange-a400)',
					type: 'pen'
				},
			
				{
					model: 'orangeA700Marker',
					class: 'marker-orange-a700',
					title: 'Orange A700 marker',
					color: 'var(--ck-highlight-marker-orange-a700)',
					type: 'marker'
				},
				{
					model: 'orangeA700Pen',
					class: 'pen-orange-a700',
					title: 'Orange A700 pen',
					color: 'var(--ck-highlight-marker-orange-a700)',
					type: 'pen'
				},
			
				{
					model: 'deepOrangeMarker',
					class: 'marker-deep-orange',
					title: 'Deep Orange marker',
					color: 'var(--ck-highlight-marker-deep-orange)',
					type: 'marker'
				},
				{
					model: 'deepOrangePen',
					class: 'pen-deep-orange',
					title: 'Deep Orange pen',
					color: 'var(--ck-highlight-marker-deep-orange)',
					type: 'pen'
				},
			
				{
					model: 'deepOrange50Marker',
					class: 'marker-deep-orange-50',
					title: 'Deep Orange 50 marker',
					color: 'var(--ck-highlight-marker-deep-orange-50)',
					type: 'marker'
				},
				{
					model: 'deepOrange50Pen',
					class: 'pen-deep-orange-50',
					title: 'Deep Orange 50 pen',
					color: 'var(--ck-highlight-marker-deep-orange-50)',
					type: 'pen'
				},
			
				{
					model: 'deepOrange100Marker',
					class: 'marker-deep-orange-100',
					title: 'Deep Orange 100 marker',
					color: 'var(--ck-highlight-marker-deep-orange-100)',
					type: 'marker'
				},
				{
					model: 'deepOrange100Pen',
					class: 'pen-deep-orange-100',
					title: 'Deep Orange 100 pen',
					color: 'var(--ck-highlight-marker-deep-orange-100)',
					type: 'pen'
				},
			
				{
					model: 'deepOrange200Marker',
					class: 'marker-deep-orange-200',
					title: 'Deep Orange 200 marker',
					color: 'var(--ck-highlight-marker-deep-orange-200)',
					type: 'marker'
				},
				{
					model: 'deepOrange200Pen',
					class: 'pen-deep-orange-200',
					title: 'Deep Orange 200 pen',
					color: 'var(--ck-highlight-marker-deep-orange-200)',
					type: 'pen'
				},
			
				{
					model: 'deepOrange300Marker',
					class: 'marker-deep-orange-300',
					title: 'Deep Orange 300 marker',
					color: 'var(--ck-highlight-marker-deep-orange-300)',
					type: 'marker'
				},
				{
					model: 'deepOrange300Pen',
					class: 'pen-deep-orange-300',
					title: 'Deep Orange 300 pen',
					color: 'var(--ck-highlight-marker-deep-orange-300)',
					type: 'pen'
				},
			
				{
					model: 'deepOrange400Marker',
					class: 'marker-deep-orange-400',
					title: 'Deep Orange 400 marker',
					color: 'var(--ck-highlight-marker-deep-orange-400)',
					type: 'marker'
				},
				{
					model: 'deepOrange400Pen',
					class: 'pen-deep-orange-400',
					title: 'Deep Orange 400 pen',
					color: 'var(--ck-highlight-marker-deep-orange-400)',
					type: 'pen'
				},
			
				{
					model: 'deepOrange500Marker',
					class: 'marker-deep-orange-500',
					title: 'Deep Orange 500 marker',
					color: 'var(--ck-highlight-marker-deep-orange-500)',
					type: 'marker'
				},
				{
					model: 'deepOrange500Pen',
					class: 'pen-deep-orange-500',
					title: 'Deep Orange 500 pen',
					color: 'var(--ck-highlight-marker-deep-orange-500)',
					type: 'pen'
				},
			
				{
					model: 'deepOrange600Marker',
					class: 'marker-deep-orange-600',
					title: 'Deep Orange 600 marker',
					color: 'var(--ck-highlight-marker-deep-orange-600)',
					type: 'marker'
				},
				{
					model: 'deepOrange600Pen',
					class: 'pen-deep-orange-600',
					title: 'Deep Orange 600 pen',
					color: 'var(--ck-highlight-marker-deep-orange-600)',
					type: 'pen'
				},
			
				{
					model: 'deepOrange700Marker',
					class: 'marker-deep-orange-700',
					title: 'Deep Orange 700 marker',
					color: 'var(--ck-highlight-marker-deep-orange-700)',
					type: 'marker'
				},
				{
					model: 'deepOrange700Pen',
					class: 'pen-deep-orange-700',
					title: 'Deep Orange 700 pen',
					color: 'var(--ck-highlight-marker-deep-orange-700)',
					type: 'pen'
				},
			
				{
					model: 'deepOrange800Marker',
					class: 'marker-deep-orange-800',
					title: 'Deep Orange 800 marker',
					color: 'var(--ck-highlight-marker-deep-orange-800)',
					type: 'marker'
				},
				{
					model: 'deepOrange800Pen',
					class: 'pen-deep-orange-800',
					title: 'Deep Orange 800 pen',
					color: 'var(--ck-highlight-marker-deep-orange-800)',
					type: 'pen'
				},
			
				{
					model: 'deepOrange900Marker',
					class: 'marker-deep-orange-900',
					title: 'Deep Orange 900 marker',
					color: 'var(--ck-highlight-marker-deep-orange-900)',
					type: 'marker'
				},
				{
					model: 'deepOrange900Pen',
					class: 'pen-deep-orange-900',
					title: 'Deep Orange 900 pen',
					color: 'var(--ck-highlight-marker-deep-orange-900)',
					type: 'pen'
				},
			
				{
					model: 'deepOrangeA100Marker',
					class: 'marker-deep-orange-a100',
					title: 'Deep Orange A100 marker',
					color: 'var(--ck-highlight-marker-deep-orange-a100)',
					type: 'marker'
				},
				{
					model: 'deepOrangeA100Pen',
					class: 'pen-deep-orange-a100',
					title: 'Deep Orange A100 pen',
					color: 'var(--ck-highlight-marker-deep-orange-a100)',
					type: 'pen'
				},
			
				{
					model: 'deepOrangeA200Marker',
					class: 'marker-deep-orange-a200',
					title: 'Deep Orange A200 marker',
					color: 'var(--ck-highlight-marker-deep-orange-a200)',
					type: 'marker'
				},
				{
					model: 'deepOrangeA200Pen',
					class: 'pen-deep-orange-a200',
					title: 'Deep Orange A200 pen',
					color: 'var(--ck-highlight-marker-deep-orange-a200)',
					type: 'pen'
				},
			
				{
					model: 'deepOrangeA400Marker',
					class: 'marker-deep-orange-a400',
					title: 'Deep Orange A400 marker',
					color: 'var(--ck-highlight-marker-deep-orange-a400)',
					type: 'marker'
				},
				{
					model: 'deepOrangeA400Pen',
					class: 'pen-deep-orange-a400',
					title: 'Deep Orange A400 pen',
					color: 'var(--ck-highlight-marker-deep-orange-a400)',
					type: 'pen'
				},
			
				{
					model: 'deepOrangeA700Marker',
					class: 'marker-deep-orange-a700',
					title: 'Deep Orange A700 marker',
					color: 'var(--ck-highlight-marker-deep-orange-a700)',
					type: 'marker'
				},
				{
					model: 'deepOrangeA700Pen',
					class: 'pen-deep-orange-a700',
					title: 'Deep Orange A700 pen',
					color: 'var(--ck-highlight-marker-deep-orange-a700)',
					type: 'pen'
				},
			
				{
					model: 'brownMarker',
					class: 'marker-brown',
					title: 'Brown marker',
					color: 'var(--ck-highlight-marker-brown)',
					type: 'marker'
				},
				{
					model: 'brownPen',
					class: 'pen-brown',
					title: 'Brown pen',
					color: 'var(--ck-highlight-marker-brown)',
					type: 'pen'
				},
			
				{
					model: 'brown50Marker',
					class: 'marker-brown-50',
					title: 'Brown 50 marker',
					color: 'var(--ck-highlight-marker-brown-50)',
					type: 'marker'
				},
				{
					model: 'brown50Pen',
					class: 'pen-brown-50',
					title: 'Brown 50 pen',
					color: 'var(--ck-highlight-marker-brown-50)',
					type: 'pen'
				},
			
				{
					model: 'brown100Marker',
					class: 'marker-brown-100',
					title: 'Brown 100 marker',
					color: 'var(--ck-highlight-marker-brown-100)',
					type: 'marker'
				},
				{
					model: 'brown100Pen',
					class: 'pen-brown-100',
					title: 'Brown 100 pen',
					color: 'var(--ck-highlight-marker-brown-100)',
					type: 'pen'
				},
			
				{
					model: 'brown200Marker',
					class: 'marker-brown-200',
					title: 'Brown 200 marker',
					color: 'var(--ck-highlight-marker-brown-200)',
					type: 'marker'
				},
				{
					model: 'brown200Pen',
					class: 'pen-brown-200',
					title: 'Brown 200 pen',
					color: 'var(--ck-highlight-marker-brown-200)',
					type: 'pen'
				},
			
				{
					model: 'brown300Marker',
					class: 'marker-brown-300',
					title: 'Brown 300 marker',
					color: 'var(--ck-highlight-marker-brown-300)',
					type: 'marker'
				},
				{
					model: 'brown300Pen',
					class: 'pen-brown-300',
					title: 'Brown 300 pen',
					color: 'var(--ck-highlight-marker-brown-300)',
					type: 'pen'
				},
			
				{
					model: 'brown400Marker',
					class: 'marker-brown-400',
					title: 'Brown 400 marker',
					color: 'var(--ck-highlight-marker-brown-400)',
					type: 'marker'
				},
				{
					model: 'brown400Pen',
					class: 'pen-brown-400',
					title: 'Brown 400 pen',
					color: 'var(--ck-highlight-marker-brown-400)',
					type: 'pen'
				},
			
				{
					model: 'brown500Marker',
					class: 'marker-brown-500',
					title: 'Brown 500 marker',
					color: 'var(--ck-highlight-marker-brown-500)',
					type: 'marker'
				},
				{
					model: 'brown500Pen',
					class: 'pen-brown-500',
					title: 'Brown 500 pen',
					color: 'var(--ck-highlight-marker-brown-500)',
					type: 'pen'
				},
			
				{
					model: 'brown600Marker',
					class: 'marker-brown-600',
					title: 'Brown 600 marker',
					color: 'var(--ck-highlight-marker-brown-600)',
					type: 'marker'
				},
				{
					model: 'brown600Pen',
					class: 'pen-brown-600',
					title: 'Brown 600 pen',
					color: 'var(--ck-highlight-marker-brown-600)',
					type: 'pen'
				},
			
				{
					model: 'brown700Marker',
					class: 'marker-brown-700',
					title: 'Brown 700 marker',
					color: 'var(--ck-highlight-marker-brown-700)',
					type: 'marker'
				},
				{
					model: 'brown700Pen',
					class: 'pen-brown-700',
					title: 'Brown 700 pen',
					color: 'var(--ck-highlight-marker-brown-700)',
					type: 'pen'
				},
			
				{
					model: 'brown800Marker',
					class: 'marker-brown-800',
					title: 'Brown 800 marker',
					color: 'var(--ck-highlight-marker-brown-800)',
					type: 'marker'
				},
				{
					model: 'brown800Pen',
					class: 'pen-brown-800',
					title: 'Brown 800 pen',
					color: 'var(--ck-highlight-marker-brown-800)',
					type: 'pen'
				},
			
				{
					model: 'brown900Marker',
					class: 'marker-brown-900',
					title: 'Brown 900 marker',
					color: 'var(--ck-highlight-marker-brown-900)',
					type: 'marker'
				},
				{
					model: 'brown900Pen',
					class: 'pen-brown-900',
					title: 'Brown 900 pen',
					color: 'var(--ck-highlight-marker-brown-900)',
					type: 'pen'
				},
			
				{
					model: 'greyMarker',
					class: 'marker-grey',
					title: 'Grey marker',
					color: 'var(--ck-highlight-marker-grey)',
					type: 'marker'
				},
				{
					model: 'greyPen',
					class: 'pen-grey',
					title: 'Grey pen',
					color: 'var(--ck-highlight-marker-grey)',
					type: 'pen'
				},
			
				{
					model: 'grey50Marker',
					class: 'marker-grey-50',
					title: 'Grey 50 marker',
					color: 'var(--ck-highlight-marker-grey-50)',
					type: 'marker'
				},
				{
					model: 'grey50Pen',
					class: 'pen-grey-50',
					title: 'Grey 50 pen',
					color: 'var(--ck-highlight-marker-grey-50)',
					type: 'pen'
				},
			
				{
					model: 'grey100Marker',
					class: 'marker-grey-100',
					title: 'Grey 100 marker',
					color: 'var(--ck-highlight-marker-grey-100)',
					type: 'marker'
				},
				{
					model: 'grey100Pen',
					class: 'pen-grey-100',
					title: 'Grey 100 pen',
					color: 'var(--ck-highlight-marker-grey-100)',
					type: 'pen'
				},
			
				{
					model: 'grey200Marker',
					class: 'marker-grey-200',
					title: 'Grey 200 marker',
					color: 'var(--ck-highlight-marker-grey-200)',
					type: 'marker'
				},
				{
					model: 'grey200Pen',
					class: 'pen-grey-200',
					title: 'Grey 200 pen',
					color: 'var(--ck-highlight-marker-grey-200)',
					type: 'pen'
				},
			
				{
					model: 'grey300Marker',
					class: 'marker-grey-300',
					title: 'Grey 300 marker',
					color: 'var(--ck-highlight-marker-grey-300)',
					type: 'marker'
				},
				{
					model: 'grey300Pen',
					class: 'pen-grey-300',
					title: 'Grey 300 pen',
					color: 'var(--ck-highlight-marker-grey-300)',
					type: 'pen'
				},
			
				{
					model: 'grey400Marker',
					class: 'marker-grey-400',
					title: 'Grey 400 marker',
					color: 'var(--ck-highlight-marker-grey-400)',
					type: 'marker'
				},
				{
					model: 'grey400Pen',
					class: 'pen-grey-400',
					title: 'Grey 400 pen',
					color: 'var(--ck-highlight-marker-grey-400)',
					type: 'pen'
				},
			
				{
					model: 'grey500Marker',
					class: 'marker-grey-500',
					title: 'Grey 500 marker',
					color: 'var(--ck-highlight-marker-grey-500)',
					type: 'marker'
				},
				{
					model: 'grey500Pen',
					class: 'pen-grey-500',
					title: 'Grey 500 pen',
					color: 'var(--ck-highlight-marker-grey-500)',
					type: 'pen'
				},
			
				{
					model: 'grey600Marker',
					class: 'marker-grey-600',
					title: 'Grey 600 marker',
					color: 'var(--ck-highlight-marker-grey-600)',
					type: 'marker'
				},
				{
					model: 'grey600Pen',
					class: 'pen-grey-600',
					title: 'Grey 600 pen',
					color: 'var(--ck-highlight-marker-grey-600)',
					type: 'pen'
				},
			
				{
					model: 'grey700Marker',
					class: 'marker-grey-700',
					title: 'Grey 700 marker',
					color: 'var(--ck-highlight-marker-grey-700)',
					type: 'marker'
				},
				{
					model: 'grey700Pen',
					class: 'pen-grey-700',
					title: 'Grey 700 pen',
					color: 'var(--ck-highlight-marker-grey-700)',
					type: 'pen'
				},
			
				{
					model: 'grey800Marker',
					class: 'marker-grey-800',
					title: 'Grey 800 marker',
					color: 'var(--ck-highlight-marker-grey-800)',
					type: 'marker'
				},
				{
					model: 'grey800Pen',
					class: 'pen-grey-800',
					title: 'Grey 800 pen',
					color: 'var(--ck-highlight-marker-grey-800)',
					type: 'pen'
				},
			
				{
					model: 'grey900Marker',
					class: 'marker-grey-900',
					title: 'Grey 900 marker',
					color: 'var(--ck-highlight-marker-grey-900)',
					type: 'marker'
				},
				{
					model: 'grey900Pen',
					class: 'pen-grey-900',
					title: 'Grey 900 pen',
					color: 'var(--ck-highlight-marker-grey-900)',
					type: 'pen'
				},
			
				{
					model: 'blueGreyMarker',
					class: 'marker-blue-grey',
					title: 'Blue Grey marker',
					color: 'var(--ck-highlight-marker-blue-grey)',
					type: 'marker'
				},
				{
					model: 'blueGreyPen',
					class: 'pen-blue-grey',
					title: 'Blue Grey pen',
					color: 'var(--ck-highlight-marker-blue-grey)',
					type: 'pen'
				},
			
				{
					model: 'blueGrey50Marker',
					class: 'marker-blue-grey-50',
					title: 'Blue Grey 50 marker',
					color: 'var(--ck-highlight-marker-blue-grey-50)',
					type: 'marker'
				},
				{
					model: 'blueGrey50Pen',
					class: 'pen-blue-grey-50',
					title: 'Blue Grey 50 pen',
					color: 'var(--ck-highlight-marker-blue-grey-50)',
					type: 'pen'
				},
			
				{
					model: 'blueGrey100Marker',
					class: 'marker-blue-grey-100',
					title: 'Blue Grey 100 marker',
					color: 'var(--ck-highlight-marker-blue-grey-100)',
					type: 'marker'
				},
				{
					model: 'blueGrey100Pen',
					class: 'pen-blue-grey-100',
					title: 'Blue Grey 100 pen',
					color: 'var(--ck-highlight-marker-blue-grey-100)',
					type: 'pen'
				},
			
				{
					model: 'blueGrey200Marker',
					class: 'marker-blue-grey-200',
					title: 'Blue Grey 200 marker',
					color: 'var(--ck-highlight-marker-blue-grey-200)',
					type: 'marker'
				},
				{
					model: 'blueGrey200Pen',
					class: 'pen-blue-grey-200',
					title: 'Blue Grey 200 pen',
					color: 'var(--ck-highlight-marker-blue-grey-200)',
					type: 'pen'
				},
			
				{
					model: 'blueGrey300Marker',
					class: 'marker-blue-grey-300',
					title: 'Blue Grey 300 marker',
					color: 'var(--ck-highlight-marker-blue-grey-300)',
					type: 'marker'
				},
				{
					model: 'blueGrey300Pen',
					class: 'pen-blue-grey-300',
					title: 'Blue Grey 300 pen',
					color: 'var(--ck-highlight-marker-blue-grey-300)',
					type: 'pen'
				},
			
				{
					model: 'blueGrey400Marker',
					class: 'marker-blue-grey-400',
					title: 'Blue Grey 400 marker',
					color: 'var(--ck-highlight-marker-blue-grey-400)',
					type: 'marker'
				},
				{
					model: 'blueGrey400Pen',
					class: 'pen-blue-grey-400',
					title: 'Blue Grey 400 pen',
					color: 'var(--ck-highlight-marker-blue-grey-400)',
					type: 'pen'
				},
			
				{
					model: 'blueGrey500Marker',
					class: 'marker-blue-grey-500',
					title: 'Blue Grey 500 marker',
					color: 'var(--ck-highlight-marker-blue-grey-500)',
					type: 'marker'
				},
				{
					model: 'blueGrey500Pen',
					class: 'pen-blue-grey-500',
					title: 'Blue Grey 500 pen',
					color: 'var(--ck-highlight-marker-blue-grey-500)',
					type: 'pen'
				},
			
				{
					model: 'blueGrey600Marker',
					class: 'marker-blue-grey-600',
					title: 'Blue Grey 600 marker',
					color: 'var(--ck-highlight-marker-blue-grey-600)',
					type: 'marker'
				},
				{
					model: 'blueGrey600Pen',
					class: 'pen-blue-grey-600',
					title: 'Blue Grey 600 pen',
					color: 'var(--ck-highlight-marker-blue-grey-600)',
					type: 'pen'
				},
			
				{
					model: 'blueGrey700Marker',
					class: 'marker-blue-grey-700',
					title: 'Blue Grey 700 marker',
					color: 'var(--ck-highlight-marker-blue-grey-700)',
					type: 'marker'
				},
				{
					model: 'blueGrey700Pen',
					class: 'pen-blue-grey-700',
					title: 'Blue Grey 700 pen',
					color: 'var(--ck-highlight-marker-blue-grey-700)',
					type: 'pen'
				},
			
				{
					model: 'blueGrey800Marker',
					class: 'marker-blue-grey-800',
					title: 'Blue Grey 800 marker',
					color: 'var(--ck-highlight-marker-blue-grey-800)',
					type: 'marker'
				},
				{
					model: 'blueGrey800Pen',
					class: 'pen-blue-grey-800',
					title: 'Blue Grey 800 pen',
					color: 'var(--ck-highlight-marker-blue-grey-800)',
					type: 'pen'
				},
			
				{
					model: 'blueGrey900Marker',
					class: 'marker-blue-grey-900',
					title: 'Blue Grey 900 marker',
					color: 'var(--ck-highlight-marker-blue-grey-900)',
					type: 'marker'
				},
				{
					model: 'blueGrey900Pen',
					class: 'pen-blue-grey-900',
					title: 'Blue Grey 900 pen',
					color: 'var(--ck-highlight-marker-blue-grey-900)',
					type: 'pen'
				},
			
				{
					model: 'whiteMarker',
					class: 'marker-white',
					title: 'White marker',
					color: 'var(--ck-highlight-marker-white)',
					type: 'marker'
				},
				{
					model: 'whitePen',
					class: 'pen-white',
					title: 'White pen',
					color: 'var(--ck-highlight-marker-white)',
					type: 'pen'
				},
			
				{
					model: 'blackMarker',
					class: 'marker-black',
					title: 'Black marker',
					color: 'var(--ck-highlight-marker-black)',
					type: 'marker'
				},
				{
					model: 'blackPen',
					class: 'pen-black',
					title: 'Black pen',
					color: 'var(--ck-highlight-marker-black)',
					type: 'pen'
				},
			
			]
		} );
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		// Allow highlight attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: 'highlight' } );

		const options = editor.config.get( 'highlight.options' );

		// Set-up the two-way conversion.
		editor.conversion.attributeToElement( _buildDefinition( options ) );

		editor.commands.add( 'highlight', new HighlightCommand( editor ) );
	}
}

// Converts the options array to a converter definition.
//
// @param {Array.<module:highlight/highlight~HighlightOption>} options An array with configured options.
// @returns {module:engine/conversion/conversion~ConverterDefinition}
function _buildDefinition( options ) {
	const definition = {
		model: {
			key: 'highlight',
			values: []
		},
		view: {}
	};

	for ( const option of options ) {
		definition.model.values.push( option.model );
		definition.view[ option.model ] = {
			name: 'mark',
			classes: option.class
		};
	}

	return definition;
}