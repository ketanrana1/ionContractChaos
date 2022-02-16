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
					title="First Column Image"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									firstColoumnId: image.id,
									firstColumnImageUrl: image.url,
								} ) }
								value={ attributes.firstColoumnId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.firstColoumnId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.firstColoumnId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.firstColoumnId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', maxWidth: '100%' } } onClick={ () => setAttributes( {
									firstColoumnId: 0,
									firstColoumnImageUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>

				<PanelBody
					title="Second Column Image"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									secondColoumnId: image.id,
									secondColumnImageUrl: image.url,
								} ) }
								value={ attributes.secondColoumnId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.secondColoumnId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.secondColoumnId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.secondColoumnId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', maxWidth: '100%' } } onClick={ () => setAttributes( {
									secondColoumnId: 0,
									secondColoumnImageUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>

				<PanelBody
					title="Third Column Image"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									thirdColoumnId: image.id,
									thirdColumnImageUrl: image.url,
								} ) }
								value={ attributes.thirdColoumnId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.thirdColoumnId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.thirdColoumnId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.thirdColoumnId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', maxWidth: '100%' } } onClick={ () => setAttributes( {
									thirdColoumnId: 0,
									thirdColoumnImageUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>

				<PanelBody
					title="Fourth Column Image"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									fourthColoumnId: image.id,
									fourthColumnImageUrl: image.url,
								} ) }
								value={ attributes.fourthColoumnId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.fourthColoumnId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.fourthColoumnId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.fourthColoumnId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', maxWidth: '100%' } } onClick={ () => setAttributes( {
									fourthColoumnId: 0,
									fourthColoumnImageUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>

				<PanelBody
					title="Fifth Column Image"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									fifthColoumnId: image.id,
									fifthColumnImageUrl: image.url,
								} ) }
								value={ attributes.fifthColoumnId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.fifthColoumnId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.fifthColoumnId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.fifthColoumnId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', maxWidth: '100%' } } onClick={ () => setAttributes( {
									fifthColoumnId: 0,
									fifthColoumnImageUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>

				<PanelBody
					title="Sixth Column Image"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									sixthColoumnId: image.id,
									sixthColumnImageUrl: image.url,
								} ) }
								value={ attributes.sixthColoumnId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.sixthColoumnId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.sixthColoumnId === 0 && __( 'Choose an image', 'awp' ) }
										{ props.media6 !== undefined &&
											<ResponsiveWrapper
												naturalWidth={ props.media6.media_details.width }
												naturalHeight={ props.media6.media_details.height }>
												<img src={ props.media6.source_url } alt="icon" />
											</ResponsiveWrapper>
										}
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</PanelRow>
					<PanelRow>
						{ attributes.sixthColoumnId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', maxWidth: '100%' } } onClick={ () => setAttributes( {
									sixthColoumnId: 0,
									sixthColoumnImageUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>

				<PanelBody
					title="Seventh Column Image"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									seventhColoumnId: image.id,
									seventhColumnImageUrl: image.url,
								} ) }
								value={ attributes.seventhColoumnId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.seventhColoumnId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.seventhColoumnId === 0 && __( 'Choose an image', 'awp' ) }
										{ props.media7 !== undefined &&
											<ResponsiveWrapper
												naturalWidth={ props.media7.media_details.width }
												naturalHeight={ props.media7.media_details.height }>
												<img src={ props.media6.source_url } alt="icon" />
											</ResponsiveWrapper>
										}
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</PanelRow>
					<PanelRow>
						{ attributes.seventhColoumnId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', maxWidth: '100%' } } onClick={ () => setAttributes( {
									seventhColoumnId: 0,
									seventhColoumnImageUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>

				<PanelBody
					title="Eighth Column Image"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									eighthColoumnId: image.id,
									eighthColumnImageUrl: image.url,
								} ) }
								value={ attributes.eighthColoumnId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.eighthColoumnId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.eighthColoumnId === 0 && __( 'Choose an image', 'awp' ) }
										{ props.media8 !== undefined &&
											<ResponsiveWrapper
												naturalWidth={ props.media8.media_details.width }
												naturalHeight={ props.media8.media_details.height }>
												<img src={ props.media8.source_url } alt="icon" />
											</ResponsiveWrapper>
										}
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</PanelRow>
					<PanelRow>
						{ attributes.eighthColoumnId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', maxWidth: '100%' } } onClick={ () => setAttributes( {
									eighthColoumnId: 0,
									eighthColoumnImageUrl: '',
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
			 <div className="avoid-risks-cont-with-eight-columns">

				 <div className="wp-block-columns">
					<div className="wp-block-column">
						<div className="col-12">
							<RichText
								tagName="h2"
								onChange={ ( content ) => setAttributes( { mainHeading: content } ) }
								value={ `${ attributes.mainHeading }` }
								placeholder="Main Heading"
								className="main-heading-solutions"
								style={ textColor }
							/>
						</div>
					</div>

				 </div>

				<div className="wp-block-columns right-outer-cont">
					<div className="wp-block-column right-inner-cont">
						<img src={ props.attributes.firstColumnImageUrl } alt="icon" className="" />
						<RichText
							tagName="h2"
							onChange={ ( content ) => setAttributes( { firstColumnHeading: content } ) }
							value={ `${ attributes.firstColumnHeading }` }
							placeholder="First Column Heading"
							className="left-heading"
							style={ textColor }
						/>
						<RichText
							tagName="p"
							onChange={ ( content ) => setAttributes( { firstColumnDescription: content } ) }
							value={ `${ attributes.firstColumnDescription }` }
							placeholder="First Column Description"
							className="description-left"
							style={ textColor }
						/>
					</div>
					<div className="wp-block-column right-inner-cont">
						<img src={ props.attributes.secondColumnImageUrl } alt="icon" className="" />
						<RichText
							tagName="h2"
							onChange={ ( content ) => setAttributes( { secondColumnHeading: content } ) }
							value={ `${ attributes.secondColumnHeading }` }
							placeholder="Second Column Heading"
							className="left-heading"
							style={ textColor }
						/>
						<RichText
							tagName="p"
							onChange={ ( content ) => setAttributes( { secondColumnDescription: content } ) }
							value={ `${ attributes.secondColumnDescription }` }
							placeholder="Second Column Description"
							className="description-left"
							style={ textColor }
						/>
					</div>
					<div className="wp-block-column right-inner-cont">
						<img src={ props.attributes.thirdColumnImageUrl } alt="icon" className="" />
						<RichText
							tagName="h2"
							onChange={ ( content ) => setAttributes( { thirdColumnHeading: content } ) }
							value={ `${ attributes.thirdColumnHeading }` }
							placeholder="Third Column Heading"
							className="left-heading"
							style={ textColor }
						/>
						<RichText
							tagName="p"
							onChange={ ( content ) => setAttributes( { thirdColumnDescription: content } ) }
							value={ `${ attributes.thirdColumnDescription }` }
							placeholder="Third Column Description"
							className="description-left"
							style={ textColor }
						/>
					</div>
					<div className="wp-block-column right-inner-cont">
						<img src={ props.attributes.fourthColumnImageUrl } alt="icon" className="" />
						<RichText
							tagName="h2"
							onChange={ ( content ) => setAttributes( { fourthColumnHeading: content } ) }
							value={ `${ attributes.fourthColumnHeading }` }
							placeholder="Fourth Column Heading"
							className="left-heading"
							style={ textColor }
						/>
						<RichText
							tagName="p"
							onChange={ ( content ) => setAttributes( { fourthColumnDescription: content } ) }
							value={ `${ attributes.fourthColumnDescription }` }
							placeholder="Fourth Column Description"
							className="description-left"
							style={ textColor }
						/>
					</div>

				</div>
				<div className="wp-block-columns right-outer-cont">
					<div className="wp-block-column right-inner-cont">
						<img src={ props.attributes.fifthColumnImageUrl } alt="icon" className="" />
						<RichText
							tagName="h2"
							onChange={ ( content ) => setAttributes( { fifthColumnHeading: content } ) }
							value={ `${ attributes.fifthColumnHeading }` }
							placeholder="Fifth Column Heading"
							className="left-heading"
							style={ textColor }
						/>
						<RichText
							tagName="p"
							onChange={ ( content ) => setAttributes( { fifthColumnDescription: content } ) }
							value={ `${ attributes.fifthColumnDescription }` }
							placeholder="Fifth Column Description"
							className="description-left"
							style={ textColor }
						/>
					</div>
					<div className="wp-block-column right-inner-cont">
						<img src={ props.attributes.sixthColumnImageUrl } alt="icon" className="" />
						<RichText
							tagName="h2"
							onChange={ ( content ) => setAttributes( { sixthColumnHeading: content } ) }
							value={ `${ attributes.sixthColumnHeading }` }
							placeholder="Sixth Column Heading"
							className="left-heading"
							style={ textColor }
						/>
						<RichText
							tagName="p"
							onChange={ ( content ) => setAttributes( { sixthColumnDescription: content } ) }
							value={ `${ attributes.sixthColumnDescription }` }
							placeholder="Sixth Column Description"
							className="description-left"
							style={ textColor }
						/>
					</div>

					<div className="wp-block-column right-inner-cont">
						<img src={ props.attributes.seventhColumnImageUrl } alt="icon" className="" />
						<RichText
							tagName="h2"
							onChange={ ( content ) => setAttributes( { seventhColumnHeading: content } ) }
							value={ `${ attributes.seventhColumnHeading }` }
							placeholder="Seventh Column Heading"
							className="left-heading"
							style={ textColor }
						/>
						<RichText
							tagName="p"
							onChange={ ( content ) => setAttributes( { seventhColumnDescription: content } ) }
							value={ `${ attributes.seventhColumnDescription }` }
							placeholder="Seventh Column Description"
							className="description-left"
							style={ textColor }
						/>
					</div>

					<div className="wp-block-column right-inner-cont">
						<img src={ props.attributes.eighthColumnImageUrl } alt="icon" className="" />
						<RichText
							tagName="h2"
							onChange={ ( content ) => setAttributes( { eighthColumnHeading: content } ) }
							value={ `${ attributes.eighthColumnHeading }` }
							placeholder="Eighth Column Heading"
							className="left-heading"
							style={ textColor }
						/>
						<RichText
							tagName="p"
							onChange={ ( content ) => setAttributes( { eighthColumnDescription: content } ) }
							value={ `${ attributes.eighthColumnDescription }` }
							placeholder="Eighth Column Description"
							className="description-left"
							style={ textColor }
						/>
					</div>
				</div>
			 </div>
		</Fragment>
	);
};

