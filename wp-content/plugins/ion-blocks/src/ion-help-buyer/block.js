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

	const color = {
		color: attributes.color,
	};
	const backgroundColorAndImage = {
		backgroundImage: `url(${ props.attributes.newImageUrl } )`,
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
									newImageId: image.id,
									newImageUrl: image.url,
								} ) }
								value={ attributes.newImageId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.newImageId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.newImageId === 0 && __( 'Choose an image', 'awp' ) }
										{ props.media2 !== undefined &&
										<ResponsiveWrapper
											naturalWidth={ props.media2.media_details.width }
											naturalHeight={ props.media2.media_details.height }>
											<img src={ props.media2.source_url } alt="icon" />
										</ResponsiveWrapper>
										}
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</PanelRow>
					<PanelRow>
						{ attributes.mediaId !== 0 &&
						<MediaUploadCheck>
							<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
								newImageId: 0,
								newImageUrl: '',
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
							color={ attributes.color }
							disableAlpha
							onChangeComplete={ ( value ) => setAttributes( { color: value.hex } ) }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody>
					<PanelRow>
					</PanelRow>
				</PanelBody>
			 </InspectorControls>
			<section className="ion-helps-buyers" style={ backgroundColorAndImage }>
				<div className="row wp-block-columns">
					<div className="wp-block-column">
						<div className="col-12 col-lg-5">
							<div className="left-cont">
								<RichText
									tagName="h2"
									onChange={ ( content ) => setAttributes( { heading: content } ) }
									value={ attributes.heading }
									placeholder="Heading"
									className="heading-help-buyer"
									style={ color }
								/>
								<RichText
									tagName="p"
									onChange={ ( content ) => setAttributes( { description: content } ) }
									value={ attributes.description }
									placeholder="Description"
									className="description-help-buyer"
									style={ color }
								/>
							</div>

						</div>
					</div>

					<div className="wp-block-column">
						<div className="col-12 col-lg-7">
							<div className="right-cont">
								<RichText
									tagName="div"
									onChange={ ( content ) => setAttributes( { youtubeEmbedUrl: content } ) }
									value={ attributes.youtubeEmbedUrl }
									placeholder="Embed URL for YouTube video"
									className="embedurl-video"
								/>
								<iframe width="100%" height="300px" src={ props.attributes.youtubeEmbedUrl } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
							</div>
						</div>

					</div>

				</div>
			</section>
		</Fragment>
	);
};

registerBlockType( 'cgb/ion-help-buyer', {
	title: __( 'Ion Help Buyer' ),
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
			type: 'string',
			default: '',
		},
		youtubeEmbedUrl: {
			type: 'string',
			default: '',
		},
		color: {
			type: 'string',
			default: 'white',
		},
		newImageId: {
			type: 'number',
			default: 0,
		},
		newImageUrl: {
			type: 'string',
			default: '',
		},
	},
	edit: withSelect( ( select, props ) => {
		return {
			media2: props.attributes.newImageId ? select( 'core' ).getMedia( props.attributes.newImageId ) : undefined,
		};
	} )( BlockEdit ),
	// eslint-disable-next-line no-unused-vars
	save: ( props ) => {
		const color = {
			color: props.attributes.color,
		};
		const backgroundColorAndImage = {
			backgroundImage: `url(${ props.attributes.newImageUrl } )`,
		};

		return (

			<section className="ion-helps-buyers" style={ backgroundColorAndImage } >
				<div className="row">
					<div className="col-12 col-lg-5">
						<div className="left-cont">
							<h2 style={ color }>{ props.attributes.heading }</h2>
							<p style={ color }> { props.attributes.description }</p>

						</div>

					</div>
					<div className="col-12 col-lg-7">
						<div className="right-cont">
							<iframe width="100%" height="100%" src={ props.attributes.youtubeEmbedUrl } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
					</div>
				</div>
			</section>
		);
	},
} );
