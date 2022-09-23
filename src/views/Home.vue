<template>
  <div>
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item nounderline"><a href="#">Snapbyte</a></li>
        <li class="breadcrumb-item active" aria-current="page">My Recordings</li>
      </ol>
    </nav>
    <div class="d-flex">
      <nav class="nav flex-grow-1 pe-3">
        <a class="nav-link" aria-current="page" href="#">
          <h3>My Recordings {{ videoList.length || 0 }}</h3></a
        >
      </nav>
      <nav class="nav justify-content-center flex-grow-1 pe-3">
        <a class="nav-link custom-links" aria-current="page" href="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-down-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
          By Date
        </a>
        <a class="nav-link custom-links" aria-current="page" href="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-funnel"
            viewBox="0 0 16 16"
          >
            <path
              d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"
            />
          </svg>
          Add filter<i class="bi bi-caret-down ps-1"></i
        ></a>
      </nav>
      <nav class="nav justify-content-end flex-grow-1 pe-3">
        <a
          class="nav-link custom-links bg-primary text-white border border-0"
          aria-current="page"
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-camera-video"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
            />
          </svg>
          New Request</a
        >
        <a
          class="nav-link custom-links text-bg-danger border border-0"
          aria-current="page"
          href="#"
        >
          <i class="bi bi-record-circle"></i> Start Recording</a
        >
      </nav>
    </div>
    <div>
      <table class="table table-borderless table align-middle">
        <thead>
          <tr>
            <th scope="col">Recordings</th>
            <th scope="col">Title</th>
            <th scope="col">views</th>
            <th scope="col">Size</th>
            <th scope="col">Last Modified</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(video, index) in videoList" :key="index">
            <td>
              <!-- <div class="card" style="width: 8rem"> -->
              <!-- <img src="..." class="card-img-top" alt="..." /> -->
              <div class="card-body">
                <video style="width: 8rem" :src="video.url" controls></video>
              </div>
              <!-- </div> -->
            </td>

            <td>{{ video.title }}</td>
            <td>0</td>
            <td>
              {{
                parseFloat(video.size / 1000)
                  .toFixed(2)
                  .toLocaleString("en")
              }}MB
            </td>
            <td>{{ moment(video.date).fromNow() }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div
      style="margin-top: 150px"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Recording</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="">
              <div class="mb-2">Save the Record in</div>
              <select
                class="form-select form-select-sm mb-2"
                aria-label=".form-select-sm example"
              >
                <option selected>Select a Project</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="d-flex mb-2">
              <div class="justify-content-start flex-grow-1 pe-3">Record Screen</div>
              <div class="form-check form-switch justify-content-end">
                <input
                  v-model="recordScreen"
                  data-onstyle="success"
                  class="form-check-input text-bg-success"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>

            <div class="d-flex mb-2">
              <div class="justify-content-start flex-grow-1 pe-3">Record Camera</div>
              <div class="form-check form-switch justify-content-end">
                <input
                  v-model="recordCamera"
                  class="form-check-input text-bg-success"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>

            <div class="d-flex mb-3">
              <div class="justify-content-start flex-grow-1 pe-3">Record Mic</div>
              <div class="form-check form-switch justify-content-end">
                <input
                  v-model="recordMic"
                  data-onstyle="success"
                  class="form-check-input text-bg-success"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <button
              @click="start"
              type="button"
              class="btn btn-primary w-100 mx-0 mb-2 rounded-pill"
              data-bs-dismiss="modal"
            >
              Start Recording
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.nounderline {
  text-decoration: none !important;
}
.custom-links {
  border: 1px solid grey;
  height: fit-content;
  padding-top: 5px;
  padding-bottom: 5px !important;
  margin-right: 10px;
  border-radius: 50px;
}
</style>
<script>
import moment from "moment";
import { useVideoRecordings } from "@/stores/videos.js";
import { mapActions, mapState } from "pinia";
export default {
  name: "home",
  data() {
    return {
      videoSrc: "",
      recordCamera: false,
      recordScreen: false,
      recordMic: false,
    };
  },
  created() {
    this.moment = moment;
  },
  computed: {
    ...mapState(useVideoRecordings, {
      videoList: "videos",
    }),
  },
  methods: {
    ...mapActions(useVideoRecordings, ["saveSettings"]),
    start() {
      if (
        this.recordCamera == true ||
        this.recordScreen == true ||
        this.recordMic == true
      ) {
        const Data = {
          video: {
            cursor: "always",
            //   mediaSource: "screen",
          },
          audio: this.recordMic,
        };
        const Camera = this.recordCamera;
        try {
          let response = this.saveSettings(Data, Camera);
          this.$router.push("/capture");
        } catch (e) {
          console.log(e);
        }
      } else {
        alert("Please select at one media to record");
      }
    },
  },
};
</script>
