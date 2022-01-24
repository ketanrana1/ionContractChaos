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
	const descriptionColor = {
		color: attributes.descriptionColor,
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title="Icon Image on Left"
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
								<Button style={ { textAlign: 'center', display: 'block', maxWidth: '100%' } } onClick={ () => setAttributes( {
									leftImageId: 0,
									leftImageUrl: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>
				<PanelBody
					title="Icon Image on Right"
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => setAttributes( {
									rightImageId: image.id,
									rightImageUrl: image.url,
								} ) }
								value={ attributes.rightImageId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={ attributes.rigthImageId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
										onClick={ open }
									>
										{ attributes.rightImageId === 0 && __( 'Choose an image', 'awp' ) }
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
						{ attributes.rightImageId !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
									rightImageId: 0,
									rightImageUrl: '',
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
							color={ attributes.heading }
							disableAlpha
							onChangeComplete={ ( value ) => setAttributes( { headingColor: value.hex } ) }
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
			 </InspectorControls>
			 <div className="wp-block-columns avoid-risks-cont">
				<div className="wp-block-column left-cont">
					<RichText
						tagName="h1"
						onChange={ ( content ) => setAttributes( { mainHeading: content } ) }
						value={ `${ attributes.mainHeading }` }
						placeholder="Main Heading"
						className="main-heading"
						style={ headingColor }
					/>
					<RichText
						tagName="p"
						onChange={ ( content ) => setAttributes( { description: content } ) }
						value={ `${ attributes.description }` }
						placeholder="Description"
						className="description"
						style={ descriptionColor }
					/>
				</div>
				<div className="wp-block-column right-outer-cont container">
					<div className="wp-block-columns">
						<div className="wp-block-column right-inner-cont">
							<img src={ props.attributes.leftImageUrl } alt="" className="" />
							<RichText
								tagName="h2"
								onChange={ ( content ) => setAttributes( { leftHeading: content } ) }
								value={ `${ attributes.leftHeading }` }
								placeholder="Heading on Left"
								className="left-heading"
								style={ headingColor }
							/>
							<RichText
								tagName="p"
								onChange={ ( content ) => setAttributes( { leftDescription: content } ) }
								value={ `${ attributes.leftDescription }` }
								placeholder="Description on Left"
								className="description-left"
								style={ descriptionColor }
							/>
						</div>
						<div className="wp-block-column right-inner-cont" >
							<img src={ props.attributes.rightImageUrl } alt="" className="" />
							<RichText
								tagName="h2"
								onChange={ ( content ) => setAttributes( { rightHeading: content } ) }
								value={ `${ attributes.rightHeading }` }
								placeholder="Heading on right"
								className="right-heading"
								style={ headingColor }
							/>
							<RichText
								tagName="p"
								onChange={ ( content ) => setAttributes( { rightDescription: content } ) }
								value={ `${ attributes.rightDescription }` }
								placeholder="Description on Right"
								className="description-right"
								style={ descriptionColor }
							/>
						</div>
					</div>
				</div>
			 </div>
		</Fragment>
	);
};

registerBlockType( 'cgb/ion-avoid-costly-risks', {
	title: __( 'Ion Avoid Costly Supply Chain Risks' ),
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
			default: 'Heading',
		},
		headingColor: {
			type: 'string',
			default: '#000000',
		},
		description: {
			description: 'string',
			default: 'Description',
		},
		descriptionColor: {
			type: 'string',
			default: '#000000',
		},
		leftImageId: {
			type: 'number',
			default: 0,
		},
		leftImageUrl: {
			type: 'string',
			default: '',
		},
		leftHeading: {
			type: 'string',
			default: '',
		},
		leftDescription: {
			type: 'string',
			default: '',
		},
		rightImageId: {
			type: 'number',
			default: 0,
		},
		rightImageUrl: {
			type: 'string',
			default: '',
		},
		rightHeading: {
			type: 'string',
			default: '',
		},
		rightDescription: {
			type: 'string',
			default: '',
		},
	},
	edit: withSelect( ( select, props ) => {
		return {
			media: props.attributes.leftImageId ? select( 'core' ).getMedia( props.attributes.leftImageId ) : undefined,
			media2: props.attributes.rightImageId ? select( 'core' ).getMedia( props.attributes.rightImageId ) : undefined,
		};
	} )( BlockEdit ),
	save: ( props ) => {
		const headingColor = {
			color: props.attributes.headingColor,
		};
		const descriptionColor = {
			color: props.attributes.descriptionColor,
		};

		return (

			<section className="avoid-risks-cont">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-5 left-cont">
							<h1 style={ headingColor }>{ props.attributes.mainHeading }</h1>
							<p style={ descriptionColor }>{ props.attributes.description }</p>
						</div>
						<div className="col-12 col-lg-7 right-outer-cont container">
							<div className="row gx-5 d-flex">
								<div className="col-12 col-lg-6">
									<div className="right-inner-cont p-3">
										<img src={ props.attributes.leftImageUrl } alt="icon" />
										<h2 style={ headingColor }> { props.attributes.leftHeading }</h2>
										<p style={ descriptionColor } >{ props.attributes.leftDescription }</p>
									</div>
								</div>
								<div className="col-12 col-lg-6">
									<div className="right-inner-cont p-3">
										<img src={ props.attributes.rightImageUrl } alt="icon" />
										<h2 style={ headingColor } >{ props.attributes.rightHeading }</h2>
										<p style={ descriptionColor } >{ props.attributes.rightDescription }</p>
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
