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
										{ props.media1 !== undefined &&
										<ResponsiveWrapper
											naturalWidth={ props.media1.media_details.width }
											naturalHeight={ props.media1.media_details.height }>
											<img src={ props.media1.source_url } alt="icon" />
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
									iconImageOneId: image.id,
									iconImageOneUrl: image.url,
								} ) }
								value={ attributes.iconImageOneId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.iconImageOneId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.iconImageOneId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.iconImageOneId !== 0 &&
						<MediaUploadCheck>
							<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
								iconImageOneId: 0,
								iconImageOneUrl: '',
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
									iconImageTwoId: image.id,
									iconImageTwoUrl: image.url,
								} ) }
								value={ attributes.iconImageTwoId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.iconImageTwoId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.iconImageTwoId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.iconImageTwoId !== 0 &&
						<MediaUploadCheck>
							<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
								iconImageTwoId: 0,
								iconImageTwoUrl: '',
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
									iconImageThreeId: image.id,
									iconImageThreeUrl: image.url,
								} ) }
								value={ attributes.iconImageThreeId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.iconImageThreeId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.iconImageThreeId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.iconImageThreeId !== 0 &&
						<MediaUploadCheck>
							<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
								iconImageThreeId: 0,
								iconImageThreeUrl: '',
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

			 <section className="contact-details-with-form">
				<div className="wp-block-columns row align-items-center">
					<div className="wp-block-column col-12 col-lg-5">
						<div className="image-with-details-cont">
							<img className="background-img" src={ props.attributes.backgroundImageUrl } alt="" />
							<div className="contact-details-cont">
								<RichText
									tagName="h2"
									onChange={ ( content ) => setAttributes( { leftColoumnHeading: content } ) }
									value={ `${ attributes.leftColoumnHeading }` }
									placeholder="Heading on Left"
									style={ textColor }
								/>
								<RichText
									tagName="p"
									onChange={ ( content ) => setAttributes( { leftColoumnDescription: content } ) }
									value={ `${ attributes.leftColoumnDescription }` }
									placeholder="Decription on Left"
									className="top-para"
									style={ textColor }
								/>
								<div className="each-icon-cont">
									<div className="wp-block-columns row align-items-center">
										<div className="col-3">
											<div className="wp-block-column">
												<img className="icon-img" src={ props.attributes.iconImageOneUrl } alt="" />
											</div>
										</div>
										<div className="col-9">
											<div className="wp-block-column">
												<div className="text-cont">
													<RichText
														tagName="h3"
														onChange={ ( content ) => setAttributes( { addressTitle: content } ) }
														value={ `${ attributes.addressTitle }` }
														placeholder="Address Title"
														style={ textColor }
													/>
													<RichText
														tagName="p"
														onChange={ ( content ) => setAttributes( { addressDescription: content } ) }
														value={ `${ attributes.addressDescription }` }
														placeholder="Address Description"
														style={ textColor }
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="each-icon-cont">
									<div className="wp-block-columns row align-items-center">
										<div className="col-3">
											<div className="wp-block-column">
												<img className="icon-img" src={ props.attributes.iconImageTwoUrl } alt="" />
											</div>

										</div>
										<div className="col-9">
											<div className="wp-block-column"><div className="text-cont phone-cont">
												<RichText
													tagName="h3"
													onChange={ ( content ) => setAttributes( { phoneTitle: content } ) }
													value={ `${ attributes.phoneTitle }` }
													placeholder="Phone Title"
													style={ textColor }
												/>
												<RichText
													tagName="p"
													onChange={ ( content ) => setAttributes( { phoneDescription: content } ) }
													value={ `${ attributes.phoneDescription }` }
													placeholder="Phone Number 1"
													style={ textColor }
												/>
												<RichText
													tagName="p"
													onChange={ ( content ) => setAttributes( { phoneDescription2: content } ) }
													value={ `${ attributes.phoneDescription2 }` }
													placeholder="Phone Number 2"
													style={ textColor }
												/>
											</div></div>

										</div>
									</div>
								</div>
								<div className="each-icon-cont">
									<div className="wp-block-columns row align-items-center">

										<div className="col-3">
											<div className="wp-block-column"><img className="icon-img" src={ props.attributes.iconImageThreeUrl } alt="" /></div>

										</div>
										<div className="col-9">
											<div className="wp-block-column">
												<div className="text-cont">
													<RichText
														tagName="h3"
														onChange={ ( content ) => setAttributes( { emailTitle: content } ) }
														value={ `${ attributes.emailTitle }` }
														placeholder="Email Title"
														style={ textColor }
													/>
													<RichText
														tagName="p"
														onChange={ ( content ) => setAttributes( { emailDescription: content } ) }
														value={ `${ attributes.emailDescription }` }
														placeholder="Email Description"
														style={ textColor }
													/>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="wp-block-column col-12 col-lg-7">
						<div className="form-cont">
							<RichText
								tagName="h2"
								onChange={ ( content ) => setAttributes( { rightColoumnHeading: content } ) }
								value={ `${ attributes.rightColoumnHeading }` }
								placeholder="Heading on Right"
								style={ textColor }
							/>
							<RichText
								tagName="p"
								onChange={ ( content ) => setAttributes( { rightColoumnDescription: content } ) }
								value={ `${ attributes.rightColoumnDescription }` }
								placeholder="Description on Right"
								style={ textColor }
							/>
							<RichText
								tagName="div"
								onChange={ ( content ) => setAttributes( { contactFormShortcode: content } ) }
								value={ `${ attributes.contactFormShortcode }` }
								placeholder="Shortcode for conatct form"
							/>
						</div>

					</div>
				</div>
			</section>
		</Fragment>
	);
};

