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

	const backgroundColorAndImage = {
		backgroundImage: `url(${ props.attributes.backgroundImageUrl } )`,
		backgroundColor: attributes.backgroundColor,
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title="Image on left"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									leftImageId: image.id,
									leftImageUrl: image.url,
								} ) }
								value={ attributes.leftImageId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.leftImageId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.leftImageId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.leftImageId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
									leftImageId: 0,
									leftImageUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>

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
										{ props.media5 !== undefined &&
											<ResponsiveWrapper
												naturalWidth={ props.media5.media_details.width }
												naturalHeight={ props.media5.media_details.height }>
												<img src={ props.media5.source_url } alt="icon" />
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
								<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
									backgroundImageId: 0,
									backgroundImageUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>

				<PanelBody
					title="First Icon Image"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									iconOneImageId: image.id,
									iconOneImageUrl: image.url,
								} ) }
								value={ attributes.iconOneImageId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.iconOneImageId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.iconOneImageId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.iconOneImageId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
									iconOneImageId: 0,
									iconOneImageUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>

				<PanelBody
					title="Second Icon Image"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									iconTwoImageId: image.id,
									iconTwoImageUrl: image.url,
								} ) }
								value={ attributes.iconTwoImageId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.iconTwoImageId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.iconTwoImageId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.iconTwoImageId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
									iconTwoImageId: 0,
									iconTwoImageUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>

				<PanelBody
					title="Third Icon Image"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									iconThreeImageId: image.id,
									iconThreeImageUrl: image.url,
								} ) }
								value={ attributes.iconThreeImageId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.iconThreeImageId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.iconThreeImageId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.iconThreeImageId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
									iconThreeImageId: 0,
									iconThreeImageUrl: '',
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
				<PanelBody
					title="Background Color"
					initialOpen={ false }
				>
					<PanelRow>
						<ColorPicker
							color={ attributes.backgroundColor }
							disableAlpha
							onChangeComplete={ ( value ) => setAttributes( { backgroundColor: value.hex } ) }
						/>
					</PanelRow>
				</PanelBody>
			 </InspectorControls>

			 <section className="ion-why-choose-us">
				<div className="wp-block-columns row ion-why-choose-us-main-row">
					<div className="wp-block-column col-12 col-lg-6 p-0">
						<div className="image-cont">
							<img src={ props.attributes.leftImageUrl } alt="" />
						</div>
					</div>
					<div className="wp-block-column col-12 col-lg-6 p-0">
						<div className="text-cont" style={ backgroundColorAndImage } >
							<div className="icon-text-outer-cont" >
								<div className="icon-text-cont">
									<div className="icon-image-cont">
									</div>
									<div className="cont-text">
										<RichText
											tagName="h3"
											onChange={ ( content ) => setAttributes( { heading: content } ) }
											value={ attributes.heading }
											placeholder="Heading"
											style={ textColor }
										/>
									</div>
								</div>
								<div className="icon-text-cont">
									<div className="icon-image-cont">
										<img src={ props.attributes.iconOneImageUrl } alt="" />
									</div>
									<div className="cont-text">
										<RichText
											tagName="h3"
											onChange={ ( content ) => setAttributes( { iconOneHeading: content } ) }
											value={ attributes.iconOneHeading }
											placeholder="Icon Heading"
											style={ textColor }
										/>
										<RichText
											tagName="p"
											onChange={ ( content ) => setAttributes( { iconOneDescription: content } ) }
											value={ attributes.iconOneDescription }
											placeholder="Icon Description"
											style={ textColor }
										/>
									</div>
								</div>
								<div className="icon-text-cont">
									<div className="icon-image-cont">
										<img src={ props.attributes.iconTwoImageUrl } alt="" />
									</div>
									<div className="cont-text">
										<RichText
											tagName="h3"
											onChange={ ( content ) => setAttributes( { iconTwoHeading: content } ) }
											value={ attributes.iconTwoHeading }
											placeholder="Icon Heading"
											style={ textColor }
										/>
										<RichText
											tagName="p"
											onChange={ ( content ) => setAttributes( { iconTwoDescription: content } ) }
											value={ attributes.iconTwoDescription }
											placeholder="Icon Description"
											style={ textColor }
										/>
									</div>
								</div>
								<div className="icon-text-cont">
									<div className="icon-image-cont">
										<img src={ props.attributes.iconThreeImageUrl } alt="" />
									</div>
									<div className="cont-text">
										<RichText
											tagName="h3"
											onChange={ ( content ) => setAttributes( { iconThreeHeading: content } ) }
											value={ attributes.iconThreeHeading }
											placeholder="Icon Heading"
											style={ textColor }
										/>
										<RichText
											tagName="p"
											onChange={ ( content ) => setAttributes( { iconThreeDescription: content } ) }
											value={ attributes.iconThreeDescription }
											placeholder="Icon Description"
											style={ textColor }
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

registerBlockType( 'cgb/ion-why-choose-us', {
	title: __( 'Ion why choose us' ),
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
		leftImageId: {
			type: 'number',
			default: 0,
		},
		leftImageUrl: {
			type: 'string',
			default: '',
		},
		iconOneImageId: {
			type: 'number',
			default: 0,
		},
		iconOneImageUrl: {
			type: 'string',
			default: '',
		},
		iconOneHeading: {
			type: 'string',
			default: '',
		},
		iconOneDescription: {
			type: 'string',
			default: '',
		},
		iconTwoImageId: {
			type: 'number',
			default: 0,
		},
		iconTwoImageUrl: {
			type: 'string',
			default: '',
		},
		iconTwoHeading: {
			type: 'string',
			default: '',
		},
		iconTwoDescription: {
			type: 'string',
			default: '',
		},
		iconThreeImageId: {
			type: 'number',
			default: 0,
		},
		iconThreeImageUrl: {
			type: 'string',
			default: '',
		},
		iconThreeHeading: {
			type: 'string',
			default: '',
		},
		iconThreeDescription: {
			type: 'string',
			default: '',
		},
		textColor: {
			type: 'string',
			default: '#000000',
		},
		backgroundColor: {
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
			media: props.attributes.leftImageId ? select( 'core' ).getMedia( props.attributes.leftImageId ) : undefined,
			media2: props.attributes.iconOneImageId ? select( 'core' ).getMedia( props.attributes.iconOneImageId ) : undefined,
			media3: props.attributes.iconTwoImageId ? select( 'core' ).getMedia( props.attributes.iconTwoImageId ) : undefined,
			media4: props.attributes.iconThreeImageId ? select( 'core' ).getMedia( props.attributes.iconThreeImageId ) : undefined,
			media5: props.attributes.backgroundImageId ? select( 'core' ).getMedia( props.attributes.backgroundImageId ) : undefined,
		};
	} )( BlockEdit ),
	save: ( props ) => {
		const textColor = {
			color: props.attributes.textColor,
		};

		const backgroundColorAndImage = {
			backgroundImage: `url(${ props.attributes.backgroundImageUrl } )`,
			backgroundColor: props.attributes.backgroundColor,
		};
		return (

			<section className="ion-why-choose-us">
				<div className="row ion-why-choose-us-main-row">
					<div className="col-12 col-lg-6 p-0">
						<div className="image-cont">
							<img src={ props.attributes.leftImageUrl } alt="" />
						</div>
					</div>
					<div className="col-12 col-lg-6 p-0" style={ backgroundColorAndImage }>
						<div className="text-cont" >
							<div className="icon-text-outer-cont">
								<div className="icon-text-cont">
									<div className="icon-image-cont">
									</div>
									<div className="cont-text">
										<h2 style={ textColor }>{ props.attributes.heading }</h2>
									</div>
								</div>
								<div className="icon-text-cont">
									<div className="icon-image-cont">
										<img src={ props.attributes.iconOneImageUrl } alt="" />
									</div>
									<div className="cont-text">
										<h3	style={ textColor }>{ props.attributes.iconOneHeading }</h3>
										<p style={ textColor }>{ props.attributes.iconOneDescription }</p>
									</div>
								</div>
								<div className="icon-text-cont">
									<div className="icon-image-cont">
										<img src={ props.attributes.iconTwoImageUrl } alt="" />
									</div>
									<div className="cont-text">
										<h3	style={ textColor }>{ props.attributes.iconTwoHeading }</h3>
										<p style={ textColor }>{ props.attributes.iconTwoDescription }</p>
									</div>
								</div>
								<div className="icon-text-cont">
									<div className="icon-image-cont">
										<img src={ props.attributes.iconThreeImageUrl } alt="" />
									</div>
									<div className="cont-text">
										<h3	style={ textColor }>{ props.attributes.iconThreeHeading }</h3>
										<p style={ textColor }>{ props.attributes.iconThreeDescription }</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	},
} );
