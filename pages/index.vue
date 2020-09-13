<template>
  <div
    class="html front not-logged-in no-sidebars page-frontpage jquery-once-1-processed ga-not-mobile eu-cookie-compliance-processed"
  >
    <div class="region region-page-top">
      <div class="l-page l--col-2">
        <Header />

        <div
          class="site-above-content"
          :style="{ backgroundImage: `url(${backgroundUrl})` }"
        >
          <div class="l-above-content">
            <div class="site-above-content__banner">
              <img
                class="front-banner-image"
                src="~/assets/images/gtimedia-gradsingapore-bg_0.jpg"
              />
            </div>
            <div class="region region-above-content">
              <div id="block-bean-homepage-banner" class="block block-bean">
                <div class="content">
                  <div
                    about="/block/homepage-banner"
                    typeof
                    class="dg-default entity entity-bean bean-homepage-masterbanner view-mode-default"
                  >
                    <div class="content-main">
                      <div
                        class="field field-name-field-banner-title field-type-text field-label-hidden"
                      >
                        <h1>
                          The best graduate jobs, internships &amp; graduate
                          programmes in Singapore
                        </h1>
                      </div>
                      <div
                        class="field field-name-field-homepage-intro field-type-text-long field-label-hidden"
                      >
                        <div class="field-items">
                          <div class="field-item even">
                            Leading graduate employers and careers advice in one
                            location
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Form search job  -->
              <FormSearchJob />
            </div>
          </div>
        </div>
        <div class="l-main">
          <div class="l-content" role="main">
            <a id="main-content"></a>
            <div class="region region-content">
              <div id="block-system-main" class="block block-system">
                <div class="content">
                  <div class="panel-display panel-1col clearfix">
                    <div class="panel-panel panel-col">
                      <div>
                        <div class="panel-separator"></div>
                        <div
                          class="panel-pane pane-views-panes pane-graduate-jobs-schemes-latest-jobs-and-internships pane-jobs-and-internships"
                        >
                          <h2 class="pane-title">
                            Latest Jobs and Internships
                          </h2>

                          <div class="pane-content">
                            <div
                              class="view view-graduate-jobs-schemes view-id-graduate_jobs_schemes view-display-id-latest_jobs_and_internships view-dom-id-0b9b25effd7c4864e9f2654d0bb8891f"
                            >
                              <div class="view-content clearfix">
                                <div
                                  class="views-row views-row-1 clearfix"
                                  v-for="job in jobs"
                                  :key="job.id"
                                >
                                  <div
                                    about="/graduate-employers/gti-media/jobs-internships/marketing-intern-0"
                                    typeof="sioc:Item foaf:Document"
                                    class="dg-three-col node node-ad-vacancy view-mode-search_result"
                                  >
                                    <div class="content-header">
                                      <div class="field-opportunity-type">
                                        <span class="internships"
                                          >Internships</span
                                        >
                                      </div>
                                      <div
                                        class="field field-name-title field-type-ds field-label-hidden"
                                      >
                                        <div class="field-items">
                                          <div
                                            class="field-item even"
                                            property="dc:title"
                                          >
                                            <h3>
                                              <a
                                                href="/graduate-employers/detail"
                                                >Marketing Intern</a
                                              >
                                            </h3>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="field field-name-field-ad-vac-locations"
                                      >
                                        Singapore
                                      </div>
                                    </div>
                                    <div class="content-threecol-wrap">
                                      <div class="content-main">
                                        <div
                                          class="field field-name-ds-organisation-logo field-type-ds field-label-hidden"
                                        >
                                          <div class="field-items">
                                            <div class="field-item even">
                                              <a
                                                href="/graduate-employers/detail"
                                              >
                                                <div
                                                  class="field field-name-field-ad-org-logo field-type-image field-label-hidden"
                                                >
                                                  <div class="field-items">
                                                    <div
                                                      class="field-item even"
                                                    >
                                                      <img
                                                        typeof="foaf:Image"
                                                        src="~/assets/images/gtimedia-gradmalaysia-gtimedia-logo.jpg"
                                                        width="157"
                                                        height="70"
                                                        alt
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="field field-name-field-organisation-name field-type-node-reference field-label-hidden"
                                        >
                                          <div class="field-items">
                                            <div class="field-item even">
                                              <a
                                                href="/graduate-employers/detail"
                                                >GTI Media</a
                                              >
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="content-secondary">
                                        <div
                                          class="field field-name-body field-type-text-with-summary field-label-hidden"
                                        >
                                          <div class="field-items">
                                            <div
                                              class="field-item even"
                                              property="content:encoded"
                                            >
                                              <p>
                                                As part of the Marketing team,
                                                you will mainly assist in
                                                preparing and managing marketing
                                                activities, creating effective
                                                marketing campaigns and working
                                                closely within the marketing
                                                department to achieve
                                                KPIs.&nbsp;
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="content-tertiary">
                                        <div
                                          class="field field-name-taxonomy-vocabulary-9"
                                        >
                                          <div class="label-above">
                                            Relevant Field of Study
                                            <span class="info">
                                              <span class="tooltip">
                                                Accepting applications from
                                                students with degrees in
                                                Finance, Accounting, Economics
                                                &amp; Business Administration
                                              </span>
                                            </span>
                                          </div>
                                          <span
                                            data-bg="#00a550"
                                            class="degree areasOfStudy-processed"
                                            style="background: rgb(0, 165, 80);"
                                            >F</span
                                          >
                                        </div>
                                        <div
                                          class="field field-name-field-minimum-level-study"
                                        >
                                          <div class="label-above">
                                            Qualification Level
                                          </div>
                                          University Undergraduate
                                        </div>
                                        <div class="field field-name-open-date">
                                          <div class="label-inline">
                                            Applications open
                                          </div>
                                          <span class="deadline"
                                            >29 Jul 2020</span
                                          >
                                        </div>
                                        <div
                                          class="field field-name-closing-date"
                                        >
                                          <div class="label-inline">
                                            Closing
                                          </div>
                                          <span class="deadline"
                                            >31 Oct 2020</span
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="view-footer">
                                <p>
                                  <a
                                    href="/search-jobs"
                                    class="button button--primary"
                                    >View more Jobs &amp; Internships</a
                                  >
                                </p>
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
</template>

<script>
import "~/assets/employer.scss";
import axios from "axios";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "HomePage",
  head: {
    bodyAttrs: {
      class:
        "html front not-logged-in no-sidebars page-frontpage jquery-once-1-processed ga-not-mobile eu-cookie-compliance-processed"
    }
  },
  computed: {
    backgroundUrl() {
      return require("~/assets/images/gtimedia-gradsingapore-bg_0.jpg");
    },
    ...mapState("jobs", {
      jobsFromState: state => state.jobs
    })
  },
  async asyncData() {
    const res = await axios.get(`https://api.thetraineeclub.com/job.json`);
    if (res && res.status === 200 && res.data.jobs) {
      return { jobs: res.data.jobs };
    }
    return [];
  },
  mounted() {
    if (!this.jobs.length) {
      this.fetchJobs();
    } else {
      this.setJobsToState(this.jobs);
    }
  },
  data() {
    return {
      jobs: []
    };
  },
  methods: {
    ...mapActions("jobs", ["fetchJobs"]),
    ...mapMutations("jobs", {
      setJobsToState: "setJobs"
    })
  }
};
</script>
