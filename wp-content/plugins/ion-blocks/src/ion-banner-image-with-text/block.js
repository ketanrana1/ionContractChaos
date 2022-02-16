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
const { InspectorControls, RichText, MediaUploadCheck, MediaUpload } = wp.editor;
const { PanelBody, PanelRow, ColorPicker, Button, ResponsiveWrapper } = wp.components;
const { withSelect } = wp.data;

const BlockEdit = ( props ) => {
	const { attributes, setAttributes } = props;

	const textColor = {
		color: attributes.textColor,
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title="Background Image"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									backgroundImageId: image.id,
									backgroundImageUrl: image.url,
								} ) }
								value={ attributes.backgroundImageId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.backgroundImageId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.backgroundImageId === 0 && __( 'Choose an image', 'awp' ) }
										{ props.media !== undefined &&
											<ResponsiveWrapper
												naturalWidth={ props.media.media_details.width }
												naturalHeight={ props.media.media_details.height }>
												<img src={ props.media.source_url } alt="icon" />
											</ResponsiveWrapper>
										}
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</PanelRow>
					<PanelRow>
						{ attributes.backgroundImageId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', maxWidth: '100%' } } onClick={ () => setAttributes( {
									backgroundImageId: 0,
									backgroundImageUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>

				<PanelBody
					title="Text Color"
					initialOpen={ false }
				>
					<PanelRow>
						<ColorPicker
							color={ attributes.textColor }
							disableAlpha
							onChangeComplete={ ( value ) => setAttributes( { textColor: value.hex } ) }
						/>
					</PanelRow>
				</PanelBody>
			 </InspectorControls>
			 <section className="wp-block-columns banner-with-text" style={ { backgroundImage: `url(${ props.attributes.backgroundImageUrl })` } }>
				 <div className="wp-block-column">
					<div className="container">
						<div className="text-cont">
							<RichText
								tagName="h2"
								onChange={ ( content ) => setAttributes( { heading: content } ) }
								value={ `${ attributes.heading }` }
								placeholder="Heading"
								style={ textColor }
							/>
							<RichText
								tagName="p"
								onChange={ ( content ) => setAttributes( { description: content } ) }
								value={ `${ attributes.description }` }
								placeholder="Description"
								style={ textColor }
							/>
						</div>
					</div>
				 </div>
			</section>
		</Fragment>
	);
};

registerBlockType( 'cgb/ion-banner-image-with-text', {
	title: __( 'Ion Banner with Text' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'ion-blocks — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		heading: {
			type: 'string',
			default: '',
		},
		description: {
			description: 'string',
			default: '',
		},
		textColor: {
			type: 'string',
			default: '#000000',
		},
		backgroundImageId: {
			type: 'number',
			default: 0,
		},
		backgroundImageUrl: {
			type: 'string',
			default: '',
		},
	},
	edit: withSelect( ( select, props ) => {
		return {
			media: props.attributes.backgroundImageId ? select( 'core' ).getMedia( props.attributes.backgroundImageId ) : undefined,
		};
	} )( BlockEdit ),
	save: ( props ) => {
		const textColor = {
			color: props.attributes.textColor,
		};

		return (
			<section className="banner-with-text" style={ { backgroundImage: `url(${ props.attributes.backgroundImageUrl })` } } >
				<div className="container">
					<div className="text-cont">
						<h2 style={ textColor } >{ props.attributes.heading }</h2>
						<p style={ textColor } dangerouslySetInnerHTML={ { __html: props.attributes.description } } ></p>
					</div>
				</div>
			</section>
		);
	},
} );
