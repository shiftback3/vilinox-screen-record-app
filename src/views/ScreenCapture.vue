<template>
  <div class="d-flex flex-column">
    <div>
      <i class="bi bi-record-circle text-danger me-2"></i>
      <span>Live Preview</span>
    </div>
    <video id="videoElement" class="video-display" autoplay></video>
    <div style="position: relative">
      <video
        id="videoElement2"
        class="video-display"
        style="display: none"
        controls
      ></video>
      <video
        id="camera"
        class="rounded-circle camera"
        width="100"
        height="100"
        autoplay
      ></video>
    </div>
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
    <!-- <video
      src="blob:http://127.0.0.1:5173/6de38b34-96a7-4bc6-adfb-b204e6bfa868"
      controls
    ></video> -->
    <div v-for="(list, index) in lists" :key="index">
      <video height="200" width="400" :src="list" controls></video>
    </div>
    <!-- {{ settings }} -->
  </div>
</template>
<script>
import { useVideoRecordings } from "@/stores/videos.js";
import { mapActions, mapState } from "pinia";
export default {
  name: "screen-capture",
  data() {
    return {
      displayOptions: {},
      videoCamera: "",
      videoCapture: "",
      videoList: [],
      saveButtonDisabled: true,
      recordButtonDisabled: false,
      lists: [],
    };
  },
  computed: {
    ...mapState(useVideoRecordings, {
      settings: "settings",
      camera: "camera",
    }),
  },
  methods: {
    async startCapture() {
      this.displayOptions = this.settings;
      //   console.log(this.displayOptions);
      this.recordButtonDisabled = true;
      this.videoCamera = document.querySelector("#videoElement");
      this.videoCapture = document.querySelector("#camera");
      this.videoCamera.style.display = "block";
      document.querySelector("#videoElement2").style.display = "none";
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia(this.displayOptions);

        if (this.camera == true) {
          this.videoCapture.srcObject = await navigator.mediaDevices.getUserMedia(
            this.displayOptions
          );
        }
        this.videoCamera.srcObject = stream;
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
          let tracks = this.videoCapture.srcObject.getTracks();
          tracks.forEach((track) => track.stop());
          this.videoCapture.srcObject = null;
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
        type: "video/mp4",
      });
      const url = URL.createObjectURL(superBuffer);
      this.lists.push(url);
      console.log(this.lists);
      const myFile = new File([superBuffer], "demo.mp4", { type: "video/mp4" });
      const Data = {
        url: url,
        date: new Date(),
        title: "Video" + new Date().getTime(),
        description: "This is a simple description",
        size: superBuffer.size,
      };
      let response = this.saveVideo(Data);
      this.$router.push("/");
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
.camera {
  position: absolute;
  bottom: 0;
}
</style>
