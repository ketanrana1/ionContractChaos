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
const { __experimentalLinkControl } = wp.blockEditor;
const LinkControl = __experimentalLinkControl;
const { withSelect } = wp.data;

const BlockEdit = ( props ) => {
	const { attributes, setAttributes } = props;

	const headingStyle = {
		color: attributes.headingColor,
		padding: '10px',
	};

	const headingStyleTwo = {
		color: attributes.headingColorTwo,
		padding: '10px',
	};

	const descriptionStyle = {
		color: attributes.descriptionColor,
		padding: '10px',
	};

	const buttonBg = {
		backgroundColor: attributes.buttonColor,
		padding: '10px',
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title="Banner Image"
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
						{ attributes.mediaId !== 0 &&
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
					title="Background Image One"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									backgroundImageOneId: image.id,
									backgroundImageOneUrl: image.url,
								} ) }
								value={ attributes.backgroundImageOneId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.backgroundImageOneId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.backgroundImageOneId === 0 && __( 'Choose an image', 'awp' ) }
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
									backgroundImageOneId: 0,
									backgroundImageOneUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>
				<PanelBody
					title="Background Image Two"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									backgroundImageTwoId: image.id,
									backgroundImageTwoUrl: image.url,
								} ) }
								value={ attributes.backgroundImageTwoId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.backgroundImageTwoId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.backgroundImageTwoId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.mediaId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
									backgroundImageTwoId: 0,
									backgroundImageTwoUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>
				<PanelBody
					title="Background Image Three"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									backgroundImageThreeId: image.id,
									backgroundImageThreeUrl: image.url,
								} ) }
								value={ attributes.backgroundImageThreeId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.backgroundImageThreeId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.backgroundImageThreeId === 0 && __( 'Choose an image', 'awp' ) }
										{ props.media4 !== undefined &&
											<ResponsiveWrapper
												naturalWidth={ props.media4.media_details.width }
												naturalHeight={ props.media4.media_details.height }>
												<img src={ props.media4.source_url } alt="icon" />
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
									backgroundImageThreeId: 0,
									backgroundImageThreeUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>
				<PanelBody
					title="Heading Color"
					initialOpen={ false }
				>
					<PanelRow>
						<ColorPicker
							color={ attributes.headingColor }
							disableAlpha
							onChangeComplete={ ( value ) => setAttributes( { headingColor: value.hex } ) }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title="Heading Color Two"
					initialOpen={ false }
				>
					<PanelRow>
						<ColorPicker
							color={ attributes.headingColorTwo }
							disableAlpha
							onChangeComplete={ ( value ) => setAttributes( { headingColorTwo: value.hex } ) }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title="Description Color"
					initialOpen={ false }
				>
					<PanelRow>
						<ColorPicker
							color={ attributes.descriptionColor }
							disableAlpha
							onChangeComplete={ ( value ) => setAttributes( { descriptionColor: value.hex } ) }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title="Button Color"
					initialOpen={ false }
				>
					<PanelRow>
						<ColorPicker
							color={ attributes.buttonColor }
							disableAlpha
							onChangeComplete={ ( value ) => setAttributes( { buttonColor: value.hex } ) }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title="URL"
					initialOpen={ false }
				>
					<PanelRow>
						<LinkControl
							onChange={ ( { url } ) => {
								setAttributes( { buttonUrl: url } );
							} }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className="ion-banner-wrapper">
				<div className="ion-banner-side-img ion-banner-side-img1">
					<img src={ props.attributes.backgroundImageOneUrl } alt="" />
				</div>
				<div className="ion-banner-side-img ion-banner-side-img1">
					<img src={ attributes.imageUrl } alt="" />
				</div>
				<div className="ion-banner-shape ion-banner-shape1">
					<img src={ props.attributes.backgroundImageTwoUrl } alt="" />
				</div>
				<div className="ion-banner-shape ion-banner-shape2">
					<img src={ props.attributes.backgroundImageThreeUrl } alt="" />
				</div>
				<div className="wp-block-columns">
					<div className="wp-block-column">
						<div className="ion-banner-text-wrapper">
							<h1>
								<RichText
									tagName="span"
									onChange={ ( content ) => setAttributes( { heading: content } ) }
									value={ `${ attributes.heading }` }
									placeholder="Heading"
									className="span-black-heading"
									style={ headingStyle }
								/>
								<RichText
									tagName="span"
									onChange={ ( content ) => setAttributes( { coloredHeading: content } ) }
									value={ `${ attributes.coloredHeading }` }
									placeholder="Colored Heading"
									className="span-colored-heading"
									style={ headingStyleTwo }
								/>
							</h1>
							<RichText
								tagName="p"
								onChange={ ( content ) => setAttributes( { description: content } ) }
								value={ attributes.description }
								placeholder="Description"
								className=""
								style={ descriptionStyle }
							/>
							<RichText
								tagName="a"
								onChange={ ( content ) => setAttributes( { buttonText: content } ) }
								value={ attributes.buttonText }
								placeholder="Type Text..."
								className="ion-button-md"
								style={ buttonBg }
							/>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

registerBlockType( 'cgb/block-ion-blocks', {
	title: __( 'Ion Banner' ),
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
		coloredHeading: {
			type: 'string',
			default: '',
		},
		heading2: {
			type: 'string',
			default: '',
		},
		description: {
			type: 'string',
			default: '',
		},
		headingColor: {
			type: 'string',
			default: '#000000',
		},
		headingColorTwo: {
			type: 'string',
			default: '#000000',
		},
		descriptionColor: {
			type: 'string',
			default: '#000000',
		},
		buttonUrl: {
			type: 'string',
		},
		buttonText: {
			type: 'string',
			default: 'Contact Us',
		},
		buttonColor: {
			type: 'string',
			default: '#8b008b',
		},
		imageId: {
			type: 'number',
			default: 0,
		},
		imageUrl: {
			type: 'string',
			default: '',
		},
		backgroundImageOneId: {
			type: 'number',
			default: 0,
		},
		backgroundImageOneUrl: {
			type: 'string',
			default: '',
		},
		backgroundImageTwoId: {
			type: 'number',
			default: 0,
		},
		backgroundImageTwoUrl: {
			type: 'string',
			default: '',
		},
		backgroundImageThreeId: {
			type: 'number',
			default: 0,
		},
		backgroundImageThreeUrl: {
			type: 'string',
			default: '',
		},
	},
	edit: withSelect( ( select, props ) => {
		return {
			media: props.attributes.imageId ? select( 'core' ).getMedia( props.attributes.imageId ) : undefined,
			media2: props.attributes.backgroundImageOneId ? select( 'core' ).getMedia( props.attributes.backgroundImageOneId ) : undefined,
			media3: props.attributes.backgroundImageTwoId ? select( 'core' ).getMedia( props.attributes.backgroundImageTwoId ) : undefined,
			media4: props.attributes.backgroundImageThreeId ? select( 'core' ).getMedia( props.attributes.imageThreeId ) : undefined,
		};
	} )( BlockEdit ),
	save: ( props ) => {
		const headingStyle = {
			color: props.attributes.headingColor,
		};

		const headingStyleTwo = {
			color: props.attributes.headingColorTwo,
		};

		const descriptionStyle = {
			color: props.attributes.descriptionColor,
		};

		const buttonBg = {
			backgroundColor: props.attributes.buttonColor,
		};

		return (
			<section className="ion-banner-wrapper">
				<div className="ion-banner-side-img ion-banner-side-img1 back-image-banner">
					<img src={ props.attributes.backgroundImageOneUrl } alt="" />
				</div>
				<div className="ion-banner-side-img ion-banner-side-img1 front-image-banner">
					<img src={ props.attributes.imageUrl } alt="" />
				</div>
				<div className="ion-banner-shape ion-banner-shape1">
					<img src={ props.attributes.backgroundImageTwoUrl } alt="" />
				</div>
				<div className="ion-banner-shape ion-banner-shape2">
					<img src={ props.attributes.backgroundImageThreeUrl } alt="" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="ion-banner-text-wrapper">
								<h1 style={ headingStyle }> { props.attributes.heading } <span style={ headingStyleTwo } >{ props.attributes.coloredHeading } </span></h1>
								<p style={ descriptionStyle }>{ props.attributes.description }</p>
								<a href={ props.attributes.buttonUrl } className="ion-button-md" style={ buttonBg }>{ props.attributes.buttonText }</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	},
} );
