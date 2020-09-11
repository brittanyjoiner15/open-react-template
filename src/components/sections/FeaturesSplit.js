import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'How it works',
    paragraph: "It's simple. With just a few easy steps, you can get matched with your cause."
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div id="how" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Step 1
                  </div>
                <h3 className="mt-0 mb-12">
                  Fill out the intake form
                  </h3>
                <p className="m-0">
                  Answer a few questions, and give as much (or as little) detail as you want. Takes less than 5 minutes, and costs nothing.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://trello-attachments.s3.amazonaws.com/5f5adf1ac079cd2374a402b3/5f5af1628db6ac341351d618/dc0617588f4a397bb1b5b6d4463fd605/image.png'
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Step 2
                  </div>
                <h3 className="mt-0 mb-12">
                  I'll do the hard work
                  </h3>
                <p className="m-0">
                  Upon reviewing your intake, I'll be in touch with pricing details and ask any follow up questions to help pick the right cause. Then I'll do extensive research to find charities that fit your critiera. I'll then vet those causes to make sure they're legit and worthy of your time and money.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://media.giphy.com/media/E6jscXfv3AkWQ/giphy.gif'
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Step 3
                  </div>
                <h3 className="mt-0 mb-12">
                  Meet your match!
                  </h3>
                <p className="m-0">
                  We'll give you a list of a couple charities to start with (to avoid too many options) and we'll walk you through the specific reasons we chose each one.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://trello-attachments.s3.amazonaws.com/5f5adf1ac079cd2374a402b3/5f5af1628db6ac341351d618/174497aff8ad1a7d8e45c32aaa946587/list.png'
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;