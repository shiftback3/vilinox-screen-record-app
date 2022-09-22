<template>
  <div class="d-flex flex-column">
    <div>
      <i class="bi bi-record-circle text-danger me-2"></i>
      <span>Live Preview</span>
    </div>
    <video id="videoElement" class="video-display" autoplay></video>
    <video
      id="videoElement2"
      class="video-display"
      style="display: none"
      controls
    ></video>
    <div class="d-flex justify-content-center mt-3">
      <button
        :disabled="recordButtonDisabled"
        @click="startCapture"
        type="button"
        class="btn btn-primary w-25 mx-2 mb-2 rounded-pill"
      >
        <i class="bi bi-play-circle"></i> Start Recording
      </button>
      <button
        :disabled="saveButtonDisabled"
        @click="save"
        type="button"
        class="btn btn-success w-25 mx-1 mb-2 rounded-pill"
      >
        <i class="bi bi-save2"></i> Save Recording
      </button>
    </div>
  </div>
</template>
<script>
import { useVideoRecordings } from "@/stores/videos.js";
import { mapActions } from "pinia";
export default {
  name: "screen-capture",
  data() {
    return {
      displayOptions: {
        video: {
          cursor: "always",
          //   mediaSource: "screen",
        },
        audio: false,
      },
      videoCamera: "",
      videoList: [],
      saveButtonDisabled: true,
      recordButtonDisabled: false,
    };
  },
  methods: {
    async startCapture() {
      this.recordButtonDisabled = true;
      this.videoCamera = document.querySelector("#videoElement");
      this.videoCamera.style.display = "block";
      document.querySelector("#videoElement2").style.display = "none";
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia(this.displayOptions);
        this.videoCamera.srcObject = stream;
        // this.videoCamera.srcObject = await navigator.mediaDevices.getUserMedia(
        //   this.displayOptions
        // );
        var options = { mimeType: "video/webm;codecs=vp9" };
        const mediaRecorder = new MediaRecorder(stream, options);
        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            console.log(e);
            this.videoList.push(e.data);
          } else {
            alert("something went wrong!");
          }
        };
        mediaRecorder.start();
        mediaRecorder.onstop = (e) => {
          var superBuffer = new Blob(this.videoList, {
            type: this.videoList[0].type,
          });
          this.recordButtonDisabled = false;
          this.saveButtonDisabled = false;
          document.querySelector("#videoElement").style.display = "none";
          document.querySelector("#videoElement2").style.display = "block";
          document.querySelector("#videoElement2").src = URL.createObjectURL(superBuffer);
          console.log(URL.createObjectURL(superBuffer));
        };
        console.log(this.videoCamera.srcObject);
        console.log(this.videoList);
      } catch (e) {
        this.recordButtonDisabled = false;
        console.log(e);
      }
    },
    ...mapActions(useVideoRecordings, ["saveVideo"]),

    save() {
      var superBuffer = new Blob(this.videoList, {
        type: this.videoList[0].type,
      });
      const Data = {
        video: superBuffer,
      };
      let response = this.saveVideo(Data);
    },
  },
};
</script>
<style>
.video-display {
  top: 169px;

  width: 800px;
  height: 450px;
  max-width: 965px;
  background: #21455e 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
}
</style>
