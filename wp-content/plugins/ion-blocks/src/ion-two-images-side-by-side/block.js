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
const { InspectorControls, MediaUploadCheck, MediaUpload } = wp.editor;
const { PanelBody, PanelRow, Button, ResponsiveWrapper } = wp.components;
const { withSelect } = wp.data;

const BlockEdit = ( props ) => {
	const { attributes, setAttributes } = props;

	return (
		<Fragment>
			<InspectorControls>

				<PanelBody
					title="First Image"
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
						{ attributes.mediaId1 !== 0 &&
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
					title="Second Image"
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
						{ attributes.mediaId2 !== 0 &&
							<MediaUploadCheck>
								<Button style={ { textAlign: 'center', display: 'block', width: '100%' } } onClick={ () => setAttributes( {
									imageId2: 0,
									imageUrl2: '',
								} ) } isLink isDestructive>{ __( 'Remove image', 'awp' ) }</Button>
							</MediaUploadCheck>
						}
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<section className="ion-two-images-side-by-side container">
				<div className="wp-block-columns row">
					<div className="wp-block-column col-12 col-md-6">
						<img src={ props.attributes.imageUrl1 } alt="" />
					</div>
					<div className="wp-block-column col-12 col-md-6">
						<img src={ props.attributes.imageUrl2 } alt="" />
					</div>
				</div>
			</section>
		</Fragment>
	);
};

registerBlockType( 'cgb/ion-two-images-side-by-side', {
	title: __( 'Ion Two images side by side' ),
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
	},
	edit: withSelect( ( select, props ) => {
		return {
			media: props.attributes.imageId1 ? select( 'core' ).getMedia( props.attributes.imageId1 ) : undefined,
			media2: props.attributes.imageId2 ? select( 'core' ).getMedia( props.attributes.imageId2 ) : undefined,
		};
	} )( BlockEdit ),
	save: ( props ) => {
		return (
			<section className="ion-two-images-side-by-side">
				<div className="row">
					<div className="col-12 pl-md-0 col-md-6">
						<img src={ props.attributes.imageUrl1 } alt="" />
					</div>
					<div className="col-12 pr-md-0 col-md-6">
						<img src={ props.attributes.imageUrl2 } alt="" />
					</div>
				</div>
			</section>
		);
	},
} );
