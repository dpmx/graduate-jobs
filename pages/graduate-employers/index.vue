<template>
  <div
    class="html not-front not-logged-in one-sidebar sidebar-first page-graduate-employers page-browse-employers page-search-jobs jquery-once-1-processed ga-not-mobile eu-cookie-compliance-processed"
  >
    <div class="l-page l--col-2">
      <Header />
      <div class="l-breadcrumbs">
        <h2 class="element-invisible">You are here</h2>
        <div class="breadcrumb">
          <div class="inline odd first" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
            <a href="https://gradsingapore.com/" itemprop="url">
              <span itemprop="title">Home</span>
            </a>
          </div>
          <span class="delimiter"></span>
          <div class="inline even last" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
            <span itemprop="title">Graduate Employers</span>
          </div>
        </div>
      </div>
      <div class="l-main">
        <div class="region region-sidebar-first">
          <div id="block-gradaus-search-filters-title" class="block block-gradaus-search">
            <span class="block-title">Search &amp; Filter</span>

            <div class="content"></div>
          </div>
          <div id="block-views-exp-browse-employers-list-page" class="block block-views">
            <div class="content">
              <div
                id="clientsidevalidation-views-exposed-form-browse-employers-list-page-errors"
                class="messages error clientside-error"
                style="display: none;"
              >
                <ul style="display: none;"></ul>
              </div>
              <form
                action="https://gradsingapore.com/graduate-employers"
                method="get"
                id="views-exposed-form-browse-employers-list-page"
                accept-charset="UTF-8"
                novalidate="novalidate"
              >
                <div>
                  <div class="views-exposed-form">
                    <div class="views-exposed-widgets clearfix">
                      <div
                        id="edit-sector-wrapper"
                        class="views-exposed-widget views-widget-filter-taxonomy_vocabulary_71_tid"
                      >
                        <label for="edit-sector">Industry Sector</label>
                        <div class="views-widget">
                          <div class="form-item form-type-select form-item-sector">
                            <select
                              id="edit-sector"
                              name="sector"
                              class="form-select valid"
                              aria-invalid="false"
                            >
                              <option value="All" selected="selected">- Any -</option>
                              <option value="14816">
                                Accountancy
                                and Financial Management
                              </option>
                              <option value="14841">
                                Banking and
                                Financial Services
                              </option>
                              <option value="14821">
                                Civil and
                                Structural Engineering
                              </option>
                              <option value="14826">
                                Construction
                                and Building Services
                              </option>
                              <option value="14886">Consulting</option>
                              <option value="14831">
                                Consumer Goods
                                and FMCG
                              </option>
                              <option value="24746">
                                Energy, Oil
                                and Gas, Utilities
                              </option>
                              <option value="14836">Engineering</option>
                              <option value="14846">
                                Healthcare and
                                Pharmaceuticals
                              </option>
                              <option value="14851">
                                Hospitality,
                                Leisure, and Travel
                              </option>
                              <option value="14856">
                                HR and
                                Recruitment
                              </option>
                              <option value="24741">
                                Insurance and
                                Risk Management
                              </option>
                              <option value="14861">
                                Investment
                                Banking and Investment
                              </option>
                              <option value="14866">
                                IT and
                                Technology
                              </option>
                              <option value="14871">Legal Services</option>
                              <option value="14876">
                                Logistics,
                                Aviation, and Supply Chain
                              </option>
                              <option value="14881">
                                Management and
                                Business
                              </option>
                              <option value="14891">
                                Marketing,
                                Advertising, and PR
                              </option>
                              <option value="14896">
                                Media,
                                Journalism, and Publishing
                              </option>
                              <option value="14901">
                                Property and
                                Real Estate
                              </option>
                              <option value="14906">Public Sector</option>
                              <option value="14911">
                                Retail and
                                Merchandising
                              </option>
                              <option value="14916">Sales</option>
                              <option value="14921">
                                Science and
                                Research
                              </option>
                              <option value="14926">
                                SMEs and
                                Start-ups
                              </option>
                              <option value="14931">
                                Teaching and
                                Education
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div
                        id="edit-region-wrapper"
                        class="views-exposed-widget views-widget-filter-taxonomy_vocabulary_73_tid"
                      >
                        <label for="edit-region">Location</label>
                        <div class="views-widget">
                          <div class="form-item form-type-select form-item-region">
                            <select
                              id="edit-region"
                              name="region"
                              class="form-select valid"
                              aria-invalid="false"
                            >
                              <option value="All" selected="selected">- Any -</option>
                              <option value="24406">Africa</option>
                              <option value="24976">New Zealand</option>
                              <option value="24411">
                                Asia - Middle
                                East
                              </option>
                              <option value="24416">Asia - Others</option>
                              <option value="24421">Australia</option>
                              <option value="24426">China</option>
                              <option value="24431">Europe</option>
                              <option value="24436">Hong Kong</option>
                              <option value="24441">India</option>
                              <option value="24446">Indonesia</option>
                              <option value="24451">Japan</option>
                              <option value="24456">Malaysia</option>
                              <option value="24461">North America</option>
                              <option value="24466">Philippines</option>
                              <option value="24756">Singapore</option>
                              <option value="24471">
                                Singapore -
                                Central
                              </option>
                              <option value="24476">
                                Singapore -
                                East
                              </option>
                              <option value="24481">
                                Singapore -
                                North
                              </option>
                              <option value="24486">
                                Singapore -
                                North-East
                              </option>
                              <option value="24491">
                                Singapore -
                                West
                              </option>
                              <option value="24496">South America</option>
                              <option value="24501">Thailand</option>
                              <option value="24506">Vietnam</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div
                        id="edit-title-wrapper"
                        class="views-exposed-widget views-widget-filter-title"
                      >
                        <label for="edit-title">Organisation Name</label>
                        <div class="views-widget">
                          <div class="form-item form-type-textfield form-item-title">
                            <input
                              type="text"
                              id="edit-title"
                              name="title"
                              value
                              size="30"
                              maxlength="128"
                              class="form-text"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        id="edit-field-top-100-value-wrapper"
                        class="views-exposed-widget views-widget-filter-field_top_100_value"
                      >
                        <div class="views-widget">
                          <div class="form-item form-type-select form-item-field-top-100-value">
                            <div
                              class="form-checkboxes bef-select-as-checkboxes bef-required-filter-processed"
                            >
                              <div class="bef-checkboxes">
                                <div
                                  class="form-item form-type-bef-checkbox form-item-edit-field-top-100-value-1"
                                >
                                  <input
                                    type="checkbox"
                                    name="field_top_100_value[]"
                                    id="edit-field-top-100-value-1"
                                    value="1"
                                  />
                                  <label class="option" for="edit-field-top-100-value-1">
                                    Only
                                    show the top 100
                                    ranked
                                    employers
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="views-exposed-widget views-submit-button">
                        <input
                          type="submit"
                          id="edit-submit-browse-employers-list"
                          name
                          value="Search"
                          class="form-submit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="l-content" role="main">
          <a id="main-content"></a>
          <h1>Browse Graduate Employers</h1>
          <div class="region region-content">
            <div id="block-system-main" class="block block-system">
              <div class="content">
                <div
                  class="view view-browse-employers-list view-id-browse_employers_list view-display-id-page view-dom-id-ec16a28a86dfe6497760c078468a7602"
                >
                  <div class="view-header">Showing: 174 of 174 results</div>

                  <div class="view-content">
                    <div class="views-row views-row-1 views-row-odd views-row-first">
                      <div
                        about="/graduate-employers/3m"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/3m">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_3M_2018_0.jpg"
                                      width="1600"
                                      height="858"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/3m">3M</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Science. Applied to
                                  Life.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/consumer-goods-and-fmcg"
                                    >
                                      Consumer
                                      Goods and
                                      FMCG
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-2 views-row-even">
                      <div
                        about="/graduate-employers/3radical"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/3radical">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_3radical_2018.jpg"
                                      width="217"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/3radical"
                                  >3radical</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  The Audience Engagement
                                  Platform
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-3 views-row-odd">
                      <div
                        about="/graduate-employers/accenture-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation node-promoted view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/accenture-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Accenture_Logo_2020.png"
                                      width="140"
                                      height="37"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/accenture-pte-ltd"
                                  >
                                    Accenture
                                    Pte Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  High performance.
                                  Delivered.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-4 views-row-even">
                      <div
                        about="/graduate-employers/accountant-generals-department"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/accountant-generals-department"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Accountant General&#39;s Department_2018.png"
                                      width="118"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/accountant-generals-department"
                                  >
                                    Accountant
                                    General's
                                    Department
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Putting finance at the
                                  heart of decision-making
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/accountancy-and-financial-management"
                                    >
                                      Accountancy
                                      and
                                      Financial
                                      Management
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-5 views-row-odd">
                      <div
                        about="/graduate-employers/ace-pointer"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ace-pointer"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo-Ace-Pointer-2019_0.png"
                                      width="541"
                                      height="630"
                                      alt="Ace Pointer"
                                      title="Ace Pointer"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ace-pointer"
                                  >
                                    Ace
                                    Pointer
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Crafting Impactful
                                  Digital Solutions
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/smes-and-start-ups">
                                      SMEs
                                      and
                                      Start-ups
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-6 views-row-even">
                      <div
                        about="/graduate-employers/acronis-asia-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/acronis-asia-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gs.com-Acronis.png"
                                      width="140"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/acronis-asia-pte-ltd"
                                  >
                                    Acronis
                                    Asia Pte Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Founded in Singapore in
                                  2003 and incorporated in
                                  Switzerland in 2008,
                                  Acronis now has more
                                  than 1,500 employees in
                                  33 locations in 18
                                  countries.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-7 views-row-odd">
                      <div
                        about="/graduate-employers/aecom"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/aecom">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_AECOM_2018.png"
                                      width="217"
                                      height="51"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/aecom">AECOM</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  At AECOM, we believe
                                  infrastructure creates
                                  opportunity for
                                  everyone.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/civil-and-structural-engineering"
                                    >
                                      Civil
                                      and
                                      Structural
                                      Engineering
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/construction-and-building-services"
                                    >
                                      Construction
                                      and Building
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-8 views-row-even">
                      <div
                        about="/graduate-employers/aia-singapore-private-limited"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation node-promoted view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/aia-singapore-private-limited"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_AIA_2018.png"
                                      width="131"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/aia-singapore-private-limited"
                                  >
                                    AIA
                                    Singapore Private
                                    Limited
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Helping Singaporeans
                                  lead longer, healthier,
                                  better lives so that
                                  they can live life
                                  confidently.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/insurance-and-risk-management"
                                    >
                                      Insurance
                                      and Risk
                                      Management
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-9 views-row-odd">
                      <div
                        about="/graduate-employers/alexandra-health-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/alexandra-health-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Khoo Teck Puat Hospital_2017.png"
                                      width="170"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/alexandra-health-pte-ltd"
                                  >
                                    Alexandra
                                    Health Pte Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Help our people live a
                                  long, healthy life and
                                  support them with
                                  thoughtful, dignified
                                  care to the end.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/healthcare-and-pharmaceuticals"
                                    >
                                      Healthcare
                                      and
                                      Pharmaceuticals
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-10 views-row-even">
                      <div
                        about="/graduate-employers/amazon"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/amazon">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Amazon_2017.jpg"
                                      width="130"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/amazon"
                                  >Amazon</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Amazon.com, Inc. engages
                                  in the provision of
                                  online retail shopping
                                  services.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/consumer-goods-and-fmcg"
                                    >
                                      Consumer
                                      Goods and
                                      FMCG
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-11 views-row-odd">
                      <div
                        about="/graduate-employers/attorney-generals-chambers"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/attorney-generals-chambers"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_AGC_2017_0.jpg"
                                      width="108"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/attorney-generals-chambers"
                                  >
                                    Attorney-General's
                                    Chambers
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Guardian of the Public
                                  Interest; Steward of the
                                  Rule of Law
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a href="https://gradsingapore.com/sectors/legal-services">
                                      Legal
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-12 views-row-even">
                      <div
                        about="/graduate-employers/auditor-generals-office-ago"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/auditor-generals-office-ago"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Auditor-General&#39;s Office_2018.png"
                                      width="217"
                                      height="55"
                                      alt="Auditor-General&#39;s Office (AGO)"
                                      title="Auditor-General&#39;s Office (AGO)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/auditor-generals-office-ago"
                                  >
                                    Auditor-General's
                                    Office (AGO)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Our Vision is to be a
                                  respected national audit
                                  institution –
                                  Professional,
                                  Independent, Effective.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/accountancy-and-financial-management"
                                    >
                                      Accountancy
                                      and
                                      Financial
                                      Management
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-13 views-row-odd">
                      <div
                        about="/graduate-employers/avensys-consulting-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/avensys-consulting-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo-Avensys-2019.png"
                                      width="140"
                                      height="45"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/avensys-consulting-pte-ltd"
                                  >
                                    Avensys
                                    Consulting Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To empower our clients
                                  with value-driven
                                  solutions and services
                                  to reach their digital
                                  transformation goals
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                  <li>
                                    <a href="https://gradsingapore.com/sectors/hr-and-recruitment">
                                      HR
                                      and
                                      Recruitment
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-14 views-row-even">
                      <div
                        about="/graduate-employers/axa-insurance-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/axa-insurance-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_AXA_2018_0.png"
                                      width="70"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/axa-insurance-pte-ltd"
                                  >
                                    AXA
                                    Insurance Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  There is no great
                                  company without a great
                                  purpose: Ours is to
                                  empower people to live a
                                  better life.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/insurance-and-risk-management"
                                    >
                                      Insurance
                                      and Risk
                                      Management
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-15 views-row-odd">
                      <div
                        about="/graduate-employers/barclays-bank-plc"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/barclays-bank-plc"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Barclays_2018.gif"
                                      width="217"
                                      height="37"
                                      alt="Barclays"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/barclays-bank-plc"
                                  >
                                    Barclays
                                    Bank PLC
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Barclays is a company of
                                  opportunity makers
                                  working together to help
                                  people rise – customers,
                                  clients, colleagues and
                                  society.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/investment-banking-and-investment"
                                    >
                                      Investment
                                      Banking and
                                      Investment
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-16 views-row-even">
                      <div
                        about="/graduate-employers/bdo-llp"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/bdo-llp">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_BDO_2017.png"
                                      width="217"
                                      height="70"
                                      alt="BDO"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/bdo-llp">
                                    BDO
                                    LLP
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To be the leader of
                                  exceptional client
                                  service.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/accountancy-and-financial-management"
                                    >
                                      Accountancy
                                      and
                                      Financial
                                      Management
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-17 views-row-odd">
                      <div
                        about="/graduate-employers/bnp-paribas"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/bnp-paribas"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_BNP Paribas_2017.jpg"
                                      width="154"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/bnp-paribas"
                                  >
                                    BNP
                                    Paribas
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  The bank for a changing
                                  world.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-18 views-row-even">
                      <div
                        about="/graduate-employers/bosch"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/bosch">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Bosch_2017.png"
                                      width="215"
                                      height="70"
                                      alt="Bosch"
                                      title="Bosch"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/bosch">Bosch</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  We help you shape the
                                  future.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-19 views-row-odd">
                      <div
                        about="/graduate-employers/burpple"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/burpple">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo-Burpple-2019.png"
                                      width="3227"
                                      height="1037"
                                      alt="Burpple"
                                      title="Burpple"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/burpple"
                                  >Burpple</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Eating out is an
                                  adventure.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/media-journalism-and-publishing"
                                    >
                                      Media,
                                      Journalism,
                                      and
                                      Publishing
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-20 views-row-even">
                      <div
                        about="/graduate-employers/capitaland-limited"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/capitaland-limited"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Capitaland_2017.png"
                                      width="157"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/capitaland-limited"
                                  >
                                    CapitaLand
                                    Limited
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Building People.
                                  Building Communities.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/property-and-real-estate"
                                    >
                                      Property
                                      and Real
                                      Estate
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-21 views-row-odd">
                      <div
                        about="/graduate-employers/carlsberg-singapore-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/carlsberg-singapore-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Carlsberg_2018.png"
                                      width="153"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/carlsberg-singapore-pte-ltd"
                                  >
                                    Carlsberg
                                    Singapore Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  We pursue perfection and
                                  strive to brew better
                                  beers that stand at the
                                  heart of moments and
                                  bring people together.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/consumer-goods-and-fmcg"
                                    >
                                      Consumer
                                      Goods and
                                      FMCG
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-22 views-row-even">
                      <div
                        about="/graduate-employers/center-for-competency-based-learning-development-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/center-for-competency-based-learning-development-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_CBLD_2017_2.jpg"
                                      width="217"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/center-for-competency-based-learning-development-pte-ltd"
                                  >
                                    Center
                                    For
                                    Competency-Based
                                    Learning &amp;
                                    Development Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To be the leader in
                                  competency-based
                                  learning and development
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/teaching-and-education"
                                    >
                                      Teaching
                                      and
                                      Education
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-23 views-row-odd">
                      <div
                        about="/graduate-employers/central-provident-fund-board-cpfb"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/central-provident-fund-board-cpfb"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_CPF_2018.png"
                                      width="70"
                                      height="70"
                                      alt="Central Provident Fund Board (CPFB)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/central-provident-fund-board-cpfb"
                                  >
                                    Central
                                    Provident Fund
                                    Board (CPFB)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To enable Singaporeans
                                  to have a secure
                                  retirement, through
                                  lifelong income,
                                  healthcare financing and
                                  home financing.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-24 views-row-even">
                      <div
                        about="/graduate-employers/cfld-international"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/cfld-international"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_CFLD_2017.jpg"
                                      width="109"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/cfld-international"
                                  >
                                    CFLD
                                    International
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  CFLD International is
                                  one of Asia's Top 50
                                  Listed Companies* and an
                                  international leader in
                                  providing integrated
                                  urban developments.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/civil-and-structural-engineering"
                                    >
                                      Civil
                                      and
                                      Structural
                                      Engineering
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/construction-and-building-services"
                                    >
                                      Construction
                                      and Building
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/property-and-real-estate"
                                    >
                                      Property
                                      and Real
                                      Estate
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-25 views-row-odd">
                      <div
                        about="/graduate-employers/changi-airport-group"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/changi-airport-group"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_CAG_2017.jpg"
                                      width="154"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/changi-airport-group"
                                  >
                                    Changi
                                    Airport Group
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To be the world's
                                  leading airport company,
                                  growing a safe, secure
                                  and vibrant air hub in
                                  Singapore and enhancing
                                  the communities we serve
                                  worldwide.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/hospitality-leisure-and-travel"
                                    >
                                      Hospitality,
                                      Leisure, and
                                      Travel
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-26 views-row-even">
                      <div
                        about="/graduate-employers/charles-keith-international-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/charles-keith-international-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Charles &amp; Keith_2017.png"
                                      width="217"
                                      height="37"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/charles-keith-international-pte-ltd"
                                  >
                                    Charles
                                    &amp; Keith
                                    International Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  CHARLES &amp; KEITH
                                  Group owns two fashion
                                  brands – CHARLES &amp;
                                  KEITH and PEDRO. The
                                  Group is headquartered
                                  in Singapore and
                                  operates more than 600
                                  stores.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/retail-and-merchandising"
                                    >
                                      Retail
                                      and
                                      Merchandising
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-27 views-row-odd">
                      <div
                        about="/graduate-employers/cimb-bank"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/cimb-bank">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_CIMB_2017.jpg"
                                      width="189"
                                      height="60"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/cimb-bank">
                                    CIMB
                                    Bank
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Our Rich Heritage CIMB
                                  Group’s roots can be
                                  traced back nearly 90
                                  years. From humble
                                  beginnings, we have
                                  grown alongside ASEAN –
                                  from a niche merchant
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-28 views-row-even">
                      <div
                        about="/graduate-employers/cio-network-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/cio-network-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_CIO Network_2017.jpg"
                                      width="70"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/cio-network-pte-ltd"
                                  >
                                    CIO
                                    Network Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Bringing Digital
                                  Executives together to
                                  grow and learn from
                                  their experience and
                                  engagement with the
                                  OpenGov platform.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-29 views-row-odd">
                      <div
                        about="/graduate-employers/circleslife"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/circleslife"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_logo_CirclesLife_2019_0.png"
                                      width="4000"
                                      height="1001"
                                      alt="Circles.Life"
                                      title="Circles.Life"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/circleslife"
                                  >Circles.Life</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Asia’s first fully
                                  digital telco and
                                  consumer company
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/consumer-goods-and-fmcg"
                                    >
                                      Consumer
                                      Goods and
                                      FMCG
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-30 views-row-even">
                      <div
                        about="/graduate-employers/citi-singapore"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/citi-singapore"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Citi_2018.png"
                                      width="121"
                                      height="70"
                                      alt="Citi Singapore"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/citi-singapore"
                                  >
                                    Citi
                                    Singapore
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Citi's mission is to
                                  serve as a trusted
                                  partner to our clients
                                  by responsibly providing
                                  financial services that
                                  enable growth and
                                  economic progress.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-31 views-row-odd">
                      <div
                        about="/graduate-employers/civil-aviation-authority-of-singapore-caas"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/civil-aviation-authority-of-singapore-caas"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_CAAS_2017_0.png"
                                      width="168"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/civil-aviation-authority-of-singapore-caas"
                                  >
                                    Civil
                                    Aviation Authority
                                    of Singapore
                                    (CAAS)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Enabling opportunities
                                  through aviation
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-32 views-row-even">
                      <div
                        about="/graduate-employers/civil-service-college-csc"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/civil-service-college-csc"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Civil Service College_2018.png"
                                      width="74"
                                      height="70"
                                      alt="Civil Service College (CSC)"
                                      title="Civil Service College (CSC)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/civil-service-college-csc"
                                  >
                                    Civil
                                    Service College
                                    (CSC)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To develop people for a
                                  first-class Public
                                  Service
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-33 views-row-odd">
                      <div
                        about="/graduate-employers/cognizant-technology-solutions-asia-pacific-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/cognizant-technology-solutions-asia-pacific-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Cognizant_2018.png"
                                      width="217"
                                      height="46"
                                      alt="Cognizant logo"
                                      title="Cognizant logo"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/cognizant-technology-solutions-asia-pacific-pte-ltd"
                                  >
                                    Cognizant
                                    Technology
                                    Solutions Asia
                                    Pacific Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  At Cognizant, we believe
                                  those who challenge the
                                  way they work today will
                                  lead the way tomorrow.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-34 views-row-even">
                      <div
                        about="/graduate-employers/containers-printers-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/containers-printers-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Containers-Printers_2020.jpg"
                                      width="140"
                                      height="26"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/containers-printers-pte-ltd"
                                  >
                                    Containers
                                    Printers Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To continuously
                                  innovate, optimize
                                  efficiency and
                                  productivity to
                                  manufacture the highest
                                  quality products that
                                  create value and wealth
                                  for everyone
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/consumer-goods-and-fmcg"
                                    >
                                      Consumer
                                      Goods and
                                      FMCG
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-35 views-row-odd">
                      <div
                        about="/graduate-employers/cpa-australia"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/cpa-australia"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_CPA Australia_2017_0.jpg"
                                      width="160"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/cpa-australia"
                                  >
                                    CPA
                                    Australia
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To maximise the share of
                                  people who want a career
                                  built on professional
                                  accounting skills.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/teaching-and-education"
                                    >
                                      Teaching
                                      and
                                      Education
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-36 views-row-even">
                      <div
                        about="/graduate-employers/cyber-security-agency-of-singapore"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/cyber-security-agency-of-singapore"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_CSA_2019_0.jpg"
                                      width="187"
                                      height="70"
                                      alt="Cyber Security Agency of Singapore"
                                      title="Cyber Security Agency of Singapore"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/cyber-security-agency-of-singapore"
                                  >
                                    Cyber
                                    Security Agency of
                                    Singapore
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  The CSA is the national
                                  agency overseeing
                                  cybersecurity strategy,
                                  operation, education,
                                  outreach, and ecosystem
                                  development.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-37 views-row-odd">
                      <div
                        about="/graduate-employers/dbs-bank"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/dbs-bank">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_DBS Bank_2018.png"
                                      width="217"
                                      height="65"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/dbs-bank">
                                    DBS
                                    Bank
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  DBS. Living, Breathing
                                  Asia
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/investment-banking-and-investment"
                                    >
                                      Investment
                                      Banking and
                                      Investment
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-38 views-row-even">
                      <div
                        about="/graduate-employers/defence-science-and-technology-agency-dsta"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/defence-science-and-technology-agency-dsta"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_DSTA_2016.png"
                                      width="157"
                                      height="70"
                                      alt="Defence Science and Technology Agency (DSTA)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/defence-science-and-technology-agency-dsta"
                                  >
                                    Defence
                                    Science and
                                    Technology Agency
                                    (DSTA)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Inspired people,
                                  bringing innovation to
                                  all we connect.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_fast-mover">
                                    Fast
                                    Mover
                                  </span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li>
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-39 views-row-odd">
                      <div
                        about="/graduate-employers/degree-census-consultancy-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/degree-census-consultancy-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/logo4.png"
                                      width="140"
                                      height="62"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/degree-census-consultancy-pte-ltd"
                                  >
                                    Degree
                                    Census Consultancy
                                    Pte Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">Delivering 360° Insights</div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/management-and-business"
                                    >
                                      Management
                                      and
                                      Business
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-40 views-row-even">
                      <div
                        about="/graduate-employers/dell"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/dell">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Employer-Logo_Dell-2019.png"
                                      width="1024"
                                      height="1024"
                                      alt="Dell"
                                      title="Dell"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/dell">Dell</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Listen. Learn. Deliver.
                                  That’s what we’re about.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-41 views-row-odd">
                      <div
                        about="/graduate-employers/deloitte"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/deloitte">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Employer-Logo_Deloitte-2019.png"
                                      width="5000"
                                      height="931"
                                      alt="Deloitte"
                                      title="Deloitte"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/deloitte"
                                  >Deloitte</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Deloitte makes an impact
                                  that matters.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/accountancy-and-financial-management"
                                    >
                                      Accountancy
                                      and
                                      Financial
                                      Management
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-42 views-row-even">
                      <div
                        about="/graduate-employers/deutsche-bank"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/deutsche-bank"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Deutsche Bank_2017.jpg"
                                      width="70"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/deutsche-bank"
                                  >
                                    Deutsche
                                    Bank
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  We are here to enable
                                  economic growth and
                                  societal progress
                                  through our positive
                                  impact.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/accountancy-and-financial-management"
                                    >
                                      Accountancy
                                      and
                                      Financial
                                      Management
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/insurance-and-risk-management"
                                    >
                                      Insurance
                                      and Risk
                                      Management
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/investment-banking-and-investment"
                                    >
                                      Investment
                                      Banking and
                                      Investment
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/management-and-business"
                                    >
                                      Management
                                      and
                                      Business
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/science-and-research"
                                    >
                                      Science
                                      and
                                      Research
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-43 views-row-odd">
                      <div
                        about="/graduate-employers/dhl-supply-chain"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/dhl-supply-chain"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_DHL_2017.png"
                                      width="217"
                                      height="48"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/dhl-supply-chain"
                                  >
                                    DHL
                                    Supply Chain
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Our vision is to be The
                                  Logistics Company for
                                  the World. Our mission –
                                  Excellence. Simply
                                  Delivered. – is our
                                  guiding light.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-44 views-row-even">
                      <div
                        about="/graduate-employers/dnv-gl"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/dnv-gl">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_DNV GL_2019.jpg"
                                      width="1000"
                                      height="352"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/dnv-gl">
                                    DNV
                                    GL
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Since 1864, our purpose
                                  has been to safeguard
                                  life, property and the
                                  environment.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/energy-oil-and-gas-utilities"
                                    >
                                      Energy,
                                      Oil and Gas,
                                      Utilities
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-45 views-row-odd">
                      <div
                        about="/graduate-employers/dso-national-laboratories"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/dso-national-laboratories"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_DSO_2017.jpg"
                                      width="157"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/dso-national-laboratories"
                                  >
                                    DSO
                                    National
                                    Laboratories
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To develop technologies
                                  and solutions that can
                                  provide technological
                                  surprises to sharpen the
                                  cutting edge of
                                  Singapore’s national
                                  security.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li>
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/science-and-research"
                                    >
                                      Science
                                      and
                                      Research
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-46 views-row-even">
                      <div
                        about="/graduate-employers/dyson"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/dyson">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Dyson_2017.jpg"
                                      width="167"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/dyson">Dyson</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  We transform every
                                  category we enter with
                                  radical and iconic
                                  reinventions that work,
                                  perform and look very
                                  different.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/consumer-goods-and-fmcg"
                                    >
                                      Consumer
                                      Goods and
                                      FMCG
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-47 views-row-odd">
                      <div
                        about="/graduate-employers/efusion-solutions-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/efusion-solutions-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_eFusion_2017.jpg"
                                      width="182"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/efusion-solutions-pte-ltd"
                                  >
                                    eFusion
                                    Solutions Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  eFusion - The place
                                  where you can: Earn and
                                  grow; Enrich your
                                  personal and working
                                  life; Be your best;
                                  Deliver world class
                                  products &amp; services
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-48 views-row-even">
                      <div
                        about="/graduate-employers/elite-advisory-services"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/elite-advisory-services"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Elite Advisory_2017.png"
                                      width="113"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/elite-advisory-services"
                                  >
                                    Elite
                                    Advisory
                                    Services
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To be a highly dynamic
                                  professional and
                                  valuable financial
                                  services organization in
                                  this region.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/insurance-and-risk-management"
                                    >
                                      Insurance
                                      and Risk
                                      Management
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-49 views-row-odd">
                      <div
                        about="/graduate-employers/enterprise-singapore"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/enterprise-singapore"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_logo_Enterprise-Singapore_2019.png"
                                      width="1050"
                                      height="329"
                                      alt="Enterprise Singapore"
                                      title="Enterprise Singapore"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/enterprise-singapore"
                                  >
                                    Enterprise
                                    Singapore
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Enterprise Singapore is
                                  the government agency
                                  championing enterprise
                                  development.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-50 views-row-even">
                      <div
                        about="/graduate-employers/ep-asia-academy-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ep-asia-academy-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_EP Academy_2017.png"
                                      width="207"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ep-asia-academy-pte-ltd"
                                  >
                                    EP-Asia
                                    Academy Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To raise capable and
                                  respectable leaders who
                                  lead, inspire and
                                  motivate through
                                  teaching skills,
                                  refining attitudes and
                                  developing character.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/teaching-and-education"
                                    >
                                      Teaching
                                      and
                                      Education
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-51 views-row-odd">
                      <div
                        about="/graduate-employers/ep-tec-solutions-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ep-tec-solutions-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_ep-tec_2018.jpg"
                                      width="179"
                                      height="70"
                                      alt="Ep-Tec Solutions"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ep-tec-solutions-pte-ltd"
                                  >
                                    EP-Tec
                                    Solutions Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Enable People with
                                  TEChnologies
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/teaching-and-education"
                                    >
                                      Teaching
                                      and
                                      Education
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-52 views-row-even">
                      <div
                        about="/graduate-employers/exxonmobil-asia-pacific-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/exxonmobil-asia-pacific-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_ExxonMobil_2017.png"
                                      width="157"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/exxonmobil-asia-pacific-pte-ltd"
                                  >
                                    ExxonMobil
                                    Asia Pacific Pte.
                                    Ltd.
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  We hire exceptional
                                  people who are empowered
                                  to think independently
                                  and be innovative.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-53 views-row-odd">
                      <div
                        about="/graduate-employers/ey"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/ey">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_EY_2017.jpg"
                                      width="157"
                                      height="70"
                                      alt="EY"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/ey">EY</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Building a better
                                  working world
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/accountancy-and-financial-management"
                                    >
                                      Accountancy
                                      and
                                      Financial
                                      Management
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-54 views-row-even">
                      <div
                        about="/graduate-employers/ezbuy-singapore"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ezbuy-singapore"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_ezbuy_2018.jpg"
                                      width="217"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ezbuy-singapore"
                                  >
                                    ezbuy
                                    Singapore
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Buy Global, Locally.
                                  Shop millions of
                                  products from China,
                                  USA, Korea, Taiwan,
                                  Local &amp; popular
                                  online shopping sites
                                  such as Taobao &amp;
                                  Amazon.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/consumer-goods-and-fmcg"
                                    >
                                      Consumer
                                      Goods and
                                      FMCG
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-55 views-row-odd">
                      <div
                        about="/graduate-employers/far-east-organization"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/far-east-organization"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_FEO_2017.jpg"
                                      width="154"
                                      height="70"
                                      alt="Far East Organization"
                                      title="Far East Organization"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/far-east-organization"
                                  >
                                    Far
                                    East
                                    Organization
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">Inspiring Better Lives</div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/property-and-real-estate"
                                    >
                                      Property
                                      and Real
                                      Estate
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-56 views-row-even">
                      <div
                        about="/graduate-employers/farrer-park-hospital-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/farrer-park-hospital-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Farrer Park Hospital_2017.jpg"
                                      width="217"
                                      height="70"
                                      alt="Farrer Park Hospital Pte Ltd"
                                      title="Farrer Park Hospital Pte Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/farrer-park-hospital-pte-ltd"
                                  >
                                    Farrer
                                    Park Hospital Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  VISION: Caring Through
                                  Fresh Solutions And Fair
                                  Value. MISSION: Fairness
                                  in Healthcare.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/healthcare-and-pharmaceuticals"
                                    >
                                      Healthcare
                                      and
                                      Pharmaceuticals
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-57 views-row-odd">
                      <div
                        about="/graduate-employers/fdm-group"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/fdm-group">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo-FDM-Group-2019.jpg"
                                      width="1515"
                                      height="719"
                                      alt="FDM Group"
                                      title="FDM Group"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/fdm-group">
                                    FDM
                                    Group
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  We create and inspire
                                  exciting careers that
                                  shape our digital future
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-58 views-row-even">
                      <div
                        about="/graduate-employers/flex"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/flex">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Flex_2018_4.png"
                                      width="162"
                                      height="70"
                                      alt="Flex"
                                      title="Flex"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/flex">Flex</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Design to global
                                  delivery through
                                  Sketch-to-Scale™
                                  solutions, automotive
                                  electronics
                                  manufacturing, cloud
                                  solutions, and consumer
                                  technologies.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-59 views-row-odd">
                      <div
                        about="/graduate-employers/fort-financial-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/fort-financial-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Fort Financial.jpg"
                                      width="161"
                                      height="90"
                                      alt="Fort Financial Pte Ltd"
                                      title="Fort Financial Pte Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/fort-financial-pte-ltd"
                                  >
                                    Fort
                                    Financial Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Solutions to your
                                  Resolutions
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/accountancy-and-financial-management"
                                    >
                                      Accountancy
                                      and
                                      Financial
                                      Management
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/insurance-and-risk-management"
                                    >
                                      Insurance
                                      and Risk
                                      Management
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-60 views-row-even">
                      <div
                        about="/graduate-employers/general-electric-ge"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/general-electric-ge"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_General Electric_2017_0.png"
                                      width="2700"
                                      height="2700"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/general-electric-ge"
                                  >
                                    General
                                    Electric (GE)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Building, powering,
                                  moving and curing the
                                  world by transforming
                                  the industry with
                                  software-defined
                                  machines and solutions.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-61 views-row-odd">
                      <div
                        about="/graduate-employers/glaxosmithkline-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/glaxosmithkline-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_GSK_2018.jpg"
                                      width="175"
                                      height="70"
                                      alt="GlaxoSmithKline Pte Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/glaxosmithkline-pte-ltd"
                                  >
                                    GlaxoSmithKline
                                    Pte Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  GSK is a science-led
                                  global healthcare
                                  company with a special
                                  purpose: to help people
                                  do more, feel better,
                                  live longer.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/healthcare-and-pharmaceuticals"
                                    >
                                      Healthcare
                                      and
                                      Pharmaceuticals
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/science-and-research"
                                    >
                                      Science
                                      and
                                      Research
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-62 views-row-even">
                      <div
                        about="/graduate-employers/globalfoundries"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/globalfoundries"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Globalfoundries_2017.jpg"
                                      width="154"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/globalfoundries"
                                  >GLOBALFOUNDRIES</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Our Vision is to reshape
                                  the semiconductor
                                  industry through
                                  collaboration and
                                  innovation.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-63 views-row-odd">
                      <div
                        about="/graduate-employers/go-transport-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/go-transport-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Go Transport_2017.png"
                                      width="62"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/go-transport-pte-ltd"
                                  >
                                    Go
                                    Transport Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To be Your Preferred
                                  Warehousing &amp;
                                  Transportation Partner!
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-64 views-row-even">
                      <div
                        about="/graduate-employers/gojek-singapore"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/gojek-singapore"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_logo_gojek_2019.png"
                                      width="518"
                                      height="208"
                                      alt="GoJek"
                                      title="GoJek"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/gojek-singapore"
                                  >
                                    GoJek
                                    Singapore
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Gojek Singapore is a
                                  technology startup that
                                  specialises in
                                  ride-hailing services,
                                  logistics, and digital
                                  payments.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/consumer-goods-and-fmcg"
                                    >
                                      Consumer
                                      Goods and
                                      FMCG
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-65 views-row-odd">
                      <div
                        about="/graduate-employers/goldman-sachs"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/goldman-sachs"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Goldman Sachs_2017.jpg"
                                      width="157"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/goldman-sachs"
                                  >
                                    Goldman
                                    Sachs
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  The Goldman Sachs Group,
                                  Inc. is a leading global
                                  investment banking,
                                  securities, and
                                  investment management
                                  firm.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/investment-banking-and-investment"
                                    >
                                      Investment
                                      Banking and
                                      Investment
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-66 views-row-even">
                      <div
                        about="/graduate-employers/grab"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/grab">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Employer-Logo_Grab-2020.png"
                                      width="140"
                                      height="54"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/grab">Grab</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Driving Southeast Asia
                                  Forward Together
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-67 views-row-odd">
                      <div
                        about="/graduate-employers/great-eastern-financial-advisers"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/great-eastern-financial-advisers"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Great-Eastern-Financial-Advisers_2020.jpg"
                                      width="140"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/great-eastern-financial-advisers"
                                  >
                                    Great
                                    Eastern Financial
                                    Advisers
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Providing our clients
                                  with customised risk and
                                  wealth management
                                  solutions that suit
                                  their changing needs
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/insurance-and-risk-management"
                                    >
                                      Insurance
                                      and Risk
                                      Management
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-68 views-row-even">
                      <div
                        about="/graduate-employers/great-eastern-life-assurance-company-limited"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/great-eastern-life-assurance-company-limited"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Great Eastern_2017.jpg"
                                      width="154"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/great-eastern-life-assurance-company-limited"
                                  >
                                    Great
                                    Eastern Life
                                    Assurance Company
                                    Limited
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To make life great by
                                  providing financial
                                  security, and promoting
                                  good health and
                                  meaningful
                                  relationships.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/insurance-and-risk-management"
                                    >
                                      Insurance
                                      and Risk
                                      Management
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-69 views-row-odd">
                      <div
                        about="/graduate-employers/gti-media"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation node-promoted view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/gti-media">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gtimedia-gradmalaysia-gtimedia-logo.jpg"
                                      width="157"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/gti-media">
                                    GTI
                                    Media
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Connecting people with
                                  the right opportunities
                                  to make them more
                                  productive and
                                  successful.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a href="https://gradsingapore.com/sectors/hr-and-recruitment">
                                      HR
                                      and
                                      Recruitment
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/media-journalism-and-publishing"
                                    >
                                      Media,
                                      Journalism,
                                      and
                                      Publishing
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/smes-and-start-ups">
                                      SMEs
                                      and
                                      Start-ups
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-70 views-row-even">
                      <div
                        about="/graduate-employers/gunners-marketing-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/gunners-marketing-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Gunners Marketing_2017_0.jpg"
                                      width="111"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/gunners-marketing-pte-ltd"
                                  >
                                    Gunners
                                    Marketing Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To create the most
                                  compelling and ardent,
                                  marketing approach for
                                  our clients. To be the
                                  omnipresent company, in
                                  the modern world of
                                  direct marketing.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/sales">Sales</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-71 views-row-odd">
                      <div
                        about="/graduate-employers/health-promotion-board-hpb"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/health-promotion-board-hpb"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Health Promotion Board_2018_0.png"
                                      width="217"
                                      height="115"
                                      alt="Health Promotion Board (HPB)"
                                      title="Health Promotion Board (HPB)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/health-promotion-board-hpb"
                                  >
                                    Health
                                    Promotion Board
                                    (HPB)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  At HPB, our vision is to
                                  see a nation of healthy
                                  people.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/healthcare-and-pharmaceuticals"
                                    >
                                      Healthcare
                                      and
                                      Pharmaceuticals
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-72 views-row-even">
                      <div
                        about="/graduate-employers/honestbee"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/honestbee">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_honestbee_2017.png"
                                      width="108"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/honestbee"
                                  >honestbee</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  honestbee's vision is to
                                  become the world's most
                                  convenient services
                                  marketplace. Life's just
                                  easier with honestbee.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/smes-and-start-ups">
                                      SMEs
                                      and
                                      Start-ups
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-73 views-row-odd">
                      <div
                        about="/graduate-employers/iam-advisory-group-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/iam-advisory-group-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/iam1.JPG"
                                      width="84"
                                      height="70"
                                      alt="IAM Advisory"
                                      title="IAM Advisory"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/iam-advisory-group-pte-ltd"
                                  >
                                    IAM
                                    Advisory Group Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Our future hinges on the
                                  growth and vitality of
                                  the people we serve.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/insurance-and-risk-management"
                                    >
                                      Insurance
                                      and Risk
                                      Management
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/investment-banking-and-investment"
                                    >
                                      Investment
                                      Banking and
                                      Investment
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/sales">Sales</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-74 views-row-even">
                      <div
                        about="/graduate-employers/ibm"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/ibm">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_IBM_2018.jpg"
                                      width="181"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/ibm">IBM</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">THINK</div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-75 views-row-odd">
                      <div
                        about="/graduate-employers/ice-cube-marketing"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ice-cube-marketing"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Ice Cube Marketing_2017.png"
                                      width="217"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ice-cube-marketing"
                                  >
                                    Ice
                                    Cube Marketing
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Content driven digital
                                  marketing agency who
                                  brings lead and sales
                                  for SMEs in Singapore.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/marketing-advertising-and-pr"
                                    >
                                      Marketing,
                                      Advertising,
                                      and PR
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-76 views-row-even">
                      <div
                        about="/graduate-employers/ihs-markit-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ihs-markit-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_IHSMarkit_2017.png"
                                      width="70"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ihs-markit-ltd"
                                  >
                                    IHS
                                    Markit Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  IHS Markit is a world
                                  leader in critical
                                  information, analytics
                                  and solutions for the
                                  major industries and
                                  markets that drive
                                  economies worldwide.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/science-and-research"
                                    >
                                      Science
                                      and
                                      Research
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-77 views-row-odd">
                      <div
                        about="/graduate-employers/income"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/income">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Income_2017.png"
                                      width="185"
                                      height="41"
                                      alt="Income"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/income"
                                  >Income</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  At Income, we are ‘In
                                  with You’ on
                                  Performance, Growth,
                                  Innovation and Impact.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/insurance-and-risk-management"
                                    >
                                      Insurance
                                      and Risk
                                      Management
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-78 views-row-even">
                      <div
                        about="/graduate-employers/inland-revenue-authority-of-singapore"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/inland-revenue-authority-of-singapore"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_IRAS_2018_0.png"
                                      width="235"
                                      height="206"
                                      alt="Inland Revenue Authority of Singapore"
                                      title="Inland Revenue Authority of Singapore"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/inland-revenue-authority-of-singapore"
                                  >
                                    Inland
                                    Revenue Authority
                                    of Singapore
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Main Tax Administrator
                                  to the Government
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-79 views-row-odd">
                      <div
                        about="/graduate-employers/institute-of-singapore-chartered-accountants"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/institute-of-singapore-chartered-accountants"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_ISCA_2018.png"
                                      width="217"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/institute-of-singapore-chartered-accountants"
                                  >
                                    Institute
                                    of Singapore
                                    Chartered
                                    Accountants
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  The Institute of
                                  Singapore Chartered
                                  Accountants (ISCA) is
                                  the national accountancy
                                  body of Singapore.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/accountancy-and-financial-management"
                                    >
                                      Accountancy
                                      and
                                      Financial
                                      Management
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-80 views-row-even">
                      <div
                        about="/graduate-employers/intel"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/intel">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Intel_2017.png"
                                      width="106"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/intel">Intel</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Intel invests at the
                                  boundaries of technology
                                  to make amazing
                                  experiences possible for
                                  business and society,
                                  and for every person on
                                  Earth.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-81 views-row-odd">
                      <div
                        about="/graduate-employers/jp-morgan"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/jp-morgan">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_JP Morgan_2017_0.jpg"
                                      width="157"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/jp-morgan">
                                    J.P.
                                    Morgan
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Local expertise. Global
                                  resources. A commitment
                                  to Singapore.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/investment-banking-and-investment"
                                    >
                                      Investment
                                      Banking and
                                      Investment
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-82 views-row-even">
                      <div
                        about="/graduate-employers/jan-de-nul"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/jan-de-nul">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Jan De Nul_2019.png"
                                      width="1527"
                                      height="736"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/jan-de-nul">
                                    Jan
                                    De Nul
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Shaping water and land.
                                  From complex offshore
                                  services for both fossil
                                  and renewable energy
                                  sectors, over large
                                  dredging and reclamation
                                  project at th
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/construction-and-building-services"
                                    >
                                      Construction
                                      and Building
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-83 views-row-odd">
                      <div
                        about="/graduate-employers/jardines"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/jardines">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Employer-Logo_Jardines-2019.png"
                                      width="780"
                                      height="454"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/jardines"
                                  >Jardines</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  We are one of the top
                                  200 publicly traded
                                  companies in Singapore,
                                  and a member of the
                                  Fortune Global 500.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/construction-and-building-services"
                                    >
                                      Construction
                                      and Building
                                      Services
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/hospitality-leisure-and-travel"
                                    >
                                      Hospitality,
                                      Leisure, and
                                      Travel
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/management-and-business"
                                    >
                                      Management
                                      and
                                      Business
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/property-and-real-estate"
                                    >
                                      Property
                                      and Real
                                      Estate
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/retail-and-merchandising"
                                    >
                                      Retail
                                      and
                                      Merchandising
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/sales">Sales</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-84 views-row-even">
                      <div
                        about="/graduate-employers/jones-knowles-ritchie"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/jones-knowles-ritchie"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_JkR_2017.png"
                                      width="97"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/jones-knowles-ritchie"
                                  >
                                    Jones
                                    Knowles
                                    Ritchie
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  About us. Jones Knowles
                                  Ritchie is a global
                                  brand design agency with
                                  26 years of experience
                                  in creating brand growth
                                  through the medium of
                                  design.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/marketing-advertising-and-pr"
                                    >
                                      Marketing,
                                      Advertising,
                                      and PR
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-85 views-row-odd">
                      <div
                        about="/graduate-employers/jtc-corporation"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/jtc-corporation"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_JTC_2017.png"
                                      width="72"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/jtc-corporation"
                                  >
                                    JTC
                                    Corporation
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  JTC is the lead agency
                                  in Singapore to
                                  spearhead the planning,
                                  promotion and
                                  development of a dynamic
                                  industrial landscape.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/civil-and-structural-engineering"
                                    >
                                      Civil
                                      and
                                      Structural
                                      Engineering
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/construction-and-building-services"
                                    >
                                      Construction
                                      and Building
                                      Services
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-86 views-row-even">
                      <div
                        about="/graduate-employers/jules-ventures-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/jules-ventures-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/Jules Ventures_logo 2.png"
                                      width="217"
                                      height="50"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/jules-ventures-pte-ltd"
                                  >
                                    Jules
                                    Ventures Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To Teach All Children
                                  Digital Literacy Through
                                  Computational Thinking
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/teaching-and-education"
                                    >
                                      Teaching
                                      and
                                      Education
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-87 views-row-odd">
                      <div
                        about="/graduate-employers/keppel-corporation"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/keppel-corporation"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Keppel_2017.png"
                                      width="217"
                                      height="30"
                                      alt="Keppel Corporation"
                                      title="Keppel Corporation"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/keppel-corporation"
                                  >
                                    Keppel
                                    Corporation
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Keppel Corporation has
                                  presence in more than 30
                                  countries over the
                                  world.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/civil-and-structural-engineering"
                                    >
                                      Civil
                                      and
                                      Structural
                                      Engineering
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/construction-and-building-services"
                                    >
                                      Construction
                                      and Building
                                      Services
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/property-and-real-estate"
                                    >
                                      Property
                                      and Real
                                      Estate
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-88 views-row-even">
                      <div
                        about="/graduate-employers/kpmg-services-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/kpmg-services-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_KPMG_2017.png"
                                      width="175"
                                      height="70"
                                      alt="KPMG"
                                      title="KPMG"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/kpmg-services-pte-ltd"
                                  >
                                    KPMG
                                    Services Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Inspire Confidence.
                                  Empower Change.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/accountancy-and-financial-management"
                                    >
                                      Accountancy
                                      and
                                      Financial
                                      Management
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-89 views-row-odd">
                      <div
                        about="/graduate-employers/kuehne-nagel-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/kuehne-nagel-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Kuehne+Nagel_2018.png"
                                      width="76"
                                      height="70"
                                      alt="Kuehne + Nagel Pte Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/kuehne-nagel-pte-ltd"
                                  >
                                    Kuehne
                                    + Nagel Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Driving value chains
                                  through people,
                                  expertise and
                                  technology.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-90 views-row-even">
                      <div
                        about="/graduate-employers/loreal"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/loreal">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Loreal_2017.jpg"
                                      width="157"
                                      height="70"
                                      alt="L&#39;oreal"
                                      title="L&#39;oreal"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/loreal"
                                  >L'Oréal</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  A
                                  thrilling experience, a
                                  culture of excellence –
                                  this is your adventure.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/consumer-goods-and-fmcg"
                                    >
                                      Consumer
                                      Goods and
                                      FMCG
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-91 views-row-odd">
                      <div
                        about="/graduate-employers/land-transport-authority-lta"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/land-transport-authority-lta"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_LTA_1_2018.png"
                                      width="217"
                                      height="64"
                                      alt="Land Transport Authority (LTA)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/land-transport-authority-lta"
                                  >
                                    Land
                                    Transport
                                    Authority
                                    (LTA)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Connecting people and
                                  places, enhancing travel
                                  experience
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/civil-and-structural-engineering"
                                    >
                                      Civil
                                      and
                                      Structural
                                      Engineering
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li>
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-92 views-row-even">
                      <div
                        about="/graduate-employers/lga-telecom-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/lga-telecom-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/LGA logo -highres.jpg"
                                      width="109"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/lga-telecom-pte-ltd"
                                  >
                                    LGA
                                    Telecom Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">Business Un-Interrupted</div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/smes-and-start-ups">
                                      SMEs
                                      and
                                      Start-ups
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-93 views-row-odd">
                      <div
                        about="/graduate-employers/manulife-singapore-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/manulife-singapore-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo-Manulife-2019.jpg"
                                      width="710"
                                      height="130"
                                      alt="Manulife"
                                      title="Manulife "
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/manulife-singapore-pte-ltd"
                                  >
                                    Manulife
                                    (Singapore) Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Decisions made easier.
                                  Lives made better.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/accountancy-and-financial-management"
                                    >
                                      Accountancy
                                      and
                                      Financial
                                      Management
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/insurance-and-risk-management"
                                    >
                                      Insurance
                                      and Risk
                                      Management
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/investment-banking-and-investment"
                                    >
                                      Investment
                                      Banking and
                                      Investment
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-94 views-row-even">
                      <div
                        about="/graduate-employers/mapletree-investments"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/mapletree-investments"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Mapletree_2017.png"
                                      width="157"
                                      height="70"
                                      alt="Mapletree Investments"
                                      title="Mapletree Investments"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/mapletree-investments"
                                  >
                                    Mapletree
                                    Investments
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Mapletree is a leading
                                  real estate development,
                                  investment and capital
                                  management company
                                  headquartered in
                                  Singapore.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/property-and-real-estate"
                                    >
                                      Property
                                      and Real
                                      Estate
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-95 views-row-odd">
                      <div
                        about="/graduate-employers/marcus-evans-singapore-limited"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/marcus-evans-singapore-limited"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/ME logo.png"
                                      width="217"
                                      height="70"
                                      alt="Marcus Evans"
                                      title="Marcus Evans"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/marcus-evans-singapore-limited"
                                  >
                                    Marcus
                                    Evans (Singapore)
                                    Limited
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To provide our clients
                                  with the information and
                                  insights they need to
                                  sustain a valuable
                                  competitive advantage.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/hospitality-leisure-and-travel"
                                    >
                                      Hospitality,
                                      Leisure, and
                                      Travel
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/sales">Sales</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-96 views-row-even">
                      <div
                        about="/graduate-employers/mastercard"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/mastercard">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Mastercard_2018_1.png"
                                      width="90"
                                      height="70"
                                      alt="Mastercard"
                                      title="Mastercard"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/mastercard"
                                  >Mastercard</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  We are the global
                                  technology company
                                  behind the world’s
                                  fastest payments
                                  processing network.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-97 views-row-odd">
                      <div
                        about="/graduate-employers/mcconnell-dowell-south-east-asia-pte-ltd-0"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/mcconnell-dowell-south-east-asia-pte-ltd-0"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo-McConnell-Dowell-2020_0.jpg"
                                      width="134"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/mcconnell-dowell-south-east-asia-pte-ltd-0"
                                  >
                                    McConnell
                                    Dowell South East
                                    Asia Pte Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Our Purpose is to
                                  provide a better life,
                                  and our Vision is to be
                                  a leader in the delivery
                                  of infrastructure,
                                  building &amp; resource
                                  solutions.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/civil-and-structural-engineering"
                                    >
                                      Civil
                                      and
                                      Structural
                                      Engineering
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/construction-and-building-services"
                                    >
                                      Construction
                                      and Building
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/energy-oil-and-gas-utilities"
                                    >
                                      Energy,
                                      Oil and Gas,
                                      Utilities
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-98 views-row-even">
                      <div
                        about="/graduate-employers/micron-semiconductor-asia"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/micron-semiconductor-asia"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Micron_2018.png"
                                      width="217"
                                      height="59"
                                      alt="Micron Semiconductor Asia"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/micron-semiconductor-asia"
                                  >
                                    Micron
                                    Semiconductor
                                    Asia
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Ready to shape the
                                  future? Let’s join
                                  forces.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-99 views-row-odd">
                      <div
                        about="/graduate-employers/microsoft"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/microsoft">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Microsoft_2017.png"
                                      width="157"
                                      height="70"
                                      alt="Microsoft"
                                      title="Microsoft"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/microsoft"
                                  >Microsoft</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Our mission is to
                                  empower every person and
                                  every organisation on
                                  the planet to achieve
                                  more.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-100 views-row-even">
                      <div
                        about="/graduate-employers/ministry-of-defence-mindef"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ministry-of-defence-mindef"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_MINDEF_2018_0.jpg"
                                      width="5000"
                                      height="2480"
                                      alt="Ministry of Defence (MINDEF)"
                                      title="Ministry of Defence (MINDEF)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ministry-of-defence-mindef"
                                  >
                                    Ministry
                                    of Defence
                                    (MINDEF)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  The mission of MINDEF
                                  and the Singapore Armed
                                  Forces is to enhance
                                  Singapore's peace and
                                  security through
                                  deterrence and
                                  diplomacy.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-101 views-row-odd">
                      <div
                        about="/graduate-employers/ministry-of-education-moe"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ministry-of-education-moe"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_MOE_2017.jpg"
                                      width="157"
                                      height="70"
                                      alt="Ministry of Education (MOE)"
                                      title="Ministry of Education (MOE)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ministry-of-education-moe"
                                  >
                                    Ministry
                                    of Education
                                    (MOE)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Shaping the nation, one
                                  student at a time.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/teaching-and-education"
                                    >
                                      Teaching
                                      and
                                      Education
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-102 views-row-even">
                      <div
                        about="/graduate-employers/ministry-of-finance-mof"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ministry-of-finance-mof"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_MOF_2017.jpg"
                                      width="157"
                                      height="70"
                                      alt="Ministry of Finance (MOF)"
                                      title="Ministry of Finance (MOF)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ministry-of-finance-mof"
                                  >
                                    Ministry
                                    of Finance
                                    (MOF)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Our mission is to create
                                  a better Singapore
                                  through Finance.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-103 views-row-odd">
                      <div
                        about="/graduate-employers/ministry-of-foreign-affairs-mfa"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ministry-of-foreign-affairs-mfa"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_MFA_2017_0.jpeg"
                                      width="175"
                                      height="70"
                                      alt="Ministry of Foreign Affairs (MFA)"
                                      title="Ministry of Foreign Affairs (MFA)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ministry-of-foreign-affairs-mfa"
                                  >
                                    Ministry
                                    of Foreign Affairs
                                    (MFA)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  At the Ministry of
                                  Foreign Affairs, we
                                  ensure Singapore’s
                                  relevance and create
                                  “strategic space” to
                                  safeguard and advance
                                  Singapore’s interests.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-104 views-row-even">
                      <div
                        about="/graduate-employers/ministry-of-health-moh"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ministry-of-health-moh"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_MOH_2017.jpg"
                                      width="157"
                                      height="70"
                                      alt="Ministry of Health (MOH)"
                                      title="Ministry of Health (MOH)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ministry-of-health-moh"
                                  >
                                    Ministry
                                    of Health
                                    (MOH)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  The MOH’s vision is to
                                  champion a healthy
                                  nation where our people
                                  live well, live long and
                                  with peace of mind.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/healthcare-and-pharmaceuticals"
                                    >
                                      Healthcare
                                      and
                                      Pharmaceuticals
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-105 views-row-odd">
                      <div
                        about="/graduate-employers/ministry-of-home-affairs-mha"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ministry-of-home-affairs-mha"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gs.com-Ministry-of-home-affairs-logo.png"
                                      width="140"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ministry-of-home-affairs-mha"
                                  >
                                    Ministry
                                    of Home Affairs
                                    (MHA)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To work as a team, in
                                  partnership with the
                                  community, to make
                                  Singapore our Safe and
                                  Secure Best Home.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-106 views-row-even">
                      <div
                        about="/graduate-employers/ministry-of-trade-and-industry-mti"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ministry-of-trade-and-industry-mti"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_MTI_2018.png"
                                      width="217"
                                      height="44"
                                      alt="Ministry of Trade and Industry (MTI)"
                                      title="Ministry of Trade and Industry (MTI)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ministry-of-trade-and-industry-mti"
                                  >
                                    Ministry
                                    of Trade and
                                    Industry (MTI)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To promote economic
                                  growth and create good
                                  jobs, to enable
                                  Singaporeans to improve
                                  their lives.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-107 views-row-odd">
                      <div
                        about="/graduate-employers/morgan-stanley"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/morgan-stanley"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/morgan.jpg"
                                      width="110"
                                      height="70"
                                      alt="Morgan Stanley"
                                      title="Morgan Stanley"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/morgan-stanley"
                                  >
                                    Morgan
                                    Stanley
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  We believe capital can
                                  work to benefit all of
                                  society.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/investment-banking-and-investment"
                                    >
                                      Investment
                                      Banking and
                                      Investment
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-108 views-row-even">
                      <div
                        about="/graduate-employers/national-environment-agency-nea"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/national-environment-agency-nea"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_NEA_2017.png"
                                      width="157"
                                      height="70"
                                      alt="National Environment Agency (NEA)"
                                      title="National Environment Agency (NEA)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/national-environment-agency-nea"
                                  >
                                    National
                                    Environment Agency
                                    (NEA)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  The NEA develops and
                                  spearheads environmental
                                  initiatives and
                                  programmes through its
                                  partnership with the
                                  people, and public &amp;
                                  private sectors.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/science-and-research"
                                    >
                                      Science
                                      and
                                      Research
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-109 views-row-odd">
                      <div
                        about="/graduate-employers/national-parks-board-nparks"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/national-parks-board-nparks"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_National Parks_2018.jpg"
                                      width="97"
                                      height="70"
                                      alt="National Parks Board (NParks)"
                                      title="National Parks Board (NParks)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/national-parks-board-nparks"
                                  >
                                    National
                                    Parks Board
                                    (NParks)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Let's make Singapore our
                                  Garden
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/science-and-research"
                                    >
                                      Science
                                      and
                                      Research
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-110 views-row-even">
                      <div
                        about="/graduate-employers/nbc-universal"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/nbc-universal"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo-NBC-Universal-2019.png"
                                      width="2333"
                                      height="510"
                                      alt="NBC Universal International"
                                      title="NBC Universal International"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/nbc-universal"
                                  >
                                    NBC
                                    Universal
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  We are one of the
                                  world’s leading media
                                  and entertainment
                                  companies in the
                                  development, production,
                                  and marketing of
                                  entertainment, news and
                                  info.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/media-journalism-and-publishing"
                                    >
                                      Media,
                                      Journalism,
                                      and
                                      Publishing
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-111 views-row-odd">
                      <div
                        about="/graduate-employers/network-for-electronic-transfers-s-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/network-for-electronic-transfers-s-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_NETS_2017.jpg"
                                      width="150"
                                      height="70"
                                      alt="Network for Electronic Transfers (s) Pte Ltd"
                                      title="Network for Electronic Transfers (s) Pte Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/network-for-electronic-transfers-s-pte-ltd"
                                  >
                                    Network
                                    for Electronic
                                    Transfers (s) Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  A
                                  thinking organization
                                  that makes payments
                                  Simple, Efficient and
                                  Stress-Free for
                                  Consumers, Merchants
                                  &amp; Partners.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-112 views-row-even">
                      <div
                        about="/graduate-employers/ocbc-bank"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/ocbc-bank">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_OCBC_2018.png"
                                      width="217"
                                      height="46"
                                      alt="OCBC Bank"
                                      title="OCBC Bank"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/ocbc-bank">
                                    OCBC
                                    Bank
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  OCBC Bank is the longest
                                  established Singapore
                                  bank, formed in 1932
                                  from the merger of three
                                  local banks, the oldest
                                  of which was founded in
                                  1912.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/investment-banking-and-investment"
                                    >
                                      Investment
                                      Banking and
                                      Investment
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-113 views-row-odd">
                      <div
                        about="/graduate-employers/office-of-philip-loh"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/office-of-philip-loh"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Office of Philip Loh_2019.png"
                                      width="183"
                                      height="70"
                                      alt="Office of Philip Loh"
                                      title="Office of Philip Loh"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/office-of-philip-loh"
                                  >
                                    Office
                                    of Philip Loh
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Where Financial Dreams
                                  Come True
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/accountancy-and-financial-management"
                                    >
                                      Accountancy
                                      and
                                      Financial
                                      Management
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/insurance-and-risk-management"
                                    >
                                      Insurance
                                      and Risk
                                      Management
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/investment-banking-and-investment"
                                    >
                                      Investment
                                      Banking and
                                      Investment
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-114 views-row-even">
                      <div
                        about="/graduate-employers/opus-it-services-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/opus-it-services-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Opus IT_2017.jpg"
                                      width="64"
                                      height="70"
                                      alt="Opus IT Services Pte Ltd"
                                      title="Opus IT Services Pte Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/opus-it-services-pte-ltd"
                                  >
                                    Opus
                                    IT Services Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Our mission is to become
                                  a premier IT service
                                  organisation providing
                                  effective and efficient
                                  services to our
                                  customers.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-115 views-row-odd">
                      <div
                        about="/graduate-employers/philip-morris-international-pmi"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/philip-morris-international-pmi"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_PMI_2018.jpg"
                                      width="120"
                                      height="70"
                                      alt="Philip Morris International (PMI)"
                                      title="Philip Morris International (PMI)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/philip-morris-international-pmi"
                                  >
                                    Philip
                                    Morris
                                    International
                                    (PMI)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Philip Morris Singapore
                                  Pte. Ltd. is the leading
                                  tobacco company in
                                  Singapore, which
                                  distributes and sells
                                  Philip Morris
                                  International (PMI)
                                  brands.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/consumer-goods-and-fmcg"
                                    >
                                      Consumer
                                      Goods and
                                      FMCG
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-116 views-row-even">
                      <div
                        about="/graduate-employers/philips"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/philips">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo-Philips-2020.jpg"
                                      width="140"
                                      height="26"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/philips"
                                  >Philips</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  There's always a way to
                                  make life better
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/consumer-goods-and-fmcg"
                                    >
                                      Consumer
                                      Goods and
                                      FMCG
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/healthcare-and-pharmaceuticals"
                                    >
                                      Healthcare
                                      and
                                      Pharmaceuticals
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/science-and-research"
                                    >
                                      Science
                                      and
                                      Research
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-117 views-row-odd">
                      <div
                        about="/graduate-employers/pratt-whitney"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/pratt-whitney"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo-Pratt-&amp;-Whitney-2020_1.jpeg"
                                      width="140"
                                      height="47"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/pratt-whitney"
                                  >
                                    Pratt
                                    &amp; Whitney
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  At Pratt &amp; Whitney,
                                  we believe that powered
                                  flight has transformed –
                                  and will continue to
                                  transform – the world.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-118 views-row-even">
                      <div
                        about="/graduate-employers/procter-gamble"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/procter-gamble"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_P&amp;G_2018.png"
                                      width="70"
                                      height="70"
                                      alt="Procter &amp; Gamble"
                                      title="Procter &amp; Gamble"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/procter-gamble"
                                  >
                                    Procter
                                    &amp; Gamble
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Touching Lives,
                                  Improving Life
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/consumer-goods-and-fmcg"
                                    >
                                      Consumer
                                      Goods and
                                      FMCG
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-119 views-row-odd">
                      <div
                        about="/graduate-employers/prudential-assurance-company-singapore-pte-limited"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/prudential-assurance-company-singapore-pte-limited"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Prudential_2017_0.png"
                                      width="152"
                                      height="70"
                                      alt="Prudential Assurance Company Singapore (Pte) Limited"
                                      title="Prudential Assurance Company Singapore (Pte) Limited"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/prudential-assurance-company-singapore-pte-limited"
                                  >
                                    Prudential
                                    Assurance Company
                                    Singapore (Pte)
                                    Limited
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Always Listening. Always
                                  Understanding.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/insurance-and-risk-management"
                                    >
                                      Insurance
                                      and Risk
                                      Management
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-120 views-row-even">
                      <div
                        about="/graduate-employers/psa-corporation"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/psa-corporation"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_PSA Corporation_2017.png"
                                      width="99"
                                      height="70"
                                      alt="PSA Corporation"
                                      title="PSA Corporation"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/psa-corporation"
                                  >
                                    PSA
                                    Corporation
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To be the port operator
                                  of choice in the world's
                                  gateway hubs, renowned
                                  for best-in-class
                                  services and successful
                                  partnerships.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-121 views-row-odd">
                      <div
                        about="/graduate-employers/public-utilities-board"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/public-utilities-board"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo-Public-Utilities-Board-2019.jpg"
                                      width="708"
                                      height="172"
                                      alt="Public Utilities Board"
                                      title="Public Utilities Board"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/public-utilities-board"
                                  >
                                    Public
                                    Utilities
                                    Board
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Singapore's National
                                  Water Agency
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-122 views-row-even">
                      <div
                        about="/graduate-employers/pwc-singapore"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/pwc-singapore"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Employer-Logo_PwC-2019.png"
                                      width="690"
                                      height="504"
                                      alt="PwC"
                                      title="PwC"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/pwc-singapore"
                                  >
                                    PwC
                                    Singapore
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To build trust in
                                  society and solve
                                  important problems.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/accountancy-and-financial-management"
                                    >
                                      Accountancy
                                      and
                                      Financial
                                      Management
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/consulting"
                                    >Consulting</a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-123 views-row-odd">
                      <div
                        about="/graduate-employers/raffles-provident-llp"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/raffles-provident-llp"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/250-c31c5bd26b6a2e41d9ce6697bb079f8d_RPL_Logo_0.jpg"
                                      width="121"
                                      height="70"
                                      alt="Raffles Provident LLP"
                                      title="Raffles Provident LLP"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/raffles-provident-llp"
                                  >
                                    Raffles
                                    Provident LLP
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Serve 1st, Last &amp;
                                  Always
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-124 views-row-even">
                      <div
                        about="/graduate-employers/razer"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/razer">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Employer-Logo_Razer-2019.png"
                                      width="500"
                                      height="166"
                                      alt="Razer"
                                      title="Razer"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/razer">Razer</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">For Gamers, by Gamers</div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-125 views-row-odd">
                      <div
                        about="/graduate-employers/redwoods-advance-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/redwoods-advance-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_logo_Redwoods Advance_2017.jpg"
                                      width="113"
                                      height="70"
                                      alt="Redwoods Advance Pte Ltd"
                                      title="Redwoods Advance Pte Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/redwoods-advance-pte-ltd"
                                  >
                                    Redwoods
                                    Advance Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">We Influence, To Improve</div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/smes-and-start-ups">
                                      SMEs
                                      and
                                      Start-ups
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-126 views-row-even">
                      <div
                        about="/graduate-employers/republic-of-singapore-navy-rsn"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/republic-of-singapore-navy-rsn"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Navy_2017.jpg"
                                      width="126"
                                      height="70"
                                      alt="Republic of Singapore Navy (RSN)"
                                      title="Republic of Singapore Navy (RSN)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/republic-of-singapore-navy-rsn"
                                  >
                                    Republic
                                    of Singapore Navy
                                    (RSN)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Our Everyday is
                                  Defending Yours
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-127 views-row-odd">
                      <div
                        about="/graduate-employers/resmed-asia-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/resmed-asia-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapoore_Logo-ResMed-2019.jpg"
                                      width="1004"
                                      height="730"
                                      alt="ResMed Asia Pte Ltd"
                                      title="ResMed Asia Pte Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/resmed-asia-pte-ltd"
                                  >
                                    ResMed
                                    Asia Pte Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Changing Lives With
                                  Every Breath!
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/healthcare-and-pharmaceuticals"
                                    >
                                      Healthcare
                                      and
                                      Pharmaceuticals
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/science-and-research"
                                    >
                                      Science
                                      and
                                      Research
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-128 views-row-even">
                      <div
                        about="/graduate-employers/resorts-world-sentosa"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/resorts-world-sentosa"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_RWS_2017.png"
                                      width="217"
                                      height="51"
                                      alt="Resorts World Sentosa"
                                      title="Resorts World Sentosa"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/resorts-world-sentosa"
                                  >
                                    Resorts
                                    World Sentosa
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Resorts World Sentosa
                                  (RWS) is owned by
                                  Genting Singapore, and
                                  is home to the key
                                  attractions that are
                                  located in Singapore's
                                  resort island of Sentosa
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/hospitality-leisure-and-travel"
                                    >
                                      Hospitality,
                                      Leisure, and
                                      Travel
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-129 views-row-odd">
                      <div
                        about="/graduate-employers/rhenus-logistics"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/rhenus-logistics"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Rhenus Logistics_2017.jpg"
                                      width="217"
                                      height="58"
                                      alt="Rhenus Logistics"
                                      title="Rhenus Logistics"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/rhenus-logistics"
                                  >
                                    Rhenus
                                    Logistics
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  At Rhenus, trust is our
                                  greatest asset.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-130 views-row-even">
                      <div
                        about="/graduate-employers/rohde-schwarz-asia"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/rohde-schwarz-asia"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Rohde &amp; Schwarz_2018.jpg"
                                      width="217"
                                      height="44"
                                      alt="Rohde &amp; Schwarz Asia"
                                      title="Rohde &amp; Schwarz Asia"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/rohde-schwarz-asia"
                                  >
                                    Rohde
                                    &amp; Schwarz
                                    Asia
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">Make ideas real.</div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-131 views-row-odd">
                      <div
                        about="/graduate-employers/rolls-royce-singapore-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/rolls-royce-singapore-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Rolls Royce_2017.png"
                                      width="157"
                                      height="70"
                                      alt="Rolls-Royce Singapore Pte Ltd"
                                      title="Rolls-Royce Singapore Pte Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/rolls-royce-singapore-pte-ltd"
                                  >
                                    Rolls-Royce
                                    Singapore Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Our vision is to create
                                  ‘better power for a
                                  changing world’.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/science-and-research"
                                    >
                                      Science
                                      and
                                      Research
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-132 views-row-even">
                      <div
                        about="/graduate-employers/royal-bank-of-canada"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/royal-bank-of-canada"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Royal Bank of Canada_2018.png"
                                      width="59"
                                      height="70"
                                      alt="Royal Bank of Canada"
                                      title="Royal Bank of Canada"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/royal-bank-of-canada"
                                  >
                                    Royal
                                    Bank of Canada
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  In Canada: To be the
                                  undisputed leader in
                                  financial services. In
                                  the U.S.: To be the
                                  preferred partner to
                                  corporate, institutional
                                  and high net worth.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/accountancy-and-financial-management"
                                    >
                                      Accountancy
                                      and
                                      Financial
                                      Management
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-133 views-row-odd">
                      <div
                        about="/graduate-employers/royal-plaza-on-scotts"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/royal-plaza-on-scotts"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Royal Plaza on Scotts_2017.jpg"
                                      width="71"
                                      height="70"
                                      alt="Royal Plaza on Scotts"
                                      title="Royal Plaza on Scotts"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/royal-plaza-on-scotts"
                                  >
                                    Royal
                                    Plaza on
                                    Scotts
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To be the leading hotel
                                  creating great customer
                                  experience. Our talents'
                                  happiness is the measure
                                  of our success.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/hospitality-leisure-and-travel"
                                    >
                                      Hospitality,
                                      Leisure, and
                                      Travel
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-134 views-row-even">
                      <div
                        about="/graduate-employers/rwe-supply-trading"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/rwe-supply-trading"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_RWE_2018.jpeg"
                                      width="217"
                                      height="60"
                                      alt="RWE Supply &amp; Trading"
                                      title="RWE Supply &amp; Trading"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/rwe-supply-trading"
                                  >
                                    RWE
                                    Supply &amp;
                                    Trading
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Powering. Reliable.
                                  Future.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/energy-oil-and-gas-utilities"
                                    >
                                      Energy,
                                      Oil and Gas,
                                      Utilities
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/investment-banking-and-investment"
                                    >
                                      Investment
                                      Banking and
                                      Investment
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-135 views-row-odd">
                      <div
                        about="/graduate-employers/saf-command-control-communications-computers-and-intelligence-c4i"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/saf-command-control-communications-computers-and-intelligence-c4i"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Enginuity_SAF C4I_2019_1.jpg"
                                      width="1089"
                                      height="948"
                                      alt="SAF Command, Control, Communications, Computers and Intelligence (C4I)"
                                      title="SAF Command, Control, Communications, Computers and Intelligence (C4I)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/saf-command-control-communications-computers-and-intelligence-c4i"
                                  >
                                    SAF
                                    Command, Control,
                                    Communications,
                                    Computers and
                                    Intelligence
                                    (C4I)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  The SAF Command,
                                  Control, Communications,
                                  Computers and
                                  Intelligence (C4I) has
                                  transformed the SAF into
                                  a networked and
                                  knowledge-enabled force.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-136 views-row-even">
                      <div
                        about="/graduate-employers/schneider-electric-singapore-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/schneider-electric-singapore-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Schneider Electric_2018.png"
                                      width="217"
                                      height="65"
                                      alt="Schneider Electric Singapore Pte Ltd"
                                      title="Schneider Electric Singapore Pte Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/schneider-electric-singapore-pte-ltd"
                                  >
                                    Schneider
                                    Electric Singapore
                                    Pte Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Our technologies ensure
                                  that Life Is On for
                                  everyone, everywhere, at
                                  every moment.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/energy-oil-and-gas-utilities"
                                    >
                                      Energy,
                                      Oil and Gas,
                                      Utilities
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/science-and-research"
                                    >
                                      Science
                                      and
                                      Research
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-137 views-row-odd">
                      <div
                        about="/graduate-employers/schroder-investment-management-singapore-ltd-schroders"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/schroder-investment-management-singapore-ltd-schroders"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Schroders_2017_0.jpg"
                                      width="208"
                                      height="70"
                                      alt="Schroder Investment Management (Singapore) Ltd"
                                      title="Schroder Investment Management (Singapore) Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/schroder-investment-management-singapore-ltd-schroders"
                                  >
                                    Schroder
                                    Investment
                                    Management
                                    (Singapore) Ltd
                                    (Schroders)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  As a global investment
                                  manager, our overall
                                  purpose is to help build
                                  the long-term future
                                  prosperity of our
                                  clients.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/investment-banking-and-investment"
                                    >
                                      Investment
                                      Banking and
                                      Investment
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-138 views-row-even">
                      <div
                        about="/graduate-employers/scoot-tigerair-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/scoot-tigerair-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Scoot_2017_0.png"
                                      width="102"
                                      height="90"
                                      alt="Scoot Tigerair Pte Ltd"
                                      title="Scoot Tigerair Pte Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/scoot-tigerair-pte-ltd"
                                  >
                                    Scoot
                                    Tigerair Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  If you have the passion
                                  for aviation and the
                                  "Scootitude" DNA in you,
                                  we welcome you to join
                                  us for a limitless
                                  flying career!
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/hospitality-leisure-and-travel"
                                    >
                                      Hospitality,
                                      Leisure, and
                                      Travel
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-139 views-row-odd">
                      <div
                        about="/graduate-employers/sea"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/sea">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Sea_2018.png"
                                      width="164"
                                      height="70"
                                      alt="Sea"
                                      title="Sea"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/sea">Sea</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Our Mission is to better
                                  the lives of the
                                  consumers and small
                                  businesses of Greater
                                  Southeast Asia with
                                  technology.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-140 views-row-even">
                      <div
                        about="/graduate-employers/searchasia-consulting-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/searchasia-consulting-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Search Asia_2018.jpg"
                                      width="217"
                                      height="56"
                                      alt="Search Asia"
                                      title="Search Asia"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/searchasia-consulting-pte-ltd"
                                  >
                                    SearchAsia
                                    Consulting Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  We set our sights on the
                                  bigger picture. The one
                                  with you in it.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/hr-and-recruitment">
                                      HR
                                      and
                                      Recruitment
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-141 views-row-odd">
                      <div
                        about="/graduate-employers/sfic-institute"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/sfic-institute"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_SFIC Institute_2017.jpg"
                                      width="127"
                                      height="70"
                                      alt="SFIC Institute"
                                      title="SFIC Institute"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/sfic-institute"
                                  >
                                    SFIC
                                    Institute
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Your One Stop Training
                                  Solutions Provider
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/teaching-and-education"
                                    >
                                      Teaching
                                      and
                                      Education
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-142 views-row-even">
                      <div
                        about="/graduate-employers/shell"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/shell">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Shell_2017.jpg"
                                      width="157"
                                      height="70"
                                      alt="Shell"
                                      title="Shell"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/shell">Shell</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  In search of remarkable
                                  students and graduates.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-143 views-row-odd">
                      <div
                        about="/graduate-employers/shopee"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/shopee">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Shopee_2020.png"
                                      width="140"
                                      height="44"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/shopee"
                                  >Shopee</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Come and make history
                                  with us. It's quite a
                                  journey, and we've only
                                  just begun.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-144 views-row-even">
                      <div
                        about="/graduate-employers/siemens-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/siemens-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/siemens logo.jpg"
                                      width="165"
                                      height="70"
                                      alt="Siemens Pte. Ltd."
                                      title="Siemens Pte. Ltd."
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/siemens-pte-ltd"
                                  >
                                    Siemens
                                    Pte. Ltd.
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  We make real what
                                  matters. By reimagining
                                  the world around us and
                                  creating solutions to
                                  the most challenging
                                  problems.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/energy-oil-and-gas-utilities"
                                    >
                                      Energy,
                                      Oil and Gas,
                                      Utilities
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-145 views-row-odd">
                      <div
                        about="/graduate-employers/singapore-airlines"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/singapore-airlines"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_SIA_2017.png"
                                      width="191"
                                      height="70"
                                      alt="Singapore Airlines"
                                      title="Singapore Airlines"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/singapore-airlines"
                                  >
                                    Singapore
                                    Airlines
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Fly high as an airline
                                  professional.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/hospitality-leisure-and-travel"
                                    >
                                      Hospitality,
                                      Leisure, and
                                      Travel
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-146 views-row-even">
                      <div
                        about="/graduate-employers/singapore-civil-defence-force-scdf"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/singapore-civil-defence-force-scdf"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo-SCDF-2019.png"
                                      width="140"
                                      height="54"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/singapore-civil-defence-force-scdf"
                                  >
                                    Singapore
                                    Civil Defence
                                    Force (SCDF)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To protect and save
                                  lives and property for a
                                  safe and secure
                                  Singapore
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-147 views-row-odd">
                      <div
                        about="/graduate-employers/singapore-exchange-sgx"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/singapore-exchange-sgx"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_SGX_2017.png"
                                      width="170"
                                      height="70"
                                      alt="Singapore Exchange (SGX)"
                                      title="Singapore Exchange (SGX)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/singapore-exchange-sgx"
                                  >
                                    Singapore
                                    Exchange (SGX)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Headquartered in
                                  Singapore, SGX serves
                                  customers all over the
                                  world through multiple
                                  locations.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/investment-banking-and-investment"
                                    >
                                      Investment
                                      Banking and
                                      Investment
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-148 views-row-even">
                      <div
                        about="/graduate-employers/singapore-police-force-spf"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/singapore-police-force-spf"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gs_Singapore_Police_Force_Logo_2020 _0.jpg"
                                      width="140"
                                      height="46"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/singapore-police-force-spf"
                                  >
                                    Singapore
                                    Police Force (SPF)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  The Singapore Police
                                  Force plays a critical
                                  role in keeping
                                  Singapore safe and
                                  secure with our mission
                                  to prevent, deter and
                                  detect crime.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-149 views-row-odd">
                      <div
                        about="/graduate-employers/singapore-press-holdings-sph"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/singapore-press-holdings-sph"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_SPH_2017.jpg"
                                      width="157"
                                      height="70"
                                      alt="Singapore Press Holdings"
                                      title="Singapore Press Holdings"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/singapore-press-holdings-sph"
                                  >
                                    Singapore
                                    Press Holdings
                                    (SPH)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To be Asia's Leading
                                  Media Organisation,
                                  Engaging Minds and
                                  Enriching Lives.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/marketing-advertising-and-pr"
                                    >
                                      Marketing,
                                      Advertising,
                                      and PR
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/media-journalism-and-publishing"
                                    >
                                      Media,
                                      Journalism,
                                      and
                                      Publishing
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-150 views-row-even">
                      <div
                        about="/graduate-employers/singapore-tourism-board-stb"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/singapore-tourism-board-stb"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_STB_2017.jpg"
                                      width="157"
                                      height="70"
                                      alt="Singapore Tourism Board (STB)"
                                      title="Singapore Tourism Board (STB)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/singapore-tourism-board-stb"
                                  >
                                    Singapore
                                    Tourism Board
                                    (STB)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  The Singapore Tourism
                                  Board (STB) is a
                                  statutory board governed
                                  by the Ministry of Trade
                                  and Industry of
                                  Singapore.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/hospitality-leisure-and-travel"
                                    >
                                      Hospitality,
                                      Leisure, and
                                      Travel
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-151 views-row-odd">
                      <div
                        about="/graduate-employers/singtel"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/singtel">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Singtel_2017.png"
                                      width="127"
                                      height="70"
                                      alt="Singtel"
                                      title="Singtel"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/singtel"
                                  >Singtel</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Shape and drive the
                                  information age with
                                  Asia’s leading digital
                                  multimedia and solutions
                                  group.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-152 views-row-even">
                      <div
                        about="/graduate-employers/smrt-corporation-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/smrt-corporation-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_SMRT_2018.png"
                                      width="117"
                                      height="70"
                                      alt="SMRT Corporation Ltd"
                                      title="SMRT Corporation Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/smrt-corporation-ltd"
                                  >
                                    SMRT
                                    Corporation
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Moving People, Enhancing
                                  Lives
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/civil-and-structural-engineering"
                                    >
                                      Civil
                                      and
                                      Structural
                                      Engineering
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-153 views-row-odd">
                      <div
                        about="/graduate-employers/talentvis-singapore-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/talentvis-singapore-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore.com_Logo_Talentvis Singapore_2017.jpg"
                                      width="217"
                                      height="70"
                                      alt="Talentvis Singapore Pte Ltd"
                                      title="Talentvis Singapore Pte Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/talentvis-singapore-pte-ltd"
                                  >
                                    Talentvis
                                    Singapore Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">Partner for Growth</div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/hr-and-recruitment">
                                      HR
                                      and
                                      Recruitment
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-154 views-row-even">
                      <div
                        about="/graduate-employers/tata-consultancy-services"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/tata-consultancy-services"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/Tata_Consultancy_Services.jpg"
                                      width="140"
                                      height="47"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/tata-consultancy-services"
                                  >
                                    Tata
                                    Consultancy
                                    Services
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Tata Consultancy
                                  Services is an IT
                                  services, consulting and
                                  business solutions
                                  organisation
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-155 views-row-odd">
                      <div
                        about="/graduate-employers/tetra-pak"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/tetra-pak">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Tetra Pak_2018.png"
                                      width="70"
                                      height="70"
                                      alt="Tetra Pak"
                                      title="Tetra Pak"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/tetra-pak">
                                    Tetra
                                    Pak
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  We commit to making food
                                  safe and available,
                                  everywhere.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/consumer-goods-and-fmcg"
                                    >
                                      Consumer
                                      Goods and
                                      FMCG
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-156 views-row-even">
                      <div
                        about="/graduate-employers/the-lo-behold-group"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/the-lo-behold-group"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo-The-Lo-&amp;-Behold-Group-2019.png"
                                      width="300"
                                      height="133"
                                      alt="The Lo &amp; Behold Group Logo"
                                      title="The Lo &amp; Behold Group Logo"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/the-lo-behold-group"
                                  >
                                    The
                                    Lo &amp; Behold
                                    Group
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Passionate people
                                  creating awesome
                                  experiences
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/hospitality-leisure-and-travel"
                                    >
                                      Hospitality,
                                      Leisure, and
                                      Travel
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-157 views-row-odd">
                      <div
                        about="/graduate-employers/the-republic-of-singapore-air-force-rsaf"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/the-republic-of-singapore-air-force-rsaf"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Air Force_2017.jpg"
                                      width="217"
                                      height="70"
                                      alt="The Republic of Singapore Air Force (RSAF)"
                                      title="The Republic of Singapore Air Force (RSAF)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/the-republic-of-singapore-air-force-rsaf"
                                  >
                                    The
                                    Republic of
                                    Singapore Air
                                    Force (RSAF)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  World Class People,
                                  First Class Air Force
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-158 views-row-even">
                      <div
                        about="/graduate-employers/the-singapore-army"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/the-singapore-army"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Army_2018.jpg"
                                      width="152"
                                      height="70"
                                      alt="The Singapore Army"
                                      title="The Singapore Army"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/the-singapore-army"
                                  >
                                    The
                                    Singapore Army
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  OUR ARMY – READY,
                                  DECISIVE, RESPECTED
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/engineering"
                                    >Engineering</a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/public-sector">
                                      Public
                                      Sector
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-159 views-row-odd">
                      <div
                        about="/graduate-employers/thermo-fisher-scientific"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/thermo-fisher-scientific"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Thermo Fisher_2018_0.jpg"
                                      width="217"
                                      height="52"
                                      alt="Thermo Fisher Scientific"
                                      title="Thermo Fisher Scientific"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/thermo-fisher-scientific"
                                  >
                                    Thermo
                                    Fisher
                                    Scientific
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  The world leader in
                                  serving science.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/science-and-research"
                                    >
                                      Science
                                      and
                                      Research
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-160 views-row-even">
                      <div
                        about="/graduate-employers/toll-group"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/toll-group">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo-Toll-Group-2019.jpg"
                                      width="140"
                                      height="61"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/toll-group">
                                    Toll
                                    Group
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  To harness our
                                  significant resources,
                                  know-how and passion to
                                  deliver the optimal
                                  logistics solutions for
                                  our customers
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-161 views-row-odd">
                      <div
                        about="/graduate-employers/tvc-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/tvc-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/TVClogo.gif"
                                      width="86"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/tvc-pte-ltd"
                                  >
                                    TVC
                                    Pte Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">Flexible &amp; nimble</div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/legal-services">
                                      Legal
                                      Services
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-162 views-row-even">
                      <div
                        about="/graduate-employers/ubisoft-singapore"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ubisoft-singapore"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Ubisoft_2017.png"
                                      width="94"
                                      height="70"
                                      alt="Ubisoft Singapore"
                                      title="Ubisoft Singapore"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/ubisoft-singapore"
                                  >
                                    Ubisoft
                                    Singapore
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Ubisoft Entertainment is
                                  a French computer and
                                  videogame developer and
                                  publisher with
                                  headquarters in
                                  Montreuil-sous-Bois,
                                  France.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-163 views-row-odd">
                      <div
                        about="/graduate-employers/ubs"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/ubs">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_UBS_2017.jpg"
                                      width="157"
                                      height="70"
                                      alt="UBS"
                                      title="UBS"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/ubs">UBS</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Together. That's how we
                                  do things.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/investment-banking-and-investment"
                                    >
                                      Investment
                                      Banking and
                                      Investment
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-164 views-row-even">
                      <div
                        about="/graduate-employers/unilever"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/unilever">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Unilever_2017.jpg"
                                      width="157"
                                      height="70"
                                      alt="Unilever"
                                      title="Unilever"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/unilever"
                                  >Unilever</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  The Unilever brand,
                                  found in consumer
                                  products in millions of
                                  homes across 150
                                  countries, is a trusted
                                  name in nutrition,
                                  hygiene, and personal
                                  care.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/consumer-goods-and-fmcg"
                                    >
                                      Consumer
                                      Goods and
                                      FMCG
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-165 views-row-odd">
                      <div
                        about="/graduate-employers/uniqlo-singapore-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/uniqlo-singapore-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_UNIQLO_2018.jpg"
                                      width="157"
                                      height="70"
                                      alt="UNIQLO (Singapore) Pte Ltd "
                                      title="UNIQLO (Singapore) Pte Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/uniqlo-singapore-pte-ltd"
                                  >
                                    UNIQLO
                                    (Singapore) Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Changing clothes.
                                  Changing conventional
                                  wisdom. Change the
                                  world.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/management-and-business"
                                    >
                                      Management
                                      and
                                      Business
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://gradsingapore.com/sectors/retail-and-merchandising"
                                    >
                                      Retail
                                      and
                                      Merchandising
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/sales">Sales</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-166 views-row-even">
                      <div
                        about="/graduate-employers/united-overseas-bank-uob"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/united-overseas-bank-uob"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_UOB_2017.png"
                                      width="195"
                                      height="70"
                                      alt="United Overseas Bank (UOB)"
                                      title="United Overseas Bank (UOB)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/united-overseas-bank-uob"
                                  >
                                    United
                                    Overseas Bank
                                    (UOB)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  About UOB. . About Us.
                                  United Overseas Bank
                                  Limited (UOB) is a
                                  leading bank in Asia
                                  with a global network of
                                  more than 500 offices in
                                  19 countries.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a
                                      href="https://gradsingapore.com/sectors/investment-banking-and-investment"
                                    >
                                      Investment
                                      Banking and
                                      Investment
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-167 views-row-odd">
                      <div
                        about="/graduate-employers/united-parcel-services-ups"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/united-parcel-services-ups"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_UPS_2018.png"
                                      width="61"
                                      height="70"
                                      alt="United Parcel Services (UPS)"
                                      title="United Parcel Services (UPS)"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/united-parcel-services-ups"
                                  >
                                    United
                                    Parcel Services
                                    (UPS)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Founded in 1907 as a
                                  messenger company in the
                                  United States, UPS has
                                  grown into a
                                  multi-billion-dollar
                                  corporation.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-168 views-row-even">
                      <div
                        about="/graduate-employers/vault-dragon"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/vault-dragon"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Vault Dragon_2017.png"
                                      width="130"
                                      height="70"
                                      alt="Vault Dragon"
                                      title="Vault Dragon"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/vault-dragon"
                                  >
                                    Vault
                                    Dragon
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Vault Dragon is the
                                  leading private EMR
                                  custodian in South East
                                  Asia, and we aim to
                                  redefine the boundaries
                                  of the Digital
                                  Healthcare industry.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-169 views-row-odd">
                      <div
                        about="/graduate-employers/visa-worldwide-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/visa-worldwide-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Visa_2017.png"
                                      width="172"
                                      height="70"
                                      alt="Visa Worldwide Pte Ltd"
                                      title="Visa Worldwide Pte Ltd"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/visa-worldwide-pte-ltd"
                                  >
                                    Visa
                                    Worldwide Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  You’re an Individual.
                                  We’re the team for you.
                                  Together, let’s
                                  transform the way the
                                  world pays.
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first">
                                    <a
                                      href="https://gradsingapore.com/sectors/banking-and-financial-services"
                                    >
                                      Banking
                                      and
                                      Financial
                                      Services
                                    </a>
                                  </li>
                                  <li class="last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-170 views-row-even">
                      <div
                        about="/graduate-employers/wildlife-reserves-singapore"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/wildlife-reserves-singapore"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_WRS_2018.png"
                                      width="99"
                                      height="70"
                                      alt="Wildlife Reserves Singapore"
                                      title="Wildlife Reserves Singapore"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/wildlife-reserves-singapore"
                                  >
                                    Wildlife
                                    Reserves
                                    Singapore
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Protect. Inspire.
                                  Enrich. Join us to make
                                  a WILD difference!
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_top-100">S100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/hospitality-leisure-and-travel"
                                    >
                                      Hospitality,
                                      Leisure, and
                                      Travel
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-171 views-row-odd">
                      <div
                        about="/graduate-employers/xilinx-inc"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/xilinx-inc">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Xilinx_2017.png"
                                      width="217"
                                      height="42"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a href="https://gradsingapore.com/graduate-employers/xilinx-inc">
                                    Xilinx
                                    Inc.
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Leading All Programmable
                                  Technology
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-organisation-badges field-type-ds field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <span class="badge badge_currently-recruiting">Recruiting</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-172 views-row-even">
                      <div
                        about="/graduate-employers/xtremax-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/xtremax-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Xtremax2_2017.jpg"
                                      width="211"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/xtremax-pte-ltd"
                                  >
                                    Xtremax
                                    Pte Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  EXPECT EXCELLENCE -
                                  Armed with dedication,
                                  expertise, and passion,
                                  Xtremax has been
                                  empowering organizations
                                  to reshape their digital
                                  presence
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/it-and-technology">
                                      IT
                                      and
                                      Technology
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-173 views-row-odd">
                      <div
                        about="/graduate-employers/yamato-transport-s-pte-ltd"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/yamato-transport-s-pte-ltd"
                                  >
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_Logo_Yamato_2017.jpg"
                                      width="91"
                                      height="70"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/yamato-transport-s-pte-ltd"
                                  >
                                    Yamato
                                    Transport (S) Pte
                                    Ltd
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  One for All, All for
                                  One.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a
                                      href="https://gradsingapore.com/sectors/logistics-aviation-and-supply-chain"
                                    >
                                      Logistics,
                                      Aviation,
                                      and Supply
                                      Chain
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="views-row views-row-174 views-row-even views-row-last">
                      <div
                        about="/graduate-employers/zalora"
                        typeof="sioc:Item foaf:Document"
                        class="dg-three-col node node-ad-organisation view-mode-search_result"
                      >
                        <div class="content-threecol-wrap">
                          <div class="content-main">
                            <div
                              class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  <a href="https://gradsingapore.com/graduate-employers/zalora">
                                    <img
                                      typeof="foaf:Image"
                                      src="~/assets/images/pages/employer-search/gradsingapore_logo_zalora_2019_2.png"
                                      width="1000"
                                      height="370"
                                      alt="Zalora"
                                      title="Zalora"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-secondary">
                            <div class="field field-name-title field-type-ds field-label-hidden">
                              <div class="field-items">
                                <div class="field-item even" property="dc:title">
                                  <a
                                    href="https://gradsingapore.com/graduate-employers/zalora"
                                  >Zalora</a>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field-name-field-ad-org-about field-type-text field-label-hidden"
                            >
                              <div class="field-items">
                                <div class="field-item even">
                                  Singapore's Online
                                  Fashion Destination
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="content-tertiary">
                            <div class="field field-name-taxonomy-vocabulary-71">
                              <div class="label-above">
                                Industry
                                Sector
                              </div>
                              <div class="item-list">
                                <ul class="textformatter-list">
                                  <li class="first last">
                                    <a href="https://gradsingapore.com/sectors/sales">Sales</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="site-above-pre-footer">
        <div class="l-above-pre-footer">
          <div class="region region-above-pre-footer">
            <div id="block-core-dashboard-popup-save" class="block block-core-dashboard">
              <div class="content">
                <div id="popup-save" class="white-popup mfp-hide">
                  <div
                    about="/block/bookmarks-login-prompt"
                    typeof
                    class="dg-two-col entity entity-bean bean-message-box view-mode-default"
                  >
                    <div class="content-main">
                      <div
                        class="field field-name-field-message-icon field-type-image field-label-hidden"
                      >
                        <div class="field-items">
                          <div class="field-item even">
                            <img
                              typeof="foaf:Image"
                              src="~/assets/images/pages/employer-search/sign_up_log_in_pop_up.png"
                              width="110"
                              height="119"
                              alt="Sign up to apply for jobs!"
                              title="Sign up to apply for jobs!"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        class="field field-name-field-message-intro field-type-text field-label-hidden"
                      >
                        <div class="field-items">
                          <div class="field-item even">
                            Sign Up to Apply
                            for Jobs!
                          </div>
                        </div>
                      </div>
                      <div
                        class="field field-name-field-prompt-message field-type-text-long field-label-hidden"
                      >
                        <div class="field-items">
                          <div class="field-item even">
                            <p>
                              You'll be able to apply for jobs and
                              internships, save searches, and much
                              more if you register for free today!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="field field-name-field-message-ctas field-type-link-field field-label-hidden"
                      >
                        <div class="field-items">
                          <div class="field-item even">
                            <a
                              href="https://gradsingapore.com/hybridauth/window/Google?destination=user/me/edit%3Fdestination%3Dfrontpage%23first-login&amp;destination_error=frontpage"
                              class="hybridauth-icon google hybridauth-icon-social-icons-gradaus hybridauth-google hybridauth-google-social-icons-gradaus hybridauth-"
                              rel="nofollow"
                            >
                              Sign up using
                              Google
                            </a>
                          </div>
                          <div class="field-item odd">
                            <a
                              href="https://gradsingapore.com/user/simple-fb-connect"
                              class="hybridauth-icon facebook hybridauth-icon-social-icons-gradaus hybridauth-facebook hybridauth-facebook-social-icons-gradaus hybri"
                              rel="nofollow"
                            >
                              Sign up using
                              Facebook
                            </a>
                          </div>
                          <div class="field-item even">
                            <a
                              href="https://gradsingapore.com/#register-form"
                              class="ajax-popup-link popup-link-register"
                              rel="nofollow"
                            >
                              Sign up with
                              Email
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        class="field field-name-field-message-botton field-type-text-long field-label-hidden"
                      >
                        <div class="field-items">
                          <div class="field-item even">
                            <p>
                              Already have an account?
                              <a
                                class="ajax-popup-link popup-link-login"
                                href="https://gradsingapore.com/graduate-employers#login-form"
                              >
                                <strong>
                                  Log
                                  in
                                </strong>
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="content-secondary">
                      <div
                        class="field field-name-field-icon-list-title field-type-text field-label-hidden"
                      >
                        <div class="field-items">
                          <div class="field-item even">
                            Why Sign Up with
                            gradsingapore?
                          </div>
                        </div>
                      </div>
                      <div class="field-collection-container clearfix">
                        <div
                          class="field field-name-field-fc-icon-list field-type-field-collection field-label-hidden"
                        >
                          <div class="field-items">
                            <div class="field-item even">
                              <div class="field-collection-view clearfix view-mode-full">
                                <div
                                  about="/field-collection/field-fc-icon-list/46"
                                  typeof
                                  class="dg-default entity entity-field-collection-item field-collection-item-field-fc-icon-list view-mode-full"
                                >
                                  <div class="content-header">
                                    <div
                                      class="field field-name-field-list-icon field-type-image field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          <img
                                            typeof="foaf:Image"
                                            src="~/assets/images/pages/employer-search/personalised_job_alerts.png"
                                            width="90"
                                            height="90"
                                            alt="Get instant notification of Singapore&#39;s top graduate jobs and internship openings."
                                            title="Personalised Job Alerts"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="field field-name-field-list-title field-type-text field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          Personalised
                                          Job
                                          Alerts
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="content-main">
                                    <div
                                      class="field field-name-field-list-description field-type-text-long field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          We’ll
                                          remind
                                          you
                                          when
                                          job
                                          and
                                          internship
                                          deadlines
                                          are
                                          approaching,
                                          so
                                          you’ll
                                          have
                                          time
                                          to
                                          prepare
                                          the
                                          perfect
                                          application.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="field-item odd">
                              <div class="field-collection-view clearfix view-mode-full">
                                <div
                                  about="/field-collection/field-fc-icon-list/51"
                                  typeof
                                  class="dg-default entity entity-field-collection-item field-collection-item-field-fc-icon-list view-mode-full"
                                >
                                  <div class="content-header">
                                    <div
                                      class="field field-name-field-list-icon field-type-image field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          <img
                                            typeof="foaf:Image"
                                            src="~/assets/images/pages/employer-search/get_headhunted_for_jobs.png"
                                            width="90"
                                            height="90"
                                            alt="Add your CV to get headhunted and invited to exclusive employer events."
                                            title="Get Headhunted for Jobs"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="field field-name-field-list-title field-type-text field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          Get
                                          Headhunted
                                          for
                                          Jobs
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="content-main">
                                    <div
                                      class="field field-name-field-list-description field-type-text-long field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          Add
                                          your
                                          CV
                                          to
                                          get
                                          headhunted
                                          and
                                          invited
                                          to
                                          exclusive
                                          employer
                                          events.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="field-item even">
                              <div
                                class="field-collection-view clearfix view-mode-full field-collection-view-final"
                              >
                                <div
                                  about="/field-collection/field-fc-icon-list/56"
                                  typeof
                                  class="dg-default entity entity-field-collection-item field-collection-item-field-fc-icon-list view-mode-full"
                                >
                                  <div class="content-header">
                                    <div
                                      class="field field-name-field-list-icon field-type-image field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          <img
                                            typeof="foaf:Image"
                                            src="~/assets/images/pages/employer-search/your_own_careers_dashboard.png"
                                            width="90"
                                            height="90"
                                            alt="Keep track of all your applications and upcoming deadlines in one location."
                                            title="Your Own Careers Dashboard"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="field field-name-field-list-title field-type-text field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          Your
                                          Own
                                          Careers
                                          Dashboard
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="content-main">
                                    <div
                                      class="field field-name-field-list-description field-type-text-long field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          Keep
                                          track
                                          of
                                          all
                                          your
                                          preferred
                                          jobs,
                                          internships,
                                          and
                                          employers
                                          in
                                          one
                                          location.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="block-core-dashboard-popup-apply-message" class="block block-core-dashboard">
              <div class="content">
                <div id="popup-apply" class="white-popup mfp-hide">
                  <div
                    about="/block/apply-via-email"
                    typeof
                    class="dg-two-col entity entity-bean bean-message-box view-mode-default"
                  >
                    <div class="content-main">
                      <div
                        class="field field-name-field-message-icon field-type-image field-label-hidden"
                      >
                        <div class="field-items">
                          <div class="field-item even">
                            <img
                              typeof="foaf:Image"
                              src="~/assets/images/pages/employer-search/sign_up_log_in_pop_up.png"
                              width="110"
                              height="119"
                              alt="Sign up to apply for jobs!"
                              title="Sign up to apply for jobs!"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        class="field field-name-field-message-intro field-type-text field-label-hidden"
                      >
                        <div class="field-items">
                          <div class="field-item even">
                            Log-in to Apply for
                            this Position!
                          </div>
                        </div>
                      </div>
                      <div
                        class="field field-name-field-prompt-message field-type-text-long field-label-hidden"
                      >
                        <div class="field-items">
                          <div class="field-item even">
                            <p>
                              Apply for this position and many others
                              like it with your gradsingapore
                              account!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="field field-name-field-message-ctas field-type-link-field field-label-hidden"
                      >
                        <div class="field-items">
                          <div class="field-item even">
                            <a
                              href="https://gradsingapore.com/hybridauth/window/Google?destination=user/me/edit%3Fdestination%3Dfrontpage%23first-login&amp;destination_error=frontpage"
                              class="hybridauth-icon google hybridauth-icon-social-icons-gradaus hybridauth-google hybridauth-google-social-icons-gradaus hybridauth-"
                              rel="nofollow"
                            >
                              Sign in with
                              Google
                            </a>
                          </div>
                          <div class="field-item odd">
                            <a
                              href="https://gradsingapore.com/user/simple-fb-connect"
                              class="hybridauth-icon facebook hybridauth-icon-social-icons-gradaus hybridauth-facebook hybridauth-facebook-social-icons-gradaus hybri"
                              rel="nofollow"
                            >
                              Sign in with
                              Facebook
                            </a>
                          </div>
                          <div class="field-item even">
                            <a
                              href="https://gradsingapore.com/#register-form"
                              class="ajax-popup-link popup-link-register"
                              rel="nofollow"
                            >
                              Sign up with
                              Email
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        class="field field-name-field-message-botton field-type-text-long field-label-hidden"
                      >
                        <div class="field-items">
                          <div class="field-item even">
                            <p>
                              Already have an account?&nbsp;
                              <a
                                class="ajax-popup-link popup-link-login"
                                href="https://gradsingapore.com/graduate-employers#login-form"
                              >
                                <strong>
                                  Log
                                  in
                                </strong>
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="content-secondary">
                      <div
                        class="field field-name-field-icon-list-title field-type-text field-label-hidden"
                      >
                        <div class="field-items">
                          <div class="field-item even">
                            Why Sign Up with
                            gradsingapore?
                          </div>
                        </div>
                      </div>
                      <div class="field-collection-container clearfix">
                        <div
                          class="field field-name-field-fc-icon-list field-type-field-collection field-label-hidden"
                        >
                          <div class="field-items">
                            <div class="field-item even">
                              <div class="field-collection-view clearfix view-mode-full">
                                <div
                                  about="/field-collection/field-fc-icon-list/1136"
                                  typeof
                                  class="dg-default entity entity-field-collection-item field-collection-item-field-fc-icon-list view-mode-full"
                                >
                                  <div class="content-header">
                                    <div
                                      class="field field-name-field-list-icon field-type-image field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          <img
                                            typeof="foaf:Image"
                                            src="~/assets/images/pages/employer-search/personalised_job_alerts.png"
                                            width="90"
                                            height="90"
                                            alt="Get instant notification of Singapore&#39;s top graduate jobs and internship openings."
                                            title="Personalised Job Alerts"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="field field-name-field-list-title field-type-text field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          Personalised
                                          Job
                                          Alerts
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="content-main">
                                    <div
                                      class="field field-name-field-list-description field-type-text-long field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          We’ll
                                          remind
                                          you
                                          when
                                          job
                                          and
                                          internship
                                          deadlines
                                          are
                                          approaching,
                                          so
                                          you’ll
                                          have
                                          time
                                          to
                                          prepare
                                          the
                                          perfect
                                          application.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="field-item odd">
                              <div class="field-collection-view clearfix view-mode-full">
                                <div
                                  about="/field-collection/field-fc-icon-list/1141"
                                  typeof
                                  class="dg-default entity entity-field-collection-item field-collection-item-field-fc-icon-list view-mode-full"
                                >
                                  <div class="content-header">
                                    <div
                                      class="field field-name-field-list-icon field-type-image field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          <img
                                            typeof="foaf:Image"
                                            src="~/assets/images/pages/employer-search/get_headhunted_for_jobs.png"
                                            width="90"
                                            height="90"
                                            alt="Add your CV to get headhunted and invited to exclusive employer events."
                                            title="Get Headhunted for Jobs"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="field field-name-field-list-title field-type-text field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          Get
                                          Headhunted
                                          for
                                          Jobs
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="content-main">
                                    <div
                                      class="field field-name-field-list-description field-type-text-long field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          Add
                                          your
                                          CV
                                          to
                                          get
                                          headhunted
                                          and
                                          invited
                                          to
                                          exclusive
                                          employer
                                          events.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="field-item even">
                              <div
                                class="field-collection-view clearfix view-mode-full field-collection-view-final"
                              >
                                <div
                                  about="/field-collection/field-fc-icon-list/1146"
                                  typeof
                                  class="dg-default entity entity-field-collection-item field-collection-item-field-fc-icon-list view-mode-full"
                                >
                                  <div class="content-header">
                                    <div
                                      class="field field-name-field-list-icon field-type-image field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          <img
                                            typeof="foaf:Image"
                                            src="~/assets/images/pages/employer-search/your_own_careers_dashboard.png"
                                            width="90"
                                            height="90"
                                            alt="Keep track of all your applications and upcoming deadlines in one location."
                                            title="Your Own Careers Dashboard"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="field field-name-field-list-title field-type-text field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          Your
                                          Own
                                          Careers
                                          Dashboard
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="content-main">
                                    <div
                                      class="field field-name-field-list-description field-type-text-long field-label-hidden"
                                    >
                                      <div class="field-items">
                                        <div class="field-item even">
                                          Keep
                                          track
                                          of
                                          all
                                          your
                                          preferred
                                          jobs,
                                          internships,
                                          and
                                          employers
                                          in
                                          one
                                          location.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="site-footer">
        <footer class="l-footer" role="contentinfo">
          <div class="region region-footer">
            <div id="block-dg-social-dg-social-block" class="block block-dg-social">
              <h2>Connect with gradsingapore</h2>

              <div class="content">
                <div class="item-list">
                  <ul>
                    <li class="instagram first" weight>
                      <a
                        href="https://www.instagram.com/gradsingapore/?hl=en"
                        target="_blank"
                        rel="nofollow"
                        alt="Instagram"
                        title="Instagram"
                      >Follow us on Instagram</a>
                    </li>
                    <li class="facebook last" weight="5">
                      <a
                        href="http://www.facebook.com/gradsingapore"
                        target="_blank"
                        rel="nofollow"
                        alt="Facebook"
                        title="Facebook"
                      >Follow us on Facebook</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="block-menu-menu-footer-menu" class="block block-menu">
              <div class="content">
                <ul class="menu">
                  <li class="first leaf">
                    <a
                      href="https://gradsingapore.com/search-jobs/type-of-opportunity/graduate-jobs"
                    >
                      Browse
                      Graduate Jobs
                    </a>
                  </li>
                  <li class="leaf">
                    <a href="https://gradsingapore.com/search-jobs/type-of-opportunity/internships">
                      Browse
                      Internships
                    </a>
                  </li>
                  <li class="leaf">
                    <a href="https://gradsingapore.com/graduate-careers-advice">
                      Careers
                      Advice
                    </a>
                  </li>
                  <li class="leaf">
                    <a href="https://gradsingapore.com/about-gradsingapore">
                      About
                      gradsingapore
                    </a>
                  </li>
                  <li class="leaf">
                    <a href="https://gradsingapore.com/contact-us">
                      Contact
                      Us
                    </a>
                  </li>
                  <li class="last leaf">
                    <a
                      href="https://gradsingapore.com/terms-of-use-and-privacy-policy"
                      rel="nofollow"
                    >T&amp;Cs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="copyright">
            © 2020 GTI Asia Pte. Ltd. (200301978M) |
            <a href="http://www.gtimedia.asia/">
              Advertise
              with GTI Media Asia here
            </a>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import "~/assets/employer.scss";
export default {
  head: {
    bodyAttrs: {
      class:
        "html not-front not-logged-in one-sidebar sidebar-first page-graduate-employers page-browse-employers page-search-jobs jquery-once-1-processed ga-not-mobile eu-cookie-compliance-processed",
    },
  },
  computed: {},
};
</script>