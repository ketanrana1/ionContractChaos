/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-mixed-spaces-and-tabs */
/**
 * BLOCK: ion-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
const { Fragment } = wp.element;

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
// eslint-disable-next-line no-unused-vars
const { InspectorControls, RichText, Iframe } = wp.editor;
const { withSelect } = wp.data;

const BlockEdit = ( props ) => {
	const { attributes, setAttributes } = props;

	return (
		<Fragment>
			<section className="wp-block-columns ion-contact-map">
				<div className="row">
					<div className="embed-map-cont">
						<RichText
							tagName="p"
							onChange={ ( content ) => setAttributes( { iframe: content } ) }
							value={ attributes.iframe }
							placeholder="iframe"
						/>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

registerBlockType( 'cgb/ion-contact-map', {
	title: __( 'Ion Contact map' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'ion-blocks — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		iframe: {
			type: 'string',
			default: '',
		},
	},
	edit: withSelect( ( ) => {
		return {

		};
	} )( BlockEdit ),

	save: ( props ) => {
		return (

			<section className="ion-contact-map">
				<div className="row">
					<div className="embed-map-cont">
						<iframe src={ props.attributes.iframe } width="100%" height="500px" style="border:0;" allowFullScreen="" loading="lazy"></iframe>
						{ /* { props.attributes.iframe } */ }
					</div>
				</div>
			</section>
		);
	},
} );
