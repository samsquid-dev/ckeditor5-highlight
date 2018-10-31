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
					model: 're0Marker',
					class: 'marker-red-50',
					title: 'Red 50 marker',
					color: 'var(--ck-highlight-marker-red-50)',
					type: 'marker'
				},
				{
					model: 're0Pen',
					class: 'pen-red-50',
					title: 'Red 50 pen',
					color: 'var(--ck-highlight-marker-red-50)',
					type: 'pen'
				},
			
				{
					model: 're00Marker',
					class: 'marker-red-100',
					title: 'Red 100 marker',
					color: 'var(--ck-highlight-marker-red-100)',
					type: 'marker'
				},
				{
					model: 're00Pen',
					class: 'pen-red-100',
					title: 'Red 100 pen',
					color: 'var(--ck-highlight-marker-red-100)',
					type: 'pen'
				},
			
				{
					model: 're00Marker',
					class: 'marker-red-200',
					title: 'Red 200 marker',
					color: 'var(--ck-highlight-marker-red-200)',
					type: 'marker'
				},
				{
					model: 're00Pen',
					class: 'pen-red-200',
					title: 'Red 200 pen',
					color: 'var(--ck-highlight-marker-red-200)',
					type: 'pen'
				},
			
				{
					model: 're00Marker',
					class: 'marker-red-300',
					title: 'Red 300 marker',
					color: 'var(--ck-highlight-marker-red-300)',
					type: 'marker'
				},
				{
					model: 're00Pen',
					class: 'pen-red-300',
					title: 'Red 300 pen',
					color: 'var(--ck-highlight-marker-red-300)',
					type: 'pen'
				},
			
				{
					model: 're00Marker',
					class: 'marker-red-400',
					title: 'Red 400 marker',
					color: 'var(--ck-highlight-marker-red-400)',
					type: 'marker'
				},
				{
					model: 're00Pen',
					class: 'pen-red-400',
					title: 'Red 400 pen',
					color: 'var(--ck-highlight-marker-red-400)',
					type: 'pen'
				},
			
				{
					model: 're00Marker',
					class: 'marker-red-500',
					title: 'Red 500 marker',
					color: 'var(--ck-highlight-marker-red-500)',
					type: 'marker'
				},
				{
					model: 're00Pen',
					class: 'pen-red-500',
					title: 'Red 500 pen',
					color: 'var(--ck-highlight-marker-red-500)',
					type: 'pen'
				},
			
				{
					model: 're00Marker',
					class: 'marker-red-600',
					title: 'Red 600 marker',
					color: 'var(--ck-highlight-marker-red-600)',
					type: 'marker'
				},
				{
					model: 're00Pen',
					class: 'pen-red-600',
					title: 'Red 600 pen',
					color: 'var(--ck-highlight-marker-red-600)',
					type: 'pen'
				},
			
				{
					model: 're00Marker',
					class: 'marker-red-700',
					title: 'Red 700 marker',
					color: 'var(--ck-highlight-marker-red-700)',
					type: 'marker'
				},
				{
					model: 're00Pen',
					class: 'pen-red-700',
					title: 'Red 700 pen',
					color: 'var(--ck-highlight-marker-red-700)',
					type: 'pen'
				},
			
				{
					model: 're00Marker',
					class: 'marker-red-800',
					title: 'Red 800 marker',
					color: 'var(--ck-highlight-marker-red-800)',
					type: 'marker'
				},
				{
					model: 're00Pen',
					class: 'pen-red-800',
					title: 'Red 800 pen',
					color: 'var(--ck-highlight-marker-red-800)',
					type: 'pen'
				},
			
				{
					model: 're00Marker',
					class: 'marker-red-900',
					title: 'Red 900 marker',
					color: 'var(--ck-highlight-marker-red-900)',
					type: 'marker'
				},
				{
					model: 're00Pen',
					class: 'pen-red-900',
					title: 'Red 900 pen',
					color: 'var(--ck-highlight-marker-red-900)',
					type: 'pen'
				},
			
				{
					model: 're100Marker',
					class: 'marker-red-a100',
					title: 'Red a100 marker',
					color: 'var(--ck-highlight-marker-red-a100)',
					type: 'marker'
				},
				{
					model: 're100Pen',
					class: 'pen-red-a100',
					title: 'Red a100 pen',
					color: 'var(--ck-highlight-marker-red-a100)',
					type: 'pen'
				},
			
				{
					model: 're200Marker',
					class: 'marker-red-a200',
					title: 'Red a200 marker',
					color: 'var(--ck-highlight-marker-red-a200)',
					type: 'marker'
				},
				{
					model: 're200Pen',
					class: 'pen-red-a200',
					title: 'Red a200 pen',
					color: 'var(--ck-highlight-marker-red-a200)',
					type: 'pen'
				},
			
				{
					model: 're400Marker',
					class: 'marker-red-a400',
					title: 'Red a400 marker',
					color: 'var(--ck-highlight-marker-red-a400)',
					type: 'marker'
				},
				{
					model: 're400Pen',
					class: 'pen-red-a400',
					title: 'Red a400 pen',
					color: 'var(--ck-highlight-marker-red-a400)',
					type: 'pen'
				},
			
				{
					model: 're700Marker',
					class: 'marker-red-a700',
					title: 'Red a700 marker',
					color: 'var(--ck-highlight-marker-red-a700)',
					type: 'marker'
				},
				{
					model: 're700Pen',
					class: 'pen-red-a700',
					title: 'Red a700 pen',
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
					model: 'pin0Marker',
					class: 'marker-pink-50',
					title: 'Pink 50 marker',
					color: 'var(--ck-highlight-marker-pink-50)',
					type: 'marker'
				},
				{
					model: 'pin0Pen',
					class: 'pen-pink-50',
					title: 'Pink 50 pen',
					color: 'var(--ck-highlight-marker-pink-50)',
					type: 'pen'
				},
			
				{
					model: 'pin00Marker',
					class: 'marker-pink-100',
					title: 'Pink 100 marker',
					color: 'var(--ck-highlight-marker-pink-100)',
					type: 'marker'
				},
				{
					model: 'pin00Pen',
					class: 'pen-pink-100',
					title: 'Pink 100 pen',
					color: 'var(--ck-highlight-marker-pink-100)',
					type: 'pen'
				},
			
				{
					model: 'pin00Marker',
					class: 'marker-pink-200',
					title: 'Pink 200 marker',
					color: 'var(--ck-highlight-marker-pink-200)',
					type: 'marker'
				},
				{
					model: 'pin00Pen',
					class: 'pen-pink-200',
					title: 'Pink 200 pen',
					color: 'var(--ck-highlight-marker-pink-200)',
					type: 'pen'
				},
			
				{
					model: 'pin00Marker',
					class: 'marker-pink-300',
					title: 'Pink 300 marker',
					color: 'var(--ck-highlight-marker-pink-300)',
					type: 'marker'
				},
				{
					model: 'pin00Pen',
					class: 'pen-pink-300',
					title: 'Pink 300 pen',
					color: 'var(--ck-highlight-marker-pink-300)',
					type: 'pen'
				},
			
				{
					model: 'pin00Marker',
					class: 'marker-pink-400',
					title: 'Pink 400 marker',
					color: 'var(--ck-highlight-marker-pink-400)',
					type: 'marker'
				},
				{
					model: 'pin00Pen',
					class: 'pen-pink-400',
					title: 'Pink 400 pen',
					color: 'var(--ck-highlight-marker-pink-400)',
					type: 'pen'
				},
			
				{
					model: 'pin00Marker',
					class: 'marker-pink-500',
					title: 'Pink 500 marker',
					color: 'var(--ck-highlight-marker-pink-500)',
					type: 'marker'
				},
				{
					model: 'pin00Pen',
					class: 'pen-pink-500',
					title: 'Pink 500 pen',
					color: 'var(--ck-highlight-marker-pink-500)',
					type: 'pen'
				},
			
				{
					model: 'pin00Marker',
					class: 'marker-pink-600',
					title: 'Pink 600 marker',
					color: 'var(--ck-highlight-marker-pink-600)',
					type: 'marker'
				},
				{
					model: 'pin00Pen',
					class: 'pen-pink-600',
					title: 'Pink 600 pen',
					color: 'var(--ck-highlight-marker-pink-600)',
					type: 'pen'
				},
			
				{
					model: 'pin00Marker',
					class: 'marker-pink-700',
					title: 'Pink 700 marker',
					color: 'var(--ck-highlight-marker-pink-700)',
					type: 'marker'
				},
				{
					model: 'pin00Pen',
					class: 'pen-pink-700',
					title: 'Pink 700 pen',
					color: 'var(--ck-highlight-marker-pink-700)',
					type: 'pen'
				},
			
				{
					model: 'pin00Marker',
					class: 'marker-pink-800',
					title: 'Pink 800 marker',
					color: 'var(--ck-highlight-marker-pink-800)',
					type: 'marker'
				},
				{
					model: 'pin00Pen',
					class: 'pen-pink-800',
					title: 'Pink 800 pen',
					color: 'var(--ck-highlight-marker-pink-800)',
					type: 'pen'
				},
			
				{
					model: 'pin00Marker',
					class: 'marker-pink-900',
					title: 'Pink 900 marker',
					color: 'var(--ck-highlight-marker-pink-900)',
					type: 'marker'
				},
				{
					model: 'pin00Pen',
					class: 'pen-pink-900',
					title: 'Pink 900 pen',
					color: 'var(--ck-highlight-marker-pink-900)',
					type: 'pen'
				},
			
				{
					model: 'pin100Marker',
					class: 'marker-pink-a100',
					title: 'Pink a100 marker',
					color: 'var(--ck-highlight-marker-pink-a100)',
					type: 'marker'
				},
				{
					model: 'pin100Pen',
					class: 'pen-pink-a100',
					title: 'Pink a100 pen',
					color: 'var(--ck-highlight-marker-pink-a100)',
					type: 'pen'
				},
			
				{
					model: 'pin200Marker',
					class: 'marker-pink-a200',
					title: 'Pink a200 marker',
					color: 'var(--ck-highlight-marker-pink-a200)',
					type: 'marker'
				},
				{
					model: 'pin200Pen',
					class: 'pen-pink-a200',
					title: 'Pink a200 pen',
					color: 'var(--ck-highlight-marker-pink-a200)',
					type: 'pen'
				},
			
				{
					model: 'pin400Marker',
					class: 'marker-pink-a400',
					title: 'Pink a400 marker',
					color: 'var(--ck-highlight-marker-pink-a400)',
					type: 'marker'
				},
				{
					model: 'pin400Pen',
					class: 'pen-pink-a400',
					title: 'Pink a400 pen',
					color: 'var(--ck-highlight-marker-pink-a400)',
					type: 'pen'
				},
			
				{
					model: 'pin700Marker',
					class: 'marker-pink-a700',
					title: 'Pink a700 marker',
					color: 'var(--ck-highlight-marker-pink-a700)',
					type: 'marker'
				},
				{
					model: 'pin700Pen',
					class: 'pen-pink-a700',
					title: 'Pink a700 pen',
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
					model: 'purpl0Marker',
					class: 'marker-purple-50',
					title: 'Purple 50 marker',
					color: 'var(--ck-highlight-marker-purple-50)',
					type: 'marker'
				},
				{
					model: 'purpl0Pen',
					class: 'pen-purple-50',
					title: 'Purple 50 pen',
					color: 'var(--ck-highlight-marker-purple-50)',
					type: 'pen'
				},
			
				{
					model: 'purpl00Marker',
					class: 'marker-purple-100',
					title: 'Purple 100 marker',
					color: 'var(--ck-highlight-marker-purple-100)',
					type: 'marker'
				},
				{
					model: 'purpl00Pen',
					class: 'pen-purple-100',
					title: 'Purple 100 pen',
					color: 'var(--ck-highlight-marker-purple-100)',
					type: 'pen'
				},
			
				{
					model: 'purpl00Marker',
					class: 'marker-purple-200',
					title: 'Purple 200 marker',
					color: 'var(--ck-highlight-marker-purple-200)',
					type: 'marker'
				},
				{
					model: 'purpl00Pen',
					class: 'pen-purple-200',
					title: 'Purple 200 pen',
					color: 'var(--ck-highlight-marker-purple-200)',
					type: 'pen'
				},
			
				{
					model: 'purpl00Marker',
					class: 'marker-purple-300',
					title: 'Purple 300 marker',
					color: 'var(--ck-highlight-marker-purple-300)',
					type: 'marker'
				},
				{
					model: 'purpl00Pen',
					class: 'pen-purple-300',
					title: 'Purple 300 pen',
					color: 'var(--ck-highlight-marker-purple-300)',
					type: 'pen'
				},
			
				{
					model: 'purpl00Marker',
					class: 'marker-purple-400',
					title: 'Purple 400 marker',
					color: 'var(--ck-highlight-marker-purple-400)',
					type: 'marker'
				},
				{
					model: 'purpl00Pen',
					class: 'pen-purple-400',
					title: 'Purple 400 pen',
					color: 'var(--ck-highlight-marker-purple-400)',
					type: 'pen'
				},
			
				{
					model: 'purpl00Marker',
					class: 'marker-purple-500',
					title: 'Purple 500 marker',
					color: 'var(--ck-highlight-marker-purple-500)',
					type: 'marker'
				},
				{
					model: 'purpl00Pen',
					class: 'pen-purple-500',
					title: 'Purple 500 pen',
					color: 'var(--ck-highlight-marker-purple-500)',
					type: 'pen'
				},
			
				{
					model: 'purpl00Marker',
					class: 'marker-purple-600',
					title: 'Purple 600 marker',
					color: 'var(--ck-highlight-marker-purple-600)',
					type: 'marker'
				},
				{
					model: 'purpl00Pen',
					class: 'pen-purple-600',
					title: 'Purple 600 pen',
					color: 'var(--ck-highlight-marker-purple-600)',
					type: 'pen'
				},
			
				{
					model: 'purpl00Marker',
					class: 'marker-purple-700',
					title: 'Purple 700 marker',
					color: 'var(--ck-highlight-marker-purple-700)',
					type: 'marker'
				},
				{
					model: 'purpl00Pen',
					class: 'pen-purple-700',
					title: 'Purple 700 pen',
					color: 'var(--ck-highlight-marker-purple-700)',
					type: 'pen'
				},
			
				{
					model: 'purpl00Marker',
					class: 'marker-purple-800',
					title: 'Purple 800 marker',
					color: 'var(--ck-highlight-marker-purple-800)',
					type: 'marker'
				},
				{
					model: 'purpl00Pen',
					class: 'pen-purple-800',
					title: 'Purple 800 pen',
					color: 'var(--ck-highlight-marker-purple-800)',
					type: 'pen'
				},
			
				{
					model: 'purpl00Marker',
					class: 'marker-purple-900',
					title: 'Purple 900 marker',
					color: 'var(--ck-highlight-marker-purple-900)',
					type: 'marker'
				},
				{
					model: 'purpl00Pen',
					class: 'pen-purple-900',
					title: 'Purple 900 pen',
					color: 'var(--ck-highlight-marker-purple-900)',
					type: 'pen'
				},
			
				{
					model: 'purpl100Marker',
					class: 'marker-purple-a100',
					title: 'Purple a100 marker',
					color: 'var(--ck-highlight-marker-purple-a100)',
					type: 'marker'
				},
				{
					model: 'purpl100Pen',
					class: 'pen-purple-a100',
					title: 'Purple a100 pen',
					color: 'var(--ck-highlight-marker-purple-a100)',
					type: 'pen'
				},
			
				{
					model: 'purpl200Marker',
					class: 'marker-purple-a200',
					title: 'Purple a200 marker',
					color: 'var(--ck-highlight-marker-purple-a200)',
					type: 'marker'
				},
				{
					model: 'purpl200Pen',
					class: 'pen-purple-a200',
					title: 'Purple a200 pen',
					color: 'var(--ck-highlight-marker-purple-a200)',
					type: 'pen'
				},
			
				{
					model: 'purpl400Marker',
					class: 'marker-purple-a400',
					title: 'Purple a400 marker',
					color: 'var(--ck-highlight-marker-purple-a400)',
					type: 'marker'
				},
				{
					model: 'purpl400Pen',
					class: 'pen-purple-a400',
					title: 'Purple a400 pen',
					color: 'var(--ck-highlight-marker-purple-a400)',
					type: 'pen'
				},
			
				{
					model: 'purpl700Marker',
					class: 'marker-purple-a700',
					title: 'Purple a700 marker',
					color: 'var(--ck-highlight-marker-purple-a700)',
					type: 'marker'
				},
				{
					model: 'purpl700Pen',
					class: 'pen-purple-a700',
					title: 'Purple a700 pen',
					color: 'var(--ck-highlight-marker-purple-a700)',
					type: 'pen'
				},
			
				{
					model: 'deeurpleMarker',
					class: 'marker-deep-purple',
					title: 'Deep purple marker',
					color: 'var(--ck-highlight-marker-deep-purple)',
					type: 'marker'
				},
				{
					model: 'deeurplePen',
					class: 'pen-deep-purple',
					title: 'Deep purple pen',
					color: 'var(--ck-highlight-marker-deep-purple)',
					type: 'pen'
				},
			
				{
					model: 'deeurpl0Marker',
					class: 'marker-deep-purple-50',
					title: 'Deep purple 50 marker',
					color: 'var(--ck-highlight-marker-deep-purple-50)',
					type: 'marker'
				},
				{
					model: 'deeurpl0Pen',
					class: 'pen-deep-purple-50',
					title: 'Deep purple 50 pen',
					color: 'var(--ck-highlight-marker-deep-purple-50)',
					type: 'pen'
				},
			
				{
					model: 'deeurpl00Marker',
					class: 'marker-deep-purple-100',
					title: 'Deep purple 100 marker',
					color: 'var(--ck-highlight-marker-deep-purple-100)',
					type: 'marker'
				},
				{
					model: 'deeurpl00Pen',
					class: 'pen-deep-purple-100',
					title: 'Deep purple 100 pen',
					color: 'var(--ck-highlight-marker-deep-purple-100)',
					type: 'pen'
				},
			
				{
					model: 'deeurpl00Marker',
					class: 'marker-deep-purple-200',
					title: 'Deep purple 200 marker',
					color: 'var(--ck-highlight-marker-deep-purple-200)',
					type: 'marker'
				},
				{
					model: 'deeurpl00Pen',
					class: 'pen-deep-purple-200',
					title: 'Deep purple 200 pen',
					color: 'var(--ck-highlight-marker-deep-purple-200)',
					type: 'pen'
				},
			
				{
					model: 'deeurpl00Marker',
					class: 'marker-deep-purple-300',
					title: 'Deep purple 300 marker',
					color: 'var(--ck-highlight-marker-deep-purple-300)',
					type: 'marker'
				},
				{
					model: 'deeurpl00Pen',
					class: 'pen-deep-purple-300',
					title: 'Deep purple 300 pen',
					color: 'var(--ck-highlight-marker-deep-purple-300)',
					type: 'pen'
				},
			
				{
					model: 'deeurpl00Marker',
					class: 'marker-deep-purple-400',
					title: 'Deep purple 400 marker',
					color: 'var(--ck-highlight-marker-deep-purple-400)',
					type: 'marker'
				},
				{
					model: 'deeurpl00Pen',
					class: 'pen-deep-purple-400',
					title: 'Deep purple 400 pen',
					color: 'var(--ck-highlight-marker-deep-purple-400)',
					type: 'pen'
				},
			
				{
					model: 'deeurpl00Marker',
					class: 'marker-deep-purple-500',
					title: 'Deep purple 500 marker',
					color: 'var(--ck-highlight-marker-deep-purple-500)',
					type: 'marker'
				},
				{
					model: 'deeurpl00Pen',
					class: 'pen-deep-purple-500',
					title: 'Deep purple 500 pen',
					color: 'var(--ck-highlight-marker-deep-purple-500)',
					type: 'pen'
				},
			
				{
					model: 'deeurpl00Marker',
					class: 'marker-deep-purple-600',
					title: 'Deep purple 600 marker',
					color: 'var(--ck-highlight-marker-deep-purple-600)',
					type: 'marker'
				},
				{
					model: 'deeurpl00Pen',
					class: 'pen-deep-purple-600',
					title: 'Deep purple 600 pen',
					color: 'var(--ck-highlight-marker-deep-purple-600)',
					type: 'pen'
				},
			
				{
					model: 'deeurpl00Marker',
					class: 'marker-deep-purple-700',
					title: 'Deep purple 700 marker',
					color: 'var(--ck-highlight-marker-deep-purple-700)',
					type: 'marker'
				},
				{
					model: 'deeurpl00Pen',
					class: 'pen-deep-purple-700',
					title: 'Deep purple 700 pen',
					color: 'var(--ck-highlight-marker-deep-purple-700)',
					type: 'pen'
				},
			
				{
					model: 'deeurpl00Marker',
					class: 'marker-deep-purple-800',
					title: 'Deep purple 800 marker',
					color: 'var(--ck-highlight-marker-deep-purple-800)',
					type: 'marker'
				},
				{
					model: 'deeurpl00Pen',
					class: 'pen-deep-purple-800',
					title: 'Deep purple 800 pen',
					color: 'var(--ck-highlight-marker-deep-purple-800)',
					type: 'pen'
				},
			
				{
					model: 'deeurpl00Marker',
					class: 'marker-deep-purple-900',
					title: 'Deep purple 900 marker',
					color: 'var(--ck-highlight-marker-deep-purple-900)',
					type: 'marker'
				},
				{
					model: 'deeurpl00Pen',
					class: 'pen-deep-purple-900',
					title: 'Deep purple 900 pen',
					color: 'var(--ck-highlight-marker-deep-purple-900)',
					type: 'pen'
				},
			
				{
					model: 'deeurpl100Marker',
					class: 'marker-deep-purple-a100',
					title: 'Deep purple a100 marker',
					color: 'var(--ck-highlight-marker-deep-purple-a100)',
					type: 'marker'
				},
				{
					model: 'deeurpl100Pen',
					class: 'pen-deep-purple-a100',
					title: 'Deep purple a100 pen',
					color: 'var(--ck-highlight-marker-deep-purple-a100)',
					type: 'pen'
				},
			
				{
					model: 'deeurpl200Marker',
					class: 'marker-deep-purple-a200',
					title: 'Deep purple a200 marker',
					color: 'var(--ck-highlight-marker-deep-purple-a200)',
					type: 'marker'
				},
				{
					model: 'deeurpl200Pen',
					class: 'pen-deep-purple-a200',
					title: 'Deep purple a200 pen',
					color: 'var(--ck-highlight-marker-deep-purple-a200)',
					type: 'pen'
				},
			
				{
					model: 'deeurpl400Marker',
					class: 'marker-deep-purple-a400',
					title: 'Deep purple a400 marker',
					color: 'var(--ck-highlight-marker-deep-purple-a400)',
					type: 'marker'
				},
				{
					model: 'deeurpl400Pen',
					class: 'pen-deep-purple-a400',
					title: 'Deep purple a400 pen',
					color: 'var(--ck-highlight-marker-deep-purple-a400)',
					type: 'pen'
				},
			
				{
					model: 'deeurpl700Marker',
					class: 'marker-deep-purple-a700',
					title: 'Deep purple a700 marker',
					color: 'var(--ck-highlight-marker-deep-purple-a700)',
					type: 'marker'
				},
				{
					model: 'deeurpl700Pen',
					class: 'pen-deep-purple-a700',
					title: 'Deep purple a700 pen',
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
					model: 'indig0Marker',
					class: 'marker-indigo-50',
					title: 'Indigo 50 marker',
					color: 'var(--ck-highlight-marker-indigo-50)',
					type: 'marker'
				},
				{
					model: 'indig0Pen',
					class: 'pen-indigo-50',
					title: 'Indigo 50 pen',
					color: 'var(--ck-highlight-marker-indigo-50)',
					type: 'pen'
				},
			
				{
					model: 'indig00Marker',
					class: 'marker-indigo-100',
					title: 'Indigo 100 marker',
					color: 'var(--ck-highlight-marker-indigo-100)',
					type: 'marker'
				},
				{
					model: 'indig00Pen',
					class: 'pen-indigo-100',
					title: 'Indigo 100 pen',
					color: 'var(--ck-highlight-marker-indigo-100)',
					type: 'pen'
				},
			
				{
					model: 'indig00Marker',
					class: 'marker-indigo-200',
					title: 'Indigo 200 marker',
					color: 'var(--ck-highlight-marker-indigo-200)',
					type: 'marker'
				},
				{
					model: 'indig00Pen',
					class: 'pen-indigo-200',
					title: 'Indigo 200 pen',
					color: 'var(--ck-highlight-marker-indigo-200)',
					type: 'pen'
				},
			
				{
					model: 'indig00Marker',
					class: 'marker-indigo-300',
					title: 'Indigo 300 marker',
					color: 'var(--ck-highlight-marker-indigo-300)',
					type: 'marker'
				},
				{
					model: 'indig00Pen',
					class: 'pen-indigo-300',
					title: 'Indigo 300 pen',
					color: 'var(--ck-highlight-marker-indigo-300)',
					type: 'pen'
				},
			
				{
					model: 'indig00Marker',
					class: 'marker-indigo-400',
					title: 'Indigo 400 marker',
					color: 'var(--ck-highlight-marker-indigo-400)',
					type: 'marker'
				},
				{
					model: 'indig00Pen',
					class: 'pen-indigo-400',
					title: 'Indigo 400 pen',
					color: 'var(--ck-highlight-marker-indigo-400)',
					type: 'pen'
				},
			
				{
					model: 'indig00Marker',
					class: 'marker-indigo-500',
					title: 'Indigo 500 marker',
					color: 'var(--ck-highlight-marker-indigo-500)',
					type: 'marker'
				},
				{
					model: 'indig00Pen',
					class: 'pen-indigo-500',
					title: 'Indigo 500 pen',
					color: 'var(--ck-highlight-marker-indigo-500)',
					type: 'pen'
				},
			
				{
					model: 'indig00Marker',
					class: 'marker-indigo-600',
					title: 'Indigo 600 marker',
					color: 'var(--ck-highlight-marker-indigo-600)',
					type: 'marker'
				},
				{
					model: 'indig00Pen',
					class: 'pen-indigo-600',
					title: 'Indigo 600 pen',
					color: 'var(--ck-highlight-marker-indigo-600)',
					type: 'pen'
				},
			
				{
					model: 'indig00Marker',
					class: 'marker-indigo-700',
					title: 'Indigo 700 marker',
					color: 'var(--ck-highlight-marker-indigo-700)',
					type: 'marker'
				},
				{
					model: 'indig00Pen',
					class: 'pen-indigo-700',
					title: 'Indigo 700 pen',
					color: 'var(--ck-highlight-marker-indigo-700)',
					type: 'pen'
				},
			
				{
					model: 'indig00Marker',
					class: 'marker-indigo-800',
					title: 'Indigo 800 marker',
					color: 'var(--ck-highlight-marker-indigo-800)',
					type: 'marker'
				},
				{
					model: 'indig00Pen',
					class: 'pen-indigo-800',
					title: 'Indigo 800 pen',
					color: 'var(--ck-highlight-marker-indigo-800)',
					type: 'pen'
				},
			
				{
					model: 'indig00Marker',
					class: 'marker-indigo-900',
					title: 'Indigo 900 marker',
					color: 'var(--ck-highlight-marker-indigo-900)',
					type: 'marker'
				},
				{
					model: 'indig00Pen',
					class: 'pen-indigo-900',
					title: 'Indigo 900 pen',
					color: 'var(--ck-highlight-marker-indigo-900)',
					type: 'pen'
				},
			
				{
					model: 'indig100Marker',
					class: 'marker-indigo-a100',
					title: 'Indigo a100 marker',
					color: 'var(--ck-highlight-marker-indigo-a100)',
					type: 'marker'
				},
				{
					model: 'indig100Pen',
					class: 'pen-indigo-a100',
					title: 'Indigo a100 pen',
					color: 'var(--ck-highlight-marker-indigo-a100)',
					type: 'pen'
				},
			
				{
					model: 'indig200Marker',
					class: 'marker-indigo-a200',
					title: 'Indigo a200 marker',
					color: 'var(--ck-highlight-marker-indigo-a200)',
					type: 'marker'
				},
				{
					model: 'indig200Pen',
					class: 'pen-indigo-a200',
					title: 'Indigo a200 pen',
					color: 'var(--ck-highlight-marker-indigo-a200)',
					type: 'pen'
				},
			
				{
					model: 'indig400Marker',
					class: 'marker-indigo-a400',
					title: 'Indigo a400 marker',
					color: 'var(--ck-highlight-marker-indigo-a400)',
					type: 'marker'
				},
				{
					model: 'indig400Pen',
					class: 'pen-indigo-a400',
					title: 'Indigo a400 pen',
					color: 'var(--ck-highlight-marker-indigo-a400)',
					type: 'pen'
				},
			
				{
					model: 'indig700Marker',
					class: 'marker-indigo-a700',
					title: 'Indigo a700 marker',
					color: 'var(--ck-highlight-marker-indigo-a700)',
					type: 'marker'
				},
				{
					model: 'indig700Pen',
					class: 'pen-indigo-a700',
					title: 'Indigo a700 pen',
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
					model: 'blu0Marker',
					class: 'marker-blue-50',
					title: 'Blue 50 marker',
					color: 'var(--ck-highlight-marker-blue-50)',
					type: 'marker'
				},
				{
					model: 'blu0Pen',
					class: 'pen-blue-50',
					title: 'Blue 50 pen',
					color: 'var(--ck-highlight-marker-blue-50)',
					type: 'pen'
				},
			
				{
					model: 'blu00Marker',
					class: 'marker-blue-100',
					title: 'Blue 100 marker',
					color: 'var(--ck-highlight-marker-blue-100)',
					type: 'marker'
				},
				{
					model: 'blu00Pen',
					class: 'pen-blue-100',
					title: 'Blue 100 pen',
					color: 'var(--ck-highlight-marker-blue-100)',
					type: 'pen'
				},
			
				{
					model: 'blu00Marker',
					class: 'marker-blue-200',
					title: 'Blue 200 marker',
					color: 'var(--ck-highlight-marker-blue-200)',
					type: 'marker'
				},
				{
					model: 'blu00Pen',
					class: 'pen-blue-200',
					title: 'Blue 200 pen',
					color: 'var(--ck-highlight-marker-blue-200)',
					type: 'pen'
				},
			
				{
					model: 'blu00Marker',
					class: 'marker-blue-300',
					title: 'Blue 300 marker',
					color: 'var(--ck-highlight-marker-blue-300)',
					type: 'marker'
				},
				{
					model: 'blu00Pen',
					class: 'pen-blue-300',
					title: 'Blue 300 pen',
					color: 'var(--ck-highlight-marker-blue-300)',
					type: 'pen'
				},
			
				{
					model: 'blu00Marker',
					class: 'marker-blue-400',
					title: 'Blue 400 marker',
					color: 'var(--ck-highlight-marker-blue-400)',
					type: 'marker'
				},
				{
					model: 'blu00Pen',
					class: 'pen-blue-400',
					title: 'Blue 400 pen',
					color: 'var(--ck-highlight-marker-blue-400)',
					type: 'pen'
				},
			
				{
					model: 'blu00Marker',
					class: 'marker-blue-500',
					title: 'Blue 500 marker',
					color: 'var(--ck-highlight-marker-blue-500)',
					type: 'marker'
				},
				{
					model: 'blu00Pen',
					class: 'pen-blue-500',
					title: 'Blue 500 pen',
					color: 'var(--ck-highlight-marker-blue-500)',
					type: 'pen'
				},
			
				{
					model: 'blu00Marker',
					class: 'marker-blue-600',
					title: 'Blue 600 marker',
					color: 'var(--ck-highlight-marker-blue-600)',
					type: 'marker'
				},
				{
					model: 'blu00Pen',
					class: 'pen-blue-600',
					title: 'Blue 600 pen',
					color: 'var(--ck-highlight-marker-blue-600)',
					type: 'pen'
				},
			
				{
					model: 'blu00Marker',
					class: 'marker-blue-700',
					title: 'Blue 700 marker',
					color: 'var(--ck-highlight-marker-blue-700)',
					type: 'marker'
				},
				{
					model: 'blu00Pen',
					class: 'pen-blue-700',
					title: 'Blue 700 pen',
					color: 'var(--ck-highlight-marker-blue-700)',
					type: 'pen'
				},
			
				{
					model: 'blu00Marker',
					class: 'marker-blue-800',
					title: 'Blue 800 marker',
					color: 'var(--ck-highlight-marker-blue-800)',
					type: 'marker'
				},
				{
					model: 'blu00Pen',
					class: 'pen-blue-800',
					title: 'Blue 800 pen',
					color: 'var(--ck-highlight-marker-blue-800)',
					type: 'pen'
				},
			
				{
					model: 'blu00Marker',
					class: 'marker-blue-900',
					title: 'Blue 900 marker',
					color: 'var(--ck-highlight-marker-blue-900)',
					type: 'marker'
				},
				{
					model: 'blu00Pen',
					class: 'pen-blue-900',
					title: 'Blue 900 pen',
					color: 'var(--ck-highlight-marker-blue-900)',
					type: 'pen'
				},
			
				{
					model: 'blu100Marker',
					class: 'marker-blue-a100',
					title: 'Blue a100 marker',
					color: 'var(--ck-highlight-marker-blue-a100)',
					type: 'marker'
				},
				{
					model: 'blu100Pen',
					class: 'pen-blue-a100',
					title: 'Blue a100 pen',
					color: 'var(--ck-highlight-marker-blue-a100)',
					type: 'pen'
				},
			
				{
					model: 'blu200Marker',
					class: 'marker-blue-a200',
					title: 'Blue a200 marker',
					color: 'var(--ck-highlight-marker-blue-a200)',
					type: 'marker'
				},
				{
					model: 'blu200Pen',
					class: 'pen-blue-a200',
					title: 'Blue a200 pen',
					color: 'var(--ck-highlight-marker-blue-a200)',
					type: 'pen'
				},
			
				{
					model: 'blu400Marker',
					class: 'marker-blue-a400',
					title: 'Blue a400 marker',
					color: 'var(--ck-highlight-marker-blue-a400)',
					type: 'marker'
				},
				{
					model: 'blu400Pen',
					class: 'pen-blue-a400',
					title: 'Blue a400 pen',
					color: 'var(--ck-highlight-marker-blue-a400)',
					type: 'pen'
				},
			
				{
					model: 'blu700Marker',
					class: 'marker-blue-a700',
					title: 'Blue a700 marker',
					color: 'var(--ck-highlight-marker-blue-a700)',
					type: 'marker'
				},
				{
					model: 'blu700Pen',
					class: 'pen-blue-a700',
					title: 'Blue a700 pen',
					color: 'var(--ck-highlight-marker-blue-a700)',
					type: 'pen'
				},
			
				{
					model: 'lighlueMarker',
					class: 'marker-light-blue',
					title: 'Light blue marker',
					color: 'var(--ck-highlight-marker-light-blue)',
					type: 'marker'
				},
				{
					model: 'lighluePen',
					class: 'pen-light-blue',
					title: 'Light blue pen',
					color: 'var(--ck-highlight-marker-light-blue)',
					type: 'pen'
				},
			
				{
					model: 'lighlu0Marker',
					class: 'marker-light-blue-50',
					title: 'Light blue 50 marker',
					color: 'var(--ck-highlight-marker-light-blue-50)',
					type: 'marker'
				},
				{
					model: 'lighlu0Pen',
					class: 'pen-light-blue-50',
					title: 'Light blue 50 pen',
					color: 'var(--ck-highlight-marker-light-blue-50)',
					type: 'pen'
				},
			
				{
					model: 'lighlu00Marker',
					class: 'marker-light-blue-100',
					title: 'Light blue 100 marker',
					color: 'var(--ck-highlight-marker-light-blue-100)',
					type: 'marker'
				},
				{
					model: 'lighlu00Pen',
					class: 'pen-light-blue-100',
					title: 'Light blue 100 pen',
					color: 'var(--ck-highlight-marker-light-blue-100)',
					type: 'pen'
				},
			
				{
					model: 'lighlu00Marker',
					class: 'marker-light-blue-200',
					title: 'Light blue 200 marker',
					color: 'var(--ck-highlight-marker-light-blue-200)',
					type: 'marker'
				},
				{
					model: 'lighlu00Pen',
					class: 'pen-light-blue-200',
					title: 'Light blue 200 pen',
					color: 'var(--ck-highlight-marker-light-blue-200)',
					type: 'pen'
				},
			
				{
					model: 'lighlu00Marker',
					class: 'marker-light-blue-300',
					title: 'Light blue 300 marker',
					color: 'var(--ck-highlight-marker-light-blue-300)',
					type: 'marker'
				},
				{
					model: 'lighlu00Pen',
					class: 'pen-light-blue-300',
					title: 'Light blue 300 pen',
					color: 'var(--ck-highlight-marker-light-blue-300)',
					type: 'pen'
				},
			
				{
					model: 'lighlu00Marker',
					class: 'marker-light-blue-400',
					title: 'Light blue 400 marker',
					color: 'var(--ck-highlight-marker-light-blue-400)',
					type: 'marker'
				},
				{
					model: 'lighlu00Pen',
					class: 'pen-light-blue-400',
					title: 'Light blue 400 pen',
					color: 'var(--ck-highlight-marker-light-blue-400)',
					type: 'pen'
				},
			
				{
					model: 'lighlu00Marker',
					class: 'marker-light-blue-500',
					title: 'Light blue 500 marker',
					color: 'var(--ck-highlight-marker-light-blue-500)',
					type: 'marker'
				},
				{
					model: 'lighlu00Pen',
					class: 'pen-light-blue-500',
					title: 'Light blue 500 pen',
					color: 'var(--ck-highlight-marker-light-blue-500)',
					type: 'pen'
				},
			
				{
					model: 'lighlu00Marker',
					class: 'marker-light-blue-600',
					title: 'Light blue 600 marker',
					color: 'var(--ck-highlight-marker-light-blue-600)',
					type: 'marker'
				},
				{
					model: 'lighlu00Pen',
					class: 'pen-light-blue-600',
					title: 'Light blue 600 pen',
					color: 'var(--ck-highlight-marker-light-blue-600)',
					type: 'pen'
				},
			
				{
					model: 'lighlu00Marker',
					class: 'marker-light-blue-700',
					title: 'Light blue 700 marker',
					color: 'var(--ck-highlight-marker-light-blue-700)',
					type: 'marker'
				},
				{
					model: 'lighlu00Pen',
					class: 'pen-light-blue-700',
					title: 'Light blue 700 pen',
					color: 'var(--ck-highlight-marker-light-blue-700)',
					type: 'pen'
				},
			
				{
					model: 'lighlu00Marker',
					class: 'marker-light-blue-800',
					title: 'Light blue 800 marker',
					color: 'var(--ck-highlight-marker-light-blue-800)',
					type: 'marker'
				},
				{
					model: 'lighlu00Pen',
					class: 'pen-light-blue-800',
					title: 'Light blue 800 pen',
					color: 'var(--ck-highlight-marker-light-blue-800)',
					type: 'pen'
				},
			
				{
					model: 'lighlu00Marker',
					class: 'marker-light-blue-900',
					title: 'Light blue 900 marker',
					color: 'var(--ck-highlight-marker-light-blue-900)',
					type: 'marker'
				},
				{
					model: 'lighlu00Pen',
					class: 'pen-light-blue-900',
					title: 'Light blue 900 pen',
					color: 'var(--ck-highlight-marker-light-blue-900)',
					type: 'pen'
				},
			
				{
					model: 'lighlu100Marker',
					class: 'marker-light-blue-a100',
					title: 'Light blue a100 marker',
					color: 'var(--ck-highlight-marker-light-blue-a100)',
					type: 'marker'
				},
				{
					model: 'lighlu100Pen',
					class: 'pen-light-blue-a100',
					title: 'Light blue a100 pen',
					color: 'var(--ck-highlight-marker-light-blue-a100)',
					type: 'pen'
				},
			
				{
					model: 'lighlu200Marker',
					class: 'marker-light-blue-a200',
					title: 'Light blue a200 marker',
					color: 'var(--ck-highlight-marker-light-blue-a200)',
					type: 'marker'
				},
				{
					model: 'lighlu200Pen',
					class: 'pen-light-blue-a200',
					title: 'Light blue a200 pen',
					color: 'var(--ck-highlight-marker-light-blue-a200)',
					type: 'pen'
				},
			
				{
					model: 'lighlu400Marker',
					class: 'marker-light-blue-a400',
					title: 'Light blue a400 marker',
					color: 'var(--ck-highlight-marker-light-blue-a400)',
					type: 'marker'
				},
				{
					model: 'lighlu400Pen',
					class: 'pen-light-blue-a400',
					title: 'Light blue a400 pen',
					color: 'var(--ck-highlight-marker-light-blue-a400)',
					type: 'pen'
				},
			
				{
					model: 'lighlu700Marker',
					class: 'marker-light-blue-a700',
					title: 'Light blue a700 marker',
					color: 'var(--ck-highlight-marker-light-blue-a700)',
					type: 'marker'
				},
				{
					model: 'lighlu700Pen',
					class: 'pen-light-blue-a700',
					title: 'Light blue a700 pen',
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
					model: 'cya0Marker',
					class: 'marker-cyan-50',
					title: 'Cyan 50 marker',
					color: 'var(--ck-highlight-marker-cyan-50)',
					type: 'marker'
				},
				{
					model: 'cya0Pen',
					class: 'pen-cyan-50',
					title: 'Cyan 50 pen',
					color: 'var(--ck-highlight-marker-cyan-50)',
					type: 'pen'
				},
			
				{
					model: 'cya00Marker',
					class: 'marker-cyan-100',
					title: 'Cyan 100 marker',
					color: 'var(--ck-highlight-marker-cyan-100)',
					type: 'marker'
				},
				{
					model: 'cya00Pen',
					class: 'pen-cyan-100',
					title: 'Cyan 100 pen',
					color: 'var(--ck-highlight-marker-cyan-100)',
					type: 'pen'
				},
			
				{
					model: 'cya00Marker',
					class: 'marker-cyan-200',
					title: 'Cyan 200 marker',
					color: 'var(--ck-highlight-marker-cyan-200)',
					type: 'marker'
				},
				{
					model: 'cya00Pen',
					class: 'pen-cyan-200',
					title: 'Cyan 200 pen',
					color: 'var(--ck-highlight-marker-cyan-200)',
					type: 'pen'
				},
			
				{
					model: 'cya00Marker',
					class: 'marker-cyan-300',
					title: 'Cyan 300 marker',
					color: 'var(--ck-highlight-marker-cyan-300)',
					type: 'marker'
				},
				{
					model: 'cya00Pen',
					class: 'pen-cyan-300',
					title: 'Cyan 300 pen',
					color: 'var(--ck-highlight-marker-cyan-300)',
					type: 'pen'
				},
			
				{
					model: 'cya00Marker',
					class: 'marker-cyan-400',
					title: 'Cyan 400 marker',
					color: 'var(--ck-highlight-marker-cyan-400)',
					type: 'marker'
				},
				{
					model: 'cya00Pen',
					class: 'pen-cyan-400',
					title: 'Cyan 400 pen',
					color: 'var(--ck-highlight-marker-cyan-400)',
					type: 'pen'
				},
			
				{
					model: 'cya00Marker',
					class: 'marker-cyan-500',
					title: 'Cyan 500 marker',
					color: 'var(--ck-highlight-marker-cyan-500)',
					type: 'marker'
				},
				{
					model: 'cya00Pen',
					class: 'pen-cyan-500',
					title: 'Cyan 500 pen',
					color: 'var(--ck-highlight-marker-cyan-500)',
					type: 'pen'
				},
			
				{
					model: 'cya00Marker',
					class: 'marker-cyan-600',
					title: 'Cyan 600 marker',
					color: 'var(--ck-highlight-marker-cyan-600)',
					type: 'marker'
				},
				{
					model: 'cya00Pen',
					class: 'pen-cyan-600',
					title: 'Cyan 600 pen',
					color: 'var(--ck-highlight-marker-cyan-600)',
					type: 'pen'
				},
			
				{
					model: 'cya00Marker',
					class: 'marker-cyan-700',
					title: 'Cyan 700 marker',
					color: 'var(--ck-highlight-marker-cyan-700)',
					type: 'marker'
				},
				{
					model: 'cya00Pen',
					class: 'pen-cyan-700',
					title: 'Cyan 700 pen',
					color: 'var(--ck-highlight-marker-cyan-700)',
					type: 'pen'
				},
			
				{
					model: 'cya00Marker',
					class: 'marker-cyan-800',
					title: 'Cyan 800 marker',
					color: 'var(--ck-highlight-marker-cyan-800)',
					type: 'marker'
				},
				{
					model: 'cya00Pen',
					class: 'pen-cyan-800',
					title: 'Cyan 800 pen',
					color: 'var(--ck-highlight-marker-cyan-800)',
					type: 'pen'
				},
			
				{
					model: 'cya00Marker',
					class: 'marker-cyan-900',
					title: 'Cyan 900 marker',
					color: 'var(--ck-highlight-marker-cyan-900)',
					type: 'marker'
				},
				{
					model: 'cya00Pen',
					class: 'pen-cyan-900',
					title: 'Cyan 900 pen',
					color: 'var(--ck-highlight-marker-cyan-900)',
					type: 'pen'
				},
			
				{
					model: 'cya100Marker',
					class: 'marker-cyan-a100',
					title: 'Cyan a100 marker',
					color: 'var(--ck-highlight-marker-cyan-a100)',
					type: 'marker'
				},
				{
					model: 'cya100Pen',
					class: 'pen-cyan-a100',
					title: 'Cyan a100 pen',
					color: 'var(--ck-highlight-marker-cyan-a100)',
					type: 'pen'
				},
			
				{
					model: 'cya200Marker',
					class: 'marker-cyan-a200',
					title: 'Cyan a200 marker',
					color: 'var(--ck-highlight-marker-cyan-a200)',
					type: 'marker'
				},
				{
					model: 'cya200Pen',
					class: 'pen-cyan-a200',
					title: 'Cyan a200 pen',
					color: 'var(--ck-highlight-marker-cyan-a200)',
					type: 'pen'
				},
			
				{
					model: 'cya400Marker',
					class: 'marker-cyan-a400',
					title: 'Cyan a400 marker',
					color: 'var(--ck-highlight-marker-cyan-a400)',
					type: 'marker'
				},
				{
					model: 'cya400Pen',
					class: 'pen-cyan-a400',
					title: 'Cyan a400 pen',
					color: 'var(--ck-highlight-marker-cyan-a400)',
					type: 'pen'
				},
			
				{
					model: 'cya700Marker',
					class: 'marker-cyan-a700',
					title: 'Cyan a700 marker',
					color: 'var(--ck-highlight-marker-cyan-a700)',
					type: 'marker'
				},
				{
					model: 'cya700Pen',
					class: 'pen-cyan-a700',
					title: 'Cyan a700 pen',
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
					model: 'tea0Marker',
					class: 'marker-teal-50',
					title: 'Teal 50 marker',
					color: 'var(--ck-highlight-marker-teal-50)',
					type: 'marker'
				},
				{
					model: 'tea0Pen',
					class: 'pen-teal-50',
					title: 'Teal 50 pen',
					color: 'var(--ck-highlight-marker-teal-50)',
					type: 'pen'
				},
			
				{
					model: 'tea00Marker',
					class: 'marker-teal-100',
					title: 'Teal 100 marker',
					color: 'var(--ck-highlight-marker-teal-100)',
					type: 'marker'
				},
				{
					model: 'tea00Pen',
					class: 'pen-teal-100',
					title: 'Teal 100 pen',
					color: 'var(--ck-highlight-marker-teal-100)',
					type: 'pen'
				},
			
				{
					model: 'tea00Marker',
					class: 'marker-teal-200',
					title: 'Teal 200 marker',
					color: 'var(--ck-highlight-marker-teal-200)',
					type: 'marker'
				},
				{
					model: 'tea00Pen',
					class: 'pen-teal-200',
					title: 'Teal 200 pen',
					color: 'var(--ck-highlight-marker-teal-200)',
					type: 'pen'
				},
			
				{
					model: 'tea00Marker',
					class: 'marker-teal-300',
					title: 'Teal 300 marker',
					color: 'var(--ck-highlight-marker-teal-300)',
					type: 'marker'
				},
				{
					model: 'tea00Pen',
					class: 'pen-teal-300',
					title: 'Teal 300 pen',
					color: 'var(--ck-highlight-marker-teal-300)',
					type: 'pen'
				},
			
				{
					model: 'tea00Marker',
					class: 'marker-teal-400',
					title: 'Teal 400 marker',
					color: 'var(--ck-highlight-marker-teal-400)',
					type: 'marker'
				},
				{
					model: 'tea00Pen',
					class: 'pen-teal-400',
					title: 'Teal 400 pen',
					color: 'var(--ck-highlight-marker-teal-400)',
					type: 'pen'
				},
			
				{
					model: 'tea00Marker',
					class: 'marker-teal-500',
					title: 'Teal 500 marker',
					color: 'var(--ck-highlight-marker-teal-500)',
					type: 'marker'
				},
				{
					model: 'tea00Pen',
					class: 'pen-teal-500',
					title: 'Teal 500 pen',
					color: 'var(--ck-highlight-marker-teal-500)',
					type: 'pen'
				},
			
				{
					model: 'tea00Marker',
					class: 'marker-teal-600',
					title: 'Teal 600 marker',
					color: 'var(--ck-highlight-marker-teal-600)',
					type: 'marker'
				},
				{
					model: 'tea00Pen',
					class: 'pen-teal-600',
					title: 'Teal 600 pen',
					color: 'var(--ck-highlight-marker-teal-600)',
					type: 'pen'
				},
			
				{
					model: 'tea00Marker',
					class: 'marker-teal-700',
					title: 'Teal 700 marker',
					color: 'var(--ck-highlight-marker-teal-700)',
					type: 'marker'
				},
				{
					model: 'tea00Pen',
					class: 'pen-teal-700',
					title: 'Teal 700 pen',
					color: 'var(--ck-highlight-marker-teal-700)',
					type: 'pen'
				},
			
				{
					model: 'tea00Marker',
					class: 'marker-teal-800',
					title: 'Teal 800 marker',
					color: 'var(--ck-highlight-marker-teal-800)',
					type: 'marker'
				},
				{
					model: 'tea00Pen',
					class: 'pen-teal-800',
					title: 'Teal 800 pen',
					color: 'var(--ck-highlight-marker-teal-800)',
					type: 'pen'
				},
			
				{
					model: 'tea00Marker',
					class: 'marker-teal-900',
					title: 'Teal 900 marker',
					color: 'var(--ck-highlight-marker-teal-900)',
					type: 'marker'
				},
				{
					model: 'tea00Pen',
					class: 'pen-teal-900',
					title: 'Teal 900 pen',
					color: 'var(--ck-highlight-marker-teal-900)',
					type: 'pen'
				},
			
				{
					model: 'tea100Marker',
					class: 'marker-teal-a100',
					title: 'Teal a100 marker',
					color: 'var(--ck-highlight-marker-teal-a100)',
					type: 'marker'
				},
				{
					model: 'tea100Pen',
					class: 'pen-teal-a100',
					title: 'Teal a100 pen',
					color: 'var(--ck-highlight-marker-teal-a100)',
					type: 'pen'
				},
			
				{
					model: 'tea200Marker',
					class: 'marker-teal-a200',
					title: 'Teal a200 marker',
					color: 'var(--ck-highlight-marker-teal-a200)',
					type: 'marker'
				},
				{
					model: 'tea200Pen',
					class: 'pen-teal-a200',
					title: 'Teal a200 pen',
					color: 'var(--ck-highlight-marker-teal-a200)',
					type: 'pen'
				},
			
				{
					model: 'tea400Marker',
					class: 'marker-teal-a400',
					title: 'Teal a400 marker',
					color: 'var(--ck-highlight-marker-teal-a400)',
					type: 'marker'
				},
				{
					model: 'tea400Pen',
					class: 'pen-teal-a400',
					title: 'Teal a400 pen',
					color: 'var(--ck-highlight-marker-teal-a400)',
					type: 'pen'
				},
			
				{
					model: 'tea700Marker',
					class: 'marker-teal-a700',
					title: 'Teal a700 marker',
					color: 'var(--ck-highlight-marker-teal-a700)',
					type: 'marker'
				},
				{
					model: 'tea700Pen',
					class: 'pen-teal-a700',
					title: 'Teal a700 pen',
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
					model: 'gree0Marker',
					class: 'marker-green-50',
					title: 'Green 50 marker',
					color: 'var(--ck-highlight-marker-green-50)',
					type: 'marker'
				},
				{
					model: 'gree0Pen',
					class: 'pen-green-50',
					title: 'Green 50 pen',
					color: 'var(--ck-highlight-marker-green-50)',
					type: 'pen'
				},
			
				{
					model: 'gree00Marker',
					class: 'marker-green-100',
					title: 'Green 100 marker',
					color: 'var(--ck-highlight-marker-green-100)',
					type: 'marker'
				},
				{
					model: 'gree00Pen',
					class: 'pen-green-100',
					title: 'Green 100 pen',
					color: 'var(--ck-highlight-marker-green-100)',
					type: 'pen'
				},
			
				{
					model: 'gree00Marker',
					class: 'marker-green-200',
					title: 'Green 200 marker',
					color: 'var(--ck-highlight-marker-green-200)',
					type: 'marker'
				},
				{
					model: 'gree00Pen',
					class: 'pen-green-200',
					title: 'Green 200 pen',
					color: 'var(--ck-highlight-marker-green-200)',
					type: 'pen'
				},
			
				{
					model: 'gree00Marker',
					class: 'marker-green-300',
					title: 'Green 300 marker',
					color: 'var(--ck-highlight-marker-green-300)',
					type: 'marker'
				},
				{
					model: 'gree00Pen',
					class: 'pen-green-300',
					title: 'Green 300 pen',
					color: 'var(--ck-highlight-marker-green-300)',
					type: 'pen'
				},
			
				{
					model: 'gree00Marker',
					class: 'marker-green-400',
					title: 'Green 400 marker',
					color: 'var(--ck-highlight-marker-green-400)',
					type: 'marker'
				},
				{
					model: 'gree00Pen',
					class: 'pen-green-400',
					title: 'Green 400 pen',
					color: 'var(--ck-highlight-marker-green-400)',
					type: 'pen'
				},
			
				{
					model: 'gree00Marker',
					class: 'marker-green-500',
					title: 'Green 500 marker',
					color: 'var(--ck-highlight-marker-green-500)',
					type: 'marker'
				},
				{
					model: 'gree00Pen',
					class: 'pen-green-500',
					title: 'Green 500 pen',
					color: 'var(--ck-highlight-marker-green-500)',
					type: 'pen'
				},
			
				{
					model: 'gree00Marker',
					class: 'marker-green-600',
					title: 'Green 600 marker',
					color: 'var(--ck-highlight-marker-green-600)',
					type: 'marker'
				},
				{
					model: 'gree00Pen',
					class: 'pen-green-600',
					title: 'Green 600 pen',
					color: 'var(--ck-highlight-marker-green-600)',
					type: 'pen'
				},
			
				{
					model: 'gree00Marker',
					class: 'marker-green-700',
					title: 'Green 700 marker',
					color: 'var(--ck-highlight-marker-green-700)',
					type: 'marker'
				},
				{
					model: 'gree00Pen',
					class: 'pen-green-700',
					title: 'Green 700 pen',
					color: 'var(--ck-highlight-marker-green-700)',
					type: 'pen'
				},
			
				{
					model: 'gree00Marker',
					class: 'marker-green-800',
					title: 'Green 800 marker',
					color: 'var(--ck-highlight-marker-green-800)',
					type: 'marker'
				},
				{
					model: 'gree00Pen',
					class: 'pen-green-800',
					title: 'Green 800 pen',
					color: 'var(--ck-highlight-marker-green-800)',
					type: 'pen'
				},
			
				{
					model: 'gree00Marker',
					class: 'marker-green-900',
					title: 'Green 900 marker',
					color: 'var(--ck-highlight-marker-green-900)',
					type: 'marker'
				},
				{
					model: 'gree00Pen',
					class: 'pen-green-900',
					title: 'Green 900 pen',
					color: 'var(--ck-highlight-marker-green-900)',
					type: 'pen'
				},
			
				{
					model: 'gree100Marker',
					class: 'marker-green-a100',
					title: 'Green a100 marker',
					color: 'var(--ck-highlight-marker-green-a100)',
					type: 'marker'
				},
				{
					model: 'gree100Pen',
					class: 'pen-green-a100',
					title: 'Green a100 pen',
					color: 'var(--ck-highlight-marker-green-a100)',
					type: 'pen'
				},
			
				{
					model: 'gree200Marker',
					class: 'marker-green-a200',
					title: 'Green a200 marker',
					color: 'var(--ck-highlight-marker-green-a200)',
					type: 'marker'
				},
				{
					model: 'gree200Pen',
					class: 'pen-green-a200',
					title: 'Green a200 pen',
					color: 'var(--ck-highlight-marker-green-a200)',
					type: 'pen'
				},
			
				{
					model: 'gree400Marker',
					class: 'marker-green-a400',
					title: 'Green a400 marker',
					color: 'var(--ck-highlight-marker-green-a400)',
					type: 'marker'
				},
				{
					model: 'gree400Pen',
					class: 'pen-green-a400',
					title: 'Green a400 pen',
					color: 'var(--ck-highlight-marker-green-a400)',
					type: 'pen'
				},
			
				{
					model: 'gree700Marker',
					class: 'marker-green-a700',
					title: 'Green a700 marker',
					color: 'var(--ck-highlight-marker-green-a700)',
					type: 'marker'
				},
				{
					model: 'gree700Pen',
					class: 'pen-green-a700',
					title: 'Green a700 pen',
					color: 'var(--ck-highlight-marker-green-a700)',
					type: 'pen'
				},
			
				{
					model: 'lighreenMarker',
					class: 'marker-light-green',
					title: 'Light green marker',
					color: 'var(--ck-highlight-marker-light-green)',
					type: 'marker'
				},
				{
					model: 'lighreenPen',
					class: 'pen-light-green',
					title: 'Light green pen',
					color: 'var(--ck-highlight-marker-light-green)',
					type: 'pen'
				},
			
				{
					model: 'lighree0Marker',
					class: 'marker-light-green-50',
					title: 'Light green 50 marker',
					color: 'var(--ck-highlight-marker-light-green-50)',
					type: 'marker'
				},
				{
					model: 'lighree0Pen',
					class: 'pen-light-green-50',
					title: 'Light green 50 pen',
					color: 'var(--ck-highlight-marker-light-green-50)',
					type: 'pen'
				},
			
				{
					model: 'lighree00Marker',
					class: 'marker-light-green-100',
					title: 'Light green 100 marker',
					color: 'var(--ck-highlight-marker-light-green-100)',
					type: 'marker'
				},
				{
					model: 'lighree00Pen',
					class: 'pen-light-green-100',
					title: 'Light green 100 pen',
					color: 'var(--ck-highlight-marker-light-green-100)',
					type: 'pen'
				},
			
				{
					model: 'lighree00Marker',
					class: 'marker-light-green-200',
					title: 'Light green 200 marker',
					color: 'var(--ck-highlight-marker-light-green-200)',
					type: 'marker'
				},
				{
					model: 'lighree00Pen',
					class: 'pen-light-green-200',
					title: 'Light green 200 pen',
					color: 'var(--ck-highlight-marker-light-green-200)',
					type: 'pen'
				},
			
				{
					model: 'lighree00Marker',
					class: 'marker-light-green-300',
					title: 'Light green 300 marker',
					color: 'var(--ck-highlight-marker-light-green-300)',
					type: 'marker'
				},
				{
					model: 'lighree00Pen',
					class: 'pen-light-green-300',
					title: 'Light green 300 pen',
					color: 'var(--ck-highlight-marker-light-green-300)',
					type: 'pen'
				},
			
				{
					model: 'lighree00Marker',
					class: 'marker-light-green-400',
					title: 'Light green 400 marker',
					color: 'var(--ck-highlight-marker-light-green-400)',
					type: 'marker'
				},
				{
					model: 'lighree00Pen',
					class: 'pen-light-green-400',
					title: 'Light green 400 pen',
					color: 'var(--ck-highlight-marker-light-green-400)',
					type: 'pen'
				},
			
				{
					model: 'lighree00Marker',
					class: 'marker-light-green-500',
					title: 'Light green 500 marker',
					color: 'var(--ck-highlight-marker-light-green-500)',
					type: 'marker'
				},
				{
					model: 'lighree00Pen',
					class: 'pen-light-green-500',
					title: 'Light green 500 pen',
					color: 'var(--ck-highlight-marker-light-green-500)',
					type: 'pen'
				},
			
				{
					model: 'lighree00Marker',
					class: 'marker-light-green-600',
					title: 'Light green 600 marker',
					color: 'var(--ck-highlight-marker-light-green-600)',
					type: 'marker'
				},
				{
					model: 'lighree00Pen',
					class: 'pen-light-green-600',
					title: 'Light green 600 pen',
					color: 'var(--ck-highlight-marker-light-green-600)',
					type: 'pen'
				},
			
				{
					model: 'lighree00Marker',
					class: 'marker-light-green-700',
					title: 'Light green 700 marker',
					color: 'var(--ck-highlight-marker-light-green-700)',
					type: 'marker'
				},
				{
					model: 'lighree00Pen',
					class: 'pen-light-green-700',
					title: 'Light green 700 pen',
					color: 'var(--ck-highlight-marker-light-green-700)',
					type: 'pen'
				},
			
				{
					model: 'lighree00Marker',
					class: 'marker-light-green-800',
					title: 'Light green 800 marker',
					color: 'var(--ck-highlight-marker-light-green-800)',
					type: 'marker'
				},
				{
					model: 'lighree00Pen',
					class: 'pen-light-green-800',
					title: 'Light green 800 pen',
					color: 'var(--ck-highlight-marker-light-green-800)',
					type: 'pen'
				},
			
				{
					model: 'lighree00Marker',
					class: 'marker-light-green-900',
					title: 'Light green 900 marker',
					color: 'var(--ck-highlight-marker-light-green-900)',
					type: 'marker'
				},
				{
					model: 'lighree00Pen',
					class: 'pen-light-green-900',
					title: 'Light green 900 pen',
					color: 'var(--ck-highlight-marker-light-green-900)',
					type: 'pen'
				},
			
				{
					model: 'lighree100Marker',
					class: 'marker-light-green-a100',
					title: 'Light green a100 marker',
					color: 'var(--ck-highlight-marker-light-green-a100)',
					type: 'marker'
				},
				{
					model: 'lighree100Pen',
					class: 'pen-light-green-a100',
					title: 'Light green a100 pen',
					color: 'var(--ck-highlight-marker-light-green-a100)',
					type: 'pen'
				},
			
				{
					model: 'lighree200Marker',
					class: 'marker-light-green-a200',
					title: 'Light green a200 marker',
					color: 'var(--ck-highlight-marker-light-green-a200)',
					type: 'marker'
				},
				{
					model: 'lighree200Pen',
					class: 'pen-light-green-a200',
					title: 'Light green a200 pen',
					color: 'var(--ck-highlight-marker-light-green-a200)',
					type: 'pen'
				},
			
				{
					model: 'lighree400Marker',
					class: 'marker-light-green-a400',
					title: 'Light green a400 marker',
					color: 'var(--ck-highlight-marker-light-green-a400)',
					type: 'marker'
				},
				{
					model: 'lighree400Pen',
					class: 'pen-light-green-a400',
					title: 'Light green a400 pen',
					color: 'var(--ck-highlight-marker-light-green-a400)',
					type: 'pen'
				},
			
				{
					model: 'lighree700Marker',
					class: 'marker-light-green-a700',
					title: 'Light green a700 marker',
					color: 'var(--ck-highlight-marker-light-green-a700)',
					type: 'marker'
				},
				{
					model: 'lighree700Pen',
					class: 'pen-light-green-a700',
					title: 'Light green a700 pen',
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
					model: 'lim0Marker',
					class: 'marker-lime-50',
					title: 'Lime 50 marker',
					color: 'var(--ck-highlight-marker-lime-50)',
					type: 'marker'
				},
				{
					model: 'lim0Pen',
					class: 'pen-lime-50',
					title: 'Lime 50 pen',
					color: 'var(--ck-highlight-marker-lime-50)',
					type: 'pen'
				},
			
				{
					model: 'lim00Marker',
					class: 'marker-lime-100',
					title: 'Lime 100 marker',
					color: 'var(--ck-highlight-marker-lime-100)',
					type: 'marker'
				},
				{
					model: 'lim00Pen',
					class: 'pen-lime-100',
					title: 'Lime 100 pen',
					color: 'var(--ck-highlight-marker-lime-100)',
					type: 'pen'
				},
			
				{
					model: 'lim00Marker',
					class: 'marker-lime-200',
					title: 'Lime 200 marker',
					color: 'var(--ck-highlight-marker-lime-200)',
					type: 'marker'
				},
				{
					model: 'lim00Pen',
					class: 'pen-lime-200',
					title: 'Lime 200 pen',
					color: 'var(--ck-highlight-marker-lime-200)',
					type: 'pen'
				},
			
				{
					model: 'lim00Marker',
					class: 'marker-lime-300',
					title: 'Lime 300 marker',
					color: 'var(--ck-highlight-marker-lime-300)',
					type: 'marker'
				},
				{
					model: 'lim00Pen',
					class: 'pen-lime-300',
					title: 'Lime 300 pen',
					color: 'var(--ck-highlight-marker-lime-300)',
					type: 'pen'
				},
			
				{
					model: 'lim00Marker',
					class: 'marker-lime-400',
					title: 'Lime 400 marker',
					color: 'var(--ck-highlight-marker-lime-400)',
					type: 'marker'
				},
				{
					model: 'lim00Pen',
					class: 'pen-lime-400',
					title: 'Lime 400 pen',
					color: 'var(--ck-highlight-marker-lime-400)',
					type: 'pen'
				},
			
				{
					model: 'lim00Marker',
					class: 'marker-lime-500',
					title: 'Lime 500 marker',
					color: 'var(--ck-highlight-marker-lime-500)',
					type: 'marker'
				},
				{
					model: 'lim00Pen',
					class: 'pen-lime-500',
					title: 'Lime 500 pen',
					color: 'var(--ck-highlight-marker-lime-500)',
					type: 'pen'
				},
			
				{
					model: 'lim00Marker',
					class: 'marker-lime-600',
					title: 'Lime 600 marker',
					color: 'var(--ck-highlight-marker-lime-600)',
					type: 'marker'
				},
				{
					model: 'lim00Pen',
					class: 'pen-lime-600',
					title: 'Lime 600 pen',
					color: 'var(--ck-highlight-marker-lime-600)',
					type: 'pen'
				},
			
				{
					model: 'lim00Marker',
					class: 'marker-lime-700',
					title: 'Lime 700 marker',
					color: 'var(--ck-highlight-marker-lime-700)',
					type: 'marker'
				},
				{
					model: 'lim00Pen',
					class: 'pen-lime-700',
					title: 'Lime 700 pen',
					color: 'var(--ck-highlight-marker-lime-700)',
					type: 'pen'
				},
			
				{
					model: 'lim00Marker',
					class: 'marker-lime-800',
					title: 'Lime 800 marker',
					color: 'var(--ck-highlight-marker-lime-800)',
					type: 'marker'
				},
				{
					model: 'lim00Pen',
					class: 'pen-lime-800',
					title: 'Lime 800 pen',
					color: 'var(--ck-highlight-marker-lime-800)',
					type: 'pen'
				},
			
				{
					model: 'lim00Marker',
					class: 'marker-lime-900',
					title: 'Lime 900 marker',
					color: 'var(--ck-highlight-marker-lime-900)',
					type: 'marker'
				},
				{
					model: 'lim00Pen',
					class: 'pen-lime-900',
					title: 'Lime 900 pen',
					color: 'var(--ck-highlight-marker-lime-900)',
					type: 'pen'
				},
			
				{
					model: 'lim100Marker',
					class: 'marker-lime-a100',
					title: 'Lime a100 marker',
					color: 'var(--ck-highlight-marker-lime-a100)',
					type: 'marker'
				},
				{
					model: 'lim100Pen',
					class: 'pen-lime-a100',
					title: 'Lime a100 pen',
					color: 'var(--ck-highlight-marker-lime-a100)',
					type: 'pen'
				},
			
				{
					model: 'lim200Marker',
					class: 'marker-lime-a200',
					title: 'Lime a200 marker',
					color: 'var(--ck-highlight-marker-lime-a200)',
					type: 'marker'
				},
				{
					model: 'lim200Pen',
					class: 'pen-lime-a200',
					title: 'Lime a200 pen',
					color: 'var(--ck-highlight-marker-lime-a200)',
					type: 'pen'
				},
			
				{
					model: 'lim400Marker',
					class: 'marker-lime-a400',
					title: 'Lime a400 marker',
					color: 'var(--ck-highlight-marker-lime-a400)',
					type: 'marker'
				},
				{
					model: 'lim400Pen',
					class: 'pen-lime-a400',
					title: 'Lime a400 pen',
					color: 'var(--ck-highlight-marker-lime-a400)',
					type: 'pen'
				},
			
				{
					model: 'lim700Marker',
					class: 'marker-lime-a700',
					title: 'Lime a700 marker',
					color: 'var(--ck-highlight-marker-lime-a700)',
					type: 'marker'
				},
				{
					model: 'lim700Pen',
					class: 'pen-lime-a700',
					title: 'Lime a700 pen',
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
					model: 'yello0Marker',
					class: 'marker-yellow-50',
					title: 'Yellow 50 marker',
					color: 'var(--ck-highlight-marker-yellow-50)',
					type: 'marker'
				},
				{
					model: 'yello0Pen',
					class: 'pen-yellow-50',
					title: 'Yellow 50 pen',
					color: 'var(--ck-highlight-marker-yellow-50)',
					type: 'pen'
				},
			
				{
					model: 'yello00Marker',
					class: 'marker-yellow-100',
					title: 'Yellow 100 marker',
					color: 'var(--ck-highlight-marker-yellow-100)',
					type: 'marker'
				},
				{
					model: 'yello00Pen',
					class: 'pen-yellow-100',
					title: 'Yellow 100 pen',
					color: 'var(--ck-highlight-marker-yellow-100)',
					type: 'pen'
				},
			
				{
					model: 'yello00Marker',
					class: 'marker-yellow-200',
					title: 'Yellow 200 marker',
					color: 'var(--ck-highlight-marker-yellow-200)',
					type: 'marker'
				},
				{
					model: 'yello00Pen',
					class: 'pen-yellow-200',
					title: 'Yellow 200 pen',
					color: 'var(--ck-highlight-marker-yellow-200)',
					type: 'pen'
				},
			
				{
					model: 'yello00Marker',
					class: 'marker-yellow-300',
					title: 'Yellow 300 marker',
					color: 'var(--ck-highlight-marker-yellow-300)',
					type: 'marker'
				},
				{
					model: 'yello00Pen',
					class: 'pen-yellow-300',
					title: 'Yellow 300 pen',
					color: 'var(--ck-highlight-marker-yellow-300)',
					type: 'pen'
				},
			
				{
					model: 'yello00Marker',
					class: 'marker-yellow-400',
					title: 'Yellow 400 marker',
					color: 'var(--ck-highlight-marker-yellow-400)',
					type: 'marker'
				},
				{
					model: 'yello00Pen',
					class: 'pen-yellow-400',
					title: 'Yellow 400 pen',
					color: 'var(--ck-highlight-marker-yellow-400)',
					type: 'pen'
				},
			
				{
					model: 'yello00Marker',
					class: 'marker-yellow-500',
					title: 'Yellow 500 marker',
					color: 'var(--ck-highlight-marker-yellow-500)',
					type: 'marker'
				},
				{
					model: 'yello00Pen',
					class: 'pen-yellow-500',
					title: 'Yellow 500 pen',
					color: 'var(--ck-highlight-marker-yellow-500)',
					type: 'pen'
				},
			
				{
					model: 'yello00Marker',
					class: 'marker-yellow-600',
					title: 'Yellow 600 marker',
					color: 'var(--ck-highlight-marker-yellow-600)',
					type: 'marker'
				},
				{
					model: 'yello00Pen',
					class: 'pen-yellow-600',
					title: 'Yellow 600 pen',
					color: 'var(--ck-highlight-marker-yellow-600)',
					type: 'pen'
				},
			
				{
					model: 'yello00Marker',
					class: 'marker-yellow-700',
					title: 'Yellow 700 marker',
					color: 'var(--ck-highlight-marker-yellow-700)',
					type: 'marker'
				},
				{
					model: 'yello00Pen',
					class: 'pen-yellow-700',
					title: 'Yellow 700 pen',
					color: 'var(--ck-highlight-marker-yellow-700)',
					type: 'pen'
				},
			
				{
					model: 'yello00Marker',
					class: 'marker-yellow-800',
					title: 'Yellow 800 marker',
					color: 'var(--ck-highlight-marker-yellow-800)',
					type: 'marker'
				},
				{
					model: 'yello00Pen',
					class: 'pen-yellow-800',
					title: 'Yellow 800 pen',
					color: 'var(--ck-highlight-marker-yellow-800)',
					type: 'pen'
				},
			
				{
					model: 'yello00Marker',
					class: 'marker-yellow-900',
					title: 'Yellow 900 marker',
					color: 'var(--ck-highlight-marker-yellow-900)',
					type: 'marker'
				},
				{
					model: 'yello00Pen',
					class: 'pen-yellow-900',
					title: 'Yellow 900 pen',
					color: 'var(--ck-highlight-marker-yellow-900)',
					type: 'pen'
				},
			
				{
					model: 'yello100Marker',
					class: 'marker-yellow-a100',
					title: 'Yellow a100 marker',
					color: 'var(--ck-highlight-marker-yellow-a100)',
					type: 'marker'
				},
				{
					model: 'yello100Pen',
					class: 'pen-yellow-a100',
					title: 'Yellow a100 pen',
					color: 'var(--ck-highlight-marker-yellow-a100)',
					type: 'pen'
				},
			
				{
					model: 'yello200Marker',
					class: 'marker-yellow-a200',
					title: 'Yellow a200 marker',
					color: 'var(--ck-highlight-marker-yellow-a200)',
					type: 'marker'
				},
				{
					model: 'yello200Pen',
					class: 'pen-yellow-a200',
					title: 'Yellow a200 pen',
					color: 'var(--ck-highlight-marker-yellow-a200)',
					type: 'pen'
				},
			
				{
					model: 'yello400Marker',
					class: 'marker-yellow-a400',
					title: 'Yellow a400 marker',
					color: 'var(--ck-highlight-marker-yellow-a400)',
					type: 'marker'
				},
				{
					model: 'yello400Pen',
					class: 'pen-yellow-a400',
					title: 'Yellow a400 pen',
					color: 'var(--ck-highlight-marker-yellow-a400)',
					type: 'pen'
				},
			
				{
					model: 'yello700Marker',
					class: 'marker-yellow-a700',
					title: 'Yellow a700 marker',
					color: 'var(--ck-highlight-marker-yellow-a700)',
					type: 'marker'
				},
				{
					model: 'yello700Pen',
					class: 'pen-yellow-a700',
					title: 'Yellow a700 pen',
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
					model: 'ambe0Marker',
					class: 'marker-amber-50',
					title: 'Amber 50 marker',
					color: 'var(--ck-highlight-marker-amber-50)',
					type: 'marker'
				},
				{
					model: 'ambe0Pen',
					class: 'pen-amber-50',
					title: 'Amber 50 pen',
					color: 'var(--ck-highlight-marker-amber-50)',
					type: 'pen'
				},
			
				{
					model: 'ambe00Marker',
					class: 'marker-amber-100',
					title: 'Amber 100 marker',
					color: 'var(--ck-highlight-marker-amber-100)',
					type: 'marker'
				},
				{
					model: 'ambe00Pen',
					class: 'pen-amber-100',
					title: 'Amber 100 pen',
					color: 'var(--ck-highlight-marker-amber-100)',
					type: 'pen'
				},
			
				{
					model: 'ambe00Marker',
					class: 'marker-amber-200',
					title: 'Amber 200 marker',
					color: 'var(--ck-highlight-marker-amber-200)',
					type: 'marker'
				},
				{
					model: 'ambe00Pen',
					class: 'pen-amber-200',
					title: 'Amber 200 pen',
					color: 'var(--ck-highlight-marker-amber-200)',
					type: 'pen'
				},
			
				{
					model: 'ambe00Marker',
					class: 'marker-amber-300',
					title: 'Amber 300 marker',
					color: 'var(--ck-highlight-marker-amber-300)',
					type: 'marker'
				},
				{
					model: 'ambe00Pen',
					class: 'pen-amber-300',
					title: 'Amber 300 pen',
					color: 'var(--ck-highlight-marker-amber-300)',
					type: 'pen'
				},
			
				{
					model: 'ambe00Marker',
					class: 'marker-amber-400',
					title: 'Amber 400 marker',
					color: 'var(--ck-highlight-marker-amber-400)',
					type: 'marker'
				},
				{
					model: 'ambe00Pen',
					class: 'pen-amber-400',
					title: 'Amber 400 pen',
					color: 'var(--ck-highlight-marker-amber-400)',
					type: 'pen'
				},
			
				{
					model: 'ambe00Marker',
					class: 'marker-amber-500',
					title: 'Amber 500 marker',
					color: 'var(--ck-highlight-marker-amber-500)',
					type: 'marker'
				},
				{
					model: 'ambe00Pen',
					class: 'pen-amber-500',
					title: 'Amber 500 pen',
					color: 'var(--ck-highlight-marker-amber-500)',
					type: 'pen'
				},
			
				{
					model: 'ambe00Marker',
					class: 'marker-amber-600',
					title: 'Amber 600 marker',
					color: 'var(--ck-highlight-marker-amber-600)',
					type: 'marker'
				},
				{
					model: 'ambe00Pen',
					class: 'pen-amber-600',
					title: 'Amber 600 pen',
					color: 'var(--ck-highlight-marker-amber-600)',
					type: 'pen'
				},
			
				{
					model: 'ambe00Marker',
					class: 'marker-amber-700',
					title: 'Amber 700 marker',
					color: 'var(--ck-highlight-marker-amber-700)',
					type: 'marker'
				},
				{
					model: 'ambe00Pen',
					class: 'pen-amber-700',
					title: 'Amber 700 pen',
					color: 'var(--ck-highlight-marker-amber-700)',
					type: 'pen'
				},
			
				{
					model: 'ambe00Marker',
					class: 'marker-amber-800',
					title: 'Amber 800 marker',
					color: 'var(--ck-highlight-marker-amber-800)',
					type: 'marker'
				},
				{
					model: 'ambe00Pen',
					class: 'pen-amber-800',
					title: 'Amber 800 pen',
					color: 'var(--ck-highlight-marker-amber-800)',
					type: 'pen'
				},
			
				{
					model: 'ambe00Marker',
					class: 'marker-amber-900',
					title: 'Amber 900 marker',
					color: 'var(--ck-highlight-marker-amber-900)',
					type: 'marker'
				},
				{
					model: 'ambe00Pen',
					class: 'pen-amber-900',
					title: 'Amber 900 pen',
					color: 'var(--ck-highlight-marker-amber-900)',
					type: 'pen'
				},
			
				{
					model: 'ambe100Marker',
					class: 'marker-amber-a100',
					title: 'Amber a100 marker',
					color: 'var(--ck-highlight-marker-amber-a100)',
					type: 'marker'
				},
				{
					model: 'ambe100Pen',
					class: 'pen-amber-a100',
					title: 'Amber a100 pen',
					color: 'var(--ck-highlight-marker-amber-a100)',
					type: 'pen'
				},
			
				{
					model: 'ambe200Marker',
					class: 'marker-amber-a200',
					title: 'Amber a200 marker',
					color: 'var(--ck-highlight-marker-amber-a200)',
					type: 'marker'
				},
				{
					model: 'ambe200Pen',
					class: 'pen-amber-a200',
					title: 'Amber a200 pen',
					color: 'var(--ck-highlight-marker-amber-a200)',
					type: 'pen'
				},
			
				{
					model: 'ambe400Marker',
					class: 'marker-amber-a400',
					title: 'Amber a400 marker',
					color: 'var(--ck-highlight-marker-amber-a400)',
					type: 'marker'
				},
				{
					model: 'ambe400Pen',
					class: 'pen-amber-a400',
					title: 'Amber a400 pen',
					color: 'var(--ck-highlight-marker-amber-a400)',
					type: 'pen'
				},
			
				{
					model: 'ambe700Marker',
					class: 'marker-amber-a700',
					title: 'Amber a700 marker',
					color: 'var(--ck-highlight-marker-amber-a700)',
					type: 'marker'
				},
				{
					model: 'ambe700Pen',
					class: 'pen-amber-a700',
					title: 'Amber a700 pen',
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
					model: 'orang0Marker',
					class: 'marker-orange-50',
					title: 'Orange 50 marker',
					color: 'var(--ck-highlight-marker-orange-50)',
					type: 'marker'
				},
				{
					model: 'orang0Pen',
					class: 'pen-orange-50',
					title: 'Orange 50 pen',
					color: 'var(--ck-highlight-marker-orange-50)',
					type: 'pen'
				},
			
				{
					model: 'orang00Marker',
					class: 'marker-orange-100',
					title: 'Orange 100 marker',
					color: 'var(--ck-highlight-marker-orange-100)',
					type: 'marker'
				},
				{
					model: 'orang00Pen',
					class: 'pen-orange-100',
					title: 'Orange 100 pen',
					color: 'var(--ck-highlight-marker-orange-100)',
					type: 'pen'
				},
			
				{
					model: 'orang00Marker',
					class: 'marker-orange-200',
					title: 'Orange 200 marker',
					color: 'var(--ck-highlight-marker-orange-200)',
					type: 'marker'
				},
				{
					model: 'orang00Pen',
					class: 'pen-orange-200',
					title: 'Orange 200 pen',
					color: 'var(--ck-highlight-marker-orange-200)',
					type: 'pen'
				},
			
				{
					model: 'orang00Marker',
					class: 'marker-orange-300',
					title: 'Orange 300 marker',
					color: 'var(--ck-highlight-marker-orange-300)',
					type: 'marker'
				},
				{
					model: 'orang00Pen',
					class: 'pen-orange-300',
					title: 'Orange 300 pen',
					color: 'var(--ck-highlight-marker-orange-300)',
					type: 'pen'
				},
			
				{
					model: 'orang00Marker',
					class: 'marker-orange-400',
					title: 'Orange 400 marker',
					color: 'var(--ck-highlight-marker-orange-400)',
					type: 'marker'
				},
				{
					model: 'orang00Pen',
					class: 'pen-orange-400',
					title: 'Orange 400 pen',
					color: 'var(--ck-highlight-marker-orange-400)',
					type: 'pen'
				},
			
				{
					model: 'orang00Marker',
					class: 'marker-orange-500',
					title: 'Orange 500 marker',
					color: 'var(--ck-highlight-marker-orange-500)',
					type: 'marker'
				},
				{
					model: 'orang00Pen',
					class: 'pen-orange-500',
					title: 'Orange 500 pen',
					color: 'var(--ck-highlight-marker-orange-500)',
					type: 'pen'
				},
			
				{
					model: 'orang00Marker',
					class: 'marker-orange-600',
					title: 'Orange 600 marker',
					color: 'var(--ck-highlight-marker-orange-600)',
					type: 'marker'
				},
				{
					model: 'orang00Pen',
					class: 'pen-orange-600',
					title: 'Orange 600 pen',
					color: 'var(--ck-highlight-marker-orange-600)',
					type: 'pen'
				},
			
				{
					model: 'orang00Marker',
					class: 'marker-orange-700',
					title: 'Orange 700 marker',
					color: 'var(--ck-highlight-marker-orange-700)',
					type: 'marker'
				},
				{
					model: 'orang00Pen',
					class: 'pen-orange-700',
					title: 'Orange 700 pen',
					color: 'var(--ck-highlight-marker-orange-700)',
					type: 'pen'
				},
			
				{
					model: 'orang00Marker',
					class: 'marker-orange-800',
					title: 'Orange 800 marker',
					color: 'var(--ck-highlight-marker-orange-800)',
					type: 'marker'
				},
				{
					model: 'orang00Pen',
					class: 'pen-orange-800',
					title: 'Orange 800 pen',
					color: 'var(--ck-highlight-marker-orange-800)',
					type: 'pen'
				},
			
				{
					model: 'orang00Marker',
					class: 'marker-orange-900',
					title: 'Orange 900 marker',
					color: 'var(--ck-highlight-marker-orange-900)',
					type: 'marker'
				},
				{
					model: 'orang00Pen',
					class: 'pen-orange-900',
					title: 'Orange 900 pen',
					color: 'var(--ck-highlight-marker-orange-900)',
					type: 'pen'
				},
			
				{
					model: 'orang100Marker',
					class: 'marker-orange-a100',
					title: 'Orange a100 marker',
					color: 'var(--ck-highlight-marker-orange-a100)',
					type: 'marker'
				},
				{
					model: 'orang100Pen',
					class: 'pen-orange-a100',
					title: 'Orange a100 pen',
					color: 'var(--ck-highlight-marker-orange-a100)',
					type: 'pen'
				},
			
				{
					model: 'orang200Marker',
					class: 'marker-orange-a200',
					title: 'Orange a200 marker',
					color: 'var(--ck-highlight-marker-orange-a200)',
					type: 'marker'
				},
				{
					model: 'orang200Pen',
					class: 'pen-orange-a200',
					title: 'Orange a200 pen',
					color: 'var(--ck-highlight-marker-orange-a200)',
					type: 'pen'
				},
			
				{
					model: 'orang400Marker',
					class: 'marker-orange-a400',
					title: 'Orange a400 marker',
					color: 'var(--ck-highlight-marker-orange-a400)',
					type: 'marker'
				},
				{
					model: 'orang400Pen',
					class: 'pen-orange-a400',
					title: 'Orange a400 pen',
					color: 'var(--ck-highlight-marker-orange-a400)',
					type: 'pen'
				},
			
				{
					model: 'orang700Marker',
					class: 'marker-orange-a700',
					title: 'Orange a700 marker',
					color: 'var(--ck-highlight-marker-orange-a700)',
					type: 'marker'
				},
				{
					model: 'orang700Pen',
					class: 'pen-orange-a700',
					title: 'Orange a700 pen',
					color: 'var(--ck-highlight-marker-orange-a700)',
					type: 'pen'
				},
			
				{
					model: 'deerangeMarker',
					class: 'marker-deep-orange',
					title: 'Deep orange marker',
					color: 'var(--ck-highlight-marker-deep-orange)',
					type: 'marker'
				},
				{
					model: 'deerangePen',
					class: 'pen-deep-orange',
					title: 'Deep orange pen',
					color: 'var(--ck-highlight-marker-deep-orange)',
					type: 'pen'
				},
			
				{
					model: 'deerang0Marker',
					class: 'marker-deep-orange-50',
					title: 'Deep orange 50 marker',
					color: 'var(--ck-highlight-marker-deep-orange-50)',
					type: 'marker'
				},
				{
					model: 'deerang0Pen',
					class: 'pen-deep-orange-50',
					title: 'Deep orange 50 pen',
					color: 'var(--ck-highlight-marker-deep-orange-50)',
					type: 'pen'
				},
			
				{
					model: 'deerang00Marker',
					class: 'marker-deep-orange-100',
					title: 'Deep orange 100 marker',
					color: 'var(--ck-highlight-marker-deep-orange-100)',
					type: 'marker'
				},
				{
					model: 'deerang00Pen',
					class: 'pen-deep-orange-100',
					title: 'Deep orange 100 pen',
					color: 'var(--ck-highlight-marker-deep-orange-100)',
					type: 'pen'
				},
			
				{
					model: 'deerang00Marker',
					class: 'marker-deep-orange-200',
					title: 'Deep orange 200 marker',
					color: 'var(--ck-highlight-marker-deep-orange-200)',
					type: 'marker'
				},
				{
					model: 'deerang00Pen',
					class: 'pen-deep-orange-200',
					title: 'Deep orange 200 pen',
					color: 'var(--ck-highlight-marker-deep-orange-200)',
					type: 'pen'
				},
			
				{
					model: 'deerang00Marker',
					class: 'marker-deep-orange-300',
					title: 'Deep orange 300 marker',
					color: 'var(--ck-highlight-marker-deep-orange-300)',
					type: 'marker'
				},
				{
					model: 'deerang00Pen',
					class: 'pen-deep-orange-300',
					title: 'Deep orange 300 pen',
					color: 'var(--ck-highlight-marker-deep-orange-300)',
					type: 'pen'
				},
			
				{
					model: 'deerang00Marker',
					class: 'marker-deep-orange-400',
					title: 'Deep orange 400 marker',
					color: 'var(--ck-highlight-marker-deep-orange-400)',
					type: 'marker'
				},
				{
					model: 'deerang00Pen',
					class: 'pen-deep-orange-400',
					title: 'Deep orange 400 pen',
					color: 'var(--ck-highlight-marker-deep-orange-400)',
					type: 'pen'
				},
			
				{
					model: 'deerang00Marker',
					class: 'marker-deep-orange-500',
					title: 'Deep orange 500 marker',
					color: 'var(--ck-highlight-marker-deep-orange-500)',
					type: 'marker'
				},
				{
					model: 'deerang00Pen',
					class: 'pen-deep-orange-500',
					title: 'Deep orange 500 pen',
					color: 'var(--ck-highlight-marker-deep-orange-500)',
					type: 'pen'
				},
			
				{
					model: 'deerang00Marker',
					class: 'marker-deep-orange-600',
					title: 'Deep orange 600 marker',
					color: 'var(--ck-highlight-marker-deep-orange-600)',
					type: 'marker'
				},
				{
					model: 'deerang00Pen',
					class: 'pen-deep-orange-600',
					title: 'Deep orange 600 pen',
					color: 'var(--ck-highlight-marker-deep-orange-600)',
					type: 'pen'
				},
			
				{
					model: 'deerang00Marker',
					class: 'marker-deep-orange-700',
					title: 'Deep orange 700 marker',
					color: 'var(--ck-highlight-marker-deep-orange-700)',
					type: 'marker'
				},
				{
					model: 'deerang00Pen',
					class: 'pen-deep-orange-700',
					title: 'Deep orange 700 pen',
					color: 'var(--ck-highlight-marker-deep-orange-700)',
					type: 'pen'
				},
			
				{
					model: 'deerang00Marker',
					class: 'marker-deep-orange-800',
					title: 'Deep orange 800 marker',
					color: 'var(--ck-highlight-marker-deep-orange-800)',
					type: 'marker'
				},
				{
					model: 'deerang00Pen',
					class: 'pen-deep-orange-800',
					title: 'Deep orange 800 pen',
					color: 'var(--ck-highlight-marker-deep-orange-800)',
					type: 'pen'
				},
			
				{
					model: 'deerang00Marker',
					class: 'marker-deep-orange-900',
					title: 'Deep orange 900 marker',
					color: 'var(--ck-highlight-marker-deep-orange-900)',
					type: 'marker'
				},
				{
					model: 'deerang00Pen',
					class: 'pen-deep-orange-900',
					title: 'Deep orange 900 pen',
					color: 'var(--ck-highlight-marker-deep-orange-900)',
					type: 'pen'
				},
			
				{
					model: 'deerang100Marker',
					class: 'marker-deep-orange-a100',
					title: 'Deep orange a100 marker',
					color: 'var(--ck-highlight-marker-deep-orange-a100)',
					type: 'marker'
				},
				{
					model: 'deerang100Pen',
					class: 'pen-deep-orange-a100',
					title: 'Deep orange a100 pen',
					color: 'var(--ck-highlight-marker-deep-orange-a100)',
					type: 'pen'
				},
			
				{
					model: 'deerang200Marker',
					class: 'marker-deep-orange-a200',
					title: 'Deep orange a200 marker',
					color: 'var(--ck-highlight-marker-deep-orange-a200)',
					type: 'marker'
				},
				{
					model: 'deerang200Pen',
					class: 'pen-deep-orange-a200',
					title: 'Deep orange a200 pen',
					color: 'var(--ck-highlight-marker-deep-orange-a200)',
					type: 'pen'
				},
			
				{
					model: 'deerang400Marker',
					class: 'marker-deep-orange-a400',
					title: 'Deep orange a400 marker',
					color: 'var(--ck-highlight-marker-deep-orange-a400)',
					type: 'marker'
				},
				{
					model: 'deerang400Pen',
					class: 'pen-deep-orange-a400',
					title: 'Deep orange a400 pen',
					color: 'var(--ck-highlight-marker-deep-orange-a400)',
					type: 'pen'
				},
			
				{
					model: 'deerang700Marker',
					class: 'marker-deep-orange-a700',
					title: 'Deep orange a700 marker',
					color: 'var(--ck-highlight-marker-deep-orange-a700)',
					type: 'marker'
				},
				{
					model: 'deerang700Pen',
					class: 'pen-deep-orange-a700',
					title: 'Deep orange a700 pen',
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
					model: 'brow0Marker',
					class: 'marker-brown-50',
					title: 'Brown 50 marker',
					color: 'var(--ck-highlight-marker-brown-50)',
					type: 'marker'
				},
				{
					model: 'brow0Pen',
					class: 'pen-brown-50',
					title: 'Brown 50 pen',
					color: 'var(--ck-highlight-marker-brown-50)',
					type: 'pen'
				},
			
				{
					model: 'brow00Marker',
					class: 'marker-brown-100',
					title: 'Brown 100 marker',
					color: 'var(--ck-highlight-marker-brown-100)',
					type: 'marker'
				},
				{
					model: 'brow00Pen',
					class: 'pen-brown-100',
					title: 'Brown 100 pen',
					color: 'var(--ck-highlight-marker-brown-100)',
					type: 'pen'
				},
			
				{
					model: 'brow00Marker',
					class: 'marker-brown-200',
					title: 'Brown 200 marker',
					color: 'var(--ck-highlight-marker-brown-200)',
					type: 'marker'
				},
				{
					model: 'brow00Pen',
					class: 'pen-brown-200',
					title: 'Brown 200 pen',
					color: 'var(--ck-highlight-marker-brown-200)',
					type: 'pen'
				},
			
				{
					model: 'brow00Marker',
					class: 'marker-brown-300',
					title: 'Brown 300 marker',
					color: 'var(--ck-highlight-marker-brown-300)',
					type: 'marker'
				},
				{
					model: 'brow00Pen',
					class: 'pen-brown-300',
					title: 'Brown 300 pen',
					color: 'var(--ck-highlight-marker-brown-300)',
					type: 'pen'
				},
			
				{
					model: 'brow00Marker',
					class: 'marker-brown-400',
					title: 'Brown 400 marker',
					color: 'var(--ck-highlight-marker-brown-400)',
					type: 'marker'
				},
				{
					model: 'brow00Pen',
					class: 'pen-brown-400',
					title: 'Brown 400 pen',
					color: 'var(--ck-highlight-marker-brown-400)',
					type: 'pen'
				},
			
				{
					model: 'brow00Marker',
					class: 'marker-brown-500',
					title: 'Brown 500 marker',
					color: 'var(--ck-highlight-marker-brown-500)',
					type: 'marker'
				},
				{
					model: 'brow00Pen',
					class: 'pen-brown-500',
					title: 'Brown 500 pen',
					color: 'var(--ck-highlight-marker-brown-500)',
					type: 'pen'
				},
			
				{
					model: 'brow00Marker',
					class: 'marker-brown-600',
					title: 'Brown 600 marker',
					color: 'var(--ck-highlight-marker-brown-600)',
					type: 'marker'
				},
				{
					model: 'brow00Pen',
					class: 'pen-brown-600',
					title: 'Brown 600 pen',
					color: 'var(--ck-highlight-marker-brown-600)',
					type: 'pen'
				},
			
				{
					model: 'brow00Marker',
					class: 'marker-brown-700',
					title: 'Brown 700 marker',
					color: 'var(--ck-highlight-marker-brown-700)',
					type: 'marker'
				},
				{
					model: 'brow00Pen',
					class: 'pen-brown-700',
					title: 'Brown 700 pen',
					color: 'var(--ck-highlight-marker-brown-700)',
					type: 'pen'
				},
			
				{
					model: 'brow00Marker',
					class: 'marker-brown-800',
					title: 'Brown 800 marker',
					color: 'var(--ck-highlight-marker-brown-800)',
					type: 'marker'
				},
				{
					model: 'brow00Pen',
					class: 'pen-brown-800',
					title: 'Brown 800 pen',
					color: 'var(--ck-highlight-marker-brown-800)',
					type: 'pen'
				},
			
				{
					model: 'brow00Marker',
					class: 'marker-brown-900',
					title: 'Brown 900 marker',
					color: 'var(--ck-highlight-marker-brown-900)',
					type: 'marker'
				},
				{
					model: 'brow00Pen',
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
					model: 'gre0Marker',
					class: 'marker-grey-50',
					title: 'Grey 50 marker',
					color: 'var(--ck-highlight-marker-grey-50)',
					type: 'marker'
				},
				{
					model: 'gre0Pen',
					class: 'pen-grey-50',
					title: 'Grey 50 pen',
					color: 'var(--ck-highlight-marker-grey-50)',
					type: 'pen'
				},
			
				{
					model: 'gre00Marker',
					class: 'marker-grey-100',
					title: 'Grey 100 marker',
					color: 'var(--ck-highlight-marker-grey-100)',
					type: 'marker'
				},
				{
					model: 'gre00Pen',
					class: 'pen-grey-100',
					title: 'Grey 100 pen',
					color: 'var(--ck-highlight-marker-grey-100)',
					type: 'pen'
				},
			
				{
					model: 'gre00Marker',
					class: 'marker-grey-200',
					title: 'Grey 200 marker',
					color: 'var(--ck-highlight-marker-grey-200)',
					type: 'marker'
				},
				{
					model: 'gre00Pen',
					class: 'pen-grey-200',
					title: 'Grey 200 pen',
					color: 'var(--ck-highlight-marker-grey-200)',
					type: 'pen'
				},
			
				{
					model: 'gre00Marker',
					class: 'marker-grey-300',
					title: 'Grey 300 marker',
					color: 'var(--ck-highlight-marker-grey-300)',
					type: 'marker'
				},
				{
					model: 'gre00Pen',
					class: 'pen-grey-300',
					title: 'Grey 300 pen',
					color: 'var(--ck-highlight-marker-grey-300)',
					type: 'pen'
				},
			
				{
					model: 'gre00Marker',
					class: 'marker-grey-400',
					title: 'Grey 400 marker',
					color: 'var(--ck-highlight-marker-grey-400)',
					type: 'marker'
				},
				{
					model: 'gre00Pen',
					class: 'pen-grey-400',
					title: 'Grey 400 pen',
					color: 'var(--ck-highlight-marker-grey-400)',
					type: 'pen'
				},
			
				{
					model: 'gre00Marker',
					class: 'marker-grey-500',
					title: 'Grey 500 marker',
					color: 'var(--ck-highlight-marker-grey-500)',
					type: 'marker'
				},
				{
					model: 'gre00Pen',
					class: 'pen-grey-500',
					title: 'Grey 500 pen',
					color: 'var(--ck-highlight-marker-grey-500)',
					type: 'pen'
				},
			
				{
					model: 'gre00Marker',
					class: 'marker-grey-600',
					title: 'Grey 600 marker',
					color: 'var(--ck-highlight-marker-grey-600)',
					type: 'marker'
				},
				{
					model: 'gre00Pen',
					class: 'pen-grey-600',
					title: 'Grey 600 pen',
					color: 'var(--ck-highlight-marker-grey-600)',
					type: 'pen'
				},
			
				{
					model: 'gre00Marker',
					class: 'marker-grey-700',
					title: 'Grey 700 marker',
					color: 'var(--ck-highlight-marker-grey-700)',
					type: 'marker'
				},
				{
					model: 'gre00Pen',
					class: 'pen-grey-700',
					title: 'Grey 700 pen',
					color: 'var(--ck-highlight-marker-grey-700)',
					type: 'pen'
				},
			
				{
					model: 'gre00Marker',
					class: 'marker-grey-800',
					title: 'Grey 800 marker',
					color: 'var(--ck-highlight-marker-grey-800)',
					type: 'marker'
				},
				{
					model: 'gre00Pen',
					class: 'pen-grey-800',
					title: 'Grey 800 pen',
					color: 'var(--ck-highlight-marker-grey-800)',
					type: 'pen'
				},
			
				{
					model: 'gre00Marker',
					class: 'marker-grey-900',
					title: 'Grey 900 marker',
					color: 'var(--ck-highlight-marker-grey-900)',
					type: 'marker'
				},
				{
					model: 'gre00Pen',
					class: 'pen-grey-900',
					title: 'Grey 900 pen',
					color: 'var(--ck-highlight-marker-grey-900)',
					type: 'pen'
				},
			
				{
					model: 'blureyMarker',
					class: 'marker-blue-grey',
					title: 'Blue grey marker',
					color: 'var(--ck-highlight-marker-blue-grey)',
					type: 'marker'
				},
				{
					model: 'blureyPen',
					class: 'pen-blue-grey',
					title: 'Blue grey pen',
					color: 'var(--ck-highlight-marker-blue-grey)',
					type: 'pen'
				},
			
				{
					model: 'blure0Marker',
					class: 'marker-blue-grey-50',
					title: 'Blue grey 50 marker',
					color: 'var(--ck-highlight-marker-blue-grey-50)',
					type: 'marker'
				},
				{
					model: 'blure0Pen',
					class: 'pen-blue-grey-50',
					title: 'Blue grey 50 pen',
					color: 'var(--ck-highlight-marker-blue-grey-50)',
					type: 'pen'
				},
			
				{
					model: 'blure00Marker',
					class: 'marker-blue-grey-100',
					title: 'Blue grey 100 marker',
					color: 'var(--ck-highlight-marker-blue-grey-100)',
					type: 'marker'
				},
				{
					model: 'blure00Pen',
					class: 'pen-blue-grey-100',
					title: 'Blue grey 100 pen',
					color: 'var(--ck-highlight-marker-blue-grey-100)',
					type: 'pen'
				},
			
				{
					model: 'blure00Marker',
					class: 'marker-blue-grey-200',
					title: 'Blue grey 200 marker',
					color: 'var(--ck-highlight-marker-blue-grey-200)',
					type: 'marker'
				},
				{
					model: 'blure00Pen',
					class: 'pen-blue-grey-200',
					title: 'Blue grey 200 pen',
					color: 'var(--ck-highlight-marker-blue-grey-200)',
					type: 'pen'
				},
			
				{
					model: 'blure00Marker',
					class: 'marker-blue-grey-300',
					title: 'Blue grey 300 marker',
					color: 'var(--ck-highlight-marker-blue-grey-300)',
					type: 'marker'
				},
				{
					model: 'blure00Pen',
					class: 'pen-blue-grey-300',
					title: 'Blue grey 300 pen',
					color: 'var(--ck-highlight-marker-blue-grey-300)',
					type: 'pen'
				},
			
				{
					model: 'blure00Marker',
					class: 'marker-blue-grey-400',
					title: 'Blue grey 400 marker',
					color: 'var(--ck-highlight-marker-blue-grey-400)',
					type: 'marker'
				},
				{
					model: 'blure00Pen',
					class: 'pen-blue-grey-400',
					title: 'Blue grey 400 pen',
					color: 'var(--ck-highlight-marker-blue-grey-400)',
					type: 'pen'
				},
			
				{
					model: 'blure00Marker',
					class: 'marker-blue-grey-500',
					title: 'Blue grey 500 marker',
					color: 'var(--ck-highlight-marker-blue-grey-500)',
					type: 'marker'
				},
				{
					model: 'blure00Pen',
					class: 'pen-blue-grey-500',
					title: 'Blue grey 500 pen',
					color: 'var(--ck-highlight-marker-blue-grey-500)',
					type: 'pen'
				},
			
				{
					model: 'blure00Marker',
					class: 'marker-blue-grey-600',
					title: 'Blue grey 600 marker',
					color: 'var(--ck-highlight-marker-blue-grey-600)',
					type: 'marker'
				},
				{
					model: 'blure00Pen',
					class: 'pen-blue-grey-600',
					title: 'Blue grey 600 pen',
					color: 'var(--ck-highlight-marker-blue-grey-600)',
					type: 'pen'
				},
			
				{
					model: 'blure00Marker',
					class: 'marker-blue-grey-700',
					title: 'Blue grey 700 marker',
					color: 'var(--ck-highlight-marker-blue-grey-700)',
					type: 'marker'
				},
				{
					model: 'blure00Pen',
					class: 'pen-blue-grey-700',
					title: 'Blue grey 700 pen',
					color: 'var(--ck-highlight-marker-blue-grey-700)',
					type: 'pen'
				},
			
				{
					model: 'blure00Marker',
					class: 'marker-blue-grey-800',
					title: 'Blue grey 800 marker',
					color: 'var(--ck-highlight-marker-blue-grey-800)',
					type: 'marker'
				},
				{
					model: 'blure00Pen',
					class: 'pen-blue-grey-800',
					title: 'Blue grey 800 pen',
					color: 'var(--ck-highlight-marker-blue-grey-800)',
					type: 'pen'
				},
			
				{
					model: 'blure00Marker',
					class: 'marker-blue-grey-900',
					title: 'Blue grey 900 marker',
					color: 'var(--ck-highlight-marker-blue-grey-900)',
					type: 'marker'
				},
				{
					model: 'blure00Pen',
					class: 'pen-blue-grey-900',
					title: 'Blue grey 900 pen',
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