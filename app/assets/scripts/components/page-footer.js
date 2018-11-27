'use strict';
import React from 'react';
import { get } from 'object-path';
import { window } from 'global';

var PageFooter = React.createClass({
  displayName: 'PageFooter',

  getInitialState: function () {
    return {'email': ''};
  },

  propTypes: {
    lang: React.PropTypes.string
  },

  onChange: function (e) {
    this.setState({
      email: e.target.value
    });
  },

  render: function () {
    const t = get(window.t, [this.props.lang, 'footer'], {});
    return (
      <footer className='page__footer' role='contentinfo'>
        <div className='inner'>
          <div className='contact'>
            <p className='contact__item'><a title='contact us' href='mailto:ifpri-egypt@cgiar.org, abdulwahedmukred@gmail.com' className='link--primary'><span>{t.contact_link}</span></a> {t.contact_sentence}.</p>
          </div>
          <div>
            <div className='logos'>
              <ul className='logos__list'>
                <li><a title='Visit sponsor webpage' className='logos__item' target='_blank' href='http://www.ifpri.org/'><img src='assets/graphics/content/iflri.png' alt='View sponsor website'/></a></li>
                <li><a title='Visit sponsor webpage' className='logos__item' target='_blank' href='http://scalingupnutrition.org/sun-countries/yemen/'><img src='assets/graphics/content/logo-scalingup.jpg' alt='View sponsor website'/></a></li>
                <li><a title='Visit sponsor webpage' className='logos__item logo__item--fsts' target='_blank' href='http://www.fsts-gov.com/?language=english'><img src='assets/graphics/content/fsts-logo.png' alt='View sponsor website'/></a></li>
                <li><a title='Visit sponsor webpage' className='logos__item' target='_blank' href='https://www.giz.de/en/worldwide/369.html'><img src='assets/graphics/content/giz-red-logo.jpg' alt='View sponsor website'/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = PageFooter;
