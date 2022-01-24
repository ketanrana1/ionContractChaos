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
					title="Image"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									imageId: image.id,
									imageUrl: image.url,
								} ) }
								value={ attributes.imageId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.imageId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.imageId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.imageId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
									imageId: 0,
									imageUrl: '',
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

			 <section className="ion-image-on-right-text-on-left">
				<div className="container">
					<div className="wp-block-columns row">
						<div className="wp-block-column col-12 col-lg-6">
							<div className="text-cont">
								<RichText
									tagName="h2"
									onChange={ ( content ) => setAttributes( { subHeading: content } ) }
									value={ attributes.subHeading }
									placeholder="SubHeading"
									style={ textColor }
								/>
								<RichText
									tagName="h3"
									onChange={ ( content ) => setAttributes( { heading: content } ) }
									value={ attributes.heading }
									placeholder="Heading"
									style={ textColor }
								/>
								<RichText
									tagName="p"
									onChange={ ( content ) => setAttributes( { description: content } ) }
									value={ attributes.description }
									placeholder="Description"
									style={ textColor }
								/>
							</div>
						</div>
						<div className="wp-block-column col-12 col-lg-6">
							<div className="image-cont">
								<img src={ props.attributes.imageUrl } alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

registerBlockType( 'cgb/ion-image-on-right-text-on-left', {
	title: __( 'Ion image on right and text on left' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'ion-blocks — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		imageId: {
			type: 'number',
			default: 0,
		},
		imageUrl: {
			type: 'string',
			default: '',
		},
		heading: {
			type: 'string',
			default: '',
		},
		subHeading: {
			type: 'string',
			default: '',
		},
		description: {
			type: 'string',
			default: '',
		},
		textColor: {
			type: 'string',
			default: '#000000',
		},
	},
	edit: withSelect( ( select, props ) => {
		return {
			media: props.attributes.imageId1 ? select( 'core' ).getMedia( props.attributes.imageId ) : undefined,
		};
	} )( BlockEdit ),
	save: ( props ) => {
		const textColor = {
			color: props.attributes.textColor,
		};
		return (

			<section className="ion-image-on-right-text-on-left">
				<div className="container">
					<div className="row gx-5 d-flex">
						<div className="col-12 col-lg-6">
							<div className="text-cont">
								<h2 style={ textColor }>{ props.attributes.subHeading }</h2>
								<h3 style={ textColor }>{ props.attributes.heading }</h3>
								<p style={ textColor }>{ props.attributes.description }</p>
							</div>

						</div>
						<div className="col-12 col-lg-6">
							<div className="image-cont">
								<img src={ props.attributes.imageUrl } alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	},
} );
