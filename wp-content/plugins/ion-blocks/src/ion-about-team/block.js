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

	const headingColor = {
		color: attributes.headingColor,
	};
	const memberPositionColor = {
		color: attributes.memberPositionColor,
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title="Image for Member One"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									memberOneImageId: image.id,
									memberOneImageUrl: image.url,
								} ) }
								value={ attributes.memberOneImageId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.memberOneImageId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.memberOneImageId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.memberOneImageId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
									memberOneImageId: 0,
									memberOneImageUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>

				<PanelBody
					title="Image for Member Two"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									memberTwoImageId: image.id,
									memberTwoImageUrl: image.url,
								} ) }
								value={ attributes.memberTwoImageId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.memberTwoImageId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.memberTwoImageId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.memberTwoImageId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
									memberTwoImageId: 0,
									memberTwoImageUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>

				<PanelBody
					title="Image for Member Three"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									memberThreeImageId: image.id,
									memberThreeImageUrl: image.url,
								} ) }
								value={ attributes.memberThreeImageId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.memberThreeImageId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.memberThreeImageId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.memberThreeImageId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
									memberThreeImageId: 0,
									memberThreeImageUrl: '',
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
					title="Member Position Color"
					initialOpen={ false }
				>
					<PanelRow>
						<ColorPicker
							color={ attributes.memberPositionColor }
							disableAlpha
							onChangeComplete={ ( value ) => setAttributes( { memberPositionColor: value.hex } ) }
						/>
					</PanelRow>
				</PanelBody>
			 </InspectorControls>
			<section className="ion-about-the-team">
				<div></div>
				<div className="container">
					<div className="">
						<div className="inner-top-cont">
							<RichText
								tagName="h2"
								onChange={ ( content ) => setAttributes( { mainHeading: content } ) }
								value={ attributes.mainHeading }
								placeholder="Main Heading"
								style={ headingColor }
							/>
							<RichText
								tagName="p"
								onChange={ ( content ) => setAttributes( { description: content } ) }
								value={ attributes.description }
								placeholder="Description"
								style={ headingColor }
							/>
						</div>
					</div>
					<div></div>
					<div className="">
						<div className="bottom-cont container">
							<div className="row gx-5 d-flex wp-block-columns">
								<div className="wp-block-column">
									<div className="col-12 col-lg-4">
										<div className="each-team-member">
											<img src={ props.attributes.memberOneImageUrl } alt="" />
											<div className="text-cont">
												<RichText
													tagName="h3"
													onChange={ ( content ) => setAttributes( { memberOneName: content } ) }
													value={ attributes.memberOneName }
													placeholder="Member Name"
													style={ headingColor }
												/>
												<RichText
													tagName="h4"
													onChange={ ( content ) => setAttributes( { memberOnePosition: content } ) }
													value={ attributes.memberOnePosition }
													placeholder="Member Position"
													style={ memberPositionColor }
												/>
												<RichText
													tagName="p"
													onChange={ ( content ) => setAttributes( { memberOneDescription: content } ) }
													value={ attributes.memberOneDescription }
													placeholder="Member Description"
													style={ headingColor }
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="wp-block-column">
									<div className="col-12 col-lg-4">
										<div className="each-team-member">
											<img src={ props.attributes.memberTwoImageUrl } alt="" />
											<div className="text-cont">
												<RichText
													tagName="h3"
													onChange={ ( content ) => setAttributes( { memberTwoName: content } ) }
													value={ attributes.memberTwoName }
													placeholder="Member Name"
													style={ headingColor }
												/>
												<RichText
													tagName="h4"
													onChange={ ( content ) => setAttributes( { memberTwoPosition: content } ) }
													value={ attributes.memberTwoPosition }
													placeholder="Member Position"
													style={ memberPositionColor }
												/>
												<RichText
													tagName="p"
													onChange={ ( content ) => setAttributes( { memberTwoDescription: content } ) }
													value={ attributes.memberTwoDescription }
													placeholder="Member Description"
													style={ headingColor }
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="wp-block-column">
									<div className="col-12 col-lg-4">
										<div className="each-team-member">
											<img src={ props.attributes.memberThreeImageUrl } alt="" />
											<div className="text-cont">
												<RichText
													tagName="h3"
													onChange={ ( content ) => setAttributes( { memberThreeName: content } ) }
													value={ attributes.memberThreeName }
													placeholder="Member Name"
													style={ headingColor }
												/>
												<RichText
													tagName="h4"
													onChange={ ( content ) => setAttributes( { memberThreePosition: content } ) }
													value={ attributes.memberThreePosition }
													placeholder="Member Position"
													style={ memberPositionColor }
												/>
												<RichText
													tagName="p"
													onChange={ ( content ) => setAttributes( { memberThreeDescription: content } ) }
													value={ attributes.memberThreeDescription }
													placeholder="Member Description"
													style={ headingColor }
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div></div>
			</section>

		</Fragment>
	);
};