registerBlockType( 'cgb/ion-contact-details', {
	title: __( 'Ion Contact details with Contact Form' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'ion-blocks — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		backgroundImageId: {
			type: 'number',
			default: 0,
		},
		backgroundImageUrl: {
			type: 'string',
			default: '',
		},
		iconImageOneId: {
			type: 'number',
			default: 0,
		},
		iconImageOneUrl: {
			type: 'string',
			default: '',
		},
		iconImageTwoId: {
			type: 'number',
			default: 0,
		},
		iconImageTwoUrl: {
			type: 'string',
			default: '',
		},
		iconImageThreeId: {
			type: 'number',
			default: 0,
		},
		iconImageThreeUrl: {
			type: 'string',
			default: '',
		},
		leftColoumnHeading: {
			type: 'string',
			default: '',
		},
		leftColoumnDescription: {
			type: 'string',
			default: '',
		},
		addressTitle: {
			type: 'string',
			default: '',
		},
		addressDescription: {
			type: 'string',
			default: '',
		},
		phoneTitle: {
			type: 'string',
			default: '',
		},
		phoneDescription: {
			type: 'string',
			default: '',
		},
		phoneDescription2: {
			type: 'string',
			default: '',
		},
		emailTitle: {
			type: 'string',
			default: '',
		},
		emailDescription: {
			type: 'string',
			default: '',
		},
		textColor: {
			type: 'string',
			default: '#000000',
		},
		rightColoumnHeading: {
			type: 'string',
			default: '',
		},
		rightColoumnDescription: {
			type: 'string',
			default: '',
		},
		contactFormShortcode: {
			type: 'string',
			default: '',
		},
	},
	edit: withSelect( ( select, props ) => {
		return {
			media1: props.attributes.backgroundImageId ? select( 'core' ).getMedia( props.attributes.backgroundImageId ) : undefined,
			media2: props.attributes.iconImageOneId ? select( 'core' ).getMedia( props.attributes.iconImageOneId ) : undefined,
			media3: props.attributes.iconImageTwoId ? select( 'core' ).getMedia( props.attributes.iconImageTwoId ) : undefined,
			media4: props.attributes.iconImageThreeId ? select( 'core' ).getMedia( props.attributes.iconImageThreeId ) : undefined,
		};
	} )( BlockEdit ),
	save: ( props ) => {
		const textColor = {
			color: props.attributes.textColor,
		};

		return (

			<section className="contact-details-with-form">
				<div className="row align-items-center">
					<div className="col-12 col-lg-5">
						<div className="image-with-details-cont">
							<img className="background-img" src={ props.attributes.backgroundImageUrl } alt="" />
							<div className="contact-details-cont">
								<h2 style={ textColor }>{ props.attributes.leftColoumnHeading }</h2>
								<p style={ textColor } className="top-para" dangerouslySetInnerHTML={ { __html: props.attributes.leftColoumnDescription } } ></p>
								<div className="each-icon-cont">
									<div className="row align-items-center">
										<div className="col-3">
											<img className="icon-img" src={ props.attributes.iconImageOneUrl } alt="" />
										</div>
										<div className="col-9">
											<div className="text-cont">
												<h3 style={ textColor }>{ props.attributes.addressTitle }</h3>
												<p style={ textColor } dangerouslySetInnerHTML={ { __html: props.attributes.addressDescription } } ></p>
											</div>
										</div>
									</div>
								</div>
								<div className="each-icon-cont">
									<div className="row align-items-center">
										<div className="col-3">
											<img className="icon-img" src={ props.attributes.iconImageTwoUrl } alt="" />
										</div>
										<div className="col-9">
											<div className="text-cont">
												<h3 style={ textColor }>{ props.attributes.phoneTitle }</h3>
												<p style={ textColor } dangerouslySetInnerHTML={ { __html: props.attributes.phoneDescription } } ></p>
												<p style={ textColor } dangerouslySetInnerHTML={ { __html: props.attributes.phoneDescription2 } } ></p>
											</div>
										</div>
									</div>
								</div>
								<div className="each-icon-cont">
									<div className="row align-items-center">
										<div className="col-3">
											<img className="icon-img" src={ props.attributes.iconImageThreeUrl } alt="" />
										</div>
										<div className="col-9">
											<div className="text-cont">
												<h3 style={ textColor }>{ props.attributes.emailTitle }</h3>
												<p style={ textColor } dangerouslySetInnerHTML={ { __html: props.attributes.emailDescription } } ></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-7">
						<div className="form-cont">
							<h2 style={ textColor }>{ props.attributes.rightColoumnHeading }</h2>
							<p style={ textColor } dangerouslySetInnerHTML={ { __html: props.attributes.rightColoumnDescription } } ></p>
							<div>{ props.attributes.contactFormShortcode }</div>
						</div>
					</div>
				</div>
			</section>
		);
	},
} );
