/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module highlight/highlightediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import {
	modelAttributeToViewAttributeElement,
	viewToModelAttribute
} from '@ckeditor/ckeditor5-engine/src/conversion/definition-based-converters';

import HighlightCommand from './highlightcommand';

/**
 * The highlight editing feature. It introduces `highlight` command which allow to highlight selected text with defined 'marker' or 'pen'.
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
				{ model: 'marker', class: 'marker', title: 'Marker', color: '#ffff66', type: 'marker' },
				{ model: 'greenMarker', class: 'marker-green', title: 'Green Marker', color: '#66ff00', type: 'marker' },
				{ model: 'pinkMarker', class: 'marker-pink', title: 'Pink Marker', color: '#ff6fff', type: 'marker' },
				{ model: 'redPen', class: 'pen-red', title: 'Red Pen', color: '#ff2929', type: 'pen' },
				{ model: 'bluePen', class: 'pen-blue', title: 'Blue Pen', color: '#0091ff', type: 'pen' }
			]
		} );
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const data = editor.data;
		const editing = editor.editing;

		// Allow highlight attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: 'highlight' } );

		const options = editor.config.get( 'highlight.options' );

		// Define view to model conversion.
		for ( const option of options ) {
			viewToModelAttribute( 'highlight', _getConverterDefinition( option ), [ data.viewToModel ] );
		}

		// Define model to view conversion.
		modelAttributeToViewAttributeElement(
			'highlight',
			options.map( _getConverterDefinition ),
			[ data.modelToView, editing.modelToView ]
		);

		editor.commands.add( 'highlight', new HighlightCommand( editor ) );
	}
}

// Converts {@link module:highlight/highlight~HighlightOption}
// to {@link module:engine/conversion/definition-based-converters~ConverterDefinition}
//
// @param {module:highlight/highlight~HighlightOption} option
// @returns {module:engine/conversion/definition-based-converters~ConverterDefinition}
function _getConverterDefinition( option ) {
	return {
		model: option.model,
		view: {
			name: 'mark',
			class: option.class
		}
	};
}