registerBlockType( 'cgb/ion-about-team', {
	title: __( 'Ion About Team' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'ion-blocks — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		mainHeading: {
			type: 'string',
			default: '',
		},
		description: {
			type: 'string',
			default: '',
		},
		memberOneImageUrl: {
			type: 'string',
			default: '',
		},
		memberOneImageId: {
			type: 'number',
			default: '0',
		},
		memberOneName: {
			type: 'string',
			default: '',
		},
		memberOnePosition: {
			type: 'string',
			default: '',
		},
		memberOneDescription: {
			type: 'string',
			default: '',
		},
		memberTwoImageUrl: {
			type: 'string',
			default: '',
		},
		memberTwoImageId: {
			type: 'number',
			default: '0',
		},
		memberTwoName: {
			type: 'string',
			default: '',
		},
		memberTwoPosition: {
			type: 'string',
			default: '',
		},
		memberTwoDescription: {
			type: 'string',
			default: '',
		},
		memberThreeImageUrl: {
			type: 'string',
			default: '',
		},
		memberThreeImageId: {
			type: 'number',
			default: '0',
		},
		memberThreeName: {
			type: 'string',
			default: '',
		},
		memberThreePosition: {
			type: 'string',
			default: '',
		},
		memberThreeDescription: {
			type: 'string',
			default: '',
		},
		headingColor: {
			type: 'string',
			default: '#000000',
		},
		memberPositionColor: {
			type: 'string',
			default: '#8b008b',
		},
	},
	edit: withSelect( ( select, props ) => {
		return {
			media: props.attributes.memberOneImageId ? select( 'core' ).getMedia( props.attributes.memberOneImageId ) : undefined,
			media2: props.attributes.memberTwoImageId ? select( 'core' ).getMedia( props.attributes.memberTwoImageId ) : undefined,
			media3: props.attributes.memberThreeImageId ? select( 'core' ).getMedia( props.attributes.memberThreeImageId ) : undefined,
		};
	} )( BlockEdit ),

	save: ( props ) => {
		const headingColor = {
			color: props.attributes.headingColor,
		};
		const memberPositionColor = {
			color: props.attributes.memberPositionColor,
		};

		return (

			<section className="ion-about-the-team" id="about-the-team">
				<div></div>
				<div className="container">
					<div className="inner-top-cont">
						<h2 style={ headingColor } >{ props.attributes.mainHeading }</h2>
						<p style={ headingColor } dangerouslySetInnerHTML={ { __html: props.attributes.description } } ></p>
					</div>
					<div></div>
					<div className="bottom-cont container">
						<div className="row gx-5 d-flex">
							<div className="col-12 col-lg-4">
								<div className="each-team-member">
									<img src={ props.attributes.memberOneImageUrl } alt="" />
									<div className="text-cont">
										<h3 style={ headingColor }>{ props.attributes.memberOneName }</h3>
										<h4 style={ memberPositionColor }>{ props.attributes.memberOnePosition }</h4>
										<p style={ headingColor } dangerouslySetInnerHTML={ { __html: props.attributes.memberOneDescription } } ></p>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<div className="each-team-member">
									<img src={ props.attributes.memberTwoImageUrl } alt="" />
									<div className="text-cont">
										<h3 style={ headingColor }>{ props.attributes.memberTwoName }</h3>
										<h4 style={ memberPositionColor }>{ props.attributes.memberTwoPosition }</h4>
										<p style={ headingColor } dangerouslySetInnerHTML={ { __html: props.attributes.memberTwoDescription } } ></p>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<div className="each-team-member">
									<img src={ props.attributes.memberThreeImageUrl } alt="" />
									<div className="text-cont">
										<h3 style={ headingColor }>{ props.attributes.memberThreeName }</h3>
										<h4 style={ memberPositionColor }>{ props.attributes.memberThreePosition }</h4>
										<p style={ headingColor } dangerouslySetInnerHTML={ { __html: props.attributes.memberThreeDescription } } ></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div></div>
			</section>
		);
	},
} );
