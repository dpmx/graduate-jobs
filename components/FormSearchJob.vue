<template>
  <div
    id="block-gradaus-jobs-gradaus-jobs-homepage-filter"
    class="block block-gradaus-jobs"
  >
    <div class="content">
      <form
        action="https://gradsingapore.com/"
        method="post"
        id="gradaus-jobs-search-form"
        accept-charset="UTF-8"
      >
        <div>
          <div class="form-item form-type-select form-item-gradaus-job-type">
            <label for="edit-gradaus-job-type">I'm looking for</label>
            <select
              id="edit-gradaus-job-type"
              name="gradaus_job_type"
              class="form-select"
            >
              <option value="0">Graduate Jobs and Internships</option>
              <option value="6986">Internships</option>
              <option value="4140">Graduate Jobs</option>
            </select>
          </div>
          <div class="form-item form-type-select form-item-gradaus-sectors">
            <label for="edit-gradaus-sectors">and my field of study is</label>
            <select
              id="edit-gradaus-sectors"
              name="gradaus_sectors"
              class="form-select"
            >
              <option value="0">All Fields of Study</option>
              <option value="13751">
                Engineering, Maths, IT &amp; Computer Sciences
              </option>
              <option value="13766">
                Finance, Accounting, Economics &amp; Business Administration
              </option>
              <option value="13771">Health &amp; Medical Sciences</option>
              <option value="13776"
                >Humanities, Arts &amp; Social Sciences</option
              >
              <option value="13761">Law &amp; Legal Studies</option>
              <option value="13781">Property &amp; Built Environment</option>
              <option value="13756">Sciences</option>
              <option value="13786"
                >Teaching, Education &amp; Human Welfare</option
              >
            </select>
          </div>
          <div
            class="form-item form-type-select form-item-gradaus-courses"
            style="display: none;"
          >
            <label for="edit-gradaus-courses">and my field of study is</label>
            <select
              id="edit-gradaus-courses"
              name="gradaus_courses"
              class="form-select"
            ></select>
          </div>
          <input
            type="submit"
            id="edit-gradaus-job-search-submit"
            name="op"
            value="Search"
            class="form-submit"
          />
          <input
            type="hidden"
            name="form_build_id"
            value="form-2VdoaX-tkUrMxDPL9oj6uqAKOuuiIAikxJCMkQakMn8"
          />
          <input
            type="hidden"
            name="form_id"
            value="gradaus_jobs_search_form"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormSearchJob"
};
</script>
