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