registerBlockType( 'cgb/ion-avoid-risks-with-eight-columns', {
	title: __( 'Ion Avoid Risks with Eight Columns' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'ion-blocks — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		textColor: {
			type: 'string',
			default: '#000000',
		},
		firstColumnImageId: {
			type: 'number',
			default: 0,
		},
		firstColumnImageUrl: {
			type: 'string',
			default: '',
		},
		mainHeading: {
			type: 'string',
			default: '',
		},
		firstColumnHeading: {
			type: 'string',
			default: '',
		},
		firstColumnDescription: {
			type: 'string',
			default: '',
		},
		secondColumnImageId: {
			type: 'number',
			default: 0,
		},
		secondColumnImageUrl: {
			type: 'string',
			default: '',
		},
		secondColumnHeading: {
			type: 'string',
			default: '',
		},
		secondColumnDescription: {
			type: 'string',
			default: '',
		},
		thirdColumnImageId: {
			type: 'number',
			default: 0,
		},
		thirdColumnImageUrl: {
			type: 'string',
			default: '',
		},
		thirdColumnHeading: {
			type: 'string',
			default: '',
		},
		thirdColumnDescription: {
			type: 'string',
			default: '',
		},
		fourthColumnImageId: {
			type: 'number',
			default: 0,
		},
		fourthColumnImageUrl: {
			type: 'string',
			default: '',
		},
		fourthColumnHeading: {
			type: 'string',
			default: '',
		},
		fourthColumnDescription: {
			type: 'string',
			default: '',
		},
		fifthColumnImageId: {
			type: 'number',
			default: 0,
		},
		fifthColumnImageUrl: {
			type: 'string',
			default: '',
		},
		fifthColumnHeading: {
			type: 'string',
			default: '',
		},
		fifthColumnDescription: {
			type: 'string',
			default: '',
		},
		sixthColumnImageId: {
			type: 'number',
			default: 0,
		},
		sixthColumnImageUrl: {
			type: 'string',
			default: '',
		},
		sixthColumnHeading: {
			type: 'string',
			default: '',
		},
		sixthColumnDescription: {
			type: 'string',
			default: '',
		},
		seventhColumnImageId: {
			type: 'number',
			default: 0,
		},
		seventhColumnImageUrl: {
			type: 'string',
			default: '',
		},
		seventhColumnHeading: {
			type: 'string',
			default: '',
		},
		seventhColumnDescription: {
			type: 'string',
			default: '',
		},
		eighthColumnImageId: {
			type: 'number',
			default: 0,
		},
		eighthColumnImageUrl: {
			type: 'string',
			default: '',
		},
		eighthColumnHeading: {
			type: 'string',
			default: '',
		},
		eighthColumnDescription: {
			type: 'string',
			default: '',
		},

	},
	edit: withSelect( ( select, props ) => {
		return {
			media: props.attributes.firstColumnImageId ? select( 'core' ).getMedia( props.attributes.firstColumnImageId ) : undefined,
			media2: props.attributes.secondColumnImageId ? select( 'core' ).getMedia( props.attributes.secondColumnImageId ) : undefined,
			media3: props.attributes.thirdImageId ? select( 'core' ).getMedia( props.attributes.thirdImageId ) : undefined,
			media4: props.attributes.fourthImageId ? select( 'core' ).getMedia( props.attributes.fourthImageId ) : undefined,
			media5: props.attributes.fifthImageId ? select( 'core' ).getMedia( props.attributes.fifthImageId ) : undefined,
			media6: props.attributes.sixthImageId ? select( 'core' ).getMedia( props.attributes.sixthImageId ) : undefined,
			media7: props.attributes.seventhImageId ? select( 'core' ).getMedia( props.attributes.seventhImageId ) : undefined,
			media8: props.attributes.eightImageId ? select( 'core' ).getMedia( props.attributes.eightImageId ) : undefined,
		};
	} )( BlockEdit ),
	save: ( props ) => {
		const textColor = {
			color: props.attributes.textColor,
		};

		return (

			<section className="avoid-risks-cont-with-eight-columns">
				<div className="container">
					<div className="row">
						<div className="col-12 right-outer-cont container">
							<div className="row gx-5 d-flex">
								<div className="col-12">
									<h3 className="main-heading-solutions" style={ textColor }>{ props.attributes.mainHeading }</h3>
								</div>
								<div className="col-12 col-lg-4 col-xl-3">
									<div className="right-inner-cont p-3">
										<img src={ props.attributes.firstColumnImageUrl } alt="icon" />
										<h2 style={ textColor }> { props.attributes.firstColumnHeading }</h2>
										<p style={ textColor } dangerouslySetInnerHTML={ { __html: props.attributes.firstColumnDescription } } ></p>
									</div>
								</div>
								<div className="col-12 col-lg-4 col-xl-3">
									<div className="right-inner-cont p-3">
										<img src={ props.attributes.secondColumnImageUrl } alt="icon" />
										<h2 style={ textColor }> { props.attributes.secondColumnHeading }</h2>
										<p style={ textColor } dangerouslySetInnerHTML={ { __html: props.attributes.secondColumnDescription } } ></p>
									</div>
								</div>
								<div className="col-12 col-lg-4 col-xl-3">
									<div className="right-inner-cont p-3">
										<img src={ props.attributes.thirdColumnImageUrl } alt="icon" />
										<h2 style={ textColor }> { props.attributes.thirdColumnHeading }</h2>
										<p style={ textColor } dangerouslySetInnerHTML={ { __html: props.attributes.thirdColumnDescription } } ></p>
									</div>
								</div>
								<div className="col-12 col-lg-4 col-xl-3">
									<div className="right-inner-cont p-3">
										<img src={ props.attributes.fourthColumnImageUrl } alt="icon" />
										<h2 style={ textColor }> { props.attributes.fourthColumnHeading }</h2>
										<p style={ textColor } dangerouslySetInnerHTML={ { __html: props.attributes.fourthColumnDescription } } ></p>
									</div>
								</div>
								<div className="col-12 col-lg-4 col-xl-3">
									<div className="right-inner-cont p-3">
										<img src={ props.attributes.fifthColumnImageUrl } alt="icon" />
										<h2 style={ textColor }> { props.attributes.fifthColumnHeading }</h2>
										<p style={ textColor } dangerouslySetInnerHTML={ { __html: props.attributes.fifthColumnDescription } } ></p>
									</div>
								</div>
								<div className="col-12 col-lg-4 col-xl-3">
									<div className="right-inner-cont p-3">
										<img src={ props.attributes.sixthColumnImageUrl } alt="icon" />
										<h2 style={ textColor }> { props.attributes.sixthColumnHeading }</h2>
										<p style={ textColor } dangerouslySetInnerHTML={ { __html: props.attributes.sixthColumnDescription } } ></p>
									</div>
								</div>
								<div className="col-12 col-lg-4 col-xl-3">
									<div className="right-inner-cont p-3">
										<img src={ props.attributes.seventhColumnImageUrl } alt="icon" />
										<h2 style={ textColor }> { props.attributes.seventhColumnHeading }</h2>
										<p style={ textColor } dangerouslySetInnerHTML={ { __html: props.attributes.seventhColumnDescription } } ></p>
									</div>
								</div>
								<div className="col-12 col-lg-4 col-xl-3">
									<div className="right-inner-cont p-3">
										<img src={ props.attributes.eighthColumnImageUrl } alt="icon" />
										<h2 style={ textColor }> { props.attributes.eighthColumnHeading }</h2>
										<p style={ textColor } dangerouslySetInnerHTML={ { __html: props.attributes.eighthColumnDescription } } ></p>
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
