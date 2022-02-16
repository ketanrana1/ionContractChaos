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

	const styleTextColor1 = {
		color: attributes.textColor1,
	};
	const styleTextColor2 = {
		color: attributes.textColor2,
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
									imageId3: image.id,
									imageUrl3: image.url,
								} ) }
								value={ attributes.imageId3 }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.imageId3 === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.imageId3 === 0 && __( 'Choose an image', 'awp' ) }
										{ props.media3 !== undefined &&
											<ResponsiveWrapper
												naturalWidth={ props.media3.media_details.width }
												naturalHeight={ props.media3.media_details.height }>
												<img src={ props.media3.source_url } alt="icon" />
											</ResponsiveWrapper>
										}
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</PanelRow>
					<PanelRow>
						{ attributes.imageId3 !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
									imageId3: 0,
									imageUrl3: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>
				<PanelBody
					title="Background Shape 1"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									imageId1: image.id,
									imageUrl1: image.url,
								} ) }
								value={ attributes.imageId1 }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.imageId1 === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.imageId1 === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.imageId1 !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
									imageId1: 0,
									imageUrl1: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>
				<PanelBody
					title="Background Shape 2"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									imageId2: image.id,
									imageUrl2: image.url,
								} ) }
								value={ attributes.imageId2 }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.imageId2 === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.imageId2 === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.imageId2 !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
									imageId2: 0,
									imageUrl2: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>
				<PanelBody
					title="Sub Heading Color"
					initialOpen={ false }
				>
					<PanelRow>
						<ColorPicker
							color={ attributes.textColor1 }
							disableAlpha
							onChangeComplete={ ( value ) => setAttributes( { textColor1: value.hex } ) }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title="Heading Color"
					initialOpen={ false }
				>
					<PanelRow>
						<ColorPicker
							color={ attributes.textColor2 }
							disableAlpha
							onChangeComplete={ ( value ) => setAttributes( { textColor2: value.hex } ) }
						/>
					</PanelRow>
				</PanelBody>
			 </InspectorControls>
			<div className="wp-block-columns ion-text-with-img-wrapper ion-pad-ver-med">
				<div className="wp-block-column">
					<div className="ion-twi-col-left">
						<RichText
							tagName="p"
							onChange={ ( content ) => setAttributes( { subHeading: content } ) }
							value={ `${ attributes.subHeading }` }
							placeholder="Sub Heading"
							className="sub-heading"
							style={ styleTextColor1 }
						/>
						<RichText
							tagName="h3"
							onChange={ ( content ) => setAttributes( { heading: content } ) }
							value={ attributes.heading }
							placeholder="Heading"
							className="heading"
							style={ styleTextColor2 }
						/>
						<RichText
							tagName="p"
							onChange={ ( content ) => setAttributes( { description: content } ) }
							value={ attributes.description }
							placeholder="Description"
							className="description"
							style={ styleTextColor2 }
						/>
					</div>
				</div>
				<div className="wp-block-column">
					<div className="ion-twi-col-right">
						<img src={ props.attributes.imageUrl1 } alt="" className="twi-shape-bg" />
						<img src={ props.attributes.imageUrl2 } alt="" className="twi-shape-bg-2" />
						<img src={ props.attributes.imageUrl3 } alt="" className="twi-image" />
					</div>
				</div>
			</div>
		</Fragment>
	);
};

registerBlockType( 'cgb/ion-image-with-text-right', {
	title: __( 'Ion Image With Text Right' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'ion-blocks — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		imageId1: {
			type: 'number',
			default: 0,
		},
		imageUrl1: {
			type: 'string',
			default: '',
		},
		imageId2: {
			type: 'number',
			default: 0,
		},
		imageUrl2: {
			type: 'string',
			default: '',
		},
		imageId3: {
			type: 'number',
			default: 0,
		},
		imageUrl3: {
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
		textColor1: {
			type: 'string',
			default: '#2e2e2e',
		},
		textColor2: {
			type: 'string',
			default: '#000000',
		},
	},
	edit: withSelect( ( select, props ) => {
		return {
			media: props.attributes.imageId1 ? select( 'core' ).getMedia( props.attributes.imageId1 ) : undefined,
			media2: props.attributes.imageId2 ? select( 'core' ).getMedia( props.attributes.imageId2 ) : undefined,
			media3: props.attributes.imageId3 ? select( 'core' ).getMedia( props.attributes.imageId3 ) : undefined,
		};
	} )( BlockEdit ),
	save: ( props ) => {
		const styleTextColor1 = {
			color: props.attributes.textColor1,
		};
		const styleTextColor2 = {
			color: props.attributes.textColor2,
		};

		return (
			<section className="ion-text-with-img-wrapper ion-pad-ver-med">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-6">
							<div className="ion-twi-col-left content-pad-right pb-4 pb-md-0">
								<p style={ styleTextColor1 } className="sub-heading" dangerouslySetInnerHTML={ { __html: props.attributes.subHeading } } ></p>
								<h3 style={ styleTextColor2 } className="heading">{ props.attributes.heading }</h3>
								<p style={ styleTextColor2 } className="description" dangerouslySetInnerHTML={ { __html: props.attributes.description } } ></p>
							</div>
						</div>
						<div className="col-12 col-lg-6">
							<div className="ion-twi-col-right">
								<img src={ props.attributes.imageUrl1 } alt="" className="twi-shape-bg" />
								<img src={ props.attributes.imageUrl2 } alt="" className="twi-shape-bg-2" />
								<img src={ props.attributes.imageUrl3 } alt="" className="twi-image" />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	},
} );
